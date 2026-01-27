// Default locations with type and description
const defaultLocations = [
    {name:"Cordiliera Americană", coords:[37, -110], type:"munte", desc:"Lanț muntos din America de Nord"},
    {name:"Munții Stâncoși", coords:[45, -110], type:"munte", desc:"Munți în SUA și Canada"},
    {name:"Munții Anzi", coords:[-15, -70], type:"munte", desc:"Cel mai lung lanț muntos din lume"},
    {name:"Munții Appalachi", coords:[38, -80], type:"munte", desc:"Munți vechi din America de Nord"},
    {name:"Munții Pirinei", coords:[42.5, 1], type:"munte", desc:"Lanț muntos între Franța și Spania"},
    {name:"Munții Alpi", coords:[46, 9], type:"munte", desc:"Cel mai înalt lanț din Europa"},
    {name:"Munții Carpați", coords:[47, 25], type:"munte", desc:"Munți din Europa Centrală și de Est"},
    {name:"Munții Caucaz", coords:[43.5, 44], type:"munte", desc:"Lanț muntos între Asia și Europa"},
    {name:"Munții Karakorum", coords:[35.5, 75], type:"munte", desc:"Munți din Asia Centrală"},
    {name:"Munții Himalaya", coords:[28.5, 83], type:"munte", desc:"Cel mai înalt lanț muntos din lume"},
    {name:"Munții Scandinaviei", coords:[64, 14], type:"munte", desc:"Munți în Norvegia și Suedia"},
    {name:"Munții Apenini", coords:[42.5, 12.5], type:"munte", desc:"Lanț muntos din Italia"},
    {name:"Munții Ural", coords:[60, 60], type:"munte", desc:"Lanț muntos dintre Europa și Asia"},
    {name:"Munții Atlas", coords:[31, -7], type:"munte", desc:"Munți din África de Nord"},
    {name:"Munții Scoției", coords:[57, -4], type:"munte", desc:"Munți în Scoția"},
    {name:"Sfânta Elena", coords:[46.2, -122.2], type:"vulcan", desc:"Vulcan activ în SUA"},
    {name:"Orizaba", coords:[19.0, -97.3], type:"vulcan", desc:"Cel mai înalt vârf din Mexic"},
    {name:"Popocatepetl", coords:[19.0, -98.6], type:"vulcan", desc:"Vulcan activ în Mexic"},
    {name:"Chimborazo", coords:[-1.5, -78.8], type:"vulcan", desc:"Vulcan în Ecuador"},
    {name:"Cotopaxi", coords:[-0.7, -78.4], type:"vulcan", desc:"Vulcan activ în Ecuador"},
    {name:"Vulcanul Kenya", coords:[0.15, 37.0], type:"vulcan", desc:"Vulcan în Kenya"},
    {name:"Kilimanjaro", coords:[-3.07, 37.35], type:"vulcan", desc:"Cel mai înalt vârf din África"},
    {name:"Etna", coords:[37.75, 14.99], type:"vulcan", desc:"Cel mai activ vulcan din Europa"},
    {name:"Vezuviu", coords:[40.82, 14.43], type:"vulcan", desc:"Vulcan faimos din Italia"},
    {name:"Hekla", coords:[63.98, -19.57], type:"vulcan", desc:"Vulcan în Islanda"},
    {name:"Krakatoa", coords:[-6.1, 105.4], type:"vulcan", desc:"Vulcan în Indonezia"},
    {name:"Fuji", coords:[35.36, 138.73], type:"vulcan", desc:"Vulcan iconic din Japonia"},
    {name:"Mauna Kea", coords:[19.82, -155.47], type:"vulcan", desc:"Vulcan în Hawaii"},
    {name:"Mauna Loa", coords:[19.48, -155.61], type:"vulcan", desc:"Cel mai mare vulcan din Hawaii"},
    {name:"Podișul Braziliei", coords:[-10, -50], type:"podis", desc:"Podis în Brazilia"},
    {name:"Podișul Guyanei", coords:[4, -58], type:"podis", desc:"Podis în Guyana"},
    {name:"Podișul Boliviei", coords:[-17, -65], type:"podis", desc:"Podis în Bolivia"},
    {name:"Meseta Spaniolă", coords:[40, -3], type:"podis", desc:"Podis în Spania"},
    {name:"Podișul Siberiei Centrale", coords:[60, 105], type:"podis", desc:"Podis în Rusia"},
    {name:"Podișul Tibet", coords:[31, 89], type:"podis", desc:"Podis în China"},
    {name:"Podișul Deccan", coords:[18, 75], type:"podis", desc:"Podis în India"},
    {name:"Podișul Gobi", coords:[42.5, 104], type:"podis", desc:"Deșert în Mongolia"},
    {name:"Great Plains", coords:[45, -100], type:"câmpie", desc:"Câmpie în America de Nord"},
    {name:"Câmpia Amazoniei", coords:[-3, -60], type:"câmpie", desc:"Câmpie în America de Sud"},
    {name:"Câmpia La Plata", coords:[-35, -58], type:"câmpie", desc:"Câmpie în Argentina"},
    {name:"Câmpia Andaluziei", coords:[37.3, -5.9], type:"câmpie", desc:"Câmpie în Spania"},
    {name:"Bazinul Londrei", coords:[51.5, -0.1], type:"câmpie", desc:"Câmpie în Marea Britanie"},
    {name:"Bazinul Parizian", coords:[48.9, 2.4], type:"câmpie", desc:"Câmpie în Franța"},
    {name:"Câmpia Loarei", coords:[47.0, 0.7], type:"câmpie", desc:"Câmpie în Franța"},
    {name:"Câmpia Germano-Polonă", coords:[52, 15], type:"câmpie", desc:"Câmpie în Europa Centrală"},
    {name:"Câmpia Panonică", coords:[47, 19], type:"câmpie", desc:"Câmpie în Ungaria"},
    {name:"Câmpia Europei de Est", coords:[50, 30], type:"câmpie", desc:"Câmpie în Europa de Est"},
    {name:"Câmpia Precaspică", coords:[45, 50], type:"câmpie", desc:"Câmpie lângă Marea Caspică"},
    {name:"Câmpia Siberiei de Vest", coords:[60, 80], type:"câmpie", desc:"Câmpie în Siberia"},
    {name:"Câmpia Mesopotamiei", coords:[33, 44], type:"câmpie", desc:"Câmpie în Orientul Mijlociu"},
    {name:"Câmpia Gangelui", coords:[25, 85], type:"câmpie", desc:"Câmpie în India"},
    {name:"Câmpia Chinei de Est", coords:[35, 105], type:"câmpie", desc:"Câmpie în China"}
];

