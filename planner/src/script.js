console.log('[DEBUG] script.js loaded and running');
// --- Google Calendar Integration ---
// NOTE: This code uses Google Identity Services (GIS) for sign-in, as gapi.auth2 is deprecated for new clients.

const GOOGLE_CLIENT_ID = '890036064364-hs6v98r55aatb9sgs0b5veqpd7r5bptf.apps.googleusercontent.com';
const GOOGLE_API_SCOPES = 'https://www.googleapis.com/auth/calendar.events';
// These variables replace the old googleAuth/googleUser
let googleAccessToken = null;
let googleUserName = null;
let tokenClient = null; // GIS Token Client

// 1. Initialization for GIS (Authentication) and GAPI (Calendar API)
function initializeGisAndGapi() {
    return new Promise((resolve, reject) => {
        
        const loadGapi = () => {
             // 1. Initialize GIS token client. This handles the pop-up/token request.
            if (typeof window.google === 'undefined' || typeof window.google.accounts === 'undefined') {
                console.warn('GIS library (gsi/client) not loaded.');
                return;
            }

            tokenClient = google.accounts.oauth2.initTokenClient({
                client_id: GOOGLE_CLIENT_ID,
                scope: GOOGLE_API_SCOPES,
                callback: (tokenResponse) => {
                    // This callback fires when a token is successfully granted
                    if (tokenResponse && tokenResponse.access_token) {
                        googleAccessToken = tokenResponse.access_token;
                        
                        // Set the token for gapi.client to use
                        window.gapi.client.setToken({ access_token: googleAccessToken });
                        
                        // Decode the token (JWT) to get user profile information
                        try {
                            const payload = JSON.parse(atob(tokenResponse.access_token.split('.')[1]));
                            googleUserName = payload.name || payload.email || 'Utilizator Google'; 
                        } catch (e) {
                            googleUserName = 'Utilizator Google';
                        }
                        
                        // Update UI to show signed-in status
                        updateGoogleUi();
                        alert('Conectare Google reușită! Acum poți exporta testele.');
                    } else {
                         console.error('Token acquisition failed or was cancelled.', tokenResponse);
                    }
                },
                error_callback: (error) => {
                    console.error('GIS token client error:', error);
                    alert('Eroare la conectarea Google. Vezi consola pentru detalii.');
                }
            });
            
            // 2. Initialize the gapi client for Calendar API calls
            window.gapi.client.init({
                discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest']
            }).then(() => {
                console.log('GAPI client initialized for Calendar API.');
                resolve();
            }).catch(e => {
                console.error('GAPI client init failed:', e);
            });
        };

        // Load GAPI client and then run the rest of the initialization
        if (typeof window.gapi !== 'undefined') {
            window.gapi.load('client', loadGapi);
        } else {
            // Fallback for gapi.js loading if the defer/async load order is complex
            window.onGapiLoad = () => window.gapi.load('client', loadGapi);
        }
    });
}

// 2. Sign In (Requests the token via GIS)
function signInWithGoogle() {
    alert('[DEBUG] signInWithGoogle called. Using GIS flow...');
    if (!tokenClient) {
        alert('Serviciul Google Calendar nu este încărcat. Te rog așteaptă un moment.');
        return;
    }

    // Use tokenClient to request the token. This triggers the popup/redirect.
    tokenClient.requestAccessToken({ prompt: '' }); 
    // The result is handled by the tokenClient.callback function defined in initializeGisAndGapi.
}

// 3. Sign Out (Revokes the token via GIS)
function signOutGoogle() {
    if (googleAccessToken) {
        google.accounts.oauth2.revoke(googleAccessToken, () => {
            googleAccessToken = null;
            googleUserName = null;
            updateGoogleUi();
            alert('Deconectare Google reușită.');
        });
    }
}

// 4. Update UI
function updateGoogleUi() {
    const userInfo = document.getElementById('googleUserInfo');
    const addAllBtn = document.getElementById('addAllToCalendarBtn');
    if (!userInfo || !addAllBtn) return;
    
    // Check for access token instead of googleUser
    if (googleAccessToken) {
        userInfo.style.display = 'inline';
        addAllBtn.textContent = 'Exportă toate testele în Google Calendar';
        userInfo.innerHTML = `Conectat ca <b>${googleUserName}</b> <button onclick="signOutGoogle()" class="header-btn" style="margin-left:1em;">Deconectare</button>`;
    } else {
        userInfo.style.display = 'none';
        addAllBtn.textContent = 'Conectează-te și exportă în Google Calendar';
        userInfo.innerHTML = '';
    }
}

