/**
 * VYRA BY VIPUL - Web Application Architecture
 * Built by 9-Year Senior Software Engineer for Teenagers & College Students
 * Clean state management, modular components, persistent cart & real-time radar (INR ₹)
 */

// =================================================================
// 1. PRODUCT CATALOG DATABASE (Prices in Indian Rupees ₹)
// =================================================================
const PRODUCTS = [
  {
    id: 1,
    title: 'Acid-Wash "Overdrive" Boxy Hoodie',
    category: 'hoodies',
    price: 1499,
    origPrice: 3499,
    discount: 57,
    gsm: '380 GSM Heavy Fleece',
    rating: 4.9,
    reviews: 428,
    badge: 'STEAL DEAL',
    badgeType: 'steal',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-dense 380 GSM French Terry fleece engineered by Vipul. Boxy drop-shoulder cut, double-lined hood, and anti-pill fabric that never shrinks in the washer.',
    specs: ['380 GSM 100% Cotton French Terry', 'Drop shoulder oversized streetwear fit', 'Pre-shrunk double washed', 'Thermal kangaroo pocket'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 2,
    title: 'Cyber-Tokyo 280 GSM Graphic Tee',
    category: 'tees',
    price: 799,
    origPrice: 1799,
    discount: 55,
    gsm: '280 GSM Combed Cotton',
    rating: 4.8,
    reviews: 812,
    badge: 'BESTSELLER',
    badgeType: 'trending',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    description: 'Thick, non-see-through Indian combed cotton tee with high-definition screen print that will not crack or peel after 50+ college laundry cycles.',
    specs: ['280 GSM Heavyweight Cotton', 'High-density screenprint', 'Ribbed anti-sag collar', 'Breathable relaxed fit'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3,
    title: 'Tactical Multi-Pocket Parachute Cargoes',
    category: 'cargoes',
    price: 1599,
    origPrice: 3199,
    discount: 50,
    gsm: 'DWR Ripstop Nylon',
    rating: 4.9,
    reviews: 310,
    badge: 'TOP QUALITY',
    badgeType: 'quality',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80',
    description: 'Water-resistant ripstop parachute pants featuring 8 functional utility pockets, adjustable ankle bungee toggles, and reinforced knee articulation.',
    specs: ['Water-repellent ripstop weave', '8 Heavy-duty zip/flap pockets', 'Bungee ankle adjusters', 'Skate & park tested durability'],
    sizes: ['28', '30', '32', '34', '36']
  },
  {
    id: 4,
    title: 'Vintage Faded Selvedge Wide-Leg Denim',
    category: 'cargoes',
    price: 1799,
    origPrice: 3999,
    discount: 55,
    gsm: '13.5 oz Raw Denim',
    rating: 4.9,
    reviews: 512,
    badge: 'MUST HAVE',
    badgeType: 'trending',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80',
    description: 'Substantial 13.5 oz authentic cotton denim with authentic whiskers, relaxed 90s skater drape, and reinforced stress rivets.',
    specs: ['100% Cotton 13.5 oz denim', 'Custom antique copper rivets', 'Wide skater leg silhouette', 'Double-stitched inseams'],
    sizes: ['28', '30', '32', '34', '36']
  },
  {
    id: 5,
    title: 'Retro Formula Varsity Bomber Jacket',
    category: 'jackets',
    price: 2499,
    origPrice: 5499,
    discount: 55,
    gsm: 'Wool Blend + Vegan Leather',
    rating: 5.0,
    reviews: 198,
    badge: 'LIMITED DROP',
    badgeType: 'steal',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80',
    description: 'Quilted interior lining keeps you warm down to chilly winters. Features custom Chenille embroidery patches and premium vegan leather sleeves.',
    specs: ['Thermal quilted interior diamond quilt', 'Chenille textured patches', 'Heavy brass snap buttons', 'Custom striped ribbed cuffs'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 6,
    title: 'Minimalist "Aura" Heavy Knit Crewneck',
    category: 'hoodies',
    price: 1299,
    origPrice: 2699,
    discount: 52,
    gsm: '320 GSM Cotton Knit',
    rating: 4.7,
    reviews: 260,
    badge: 'CLEAN FIT',
    badgeType: 'quality',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80',
    description: 'The ultimate clean staple sweater. Seamless tubular body construction with zero side itch and ultra-soft brushed interior.',
    specs: ['320 GSM Heavy loopback cotton', 'No-itch tagless collar', 'Pre-washed anti-shrink guarantee', 'Reinforced neck binding'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 7,
    title: 'Distressed "No Signal" Vintage Tee',
    category: 'tees',
    price: 849,
    origPrice: 1699,
    discount: 50,
    gsm: '260 GSM Carbon-Wash',
    rating: 4.8,
    reviews: 640,
    badge: 'TRENDING',
    badgeType: 'trending',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    description: 'Carbon mineral washed for an authentic buttery soft vintage hand-feel. Heavy collar and dropped shoulders for that ideal effortless boxy look.',
    specs: ['260 GSM single jersey cotton', 'Enzyme washed for butter softness', 'Thick 1-inch neck ribbing', 'Drop shoulder profile'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 8,
    title: 'Reflective Y2K Tech Crossbody Sling',
    category: 'accessories',
    price: 699,
    origPrice: 1499,
    discount: 53,
    gsm: '600D Cordura Nylon',
    rating: 4.8,
    reviews: 420,
    badge: 'ESSENTIAL',
    badgeType: 'quality',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    description: 'Weatherproof 600D ballistic nylon bag. Holds phone, earbuds, charger, and wallet. Features 3M reflective trims and magnetic Fidlock buckle.',
    specs: ['600D Weather-resistant Cordura', 'Quick-release magnetic buckle', 'Secret anti-theft back pocket', '3M night-reflective piping'],
    sizes: ['ONE SIZE']
  },
  {
    id: 9,
    title: 'Matte Black Water-Repellent Puffer',
    category: 'jackets',
    price: 2799,
    origPrice: 6299,
    discount: 56,
    gsm: 'Eco-Down 700 Fill Power',
    rating: 4.9,
    reviews: 388,
    badge: 'SUPER STEAL',
    badgeType: 'steal',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
    description: 'Cruelty-free 700 fill-power recycled insulation. Cloud-like warmth without bulkiness. Matte water-resistant shell withstands rain and winter chills.',
    specs: ['700 Fill-power eco down', 'Matte waterproof exterior finish', 'Fleece-lined handwarmer pockets', 'Concealed storm hood'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 10,
    title: 'Vintage Washed Low-Profile "VYRA" Cap',
    category: 'accessories',
    price: 549,
    origPrice: 1199,
    discount: 54,
    gsm: '100% Chino Twill',
    rating: 4.7,
    reviews: 580,
    badge: 'STEAL',
    badgeType: 'steal',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
    description: 'Classic dad-hat profile in heavy pigment-dyed chino cotton twill with antique brass buckle adjuster. The everyday fit complement.',
    specs: ['Pigment-dyed vintage wash', 'Unstructured 6-panel design', 'Custom metal tri-glide buckle', 'Embroidered ventilation eyelets'],
    sizes: ['ONE SIZE']
  }
];

// Helper to format Indian Currency (INR ₹)
function formatINR(val) {
  return `₹${Math.round(val).toLocaleString('en-IN')}`;
}

// =================================================================
// 2. COUPON DATABASE
// =================================================================
const COUPONS = {
  'VYRATEEN35': { discountPercent: 35, type: 'percent', label: '35% Teen Welcome Drop', minOrder: 0 },
  'FREEDELIVERY': { freeShipping: true, type: 'shipping', label: '100% Free Express Delivery', minOrder: 0 },
  'VYRA500': { discountFlat: 500, type: 'flat', label: '₹500 Off Multi-Fit Bonus', minOrder: 1999 }
};

// =================================================================
// 3. TRACKING DATABASE (Live Simulation with Indian Couriers)
// =================================================================
const TRACKING_DATA = {
  '#VV-89240': {
    orderId: '#VV-89240',
    date: 'Today, 11:20 AM',
    eta: 'Arriving Today by 5:30 PM',
    status: 'Out For Delivery in Delhi NCR',
    step: 4, // 0 to 4
    carrier: 'BlueDart Air Express (Rider: Rahul S.)',
    address: 'Room 204, North Campus Boys Hostel, New Delhi',
    items: [
      { title: 'Acid-Wash "Overdrive" Boxy Hoodie', size: 'L', qty: 1, price: 1499 },
      { title: 'Cyber-Tokyo 280 GSM Graphic Tee', size: 'L', qty: 1, price: 799 }
    ],
    total: '₹2,298'
  },
  '#VV-72104': {
    orderId: '#VV-72104',
    date: 'Yesterday, 3:45 PM',
    eta: 'Estimated Monday, Nov 17',
    status: 'Quality Verification Passed',
    step: 1,
    carrier: 'VYRA QC Lab, Surat (Inspector #09)',
    address: 'Flat 402, Green Glen Heights, Koramangala, Bengaluru',
    items: [
      { title: 'Tactical Parachute Cargoes', size: '32', qty: 1, price: 1599 }
    ],
    total: '₹1,599'
  },
  '#VV-99411': {
    orderId: '#VV-99411',
    date: 'Nov 14, 2026',
    eta: 'Estimated Tomorrow, Nov 16',
    status: 'In Transit to Regional Hub (Mumbai Airport)',
    step: 3,
    carrier: 'Delhivery Priority Cargo',
    address: 'Hostel 7, IIT Bombay Campus, Powai, Mumbai',
    items: [
      { title: 'Matte Black Water-Repellent Puffer', size: 'L', qty: 1, price: 2799 }
    ],
    total: '₹2,799'
  }
};

// =================================================================
// 4. REACTIVE APPLICATION STATE
// =================================================================
class AppState {
  constructor() {
    this.currentView = 'home';
    this.cart = this.loadCart();
    this.activeCategory = 'all';
    this.searchQuery = '';
    this.sortBy = 'featured';
    this.appliedCoupon = null;
    this.wishlist = new Set([1, 4]); // Pre-filled with saved favorites
    this.activeTrackingOrder = TRACKING_DATA['#VV-89240'];
  }

  loadCart() {
    try {
      const saved = localStorage.getItem('vyra_cart') || localStorage.getItem('dripvault_cart');
      return saved ? JSON.parse(saved) : [
        {
          id: 1,
          title: 'Acid-Wash "Overdrive" Boxy Hoodie',
          price: 1499,
          size: 'L',
          image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=400&q=80',
          qty: 1
        }
      ];
    } catch (e) {
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem('vyra_cart', JSON.stringify(this.cart));
    } catch (e) {
      console.warn('Could not save cart to localStorage', e);
    }
  }

  addToCart(product, size = null) {
    const chosenSize = size || product.sizes[0];
    const existingIndex = this.cart.findIndex(
      item => item.id === product.id && item.size === chosenSize
    );

    if (existingIndex > -1) {
      this.cart[existingIndex].qty += 1;
    } else {
      this.cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        size: chosenSize,
        image: product.image,
        qty: 1
      });
    }

    this.saveCart();
    renderCart();
    showToast(`Added "${product.title}" (${chosenSize}) to bag!`, 'shopping-bag');
  }

  updateQty(index, delta) {
    if (this.cart[index]) {
      this.cart[index].qty += delta;
      if (this.cart[index].qty <= 0) {
        this.cart.splice(index, 1);
        showToast('Item removed from bag', 'trash');
      }
      this.saveCart();
      renderCart();
    }
  }

  removeItem(index) {
    if (this.cart[index]) {
      this.cart.splice(index, 1);
      this.saveCart();
      renderCart();
      showToast('Item removed from bag', 'trash');
    }
  }

  toggleWishlist(productId) {
    if (this.wishlist.has(productId)) {
      this.wishlist.delete(productId);
      showToast('Removed from saved fits', 'heart-off');
    } else {
      this.wishlist.add(productId);
      showToast('Saved to your Wishlist!', 'heart');
    }
    renderProducts();
    updateWishlistCount();
  }
}

const state = new AppState();

// =================================================================
// 5. DOM ELEMENTS & LISTENERS
// =================================================================
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  }

  initNavigation();
  initOfferPopup();
  initSearchAndFilter();
  initCartDrawer();
  initFlashTimer();
  initTracker();
  initProfile();
  
  // Render initial product grids
  renderProducts();
  renderCart();
  renderStealsUnder25();
  updateCategoryCounts();
  updateWishlistCount();

  // Show Offer Popup automatically on first open (with slick 650ms delay)
  setTimeout(() => {
    openPopup();
  }, 650);
});

// =================================================================
// 6. POP-UP MODAL (LATEST OFFERS ON OPEN)
// =================================================================
function initOfferPopup() {
  const modal = document.getElementById('offersPopupModal');
  const closeBtn = document.getElementById('closeOffersPopup');
  const skipBtn = document.getElementById('popupSkipBtn');
  const copyBtn = document.getElementById('popupCopyBtn');
  const claimBtn = document.getElementById('popupClaimAndShopBtn');
  const openOffersBtn = document.getElementById('openOffersBtn');
  const heroClaimBtn = document.getElementById('heroClaimOfferBtn');

  const closeModal = () => {
    modal.classList.remove('active');
  };

  closeBtn.addEventListener('click', closeModal);
  skipBtn.addEventListener('click', closeModal);

  // Close when clicking outside card
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Re-open triggers
  if (openOffersBtn) openOffersBtn.addEventListener('click', openPopup);
  if (heroClaimBtn) heroClaimBtn.addEventListener('click', openPopup);

  // Copy Promo Code Button
  copyBtn.addEventListener('click', () => {
    const code = document.getElementById('popupPromoCode').innerText;
    navigator.clipboard.writeText(code).then(() => {
      copyBtn.innerHTML = `<i data-lucide="check"></i> Copied!`;
      lucide.createIcons();
      showToast(`Promo Code ${code} copied to clipboard!`, 'check-circle');
      setTimeout(() => {
        copyBtn.innerHTML = `<i data-lucide="copy"></i> Copy Code`;
        lucide.createIcons();
      }, 2000);
    }).catch(() => {
      showToast(`Use code: ${code}`, 'tag');
    });
  });

  // Claim & Shop Now Button
  claimBtn.addEventListener('click', () => {
    state.appliedCoupon = COUPONS['VYRATEEN35'];
    closeModal();
    showToast('Code VYRATEEN35 applied! 35% discount active.', 'sparkles');
    renderCart();
    
    // Smooth scroll down to catalog fits
    const catalogEl = document.getElementById('catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

function openPopup() {
  const modal = document.getElementById('offersPopupModal');
  if (modal) {
    modal.classList.add('active');
    if (window.lucide) lucide.createIcons();
  }
}

// =================================================================
// 7. VIEW NAVIGATION (Home, Offers, Tracker, Profile)
// =================================================================
function initNavigation() {
  const navButtons = document.querySelectorAll('[data-view]');
  const views = document.querySelectorAll('.view');

  function switchView(viewName) {
    state.currentView = viewName;

    views.forEach(v => {
      v.classList.remove('active');
      if (v.id === `${viewName}View`) {
        v.classList.add('active');
      }
    });

    document.querySelectorAll('.desktop-nav .nav-item').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === viewName);
    });

    document.querySelectorAll('.mobile-bottom-nav .mobile-nav-item').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === viewName);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.lucide) lucide.createIcons();
  }

  navButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetView = btn.dataset.view;
      if (targetView) switchView(targetView);
    });
  });

  document.getElementById('navLogo').addEventListener('click', (e) => {
    e.preventDefault();
    switchView('home');
  });

  const exploreFitsBtn = document.getElementById('exploreFitsBtn');
  if (exploreFitsBtn) {
    exploreFitsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      switchView('home');
      const catalogEl = document.getElementById('catalog');
      if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

// =================================================================
// 8. SEARCH, FILTER & SORT ENGINE
// =================================================================
function initSearchAndFilter() {
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const sortSelect = document.getElementById('sortSelect');
  const categoryPills = document.querySelectorAll('.cat-pill');
  const resetSearchBtn = document.getElementById('resetSearchBtn');

  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    clearSearchBtn.style.display = state.searchQuery ? 'block' : 'none';
    renderProducts();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    state.searchQuery = '';
    clearSearchBtn.style.display = 'none';
    renderProducts();
    searchInput.focus();
  });

  if (resetSearchBtn) {
    resetSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      state.searchQuery = '';
      state.activeCategory = 'all';
      categoryPills.forEach(p => p.classList.toggle('active', p.dataset.category === 'all'));
      renderProducts();
    });
  }

  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.activeCategory = pill.dataset.category;
      renderProducts();
    });
  });

  sortSelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderProducts();
  });
}

