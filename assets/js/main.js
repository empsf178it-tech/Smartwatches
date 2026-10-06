/* 
  PULSEON - Premium Smartwatch & Wearable Technology
  Master JavaScript Application Engine
*/

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initial Data Models & LocalStorage Seed
  initDefaultProducts();
  
  // 2. Global UI Controllers
  initBrandLogo();
  initPageLoader();
  initScrollProgress();
  initNavbarScroll();
  initMobileNav();
  initScrollReveal();
  initCounters();

  // 3. Page Specific Logic
  initSmartwatchFilters();
  initQuickViewModal();
  initCompareTool();
  initAccessoriesFilters();
  initProductGallery();
  initDashboard();
  initAdminPanel();
  initContactForm();
  updateBadgeCounts();
});

/* Complete 20-Smartwatch Dataset (Unique Image Mapping) */
const DEFAULT_PRODUCTS = [
  {
    id: "pw-x1",
    name: "PULSEON X1 Pro",
    tagline: "Ultra Titanium Performance",
    category: "Premium",
    price: 24999,
    originalPrice: 28999,
    rating: 4.9,
    reviews: 128,
    image: "assets/images/6.jpg",
    specs: {
      display: '1.43" AMOLED 1000 nits',
      battery: "7 Days Heavy Use",
      gps: "Dual-Frequency L1+L5 GPS",
      heartRate: "Optical Bio-Sensor Array",
      spO2: "Continuous 24/7 Monitoring",
      waterResistance: "50m (5 ATM) Waterproof",
      material: "Titanium Case + Sapphire Glass"
    },
    badge: "Flagship"
  },
  {
    id: "pw-apex",
    name: "PULSEON Apex Gold Edition",
    tagline: "Luxury Craftsmanship & Sapphire",
    category: "Classic",
    price: 34999,
    originalPrice: 39999,
    rating: 5.0,
    reviews: 84,
    image: "assets/images/31.jpg",
    specs: {
      display: '1.5" Sapphire AMOLED',
      battery: "5 Days Precision Time",
      gps: "Integrated Multi-GNSS",
      heartRate: "Precision ECG + HR",
      spO2: "Advanced SpO2 Tracking",
      waterResistance: "100m (10 ATM)",
      material: "Rose Gold Bezel & Italian Leather"
    },
    badge: "Luxury"
  },
  {
    id: "pw-rugged",
    name: "PULSEON Tactical Ultra",
    tagline: "MIL-STD Rugged Outdoor Tracker",
    category: "Rugged",
    price: 19999,
    originalPrice: 22999,
    rating: 4.8,
    reviews: 210,
    image: "assets/images/18.jpg",
    specs: {
      display: '1.85" HD Armor Touch',
      battery: "14 Days Extreme Endurance",
      gps: "Offline Waypoint Navigation",
      heartRate: "Tactical Bio-Sensor",
      spO2: "Altitude SpO2 Alert",
      waterResistance: "100m Shock & Water Proof",
      material: "Reinforced Polycarbonate & Alloy"
    },
    badge: "Rugged"
  },
  {
    id: "pw-fit",
    name: "PULSEON PulseFit S2",
    tagline: "Slim Sport & Heart Health Tracker",
    category: "Fitness",
    price: 12999,
    originalPrice: 14999,
    rating: 4.7,
    reviews: 340,
    image: "assets/images/1.jpg",
    specs: {
      display: '1.39" Vibrant Curved AMOLED',
      battery: "10 Days Battery Life",
      gps: "High-Precision GPS",
      heartRate: "111 BPM Workout Tracking",
      spO2: "Auto Sleep & SpO2",
      waterResistance: "50m Swimming Proof",
      material: "Hypoallergenic Silicone Band"
    },
    badge: "Bestseller"
  },
  {
    id: "pw-executive",
    name: "PULSEON Executive Steel",
    tagline: "Black Metal Link Business Watch",
    category: "Classic",
    price: 21999,
    originalPrice: 25999,
    rating: 4.9,
    reviews: 95,
    image: "assets/images/21.jpg",
    specs: {
      display: '1.4" Always-On AMOLED',
      battery: "6 Days Business Use",
      gps: "Built-in GPS & Compass",
      heartRate: "Real-time HR & Stress",
      spO2: "Sleep Quality Analytics",
      waterResistance: "30m Water Resistant",
      material: "Stainless Steel Link Bracelet"
    },
    badge: "Executive"
  },
  {
    id: "pw-vogue",
    name: "PULSEON Vogue Rose",
    tagline: "Elegant Design for Modern Life",
    category: "Everyday",
    price: 16999,
    originalPrice: 18999,
    rating: 4.8,
    reviews: 162,
    image: "assets/images/17.jpg",
    specs: {
      display: '1.3" Crystal Touch HD',
      battery: "7 Days Battery Life",
      gps: "Connected Smartphone GPS",
      heartRate: "24h Bio-Signal Sensor",
      spO2: "Wellness Tracking",
      waterResistance: "IP68 Waterproof",
      material: "Rose Gold Alloy + Silicone"
    },
    badge: "New"
  },
  {
    id: "pw-traveler",
    name: "PULSEON Voyager Transit",
    tagline: "Global Travel & Dual Time Sync",
    category: "Everyday",
    price: 18499,
    originalPrice: 20999,
    rating: 4.8,
    reviews: 110,
    image: "assets/images/30.jpg",
    specs: {
      display: '1.4" World Dial Touch',
      battery: "7 Days Travel Life",
      gps: "Multi-Zone Satellite",
      heartRate: "Continuous HR",
      spO2: "Jetlag Wellness",
      waterResistance: "50m Resistant",
      material: "Brushed Steel & Leather"
    },
    badge: "Travel"
  },
  {
    id: "pw-slate",
    name: "PULSEON Slate Minimalist",
    tagline: "Ultra-Thin Dark Graphite Dial",
    category: "Classic",
    price: 15499,
    originalPrice: 17499,
    rating: 4.7,
    reviews: 89,
    image: "assets/images/37.jpg",
    specs: {
      display: '1.35" Slate OLED',
      battery: "8 Days Life",
      gps: "GPS Sync",
      heartRate: "Optical Sensor",
      spO2: "SpO2 Telemetry",
      waterResistance: "IP68 Waterproof",
      material: "Anodized Slate Alloy"
    },
    badge: "Minimal"
  },
  {
    id: "pw-earth",
    name: "PULSEON Terra Globe",
    tagline: "World-Time Navigation Watch",
    category: "Outdoor",
    price: 22499,
    originalPrice: 26999,
    rating: 4.9,
    reviews: 74,
    image: "assets/images/16.jpg",
    specs: {
      display: '1.45" Curved Earth AMOLED',
      battery: "8 Days Navigation",
      gps: "Triple Satellite GNSS",
      heartRate: "Bio-Telemetry Node",
      spO2: "Pulse Oximetry",
      waterResistance: "50m Water Resistant",
      material: "Satin Titanium Case"
    },
    badge: "Special Edition"
  },
  {
    id: "pw-wood",
    name: "PULSEON Naturalis Titanium",
    tagline: "Organic Texture & Rugged Bezel",
    category: "Rugged",
    price: 25999,
    originalPrice: 29999,
    rating: 4.9,
    reviews: 58,
    image: "assets/images/5.jpg",
    specs: {
      display: '1.4" Matte AMOLED',
      battery: "9 Days Endurance",
      gps: "Dual GPS",
      heartRate: "Optical HR Sensor",
      spO2: "SpO2 Monitoring",
      waterResistance: "50m Resistant",
      material: "Titanium + Natural Grain Accent"
    },
    badge: "Rugged"
  },
  {
    id: "pw-square",
    name: "PULSEON Onyx Square",
    tagline: "Ultra-Clean Square Touchscreen",
    category: "Everyday",
    price: 14999,
    originalPrice: 16999,
    rating: 4.7,
    reviews: 180,
    image: "assets/images/4.jpg",
    specs: {
      display: '1.78" Retina Square Touch',
      battery: "7 Days Battery",
      gps: "Integrated GPS",
      heartRate: "Continuous HR",
      spO2: "Sleep & Blood Oxygen",
      waterResistance: "IP68 Rating",
      material: "Space Gray Aluminum"
    },
    badge: "Popular"
  },
  {
    id: "pw-leather",
    name: "PULSEON Heritage Classic",
    tagline: "Genuine Brown Leather Strap",
    category: "Classic",
    price: 18999,
    originalPrice: 21999,
    rating: 4.8,
    reviews: 112,
    image: "assets/images/20.jpg",
    specs: {
      display: '1.4" Chrono HD Dial',
      battery: "6 Days Battery",
      gps: "Smart GPS Sync",
      heartRate: "Heart Rate Monitor",
      spO2: "Health Metrics",
      waterResistance: "30m Water Resistant",
      material: "Tuscan Leather + Steel Case"
    },
    badge: "Classic"
  },
  {
    id: "pw-curved",
    name: "PULSEON Vista Curved",
    tagline: "Full Edge-to-Edge Glass Display",
    category: "Premium",
    price: 27999,
    originalPrice: 31999,
    rating: 5.0,
    reviews: 91,
    image: "assets/images/23.jpg",
    specs: {
      display: '1.9" Curved Edge AMOLED',
      battery: "7 Days Life",
      gps: "L1+L5 Dual Antenna",
      heartRate: "ECG Bio-Sensor",
      spO2: "Full Day Oximeter",
      waterResistance: "50m Waterproof",
      material: "Starlight Aluminum & Sapphire"
    },
    badge: "Flagship"
  },
  {
    id: "pw-comm",
    name: "PULSEON Dial Communicator",
    tagline: "Integrated Cellular Messaging",
    category: "Everyday",
    price: 17999,
    originalPrice: 20999,
    rating: 4.7,
    reviews: 145,
    image: "assets/images/24.jpg",
    specs: {
      display: '1.4" High-Contrast Dial',
      battery: "5 Days Active Use",
      gps: "Built-in GPS",
      heartRate: "HR Tracker",
      spO2: "Auto SpO2 Alerts",
      waterResistance: "IP68 Rating",
      material: "Anodized Black Metal"
    },
    badge: "Connected"
  },
  {
    id: "pw-chrono",
    name: "PULSEON Chrono Black",
    tagline: "Deep Graphite Sport Watch",
    category: "Fitness",
    price: 15999,
    originalPrice: 17999,
    rating: 4.8,
    reviews: 204,
    image: "assets/images/3.jpg",
    specs: {
      display: '1.43" Circular Touch',
      battery: "8 Days Battery",
      gps: "Multi-GPS Tracker",
      heartRate: "Dynamic Heart Rate",
      spO2: "Sleep Tracker",
      waterResistance: "50m Swimming",
      material: "Matte Black Polycarbonate"
    },
    badge: "Sport"
  },
  {
    id: "pw-active",
    name: "PULSEON Active Wrist Pro",
    tagline: "Lightweight Outdoor Sport Tracker",
    category: "Fitness",
    price: 13999,
    originalPrice: 15999,
    rating: 4.6,
    reviews: 230,
    image: "assets/images/2.jpg",
    specs: {
      display: '1.65" HD Square Dial',
      battery: "9 Days Battery",
      gps: "Fast Lock GPS",
      heartRate: "Bio Heart Sensor",
      spO2: "SpO2 & Stress",
      waterResistance: "50m Water Resistant",
      material: "Soft Gray Silicone"
    },
    badge: "Active"
  },
  {
    id: "pw-luxe",
    name: "PULSEON Royal Gold Chrono",
    tagline: "Luxury Metallic Craftsmanship",
    category: "Classic",
    price: 38999,
    originalPrice: 42999,
    rating: 5.0,
    reviews: 42,
    image: "assets/images/54.jpg",
    specs: {
      display: '1.5" Sapphire AMOLED',
      battery: "6 Days Battery",
      gps: "Dual GNSS",
      heartRate: "ECG Telemetry",
      spO2: "24/7 Monitoring",
      waterResistance: "50m Waterproof",
      material: "18K Gold Plated Bezel"
    },
    badge: "Limited"
  },
  {
    id: "pw-ultra",
    name: "PULSEON Apex Ultra Navy",
    tagline: "Navy Blue Sport Edition",
    category: "Premium",
    price: 26999,
    originalPrice: 29999,
    rating: 4.9,
    reviews: 67,
    image: "assets/images/55.jpg",
    specs: {
      display: '1.43" Vivid AMOLED',
      battery: "7 Days Life",
      gps: "Precision L1+L5 GPS",
      heartRate: "Bio Optical Hub",
      spO2: "SpO2 Sensing",
      waterResistance: "100m Water Resistant",
      material: "Deep Navy Titanium"
    },
    badge: "Flagship"
  },
  {
    id: "pw-tactical2",
    name: "PULSEON Combat Stealth",
    tagline: "Stealth Black Tactical Watch",
    category: "Rugged",
    price: 20999,
    originalPrice: 23999,
    rating: 4.8,
    reviews: 115,
    image: "assets/images/56.jpg",
    specs: {
      display: '1.8" Reinforced Touch',
      battery: "12 Days Life",
      gps: "Offline Waypoint GNSS",
      heartRate: "Heart Rate Monitor",
      spO2: "Oxygen Altitude Alert",
      waterResistance: "100m Shockproof",
      material: "Military Steel Alloy"
    },
    badge: "Rugged"
  },
  {
    id: "pw-slim",
    name: "PULSEON Aerolite Slim",
    tagline: "Ultra-Lightweight Daily Watch",
    category: "Everyday",
    price: 11999,
    originalPrice: 13999,
    rating: 4.7,
    reviews: 290,
    image: "assets/images/57.jpg",
    specs: {
      display: '1.3" Crisp OLED',
      battery: "10 Days Life",
      gps: "Connected GPS",
      heartRate: "HR Sensor",
      spO2: "Sleep Tracker",
      waterResistance: "IP68 Waterproof",
      material: "Ultra-Light Composite"
    },
    badge: "Lightweight"
  }
];