// Color scheme for relief types
const typeColors = {
    "munte": "#8B4513",      // Brown
    "vulcan": "#FF6347",     // Red
    "câmpie": "#90EE90",     // Light Green
    "podis": "#FFD700",      // Gold
    "deal": "#DAA520"        // Goldenrod
};

const typeEmojis = {
    "munte": "🏔️",
    "vulcan": "🌋",
    "câmpie": "🌾",
    "podis": "🏜️",
    "deal": "⛰️"
};

// Global variables
let map;
let mapQuiz;
let allLocations = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;
let totalQuestions = 0;
let quizActive = false;
let quizLocations = [];
let mapMarkers = [];
let reliefMode = true;
let currentLocation = null;
let isRandomMode = false;
let selectedReliefType = 'toate';
let selectedZone = 'toate';

// Zone definitions (longitude ranges approximately)
const zones = {
    'europa': { minLat: 35, maxLat: 72, minLng: -10, maxLng: 70 },
    'asia': { minLat: -10, maxLat: 80, minLng: 60, maxLng: 180 },
    'america': { minLat: -60, maxLat: 75, minLng: -170, maxLng: -30 },
    'africa': { minLat: -35, maxLat: 40, minLng: -20, maxLng: 55 }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadLocations();
    initMap();
    updateSavedLocationsList();
});

// Load locations from localStorage
function loadLocations() {
    const saved = localStorage.getItem('customLocations');
    const custom = saved ? JSON.parse(saved) : [];
    allLocations = [...defaultLocations, ...custom];
    updateFilteredCount();
}