function updateCategoryCounts() {
  const countAll = document.getElementById('countAll');
  if (countAll) countAll.textContent = PRODUCTS.length;
}

function updateWishlistCount() {
  const wishlistCount = document.getElementById('wishlistCount');
  if (wishlistCount) wishlistCount.textContent = state.wishlist.size;
}

// =================================================================
// 9. PRODUCT RENDERING & CARD GENERATION (INR ₹)
// =================================================================
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const emptyState = document.getElementById('noResultsState');
  if (!grid) return;

  let filtered = PRODUCTS.filter(p => {
    const matchesCategory = state.activeCategory === 'all' || p.category === state.activeCategory;
    const matchesSearch = !state.searchQuery || 
      p.title.toLowerCase().includes(state.searchQuery) ||
      p.specs.some(s => s.toLowerCase().includes(state.searchQuery)) ||
      p.gsm.toLowerCase().includes(state.searchQuery);
    return matchesCategory && matchesSearch;
  });

  if (state.sortBy === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === 'discount') {
    filtered.sort((a, b) => b.discount - a.discount);
  } else if (state.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  if (filtered.length === 0) {
    grid.innerHTML = '';
    emptyState.style.display = 'block';
    return;
  }

  emptyState.style.display = 'none';

  grid.innerHTML = filtered.map(product => {
    const isWishlisted = state.wishlist.has(product.id);
    const sizeButtons = product.sizes.map((sz, idx) => `
      <button class="size-btn ${idx === 0 ? 'active' : ''}" data-size="${sz}">${sz}</button>
    `).join('');

    return `
      <article class="product-card" data-id="${product.id}">
        <div class="product-thumb-box">
          <img src="${product.image}" alt="${product.title}" loading="lazy">
          
          <div class="card-badges">
            <span class="badge-tag ${product.badgeType}">${product.badge}</span>
            <span class="badge-tag quality">-${product.discount}% OFF</span>
          </div>

          <button class="card-wishlist-btn ${isWishlisted ? 'active' : ''}" title="Save fit" data-wishlist="${product.id}">
            <i data-lucide="heart"></i>
          </button>

          <button class="quick-view-trigger" data-quickview="${product.id}">
            <i data-lucide="eye"></i> Quick View
          </button>
        </div>

        <div class="product-info">
          <div class="product-meta-row">
            <span class="product-gsm">${product.gsm}</span>
            <span class="product-rating">
              <i data-lucide="star"></i> ${product.rating} (${product.reviews})
            </span>
          </div>

          <h3 class="product-title">${product.title}</h3>
          <p class="product-desc">${product.description}</p>

          <div class="size-selector-compact" data-card-sizes="${product.id}">
            ${sizeButtons}
          </div>

          <div class="product-card-bottom">
            <div class="card-pricing">
              <span class="card-curr-price">${formatINR(product.price)}</span>
              <span class="card-orig-price">${formatINR(product.origPrice)}</span>
            </div>

            <button class="add-cart-action-btn" data-add-cart="${product.id}">
              <i data-lucide="shopping-bag"></i> Add to Bag
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
  attachCardEvents();
}

function attachCardEvents() {
  document.querySelectorAll('.size-selector-compact').forEach(selector => {
    selector.querySelectorAll('.size-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        selector.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  });

  document.querySelectorAll('[data-add-cart]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = btn.closest('.product-card');
      const productId = parseInt(btn.dataset.addCart, 10);
      const product = PRODUCTS.find(p => p.id === productId);
      const activeSizeBtn = card.querySelector('.size-btn.active');
      const chosenSize = activeSizeBtn ? activeSizeBtn.dataset.size : product.sizes[0];

      if (product) {
        state.addToCart(product, chosenSize);
      }
    });
  });

  document.querySelectorAll('[data-wishlist]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const productId = parseInt(btn.dataset.wishlist, 10);
      state.toggleWishlist(productId);
    });
  });

  document.querySelectorAll('[data-quickview]').forEach(btn => {
    btn.addEventListener('click', () => {
      const productId = parseInt(btn.dataset.quickview, 10);
      openQuickView(productId);
    });
  });

  const heroBtn = document.querySelector('.quick-add-hero');
  if (heroBtn) {
    heroBtn.onclick = () => {
      const p = PRODUCTS.find(item => item.id === 1);
      if (p) state.addToCart(p, 'L');
    };
  }
}

// =================================================================
// 10. QUICK VIEW MODAL (INR ₹)
// =================================================================
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quickViewModal');
  const container = document.getElementById('quickViewContent');

  container.innerHTML = `
    <div class="qv-img-box">
      <img src="${product.image}" alt="${product.title}">
    </div>
    <div class="qv-details">
      <span class="neon-chip">${product.gsm}</span>
      <h2 class="qv-title">${product.title}</h2>
      
      <div class="price-row">
        <span class="curr-price">${formatINR(product.price)}</span>
        <span class="orig-price">${formatINR(product.origPrice)}</span>
        <span class="savings">Save ${formatINR(product.origPrice - product.price)} (-${product.discount}%)</span>
      </div>

      <p class="product-desc" style="-webkit-line-clamp: unset;">${product.description}</p>

      <ul class="qv-specs-list">
        ${product.specs.map(s => `<li><i data-lucide="check-circle-2"></i> ${s}</li>`).join('')}
      </ul>

      <div style="margin: 1.25rem 0;">
        <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted); display: block; margin-bottom: 0.5rem;">Select Size:</span>
        <div class="size-selector-compact" id="qvSizeSelector">
          ${product.sizes.map((sz, i) => `<button class="size-btn ${i === 0 ? 'active' : ''}" data-size="${sz}">${sz}</button>`).join('')}
        </div>
      </div>

      <button class="btn btn-primary btn-block btn-lg" id="qvAddToCartBtn">
        <i data-lucide="shopping-bag"></i> Add to Bag (${formatINR(product.price)})
      </button>
    </div>
  `;

  modal.style.display = 'flex';
  modal.classList.add('active');
  if (window.lucide) lucide.createIcons();

  const qvSizes = container.querySelectorAll('#qvSizeSelector .size-btn');
  qvSizes.forEach(b => {
    b.addEventListener('click', () => {
      qvSizes.forEach(x => x.classList.remove('active'));
      b.classList.add('active');
    });
  });

  document.getElementById('qvAddToCartBtn').addEventListener('click', () => {
    const activeSize = container.querySelector('#qvSizeSelector .size-btn.active');
    const sz = activeSize ? activeSize.dataset.size : product.sizes[0];
    state.addToCart(product, sz);
    modal.classList.remove('active');
    setTimeout(() => { modal.style.display = 'none'; }, 200);
  });

  const closeBtn = document.getElementById('closeQuickViewBtn');
  closeBtn.onclick = () => {
    modal.classList.remove('active');
    setTimeout(() => { modal.style.display = 'none'; }, 200);
  };

  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      setTimeout(() => { modal.style.display = 'none'; }, 200);
    }
  };
}

// =================================================================
// 11. CART DRAWER & CHECKOUT ENGINE (INR ₹)
// =================================================================
function initCartDrawer() {
  const cartOverlay = document.getElementById('cartDrawerOverlay');
  const openCartBtn = document.getElementById('openCartBtn');
  const openMobileCartBtn = document.getElementById('openMobileCartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const startShoppingBtn = document.getElementById('startShoppingBtn');
  const applyCouponBtn = document.getElementById('applyCouponBtn');
  const cartCouponInput = document.getElementById('cartCouponInput');
  const removeCouponBtn = document.getElementById('removeCouponBtn');
  const checkoutBtn = document.getElementById('checkoutBtn');

  const openDrawer = () => {
    cartOverlay.classList.add('active');
    renderCart();
  };

  const closeDrawer = () => {
    cartOverlay.classList.remove('active');
  };

  if (openCartBtn) openCartBtn.addEventListener('click', openDrawer);
  if (openMobileCartBtn) openMobileCartBtn.addEventListener('click', openDrawer);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeDrawer);
  if (startShoppingBtn) startShoppingBtn.addEventListener('click', closeDrawer);

  cartOverlay.addEventListener('click', (e) => {
    if (e.target === cartOverlay) closeDrawer();
  });

  applyCouponBtn.addEventListener('click', () => {
    const code = cartCouponInput.value.trim().toUpperCase();
    if (!code) return;

    if (COUPONS[code]) {
      state.appliedCoupon = COUPONS[code];
      cartCouponInput.value = '';
      showToast(`Coupon applied: ${COUPONS[code].label}!`, 'check-circle');
      renderCart();
    } else {
      showToast('Invalid promo code! Try VYRATEEN35 or FREEDELIVERY', 'alert-circle');
    }
  });

  removeCouponBtn.addEventListener('click', () => {
    state.appliedCoupon = null;
    showToast('Coupon removed', 'x');
    renderCart();
  });

  document.querySelectorAll('.copy-code-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.dataset.code;
      navigator.clipboard.writeText(code).then(() => {
        showToast(`Copied code "${code}"! Ready to use at checkout.`, 'copy');
      });
    });
  });

  checkoutBtn.addEventListener('click', () => {
    if (state.cart.length === 0) {
      showToast('Your bag is empty!', 'alert-triangle');
      return;
    }

    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const newOrderId = `#VV-${randomNum}`;
    const subtotal = state.cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

    TRACKING_DATA[newOrderId] = {
      orderId: newOrderId,
      date: 'Just now',
      eta: 'Estimated in 2-3 business days across India',
      status: 'Order Confirmed & UPI / Card Verified',
      step: 0,
      carrier: 'BlueDart / Delhivery Priority Air Cargo',
      address: 'Room 204, North Campus Boys Hostel, New Delhi',
      items: [...state.cart],
      total: formatINR(subtotal)
    };

    state.activeTrackingOrder = TRACKING_DATA[newOrderId];

    state.cart = [];
    state.saveCart();
    closeDrawer();

    showToast(`Order Placed! Tracking ID: ${newOrderId}`, 'package-check');

    setTimeout(() => {
      const trackerNavBtn = document.querySelector('[data-view="tracker"]');
      if (trackerNavBtn) trackerNavBtn.click();

      const trackingInput = document.getElementById('trackingCodeInput');
      if (trackingInput) trackingInput.value = newOrderId;
      renderTrackerResult(state.activeTrackingOrder);
    }, 400);
  });
}

