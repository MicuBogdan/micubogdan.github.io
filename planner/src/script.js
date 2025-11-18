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
            </div>
        `).join('');
        
    } catch (error) {
        console.error('Error loading tests:', error);
        testsList.innerHTML = '<div class="empty-state">Eroare la încărcarea testelor</div>';
    }
}

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