// Select relief type
function selectReliefType(type) {
    selectedReliefType = type;
    
    // Update button states
    document.querySelectorAll('.filter-btn[data-type]').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.filter-btn[data-type="${type}"]`).classList.add('active');
    
    updateFilteredCount();
}

// Select geographical zone
function selectZone(zone) {
    selectedZone = zone;
    
    // Update button states
    document.querySelectorAll('.filter-btn[data-zone]').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.filter-btn[data-zone="${zone}"]`).classList.add('active');
    
    updateFilteredCount();
}

// Get filtered locations based on selections
function getFilteredLocations() {
    let filtered = allLocations;
    
    // Filter by relief type
    if (selectedReliefType !== 'toate') {
        filtered = filtered.filter(loc => loc.type === selectedReliefType);
    }
    
    // Filter by zone
    if (selectedZone !== 'toate') {
        const zone = zones[selectedZone];
        filtered = filtered.filter(loc => {
            const [lat, lng] = loc.coords;
            return lat >= zone.minLat && lat <= zone.maxLat && 
                   lng >= zone.minLng && lng <= zone.maxLng;
        });
    }
    
    return filtered;
}

// Update filtered count display
function updateFilteredCount() {
    const filtered = getFilteredLocations();
    const countEl = document.getElementById('selected-count');
    if (countEl) {
        countEl.textContent = `Locații disponibile: ${filtered.length}`;
        
        if (filtered.length === 0) {
            countEl.style.color = '#ffcccc';
            countEl.textContent = '⚠️ Nicio locație găsită cu filtrele selectate!';
        } else {
            countEl.style.color = 'white';
        }
    }
}

// Initialize map
function initMap() {
    map = L.map('map').setView([20, 0], 2);
    
    // Relief map (OpenTopoMap)
    const reliefLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenTopoMap',
        maxZoom: 17
    });

    // Standard map
    const standardLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    });

    reliefLayer.addTo(map);
    map.reliefLayer = reliefLayer;
    map.standardLayer = standardLayer;

    // Add click handler for map
    map.on('click', (e) => {
        if (quizActive && mapQuiz) {
            checkAnswer(e.latlng);
        }
    });
}

// Initialize quiz map
function initQuizMap(callback) {
    if (mapQuiz) {
        mapQuiz.off();
        mapQuiz.remove();
    }
    
    const mapContainer = document.getElementById('map-quiz');
    mapContainer.innerHTML = '';
    
    setTimeout(() => {
        mapQuiz = L.map(mapContainer).setView([20, 0], 2);
        
        const reliefLayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenTopoMap',
            maxZoom: 17
        });

        reliefLayer.addTo(mapQuiz);
        mapQuiz.reliefLayer = reliefLayer;
        
        mapQuiz.invalidateSize();
        
        // Call callback after map is ready
        if (callback) {
            setTimeout(callback, 100);
        }
    }, 50);
}

// Switch tabs
function switchTab(event, tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabName + '-tab').classList.add('active');
    
    // Add active class to clicked button
    event.target.closest('.tab-btn').classList.add('active');

    // Resize map if needed
    if (tabName === 'map') {
        setTimeout(() => map.invalidateSize(), 100);
    }
}

// Start quiz
function startQuiz() {
    const filtered = getFilteredLocations();
    
    if (filtered.length === 0) {
        alert('⚠️ Nicio locație disponibilă cu filtrele selectate! Alege alte opțiuni.');
        return;
    }
    
    quizLocations = [...filtered].sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    correctAnswers = 0;
    totalQuestions = quizLocations.length;
    quizActive = true;
    isRandomMode = false;

    document.getElementById('start-message').style.display = 'none';
    document.getElementById('quiz-main').style.display = 'block';
    document.getElementById('info-card').style.display = 'block';
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('random-btn').style.display = 'none';
    
    initQuizMap(() => {
        nextQuestion();
    });
}