// 5. Add Tests to Calendar
async function addAllTestsToGoogleCalendar() {
    // Check for access token instead of googleUser
    if (!googleAccessToken) return alert('Te rog conectează-te cu Google întâi!');
    
    // Get all tests for current class
    const result = await window.storage.list(`tests:${currentClass}:`, true);
    if (!result || !result.keys || result.keys.length === 0) {
        alert('Nu există teste de exportat!');
        return;
    }
    // Get all test objects
    const tests = [];
    for (const key of result.keys) {
        try {
            const testResult = await window.storage.get(key, true);
            if (testResult && testResult.value) {
                const test = JSON.parse(testResult.value);
                tests.push(test);
            }
        } catch (err) {}
    }
    if (tests.length === 0) {
        alert('Nu există teste de exportat!');
        return;
    }
    // Add each test as a calendar event
    let success = 0, fail = 0;
    
    for (const test of tests) {
        try {
            // REMOVED redundant gapi.client.load('calendar', 'v3');
            const startDate = new Date(test.date);
            const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // 1 hour event
            
            await window.gapi.client.calendar.events.insert({
                calendarId: 'primary',
                resource: {
                    summary: test.subject,
                    description: test.details || '',
                    start: { dateTime: startDate.toISOString() },
                    end: { dateTime: endDate.toISOString() }
                }
            });
            success++;
        } catch (e) { 
            console.error('Error adding event:', e);
            fail++; 
        }
    }
    alert(`Adăugat în calendar: ${success} teste${fail ? `, ${fail} erori` : ''}`);
}

// Show Google Calendar bar on planner screen
function showGoogleCalendarBar() {
    // No longer needed; bar is always visible
    updateGoogleUi();
}

// --- END Google Calendar Integration ---

// Storage wrapper: folosește Firestore (db trebuie să fie deja definit global din index.html)
window.storage = {
    async set(key, value) {
        // key: 'tests:clasa:id' sau 'activity:clasa:id'
        const [type, clasa, id] = key.split(':');
        const collection = (type === 'tests') ? 'tests' : 'activity';
        await db.collection(collection).doc(`${clasa}_${id}`).set({
            ...JSON.parse(value),
            clasa: clasa
        });
    },
    async get(key) {
        const [type, clasa, id] = key.split(':');
        const collection = (type === 'tests') ? 'tests' : 'activity';
        const doc = await db.collection(collection).doc(`${clasa}_${id}`).get();
        return { value: doc.exists ? JSON.stringify(doc.data()) : null };
    },
    async delete(key) {
        const [type, clasa, id] = key.split(':');
        const collection = (type === 'tests') ? 'tests' : 'activity';
        await db.collection(collection).doc(`${clasa}_${id}`).delete();
    },
    async list(prefix) {
        // prefix: 'tests:clasa:' sau 'activity:clasa:'
        const [type, clasa] = prefix.split(':');
        const collection = (type === 'tests') ? 'tests' : 'activity';
        const snapshot = await db.collection(collection).where('clasa', '==', clasa).get();
        const keys = [];
        snapshot.forEach(doc => {
            // Extrage id-ul original (fără clasa_)
            const docId = doc.id.startsWith(clasa + '_') ? doc.id.slice(clasa.length + 1) : doc.id;
            keys.push(`${type}:${clasa}:${docId}`);
        });
        return { keys };
    }
};
// Class codes - CHANGE THESE FOR EACH CLASS
const CLASS_CODES = {
    '9A': 'cod9A2024',
    '9B': 'cod9B2024',
    '9C': 'cod9C2024',
    '9D': 'cod9D2024',
    '9E': 'cod9E2024',
    '10A': 'cod10A2024',
    '10B': 'cod10B2024',
    '10C': 'cod10C2024',
    '10D': 'cod10D2024',
    '10E': 'cod10E2024',
    '11A': 'cod11A2024',
    '11B': 'cod11B2024',
    '11C': 'cod11C2024',
    '11D': 'cod11D2024',
    '12A': 'cod12A2024',
    '12B': 'cod12B2024',
    '12C': 'cod12C2024',
    '12D': 'cod12D2024'
};

let currentClass = null;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    // CRUCIAL: Initialize Google services (GIS and GAPI) on load
    initializeGisAndGapi();
});

function initializeApp() {
    // Set up class selection buttons
    const classButtons = document.querySelectorAll('.clasa-btn');
    classButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const clasa = this.getAttribute('data-clasa');
            selectClass(clasa);
        });
    });

    // Set up back button
    const backBtn = document.getElementById('backBtn');
    backBtn.addEventListener('click', goBackToClassSelection);

    // Set up add test button
    const addTestBtn = document.getElementById('addTestBtn');
    addTestBtn.addEventListener('click', addTest);

    // Set minimum date to today
    const dateInput = document.getElementById('testDate');
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}