function renderCart() {
  const cartItemsList = document.getElementById('cartItemsList');
  const emptyCartView = document.getElementById('emptyCartView');
  const cartFooter = document.getElementById('cartFooter');
  const cartCountEl = document.getElementById('cartCount');
  const mobileCartCountEl = document.getElementById('mobileCartCount');
  const cartDrawerCountEl = document.getElementById('cartDrawerCount');
  const cartTotalPreview = document.getElementById('cartTotalPreview');
  const subtotalDisplay = document.getElementById('subtotalDisplay');
  const discountDisplay = document.getElementById('discountDisplay');
  const discountLine = document.getElementById('discountLine');
  const shippingDisplay = document.getElementById('shippingDisplay');
  const finalTotalDisplay = document.getElementById('finalTotalDisplay');
  const shippingProgressFill = document.getElementById('shippingProgressFill');
  const shippingThresholdMsg = document.getElementById('shippingThresholdMsg');
  const couponAppliedBadge = document.getElementById('couponAppliedBadge');
  const appliedCodeName = document.getElementById('appliedCodeName');

  const totalItems = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (cartCountEl) cartCountEl.textContent = totalItems;
  if (mobileCartCountEl) mobileCartCountEl.textContent = totalItems;
  if (cartDrawerCountEl) cartDrawerCountEl.textContent = totalItems;
  if (cartTotalPreview) cartTotalPreview.textContent = formatINR(subtotal);

  // Free shipping threshold (₹999)
  const FREE_SHIPPING_THRESHOLD = 999;
  let shippingCost = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 99;

  let discountAmount = 0;
  if (state.appliedCoupon) {
    if (state.appliedCoupon.type === 'percent') {
      discountAmount = (subtotal * state.appliedCoupon.discountPercent) / 100;
    } else if (state.appliedCoupon.type === 'flat') {
      discountAmount = Math.min(subtotal, state.appliedCoupon.discountFlat);
    } else if (state.appliedCoupon.type === 'shipping') {
      shippingCost = 0;
    }

    if (couponAppliedBadge) {
      couponAppliedBadge.style.display = 'flex';
      appliedCodeName.textContent = state.appliedCoupon.label;
    }
  } else {
    if (couponAppliedBadge) couponAppliedBadge.style.display = 'none';
  }

  if (shippingProgressFill && shippingThresholdMsg) {
    if (subtotal >= FREE_SHIPPING_THRESHOLD) {
      shippingProgressFill.style.width = '100%';
      shippingThresholdMsg.innerHTML = `🎉 <strong>Congrats!</strong> You unlocked FREE Express Delivery!`;
      shippingCost = 0;
    } else {
      const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
      const percent = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
      shippingProgressFill.style.width = `${percent}%`;
      shippingThresholdMsg.innerHTML = `Add <strong>₹${remaining}</strong> more for <strong>FREE Express Shipping!</strong>`;
    }
  }

  const finalTotal = Math.max(0, subtotal - discountAmount + shippingCost);

  if (subtotalDisplay) subtotalDisplay.textContent = formatINR(subtotal);
  if (shippingDisplay) shippingDisplay.textContent = shippingCost === 0 ? 'FREE' : formatINR(shippingCost);
  if (discountDisplay) discountDisplay.textContent = `-${formatINR(discountAmount)}`;
  if (discountLine) discountLine.style.display = discountAmount > 0 ? 'flex' : 'none';
  if (finalTotalDisplay) finalTotalDisplay.textContent = formatINR(finalTotal);

  if (state.cart.length === 0) {
    cartItemsList.style.display = 'none';
    cartFooter.style.display = 'none';
    emptyCartView.style.display = 'flex';
    return;
  }

  cartItemsList.style.display = 'flex';
  cartFooter.style.display = 'block';
  emptyCartView.style.display = 'none';

  cartItemsList.innerHTML = state.cart.map((item, index) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.title}" class="cart-item-thumb">
      <div class="cart-item-info">
        <h4 class="ci-title">${item.title}</h4>
        <span class="ci-size">Size: <strong>${item.size}</strong></span>
        <div class="ci-bottom">
          <span class="ci-price">${formatINR(item.price * item.qty)}</span>
          <div class="qty-control">
            <button class="qty-btn" data-qty-dec="${index}">-</button>
            <span class="qty-number">${item.qty}</span>
            <button class="qty-btn" data-qty-inc="${index}">+</button>
          </div>
          <button class="cart-item-remove" data-remove="${index}" title="Remove item">
            <i data-lucide="trash-2"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();

  cartItemsList.querySelectorAll('[data-qty-dec]').forEach(btn => {
    btn.onclick = () => state.updateQty(parseInt(btn.dataset.qtyDec, 10), -1);
  });
  cartItemsList.querySelectorAll('[data-qty-inc]').forEach(btn => {
    btn.onclick = () => state.updateQty(parseInt(btn.dataset.qtyInc, 10), 1);
  });
  cartItemsList.querySelectorAll('[data-remove]').forEach(btn => {
    btn.onclick = () => state.removeItem(parseInt(btn.dataset.remove, 10));
  });
}