// Get random location (not quiz)
function getRandomLocation() {
    const filtered = getFilteredLocations();
    
    if (filtered.length === 0) {
        alert('⚠️ Nicio locație disponibilă cu filtrele selectate! Alege alte opțiuni.');
        return;
    }
    
    isRandomMode = true;
    quizActive = true;
    currentLocation = filtered[Math.floor(Math.random() * filtered.length)];
    
    document.getElementById('start-message').style.display = 'none';
    document.getElementById('quiz-main').style.display = 'block';
    document.getElementById('info-card').style.display = 'block';
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('random-btn').style.display = 'none';
    document.getElementById('current-question').textContent = 'Mod liber';
    
    initQuizMap(() => {
        displayRandomLocation();
    });
}

// Next question
function nextQuestion() {
    if (currentQuestionIndex < quizLocations.length) {
        currentLocation = quizLocations[currentQuestionIndex];
        const { name, type, desc, coords } = currentLocation;
        
        // Update info card
        document.getElementById('location-type').textContent = 
            `${typeEmojis[type] || '📍'} ${type.toUpperCase()}`;
        document.getElementById('location-type').style.background = typeColors[type] || '#667eea';
        document.getElementById('location-name').textContent = name;
        document.getElementById('location-desc').textContent = desc;
        document.getElementById('coords-text').textContent = 
            `📍 ${coords[0]}° N/S, ${coords[1]}° E/V`;
        
        document.getElementById('current-question').textContent = 
            `${currentQuestionIndex + 1}/${quizLocations.length}`;
        
        document.getElementById('feedback').classList.remove('show', 'success', 'error');
        
        if (mapQuiz) {
            clearQuizMapMarkers();
            mapQuiz.setView([20, 0], 2);
            // Display all location markers
            displayAllMarkers();
        }
    } else {
        endQuiz();
    }
}

// Display random location
function displayRandomLocation() {
    const { name, type, desc, coords } = currentLocation;
    
    // Update info card
    document.getElementById('location-type').textContent = 
        `${typeEmojis[type] || '📍'} ${type.toUpperCase()}`;
    document.getElementById('location-type').style.background = typeColors[type] || '#667eea';
    document.getElementById('location-name').textContent = name;
    document.getElementById('location-desc').textContent = desc;
    document.getElementById('coords-text').textContent = 
        `📍 ${coords[0]}° N/S, ${coords[1]}° E/V`;
    
    document.getElementById('feedback').classList.remove('show', 'success', 'error');
    
    if (mapQuiz) {
        clearQuizMapMarkers();
        mapQuiz.setView([20, 0], 2);
        // Display all location markers
        displayAllMarkers();
    }
}

// Display all markers on quiz map
function displayAllMarkers() {
    const filtered = getFilteredLocations();
    
    filtered.forEach(location => {
        // In quiz mode, all markers are neutral color (blue/purple)
        const color = '#667eea';
        const marker = L.circleMarker(location.coords, {
            radius: 12,
            fillColor: color,
            color: '#fff',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.85,
            bubblingMouseEvents: false
        }).addTo(mapQuiz);
        
        marker.locationData = location;
        
        marker.on('click', function(e) {
            L.DomEvent.stopPropagation(e);
            if (quizActive) {
                checkMarkerAnswer(this, location);
            }
        });
        
        marker.on('mouseover', function() {
            if (quizActive) {
                this.setStyle({
                    fillOpacity: 1,
                    weight: 3
                });
            }
        });
        
        marker.on('mouseout', function() {
            if (quizActive && this.options.fillColor === color) {
                this.setStyle({
                    fillOpacity: 0.85,
                    weight: 2
                });
            }
        });
    });
}

// Check answer
function checkAnswer(clickedLatLng) {
    // This function is no longer used - keeping for compatibility
    return;
}