function selectClass(clasa) {
    currentClass = clasa;
    
    // Switch screens
    document.getElementById('classSelection').classList.remove('active');
    document.getElementById('plannerScreen').classList.add('active');
    
    // Update header
    document.getElementById('headerTitle').textContent = `Clasa ${clasa}`;
    document.getElementById('backBtn').style.display = 'block';
    
    // Load tests and activity for this class
    loadTests();
    loadActivity();
    updateGoogleUi();
    
    // Google Calendar integration UI: export button triggers sign-in if needed
    const addAllBtn = document.getElementById('addAllToCalendarBtn');
    if (addAllBtn) {
        addAllBtn.onclick = async function() {
            console.log('[DEBUG] Google Calendar export button clicked');
            alert('[DEBUG] Export button handler triggered!');
            
            // Check if services are initialized
            if (!tokenClient || !window.gapi || !window.gapi.client) {
                alert('Serviciile Google nu sunt complet încărcate. Te rog așteaptă câteva secunde și încearcă din nou.');
                return;
            }
            
            // Check if user is signed in (has a token)
            if (!googleAccessToken) {
                alert('[DEBUG] Triggering Google sign-in flow (GIS)...');
                // This requests the token. The export (addAllTestsToGoogleCalendar) runs on success inside the callback.
                signInWithGoogle();
                return; 
            }
            
            // If already signed in, export the tests
            addAllTestsToGoogleCalendar();
        };
    }
}

function goBackToClassSelection() {
    currentClass = null;
    
    // Switch screens
    document.getElementById('plannerScreen').classList.remove('active');
    document.getElementById('classSelection').classList.add('active');
    
    // Update header
    document.getElementById('headerTitle').textContent = 'Selectează clasa';
    document.getElementById('backBtn').style.display = 'none';
    
    // Clear form
    clearForm();
}

async function addTest() {
    const subject = document.getElementById('testSubject').value.trim();
    const date = document.getElementById('testDate').value;
    const details = document.getElementById('testDetails').value.trim();
    const code = document.getElementById('classCode').value;
    
    // Validation
    if (!subject) {
        alert('Te rog introdu materia!');
        return;
    }
    
    if (!date) {
        alert('Te rog selectează data!');
        return;
    }
    
    if (!code) {
        alert('Te rog introdu codul clasei!');
        return;
    }
    
    // Check code
    if (code !== CLASS_CODES[currentClass]) {
        alert('Cod incorect! Contactează șeful de clasă pentru cod.');
        return;
    }
    
    // Create test object
    const test = {
        id: Date.now().toString(),
        subject: subject,
        date: date,
        details: details,
        addedAt: new Date().toISOString()
    };
    
    // Save test
    try {
        await saveTest(test);
        
        // Log activity
        await logActivity('added', `Test adăugat: ${subject} - ${formatDate(date)}`);
        
        // Reload lists
        loadTests();
        loadActivity();
        
        // Clear form
        clearForm();
        
        alert('Test adăugat cu succes!');
    } catch (error) {
        console.error('Error adding test:', error);
        alert('Eroare la adăugarea testului. Încearcă din nou.');
    }
}

async function deleteTest(testId, testSubject, testDate) {
    const code = prompt('Introdu codul clasei pentru a șterge:');
    
    if (!code) return;
    
    if (code !== CLASS_CODES[currentClass]) {
        alert('Cod incorect!');
        return;
    }
    
    try {
        await removeTest(testId);
        
        // Log activity
        await logActivity('deleted', `Test șters: ${testSubject} - ${formatDate(testDate)}`);
        
        // Reload lists
        loadTests();
        loadActivity();
        
        alert('Test șters cu succes!');
    } catch (error) {
        console.error('Error deleting test:', error);
        alert('Eroare la ștergerea testului. Încearcă din nou.');
    }
}

function clearForm() {
    document.getElementById('testSubject').value = '';
    document.getElementById('testDate').value = '';
    document.getElementById('testDetails').value = '';
    document.getElementById('classCode').value = '';
}

async function saveTest(test) {
    const key = `tests:${currentClass}:${test.id}`;
    await window.storage.set(key, JSON.stringify(test), true);
}

async function removeTest(testId) {
    const key = `tests:${currentClass}:${testId}`;
    await window.storage.delete(key, true);
}

