document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initNavbarScroll();
    fetchCatalog();
});

function fetchCatalog() {
    const container = document.getElementById('catalog-container');
    const spinner = document.getElementById('loading-spinner');
    
    // Pune aici link-ul nou obținut de la pasul de Deploy de mai sus
    const API_URL = 'https://script.google.com/macros/s/AKfycbyAGWmBds7aZoojCTIGV-t5ShY5cPyLCqR_rwU3OQEdZQsrJOBmuSQ4iGrhIvTxruTR/exec'; 

    fetch(API_URL)
        .then(response => {
            if (!response.ok) throw new Error('Eroare rețea');
            return response.json();
        })
        .then(data => {
            // Modificat pentru a accepta atât 'Activ' cât și 'Valabil' conform tabelului tău
            const activeProducts = data.filter(produs => 
                produs.Status === 'Activ' || produs.Status === 'Valabil'
            );
            renderCatalog(activeProducts);
        })
        .catch(error => {
            console.error('Eroare:', error);
            container.innerHTML = `<div class="col-12 text-center text-danger py-5"><p>Eroare la încărcare. Verifică setările de Deploy în Google Script.</p></div>`;
        })
        .finally(() => {
            if (spinner) spinner.style.display = 'none';
        });
}

function renderCatalog(produse) {
    const container = document.getElementById('catalog-container');
    container.innerHTML = ''; 
    
    if (!produse || produse.length === 0) {
        container.innerHTML = '<div class="col-12 text-center py-5"><p>Nu există produse disponibile momentan.</p></div>';
        return;
    }

    produse.forEach(produs => {
        // Formatează titlul (Sentence case)
        let rawName = produs.Nume_Produs || 'Produs';
        let formattedName = rawName.charAt(0).toUpperCase() + rawName.slice(1).toLowerCase();

        const cardHTML = `
            <div class="col-lg-3 col-md-6 col-sm-12">
                <article class="card h-100 product-card shadow-sm border-0" itemscope itemtype="https://schema.org/Product">
                    <div class="product-img-wrapper">
                        <img src="${produs.Imagine_URL || 'https://placehold.co/600x800?text=Fara+Imagine'}" 
                             class="card-img-top" alt="RomVogue - ${formattedName}" itemprop="image">
                    </div>
                    <div class="card-body d-flex flex-column p-3">
                        <div class="mb-2"><span class="badge bg-light text-dark border-0" itemprop="category">${produs.Categorie || 'General'}</span></div>
                        <h5 class="card-title fw-bold mb-3" itemprop="name">${formattedName}</h5>
                        <div class="d-flex justify-content-between align-items-center mt-auto" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                            <span class="fw-bold text-dark" itemprop="price" content="${produs.Pret}">${produs.Pret} RON</span>
                            <meta itemprop="priceCurrency" content="RON" />
                            <meta itemprop="availability" content="https://schema.org/InStock" />
                            <button class="btn btn-outline-dark btn-sm rounded-0 px-3">Detalii</button>
                        </div>
                    </div>
                </article>
            </div>`;
        container.insertAdjacentHTML('beforeend', cardHTML);
    });
}

function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
}

function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('preloader-hidden');
        }, 1500);
    }
}