// Check marker answer
function checkMarkerAnswer(marker, location) {
    if (!quizActive || !currentLocation) return;
    
    if (location.name === currentLocation.name) {
        // Correct answer!
        correctAnswers++;
        document.getElementById('score').querySelector('.score-value').textContent = 
            `${correctAnswers}/${totalQuestions}`;
        
        // Change clicked marker to green
        marker.setStyle({
            fillColor: '#28a745',
            fillOpacity: 1,
            radius: 14,
            weight: 3
        });
        
        marker.bindPopup(`✓ Corect: ${currentLocation.name}`).openPopup();
        
        showFeedback('✓ Răspuns corect! 🎉', 'success');
        quizActive = false;
        document.getElementById('next-location-btn').classList.remove('hidden');
        
    } else {
        // Wrong answer!
        // Change clicked marker to red
        marker.setStyle({
            fillColor: '#dc3545',
            fillOpacity: 1,
            radius: 12,
            weight: 3
        });
        
        marker.bindPopup(`✗ Greșit: ${location.name}`).openPopup();
        
        // Find and highlight the correct marker
        mapQuiz.eachLayer(layer => {
            if (layer instanceof L.CircleMarker && layer.locationData) {
                if (layer.locationData.name === currentLocation.name) {
                    layer.setStyle({
                        fillColor: '#28a745',
                        fillOpacity: 1,
                        radius: 14,
                        weight: 3
                    });
                    layer.bindPopup(`📍 Locația corectă: ${currentLocation.name}`).openPopup();
                }
            }
        });
        
        showFeedback(`✗ Greșit! Locația corectă era: ${currentLocation.name}`, 'error');
    }
}

// Show feedback
function showFeedback(message, type) {
    const feedback = document.getElementById('feedback');
    feedback.textContent = message;
    feedback.className = `feedback show ${type}`;
}

// Advance to next location
function advanceToNext() {
    document.getElementById('next-location-btn').classList.add('hidden');
    
    if (isRandomMode) {
        currentLocation = getFilteredLocations()[Math.floor(Math.random() * getFilteredLocations().length)];
        quizActive = true;
        displayRandomLocation();
    } else {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizLocations.length) {
            quizActive = true;
            nextQuestion();
        } else {
            endQuiz();
        }
    }
}

// End quiz
function endQuiz() {
    quizActive = false;
    isRandomMode = false;
    document.getElementById('quiz-main').style.display = 'none';
    document.getElementById('start-message').style.display = 'block';
    document.getElementById('info-card').style.display = 'none';
    document.getElementById('start-btn').style.display = 'block';
    document.getElementById('random-btn').style.display = 'block';
    
    const reliefTypeText = selectedReliefType === 'toate' ? 'toate tipurile' : typeEmojis[selectedReliefType] + ' ' + selectedReliefType;
    const zoneText = selectedZone === 'toate' ? 'toate zonele' : selectedZone;
    
    document.getElementById('start-message').innerHTML = `
        <h2>🎉 Quiz terminat!</h2>
        <p style="font-size: 20px; margin: 15px 0; font-weight: bold;">Scor final: ${correctAnswers}/${totalQuestions}</p>
        <p>${correctAnswers === totalQuestions ? '🏆 Perfect!' : correctAnswers >= totalQuestions * 0.7 ? '🎯 Bravo!' : '💪 Continuă antrenamentul!'}</p>
        <p style="font-size: 13px; margin-top: 10px; opacity: 0.9;">Filtru: ${reliefTypeText} - ${zoneText}</p>
    `;
}

// Reset quiz
function resetQuiz() {
    quizActive = false;
    isRandomMode = false;
    currentQuestionIndex = 0;
    correctAnswers = 0;
    totalQuestions = 0;
    currentLocation = null;
    
    document.getElementById('start-message').style.display = 'block';
    document.getElementById('quiz-main').style.display = 'none';
    document.getElementById('info-card').style.display = 'none';
    document.getElementById('start-btn').style.display = 'block';
    document.getElementById('random-btn').style.display = 'block';
    document.getElementById('next-location-btn').classList.add('hidden');
    document.getElementById('score').querySelector('.score-value').textContent = '0/0';
    document.getElementById('current-question').textContent = '0/0';
    document.getElementById('feedback').classList.remove('show');
    
    if (mapQuiz) {
        mapQuiz.off();
        mapQuiz.remove();
        mapQuiz = null;
    }
}

// Clear quiz map markers
function clearQuizMapMarkers() {
    if (!mapQuiz) return;
    mapQuiz.eachLayer(layer => {
        if (layer instanceof L.CircleMarker) {
            mapQuiz.removeLayer(layer);
        }
    });
}