// =================================================================
// 12. LIVE ORDER TRACKER VIEW (Indian Cities & Hubs)
// =================================================================
function initTracker() {
  const form = document.getElementById('trackerForm');
  const input = document.getElementById('trackingCodeInput');
  const sampleButtons = document.querySelectorAll('.sample-id-btn');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const code = input.value.trim().toUpperCase();
    const found = TRACKING_DATA[code];

    if (found) {
      state.activeTrackingOrder = found;
      renderTrackerResult(found);
      showToast(`Tracking details loaded for ${code}`, 'check-circle');
    } else {
      showToast(`Order ${code} not found. Try sample IDs below!`, 'alert-circle');
    }
  });

  sampleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      input.value = id;
      state.activeTrackingOrder = TRACKING_DATA[id];
      renderTrackerResult(TRACKING_DATA[id]);
    });
  });

  renderTrackerResult(state.activeTrackingOrder);
}

function renderTrackerResult(order) {
  const resultBox = document.getElementById('trackerResultBox');
  if (!resultBox || !order) return;

  const steps = [
    { label: 'Order Confirmed', time: '11:20 AM' },
    { label: 'Quality Verified', time: '12:05 PM' },
    { label: 'Packed with Stickers', time: '1:15 PM' },
    { label: 'BlueDart Dispatched', time: '2:30 PM' },
    { label: 'Out for Delivery', time: 'ETA 5:30 PM' }
  ];

  const progressPercent = (order.step / (steps.length - 1)) * 100;

  const stepsHtml = steps.map((s, idx) => {
    let statusClass = '';
    if (idx < order.step) statusClass = 'completed';
    else if (idx === order.step) statusClass = 'active';

    const icon = idx < order.step ? 'check' : (idx === order.step ? 'truck' : 'clock');

    return `
      <div class="step-node ${statusClass}">
        <div class="step-circle">
          <i data-lucide="${icon}"></i>
        </div>
        <span class="step-title">${s.label}</span>
        <span class="step-time">${s.time}</span>
      </div>
    `;
  }).join('');

  const itemsHtml = order.items.map(item => `
    <div style="display: flex; justify-content: space-between; font-size: 0.85rem; padding: 0.4rem 0; border-bottom: 1px solid rgba(255,255,255,0.05);">
      <span>${item.qty}x <strong>${item.title}</strong> (Size ${item.size})</span>
      <span style="font-family: var(--font-mono); color: var(--accent-lime);">${formatINR(item.price)}</span>
    </div>
  `).join('');

  resultBox.innerHTML = `
    <div class="tracker-status-header">
      <div>
        <span class="order-badge-pill">${order.orderId}</span>
        <h3 style="font-size: 1.35rem; font-weight: 800; margin-top: 0.5rem; color: #fff;">${order.status}</h3>
      </div>
      <div class="eta-box">
        <span class="eta-title">DELIVERY ESTIMATE</span>
        <span class="eta-time">${order.eta}</span>
      </div>
    </div>

    <div class="stepper-timeline">
      <div class="stepper-progress-line" style="width: calc(${progressPercent}% - 40px);"></div>
      ${stepsHtml}
    </div>

    <div class="tracking-meta-grid">
      <div class="meta-col">
        <span class="meta-label">Courier Partner</span>
        <span class="meta-val">${order.carrier}</span>
      </div>
      <div class="meta-col">
        <span class="meta-label">Destination</span>
        <span class="meta-val">${order.address}</span>
      </div>
      <div class="meta-col">
        <span class="meta-label">Total Value</span>
        <span class="meta-val" style="color: var(--accent-lime);">${order.total}</span>
      </div>
    </div>

    <div style="margin-top: 1.5rem; background: #111520; padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
      <h4 style="font-size: 0.85rem; font-weight: 800; color: var(--text-muted); margin-bottom: 0.75rem; text-transform: uppercase;">Parcel Manifest</h4>
      ${itemsHtml}
    </div>
  `;

  if (window.lucide) lucide.createIcons();
}