function initDefaultProducts() {
  localStorage.setItem('pulseon_products', JSON.stringify(DEFAULT_PRODUCTS));
}

function getProducts() {
  return JSON.parse(localStorage.getItem('pulseon_products')) || DEFAULT_PRODUCTS;
}

/* 1. Page Loader Animation (500-700ms) */
function initPageLoader() {
  const loader = document.getElementById('page-loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('fade-out');
    }, 600);
  }
}

/* 2. Scroll Progress Bar */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (bar) {
    window.addEventListener('scroll', () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    });
  }
}

/* 2b. Back To Top Button (all pages) */
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('back-to-top')) return;
  const btn = document.createElement('button');
  btn.id = 'back-to-top';
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML =
    '<svg class="btt-ring" viewBox="0 0 48 48" aria-hidden="true">' +
    '<circle class="btt-track" cx="24" cy="24" r="21"></circle>' +
    '<circle class="btt-progress" cx="24" cy="24" r="21"></circle></svg>' +
    '<i class="bi bi-arrow-up"></i>';
  document.body.appendChild(btn);

  const circle = btn.querySelector('.btt-progress');
  const circumference = 2 * Math.PI * 21;
  circle.style.strokeDasharray = circumference;

  const update = () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0;
    circle.style.strokeDashoffset = circumference * (1 - ratio);
    btn.classList.toggle('visible', window.scrollY > 300);
  };
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