// Clear map markers
function clearMapMarkers() {
    if (!map) return;
    map.eachLayer(layer => {
        if (layer instanceof L.CircleMarker) {
            map.removeLayer(layer);
        }
    });
}

// Show all locations on map
function showAllLocations() {
    clearMapMarkers();
    let bounds = L.latLngBounds();

    allLocations.forEach(location => {
        const color = typeColors[location.type] || '#667eea';
        const marker = L.circleMarker(location.coords, {
            radius: 8,
            fillColor: color,
            color: '#fff',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8
        }).addTo(map).bindPopup(`
            <strong>${location.name}</strong><br>
            ${typeEmojis[location.type] || ''} ${location.type}<br>
            ${location.coords[0]}°, ${location.coords[1]}°
        `);
        
        bounds.extend(location.coords);
    });

    if (bounds.isValid()) {
        map.fitBounds(bounds, { padding: [50, 50] });
    }
}

// Toggle relief map
function toggleReliefMode() {
    reliefMode = !reliefMode;
    
    if (reliefMode) {
        map.removeLayer(map.standardLayer);
        map.addLayer(map.reliefLayer);
        document.getElementById('relief-btn-text').textContent = 'Relief ON';
    } else {
        map.removeLayer(map.reliefLayer);
        map.addLayer(map.standardLayer);
        document.getElementById('relief-btn-text').textContent = 'Relief OFF';
    }
}

// Add location
function addLocation(event) {
    event.preventDefault();
    
    const name = document.getElementById('location-name').value;
    const type = document.getElementById('location-type').value;
    const desc = document.getElementById('location-desc').value;
    const lat = parseFloat(document.getElementById('location-lat').value);
    const lng = parseFloat(document.getElementById('location-lng').value);

    if (!name || !type || isNaN(lat) || isNaN(lng)) {
        alert('Completează toate câmpurile obligatorii!');
        return;
    }

    const newLocation = { 
        name, 
        type,
        desc: desc || `Locație în ${name}`,
        coords: [lat, lng] 
    };

    // Save to localStorage
    let saved = localStorage.getItem('customLocations');
    let custom = saved ? JSON.parse(saved) : [];
    custom.push(newLocation);
    localStorage.setItem('customLocations', JSON.stringify(custom));

    // Reload locations
    loadLocations();
    updateSavedLocationsList();

    // Reset form
    event.target.reset();
    alert('✓ Locație adăugată cu succes!');
}

// Update saved locations list
function updateSavedLocationsList() {
    const saved = localStorage.getItem('customLocations');
    const customLocations = saved ? JSON.parse(saved) : [];
    const container = document.getElementById('saved-locations');

    if (customLocations.length === 0) {
        container.innerHTML = '<div class="no-locations">📍 Nicio locație personalizată adăugată</div>';
        return;
    }

    container.innerHTML = customLocations.map((loc, idx) => `
        <div class="location-item">
            <div class="location-info">
                <div class="location-name">${loc.name}</div>
                <div class="location-type-badge">${typeEmojis[loc.type] || ''} ${loc.type}</div>
                <div class="location-coords">${loc.coords[0]}°, ${loc.coords[1]}°</div>
            </div>
            <button class="location-delete" onclick="deleteLocation(${idx})">
                <i class="fas fa-trash-alt"></i> Șterge
            </button>
        </div>
    `).join('');
}

// Delete location
function deleteLocation(index) {
    const saved = localStorage.getItem('customLocations');
    let custom = saved ? JSON.parse(saved) : [];
    custom.splice(index, 1);
    localStorage.setItem('customLocations', JSON.stringify(custom));
    
    loadLocations();
    updateSavedLocationsList();
}

// Clear all local storage
function clearLocalStorage() {
    if (confirm('🗑️ Sigur vrei să ștergi TOATE locațiile personalizate?')) {
        localStorage.removeItem('customLocations');
        loadLocations();
        updateSavedLocationsList();
        alert('✓ Locații personalizate șterse!');
    }
}