// =================================================================
// 13. USER PROFILE & AURA POINTS TABS (INR ₹)
// =================================================================
function initProfile() {
  const tabs = document.querySelectorAll('.p-tab');
  const container = document.getElementById('pTabContent');

  function renderProfileTab(tabType) {
    if (!container) return;

    if (tabType === 'orders') {
      container.innerHTML = `
        <div class="order-history-card">
          <div class="oh-header">
            <div>
              <span class="oh-id">#VV-89240</span>
              <p style="font-size: 0.75rem; color: var(--text-dim); margin-top: 2px;">Placed Today, 11:20 AM • 2 Items</p>
            </div>
            <span class="oh-status transit">⚡ Out For Delivery</span>
          </div>
          <div class="oh-items-preview">
            <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=150&q=80" class="oh-thumb">
            <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=150&q=80" class="oh-thumb">
            <span style="font-size: 0.8rem; color: var(--text-muted);">Total: <strong style="color: var(--accent-lime);">₹2,298</strong></span>
          </div>
        </div>

        <div class="order-history-card">
          <div class="oh-header">
            <div>
              <span class="oh-id">#VV-45120</span>
              <p style="font-size: 0.75rem; color: var(--text-dim); margin-top: 2px;">Delivered Oct 28, 2026 • 1 Item</p>
            </div>
            <span class="oh-status delivered"><i data-lucide="check"></i> Delivered</span>
          </div>
          <div class="oh-items-preview">
            <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=150&q=80" class="oh-thumb">
            <span style="font-size: 0.8rem; color: var(--text-muted);">Cyber-Tokyo Graphic Tee (Size L)</span>
          </div>
        </div>
      `;
    } else if (tabType === 'wishlist') {
      const wishlistProducts = PRODUCTS.filter(p => state.wishlist.has(p.id));
      if (wishlistProducts.length === 0) {
        container.innerHTML = `<p style="color: var(--text-muted); padding: 1.5rem 0;">Your saved wishlist is empty! Hit the heart icon on any fit you like.</p>`;
      } else {
        container.innerHTML = `
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1rem;">
            ${wishlistProducts.map(p => `
              <div style="background: #111520; border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.75rem;">
                <img src="${p.image}" style="width: 100%; height: 160px; object-fit: cover; border-radius: 6px; margin-bottom: 0.5rem;">
                <h5 style="font-size: 0.85rem; font-weight: 700; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${p.title}</h5>
                <span style="font-family: var(--font-mono); color: var(--accent-lime); font-size: 0.95rem; font-weight: 800;">${formatINR(p.price)}</span>
                <button class="btn btn-primary btn-block" style="padding: 0.35rem; font-size: 0.75rem; margin-top: 0.5rem;" onclick="state.addToCart(PRODUCTS.find(x => x.id === ${p.id}))">
                  Add to Bag
                </button>
              </div>
            `).join('')}
          </div>
        `;
      }
    } else if (tabType === 'rewards') {
      container.innerHTML = `
        <div style="background: #111520; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem;">
          <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--accent-lime); margin-bottom: 0.5rem;">Your VYRA Rewards Balance: 1,450 Coins (Value: ₹145)</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.25rem;">Earn 10 coins for every ₹100 spent. Redeem for store credits, free shipping vouchers, or VIP drop access.</p>
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
            <button class="btn btn-glass" style="font-size: 0.8rem;">Redeem ₹250 Coupon (2,000 Coins)</button>
            <button class="btn btn-glass" style="font-size: 0.8rem;">Claim Free Drip Sticker Pack (350 Coins)</button>
          </div>
        </div>
      `;
    }

    if (window.lucide) lucide.createIcons();
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderProfileTab(tab.dataset.ptab);
    });
  });

  renderProfileTab('orders');
}