/* 3. Navbar Scroll Shrink & Blur */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar-pulseon');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
}

/* 4. Mobile Drawer Menu */
function initMobileNav() {
  const toggler = document.getElementById('mobile-nav-toggler');
  const menu = document.getElementById('mobile-nav-menu');
  if (toggler && menu) {
    toggler.addEventListener('click', () => {
      menu.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
      if (!toggler.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('show');
      }
    });
  }
}

/* 5. Scroll Reveal System using IntersectionObserver */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* 6. Animated Counters */
function initCounters() {
  const counters = document.querySelectorAll('.counter-value');
  if (counters.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-target'));
        const suffix = entry.target.getAttribute('data-suffix') || '';
        let count = 0;
        const speed = target / 50;

        const update = () => {
          count += speed;
          if (count < target) {
            entry.target.innerText = Math.ceil(count).toLocaleString() + suffix;
            requestAnimationFrame(update);
          } else {
            entry.target.innerText = target.toLocaleString() + suffix;
          }
        };
        update();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

/* 7. LocalStorage Shopping & Wishlist & Compare State */
function getCart() {
  return JSON.parse(localStorage.getItem('pulseon_cart')) || [];
}

function addToCart(productId) {
  const cart = getCart();
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }
  localStorage.setItem('pulseon_cart', JSON.stringify(cart));
  updateBadgeCounts();
  showToast('Item added to your shopping cart');
}

function getWishlist() {
  return JSON.parse(localStorage.getItem('pulseon_wishlist')) || [];
}

function toggleWishlist(productId) {
  let list = getWishlist();
  if (list.includes(productId)) {
    list = list.filter(id => id !== productId);
    showToast('Removed from Wishlist');
  } else {
    list.push(productId);
    showToast('Added to Wishlist');
  }
  localStorage.setItem('pulseon_wishlist', JSON.stringify(list));
  updateBadgeCounts();
}

function getCompareList() {
  return JSON.parse(localStorage.getItem('pulseon_compare')) || [];
}

function addToCompare(productId) {
  let compare = getCompareList();
  if (compare.includes(productId)) {
    showToast('Product already in compare list');
    return;
  }
  if (compare.length >= 3) {
    showToast('You can compare a maximum of 3 smartwatches');
    return;
  }
  compare.push(productId);
  localStorage.setItem('pulseon_compare', JSON.stringify(compare));
  updateBadgeCounts();
  showToast('Added to comparison matrix');
}

function updateBadgeCounts() {
  const cartCount = getCart().reduce((sum, i) => sum + i.qty, 0);
  const wishlistCount = getWishlist().length;
  const compareCount = getCompareList().length;

  const cartBadges = document.querySelectorAll('.cart-badge-count');
  const wishlistBadges = document.querySelectorAll('.wishlist-badge-count');
  const compareBadges = document.querySelectorAll('.compare-badge-count');

  cartBadges.forEach(b => b.innerText = cartCount);
  wishlistBadges.forEach(b => b.innerText = wishlistCount);
  compareBadges.forEach(b => b.innerText = compareCount);
}

/* 8. Smartwatch Category Filtering */
function initSmartwatchFilters() {
  const container = document.getElementById('smartwatches-grid');
  if (!container) return;

  const filterBtns = document.querySelectorAll('.smartwatch-filter-btn');
  const products = getProducts();

  function renderGrid(filteredCategory = 'All') {
    container.innerHTML = '';
    const items = filteredCategory === 'All' 
      ? products 
      : products.filter(p => p.category.toLowerCase() === filteredCategory.toLowerCase());

    if (items.length === 0) {
      container.innerHTML = `<div class="col-12 text-center py-5"><p class="text-muted">No smartwatches found in this category.</p></div>`;
      return;
    }

    items.forEach(p => {
      const cardHtml = `
        <div class="col-lg-3 col-md-6 mb-4">
          <div class="product-card">
            <span class="product-card-badge ${p.badge === 'Flagship' ? 'badge-primary' : ''}">${p.badge}</span>
            <div class="product-card-img-wrap">
              <img src="${p.image}" alt="${p.name}" class="product-card-img" loading="lazy">
              <div class="product-card-actions">
                <button class="btn btn-sm btn-pulseon-primary" onclick="openQuickView('${p.id}')">Quick View</button>
                <button class="btn btn-sm btn-pulseon-outline" onclick="addToCompare('${p.id}')"><i class="bi bi-shuffle"></i> Compare</button>
              </div>
            </div>
            <div class="product-card-body">
              <div class="d-flex justify-content-between align-items-center mb-1">
                <span class="text-muted small">${p.category}</span>
                <div class="product-card-rating">
                  <i class="bi bi-star-fill"></i> ${p.rating} (${p.reviews})
                </div>
              </div>
              <h5 class="product-card-title">${p.name}</h5>
              <p class="product-card-desc">${p.tagline}</p>
              <div class="d-flex justify-content-between align-items-center mt-2">
                <div>
                  <span class="product-card-price">₹${p.price.toLocaleString()}</span>
                  <span class="text-muted text-decoration-line-through small ms-1">₹${p.originalPrice.toLocaleString()}</span>
                </div>
                <button class="btn btn-sm btn-pulseon-dark" onclick="addToCart('${p.id}')">
                  <i class="bi bi-cart-plus"></i> Add
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
      container.innerHTML += cardHtml;
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const cat = e.target.getAttribute('data-filter');
      renderGrid(cat);
    });
  });

  renderGrid('All');
}

/* 9. Quick View Modal */
function initQuickViewModal() {
  window.openQuickView = function(productId) {
    const products = getProducts();
    const p = products.find(item => item.id === productId);
    if (!p) return;

    const modalTitle = document.getElementById('quickViewTitle');
    const modalBody = document.getElementById('quickViewBody');

    if (modalTitle && modalBody) {
      modalTitle.innerText = p.name;
      modalBody.innerHTML = `
        <div class="row align-items-center">
          <div class="col-md-6 text-center mb-4 mb-md-0">
            <img src="${p.image}" alt="${p.name}" class="img-fluid rounded" style="max-height: 280px; object-fit: contain;">
          </div>
          <div class="col-md-6">
            <span class="badge bg-primary mb-2">${p.category}</span>
            <h4>${p.name}</h4>
            <p class="text-muted small">${p.tagline}</p>
            <h3 class="text-primary fw-bold mb-3">₹${p.price.toLocaleString()} <span class="text-muted fs-6 text-decoration-line-through">₹${p.originalPrice.toLocaleString()}</span></h3>
            
            <ul class="list-unstyled mb-4 text-secondary small">
              <li><i class="bi bi-display text-primary me-2"></i> <strong>Display:</strong> ${p.specs.display}</li>
              <li><i class="bi bi-battery-charging text-primary me-2"></i> <strong>Battery:</strong> ${p.specs.battery}</li>
              <li><i class="bi bi-geo-alt text-primary me-2"></i> <strong>GPS:</strong> ${p.specs.gps}</li>
              <li><i class="bi bi-heart-pulse text-primary me-2"></i> <strong>Sensors:</strong> ${p.specs.heartRate}</li>
              <li><i class="bi bi-droplet text-primary me-2"></i> <strong>Waterproof:</strong> ${p.specs.waterResistance}</li>
            </ul>

            <div class="d-flex gap-2">
              <button class="btn btn-pulseon-primary flex-grow-1" onclick="addToCart('${p.id}')">Add to Cart</button>
              <button class="btn btn-pulseon-outline" onclick="toggleWishlist('${p.id}')"><i class="bi bi-heart"></i></button>
              <button class="btn btn-pulseon-outline" onclick="addToCompare('${p.id}')"><i class="bi bi-shuffle"></i></button>
            </div>
          </div>
        </div>
      `;

      const bsModal = new bootstrap.Modal(document.getElementById('quickViewModal'));
      bsModal.show();
    }
  };
}

/* 10. Interactive Comparison Matrix Page */
function initCompareTool() {
  const compareTableContainer = document.getElementById('compare-table-container');
  if (!compareTableContainer) return;

  function renderCompareTable() {
    const compareIds = getCompareList();
    const products = getProducts();

    if (compareIds.length === 0) {
      compareTableContainer.innerHTML = `
        <div class="text-center py-5">
          <i class="bi bi-shuffle text-muted fs-1 mb-3 d-block"></i>
          <h5>No Smartwatches Selected for Comparison</h5>
          <p class="text-muted">Browse our smartwatches and click "Compare" on up to 3 models to view side-by-side specs.</p>
          <a href="smartwatches.html" class="btn btn-pulseon-primary mt-2">Browse Smartwatches</a>
        </div>
      `;
      return;
    }

    const selectedProducts = products.filter(p => compareIds.includes(p.id));

    let html = `
      <table class="compare-table">
        <thead>
          <tr>
            <th class="feature-label">Specification</th>
    `;

    selectedProducts.forEach(p => {
      html += `
        <th>
          <div class="text-end mb-2">
            <button class="btn btn-sm btn-outline-danger py-0 px-2" onclick="removeFromCompare('${p.id}')">&times; Remove</button>
          </div>
          <img src="${p.image}" alt="${p.name}" style="height: 110px; object-fit: contain;" class="mb-2">
          <h6>${p.name}</h6>
          <span class="text-primary fw-bold">₹${p.price.toLocaleString()}</span>
        </th>
      `;
    });

    html += `
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="feature-label">Display</td>
            ${selectedProducts.map(p => `<td>${p.specs.display}</td>`).join('')}
          </tr>
          <tr>
            <td class="feature-label">Battery Life</td>
            ${selectedProducts.map(p => `<td class="highlight-spec">${p.specs.battery}</td>`).join('')}
          </tr>
          <tr>
            <td class="feature-label">GPS & Navigation</td>
            ${selectedProducts.map(p => `<td>${p.specs.gps}</td>`).join('')}
          </tr>
          <tr>
            <td class="feature-label">Heart Rate Sensor</td>
            ${selectedProducts.map(p => `<td>${p.specs.heartRate}</td>`).join('')}
          </tr>
          <tr>
            <td class="feature-label">SpO2 Blood Oxygen</td>
            ${selectedProducts.map(p => `<td>${p.specs.spO2}</td>`).join('')}
          </tr>
          <tr>
            <td class="feature-label">Water Resistance</td>
            ${selectedProducts.map(p => `<td class="highlight-spec">${p.specs.waterResistance}</td>`).join('')}
          </tr>
          <tr>
            <td class="feature-label">Materials</td>
            ${selectedProducts.map(p => `<td>${p.specs.material}</td>`).join('')}
          </tr>
          <tr>
            <td class="feature-label">Action</td>
            ${selectedProducts.map(p => `
              <td>
                <button class="btn btn-sm btn-pulseon-primary w-100" onclick="addToCart('${p.id}')">Add to Cart</button>
              </td>
            `).join('')}
          </tr>
        </tbody>
      </table>
    `;

    compareTableContainer.innerHTML = html;
  }

  window.removeFromCompare = function(id) {
    let compare = getCompareList().filter(itemId => itemId !== id);
    localStorage.setItem('pulseon_compare', JSON.stringify(compare));
    updateBadgeCounts();
    renderCompareTable();
  };

  renderCompareTable();
}

/* 11. Accessories Filtering */
function initAccessoriesFilters() {
  const container = document.getElementById('accessories-grid');
  if (!container) return;

  const ACCESSORIES = [
    { name: "Apex Genuine Italian Leather Strap", cat: "Strap", price: 2999, img: "assets/images/43.jpg", badge: "Premium" },
    { name: "Multi-Strap Signature Collection", cat: "Strap", price: 4999, img: "assets/images/19.jpg", badge: "Bundle" },
    { name: "Pulseon Fast Wireless Charging Dock", cat: "Charger", price: 1999, img: "assets/images/25.jpg", badge: "Fast Charge" },
    { name: "Armor Shield Tempered Glass (2-Pack)", cat: "Protection", price: 799, img: "assets/images/53.jpg", badge: "Protection" },
    { name: "Executive Stainless Steel Band", cat: "Premium", price: 3999, img: "assets/images/21.jpg", badge: "Luxury" },
    { name: "Silicone Sport Band (Light Gray)", cat: "Strap", price: 1299, img: "assets/images/41.jpg", badge: "Sport" },
    { name: "Hard Case Bumper Protector", cat: "Protection", price: 999, img: "assets/images/42.jpg", badge: "Armor" },
    { name: "Titanium Metal Link Strap", cat: "Premium", price: 4499, img: "assets/images/48.jpg", badge: "Titanium" },
    { name: "Multi-Port Desktop Charger Stand", cat: "Charger", price: 2499, img: "assets/images/52.jpg", badge: "Desktop" },
    { name: "Ultra-Wide Charging Stand", cat: "Charger", price: 2799, img: "assets/images/40.jpg", badge: "Dock" },
    { name: "Protective Screen Shield HD", cat: "Protection", price: 699, img: "assets/images/46.jpg", badge: "Shield" },
    { name: "Rugged Armor Frame Case", cat: "Protection", price: 1199, img: "assets/images/47.jpg", badge: "Military" }
  ];

  const filterBtns = document.querySelectorAll('.acc-filter-btn');

  function renderAccessories(cat = 'All') {
    container.innerHTML = '';
    const filtered = cat === 'All' ? ACCESSORIES : ACCESSORIES.filter(a => a.cat === cat);

    filtered.forEach(a => {
      container.innerHTML += `
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="product-card">
            <span class="product-card-badge">${a.badge}</span>
            <div class="product-card-img-wrap">
              <img src="${a.img}" alt="${a.name}" class="product-card-img" loading="lazy">
            </div>
            <div class="product-card-body">
              <span class="text-muted small">${a.cat}</span>
              <h5 class="product-card-title mt-1">${a.name}</h5>
              <div class="d-flex justify-content-between align-items-center mt-3">
                <span class="product-card-price">₹${a.price.toLocaleString()}</span>
                <button class="btn btn-sm btn-pulseon-primary" onclick="showToast('Accessory added to cart')">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      `;
    });
  }

  filterBtns.forEach(b => {
    b.addEventListener('click', (e) => {
      filterBtns.forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
      renderAccessories(e.target.getAttribute('data-filter'));
    });
  });

  renderAccessories('All');
}

/* 12. Product Details Gallery Switcher */
function initProductGallery() {
  const mainImg = document.getElementById('gallery-main-img');
  const thumbs = document.querySelectorAll('.thumb-item');
  if (mainImg && thumbs.length > 0) {
    thumbs.forEach(t => {
      t.addEventListener('click', (e) => {
        thumbs.forEach(item => item.classList.remove('active'));
        t.classList.add('active');
        const newSrc = t.getAttribute('data-src');
        mainImg.style.opacity = '0.3';
        setTimeout(() => {
          mainImg.src = newSrc;
          mainImg.style.opacity = '1';
        }, 150);
      });
    });
  }
}

/* 13. User Dashboard Data Render */
function initDashboard() {
  const wishlistContainer = document.getElementById('dashboard-wishlist-grid');
  if (wishlistContainer) {
    const wishlistIds = getWishlist();
    const products = getProducts();
    const items = products.filter(p => wishlistIds.includes(p.id));

    if (items.length === 0) {
      wishlistContainer.innerHTML = `<div class="col-12 py-4"><p class="text-muted text-center">Your wishlist is currently empty.</p></div>`;
    } else {
      wishlistContainer.innerHTML = '';
      items.forEach(p => {
        wishlistContainer.innerHTML += `
          <div class="col-md-6 mb-3">
            <div class="card p-3 d-flex flex-row align-items-center gap-3 border">
              <img src="${p.image}" style="width: 70px; height: 70px; object-fit: contain;">
              <div class="flex-grow-1">
                <h6 class="mb-1">${p.name}</h6>
                <div class="text-primary fw-bold">₹${p.price.toLocaleString()}</div>
              </div>
              <button class="btn btn-sm btn-pulseon-primary" onclick="addToCart('${p.id}')">Cart</button>
            </div>
          </div>
        `;
      });
    }
  }
}

/* 14. Admin Panel Full CRUD System */
function initAdminPanel() {
  const adminTable = document.getElementById('admin-product-table');
  if (!adminTable) return;

  function renderAdminTable() {
    const products = getProducts();
    adminTable.innerHTML = '';
    if (!products || products.length === 0) {
      adminTable.innerHTML = `<tr><td colspan="6" class="text-center text-muted py-4">No smartwatches found in inventory.</td></tr>`;
      return;
    }
    products.forEach(p => {
      adminTable.innerHTML += `
        <tr>
          <td><img src="${p.image}" style="width: 45px; height: 45px; object-fit: contain; border-radius: 6px;" alt="${p.name}"></td>
          <td><strong>${p.name}</strong><br><small class="text-muted">${p.id}</small></td>
          <td><span class="badge bg-light text-dark border">${p.category}</span></td>
          <td>₹${p.price.toLocaleString()}</td>
          <td><span class="badge bg-success">In Stock (${p.stock || 45})</span></td>
          <td class="text-nowrap">
            <button class="btn btn-sm btn-primary py-1 px-3 rounded-pill me-1 text-nowrap" onclick="editProduct('${p.id}')"><i class="bi bi-pencil-fill me-1"></i>Edit</button>
            <button class="btn btn-sm btn-danger py-1 px-3 rounded-pill text-nowrap" onclick="deleteProduct('${p.id}')"><i class="bi bi-trash-fill me-1"></i>Delete</button>
          </td>
        </tr>
      `;
    });
  }

  window.deleteProduct = function(id) {
    if (confirm('Are you sure you want to delete this smartwatch SKU?')) {
      let products = getProducts().filter(p => p.id !== id);
      localStorage.setItem('pulseon_products', JSON.stringify(products));
      showToast('Product deleted from inventory');
      renderAdminTable();
    }
  };

  window.editProduct = function(id) {
    const products = getProducts();
    const prod = products.find(p => p.id === id);
    if (!prod) return;
    const newPrice = prompt(`Update price for ${prod.name} (Current: ₹${prod.price.toLocaleString()}):`, prod.price);
    if (newPrice !== null && !isNaN(newPrice) && newPrice > 0) {
      prod.price = parseInt(newPrice, 10);
      localStorage.setItem('pulseon_products', JSON.stringify(products));
      showToast(`Updated price for ${prod.name} to ₹${prod.price.toLocaleString()}`);
      renderAdminTable();
    }
  };

  const addForm = document.getElementById('add-product-form');
  if (addForm) {
    addForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('new-prod-name').value.trim();
      const category = document.getElementById('new-prod-category').value;
      const price = parseInt(document.getElementById('new-prod-price').value, 10);
      const stock = parseInt(document.getElementById('new-prod-stock').value, 10) || 50;

      if (!name || isNaN(price)) return;

      const newProd = {
        id: 'pw-custom-' + Date.now().toString().slice(-4),
        name: name,
        tagline: 'Custom SKU',
        category: category,
        price: price,
        originalPrice: Math.round(price * 1.15),
        rating: 5.0,
        reviews: 1,
        image: 'assets/images/6.jpg',
        stock: stock,
        specs: {
          display: '1.43" AMOLED 1000 nits',
          battery: '7 Days Heavy Use',
          gps: 'Dual-Frequency L1+L5 GPS',
          heartRate: 'Optical Bio-Sensor Array',
          spO2: 'Continuous 24/7 Monitoring',
          waterResistance: '50m (5 ATM) Waterproof',
          material: 'Titanium Case + Sapphire Glass'
        }
      };

      const products = getProducts();
      products.unshift(newProd);
      localStorage.setItem('pulseon_products', JSON.stringify(products));
      showToast(`${name} added to inventory!`);

      addForm.reset();
      const modalEl = document.getElementById('addProductModal');
      if (modalEl && window.bootstrap) {
        const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
        modal.hide();
      }
      renderAdminTable();
    });
  }

  renderAdminTable();
}

/* 15. Contact Form Submission */
function initContactForm() {
  const form = document.getElementById('pulseon-contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Message sent successfully. Our support team will contact you.');
      form.reset();
    });
  }
}

/* Toast System */
function showToast(message) {
  let toast = document.getElementById('pulseon-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'pulseon-toast';
    toast.className = 'toast-custom';
    toast.innerHTML = `<i class="bi bi-check-circle-fill"></i> <span id="toast-text"></span>`;
    document.body.appendChild(toast);
  }

  document.getElementById('toast-text').innerText = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

/* 16. Dynamic Brand Logo & Active Telemetry System */
function initBrandLogo() {
  const brandElements = document.querySelectorAll('.navbar-brand-text, .loader-brand, .footer-brand');
  const svgLogoHTML = `
    <span class="brand-logo-mark" aria-hidden="true" title="PULSEON Tech Core">
      <svg class="brand-logo-svg" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="34" height="34" rx="10" stroke="url(#pulseon-logo-grad)" stroke-width="2.5" class="logo-bezel" />
        <path d="M8 20H13L16 13L19.5 27L23 16L25.5 20H32" stroke="url(#pulseon-logo-grad)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="logo-pulse-path"/>
        <circle cx="20" cy="20" r="2.5" fill="#60A5FA" class="logo-core-dot"/>
        <defs>
          <linearGradient id="pulseon-logo-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#2563EB"/>
            <stop offset="50%" stop-color="#3B82F6"/>
            <stop offset="100%" stop-color="#60A5FA"/>
          </linearGradient>
        </defs>
      </svg>
    </span>`;

  brandElements.forEach(el => {
    if (!el.querySelector('.brand-logo-mark')) {
      el.insertAdjacentHTML('afterbegin', svgLogoHTML);
    }
    const onSpan = el.querySelector('span:not(.brand-logo-mark)');
    if (onSpan && !onSpan.classList.contains('brand-on-text')) {
      onSpan.classList.add('brand-on-text');
      if (!onSpan.querySelector('.brand-status-dot')) {
        onSpan.insertAdjacentHTML('beforeend', '<span class="brand-status-dot" title="Active Telemetry"></span>');
      }
    }
  });
}