async function loadTests() {
    const testsList = document.getElementById('testsList');
    testsList.innerHTML = '<div class="empty-state">Se încarcă...</div>';
    
    try {
        const result = await window.storage.list(`tests:${currentClass}:`, true);
        
        if (!result || !result.keys || result.keys.length === 0) {
            testsList.innerHTML = '<div class="empty-state">Nu există teste programate</div>';
            return;
        }
        
        // Get all tests
        const tests = [];
        for (const key of result.keys) {
            try {
                const testResult = await window.storage.get(key, true);
                if (testResult && testResult.value) {
                    const test = JSON.parse(testResult.value);
                    tests.push(test);
                }
            } catch (err) {
                console.error(`Error loading test ${key}:`, err);
            }
        }
        
        // Sort by date
        tests.sort((a, b) => new Date(a.date) - new Date(b.date));
        
        // Display tests
        if (tests.length === 0) {
            testsList.innerHTML = '<div class="empty-state">Nu există teste programate</div>';
            return;
        }
        
        testsList.innerHTML = tests.map(test => `
            <div class="test-item">
                <div class="test-header">
                    <span class="test-subject">${escapeHtml(test.subject)}</span>
                    <span class="test-date">${formatDate(test.date)}</span>
                </div>
                ${test.details ? `<div class="test-details">${escapeHtml(test.details)}</div>` : ''}
                <button class="delete-test-btn" onclick="deleteTest('${test.id}', '${escapeHtml(test.subject)}', '${test.date}')">Șterge</button>
                <button class="export-test-btn" onclick="exportTestToICS('${escapeHtml(test.subject)}', '${test.date}', '${escapeHtml(test.details || '')}')">Export</button>
            </div>
        `).join('');
        
    } catch (error) {
        console.error('Error loading tests:', error);
        testsList.innerHTML = '<div class="empty-state">Eroare la încărcarea testelor</div>';
    }
}

// Export test to .ics (iCalendar) file for Google Calendar import
function exportTestToICS(subject, date, details) {
    // Parse date (YYYY-MM-DD)
    const start = new Date(date);
    // Default: 1 hour event
    const end = new Date(start.getTime() + 60 * 60 * 1000);
    function pad(n) { return n < 10 ? '0' + n : n; }
    function toICSDate(dt) {
        return dt.getUTCFullYear() +
            pad(dt.getUTCMonth() + 1) +
            pad(dt.getUTCDate()) + 'T' +
            pad(dt.getUTCHours()) +
            pad(dt.getUTCMinutes()) +
            '00Z';
    }
    const ics = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Planner App//EN',
        'BEGIN:VEVENT',
        'UID:' + Date.now() + '@planner',
        'DTSTAMP:' + toICSDate(new Date()),
        'DTSTART:' + toICSDate(start),
        'DTEND:' + toICSDate(end),
        'SUMMARY:' + subject,
        details ? ('DESCRIPTION:' + details.replace(/\n/g, '\\n')) : '',
        'END:VEVENT',
        'END:VCALENDAR'
    ].filter(Boolean).join('\r\n');
    const blob = new Blob([ics], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${subject.replace(/[^a-zA-Z0-9]/g, '_') || 'test'}_${date}.ics`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 100);
}

// Make exportTestToICS available globally
window.exportTestToICS = exportTestToICS;

async function logActivity(type, message) {
    const activity = {
        id: Date.now().toString(),
        type: type,
        message: message,
        timestamp: new Date().toISOString()
    };
    
    const key = `activity:${currentClass}:${activity.id}`;
    await window.storage.set(key, JSON.stringify(activity), true);
}

async function loadActivity() {
    const activityLog = document.getElementById('activityLog');
    activityLog.innerHTML = '<div class="empty-state">Se încarcă...</div>';
    
    try {
        const result = await window.storage.list(`activity:${currentClass}:`, true);
        
        if (!result || !result.keys || result.keys.length === 0) {
            activityLog.innerHTML = '<div class="empty-state">Nu există activitate</div>';
            return;
        }
        
        // Get all activities
        const activities = [];
        for (const key of result.keys) {
            try {
                const activityResult = await window.storage.get(key, true);
                if (activityResult && activityResult.value) {
                    const activity = JSON.parse(activityResult.value);
                    activities.push(activity);
                }
            } catch (err) {
                console.error(`Error loading activity ${key}:`, err);
            }
        }
        
        // Sort by timestamp (newest first)
        activities.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        
        // Display only last 50 activities
        const recentActivities = activities.slice(0, 50);
        
        if (recentActivities.length === 0) {
            activityLog.innerHTML = '<div class="empty-state">Nu există activitate</div>';
            return;
        }
        
        activityLog.innerHTML = recentActivities.map(activity => `
            <div class="activity-item ${activity.type}">
                <div class="activity-action">${escapeHtml(activity.message)}</div>
                <div class="activity-time">${formatDateTime(activity.timestamp)}</div>
            </div>
        `).join('');
        
    } catch (error) {
        console.error('Error loading activity:', error);
        activityLog.innerHTML = '<div class="empty-state">Eroare la încărcarea activității</div>';
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('ro-RO', options);
}

function formatDateTime(isoString) {
    const date = new Date(isoString);
    const dateOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit' };
    return date.toLocaleDateString('ro-RO', dateOptions) + ' ' + date.toLocaleTimeString('ro-RO', timeOptions);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Make deleteTest available globally
window.deleteTest = deleteTest;