// =================================================================
// 14. FLASH SALE UNDER ₹999 & COUNTDOWN TIMER
// =================================================================
function renderStealsUnder25() {
  const container = document.getElementById('under25Grid');
  if (!container) return;

  const under999 = PRODUCTS.filter(p => p.price <= 999);
  container.innerHTML = under999.map(p => `
    <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); overflow: hidden; padding: 0.85rem;">
      <img src="${p.image}" style="width: 100%; height: 180px; object-fit: cover; border-radius: 6px; margin-bottom: 0.75rem;">
      <span class="neon-chip" style="font-size: 0.65rem;">${p.gsm}</span>
      <h4 style="font-size: 0.95rem; font-weight: 700; margin: 0.35rem 0;">${p.title}</h4>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem;">
        <div>
          <span style="font-family: var(--font-mono); color: var(--accent-lime); font-weight: 800; font-size: 1.1rem;">${formatINR(p.price)}</span>
          <span style="font-size: 0.75rem; text-decoration: line-through; color: var(--text-dim); margin-left: 4px;">${formatINR(p.origPrice)}</span>
        </div>
        <button class="pill-btn-sm" onclick="state.addToCart(PRODUCTS.find(x => x.id === ${p.id}))">
          Quick Add
        </button>
      </div>
    </div>
  `).join('');
}

function initFlashTimer() {
  const timerEl = document.getElementById('flashTimer');
  if (!timerEl) return;

  let totalSeconds = 3 * 3600 + 47 * 60 + 19;
  setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds -= 1;
      const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
      const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
      const seconds = (totalSeconds % 60).toString().padStart(2, '0');
      timerEl.textContent = `${hours}:${minutes}:${seconds}`;
    }
  }, 1000);
}

// =================================================================
// 15. FLOATING TOAST NOTIFICATION UTILITY
// =================================================================
function showToast(message, iconName = 'bell') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i data-lucide="${iconName}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  if (window.lucide) lucide.createIcons();

  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 2800);
}
