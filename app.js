/**
 * VYRA BY VIPUL - Web Application Architecture
 * Built by 9-Year Senior Software Engineer for Teenagers & College Students
 * Pure Clothing Fashion, Pincode Delivery Availability Checker & Modern White GUI
 */

// =================================================================
// 1. PRODUCT CATALOG DATABASE (Pure Clothing Fashion Only - No Accessories)
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
    description: 'Ultra-dense 380 GSM French Terry cotton fleece. Boxy drop-shoulder cut, double-lined hood, and anti-pill fabric that never shrinks in the washer.',
    specs: ['380 GSM 100% Cotton French Terry', 'Drop shoulder oversized streetwear fit', 'Pre-shrunk double washed', 'Thermal kangaroo pocket'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 2,
    title: 'Cyber-Tokyo 280 GSM Graphic Boxy Tee',
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
    title: 'Vintage Faded Selvedge Wide-Leg Denim Jeans',
    category: 'denim',
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
    title: 'Distressed "No Signal" Vintage Drop-Shoulder Tee',
    category: 'tees',
    price: 849,
    origPrice: 1699,
    discount: 50,
    gsm: '260 GSM Carbon-Wash',
    rating: 4.8,
    reviews: 640,
    badge: 'VINTAGE HIT',
    badgeType: 'trending',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    description: 'Carbon mineral washed for an authentic buttery soft vintage hand-feel. Heavy collar and dropped shoulders for that ideal effortless boxy look.',
    specs: ['260 GSM single jersey cotton', 'Enzyme washed for butter softness', 'Thick 1-inch neck ribbing', 'Drop shoulder profile'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 8,
    title: 'Heavyweight Buffalo Plaid Oversized Flannel Shirt',
    category: 'jackets',
    price: 1399,
    origPrice: 2899,
    discount: 52,
    gsm: '300 GSM Brushed Twill',
    rating: 4.9,
    reviews: 320,
    badge: 'NEW DROP',
    badgeType: 'quality',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80',
    description: 'Heavy 300 GSM brushed cotton twill flannel. Perfect as an overshirt or mid-layer over tees with drop-shoulder silhouette.',
    specs: ['300 GSM Heavy brushed flannel', 'Tortoiseshell button closures', 'Dual chest flap pockets', 'Relaxed skater fit'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 9,
    title: 'Matte Black Water-Repellent Puffer Jacket',
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
    title: 'Relaxed Wide-Wale Corduroy Skater Trousers',
    category: 'denim',
    price: 1649,
    origPrice: 3299,
    discount: 50,
    gsm: '340 GSM 8-Wale Corduroy',
    rating: 4.8,
    reviews: 215,
    badge: 'ESSENTIAL',
    badgeType: 'trending',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80',
    description: 'Textured 8-wale heavy cotton corduroy trousers with elasticated back waist, deep front slant pockets, and a vintage baggy cut.',
    specs: ['340 GSM 100% Cotton Corduroy', 'Elasticated back waistband', 'Deep durable pockets', 'Straight wide-leg drape'],
    sizes: ['28', '30', '32', '34', '36']
  },
  {
    id: 11,
    title: 'Retro Blokecore Oversized Football Jersey',
    category: 'jerseys',
    price: 999,
    origPrice: 2199,
    discount: 55,
    gsm: '240 GSM Breathable Aero-Mesh',
    rating: 4.9,
    reviews: 540,
    badge: 'BLOKECORE HIT',
    badgeType: 'trending',
    image: 'https://images.unsplash.com/photo-1577210897949-1f56f9435824?auto=format&fit=crop&w=800&q=80',
    description: 'Vintage European pitch aesthetic with striped rib-knit V-neck, embroidered crest, and drop-shoulder streetwear cut. Engineered in ultra-breathable moisture-wicking aero-mesh.',
    specs: ['240 GSM Breathable honeycomb aero-mesh', 'Ribbed retro V-neck collar', 'Sweat-wicking athletic tech', 'Boxy drop-shoulder pitch drape'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 12,
    title: 'Samba Noir Streetwear Football Jersey',
    category: 'jerseys',
    price: 1049,
    origPrice: 2299,
    discount: 54,
    gsm: 'Jacquard Aero-Knit 220 GSM',
    rating: 4.8,
    reviews: 380,
    badge: 'TOP QUALITY',
    badgeType: 'quality',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
    description: 'Matte black jacquard weave with subtle geometric sublimation and golden badge accents. Perfect for turf nights, college fests, and game days.',
    specs: ['Jacquard knit breathable structure', 'Thermal-pressed silicone crest', 'Raglan comfort sleeve cut', 'Quick-dry anti-odor treatment'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 13,
    title: 'Bleed Blue \'92 Heritage Cricket Jersey',
    category: 'jerseys',
    price: 1149,
    origPrice: 2499,
    discount: 54,
    gsm: '230 GSM Diamond Mesh',
    rating: 5.0,
    reviews: 620,
    badge: 'CRICKET ICON',
    badgeType: 'steal',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80',
    description: 'Iconic retro Indian cricket heritage reimagined for the modern streetwear generation. Features vintage tricolor shoulder chevrons, polo collar, and relaxed fit.',
    specs: ['230 GSM Diamond-knit athletic mesh', 'Retro polo button collar', 'High-definition sublimation that never fades', 'Anti-chafing flatlock stitching'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 14,
    title: 'Midnight Edition Performance Cricket Jersey',
    category: 'jerseys',
    price: 999,
    origPrice: 2199,
    discount: 55,
    gsm: '210 GSM Aero-Vent Mesh',
    rating: 4.9,
    reviews: 295,
    badge: 'NEW DROP',
    badgeType: 'trending',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80',
    description: 'Stealth charcoal cricket jersey engineered with laser-perforated side cooling panels and raglan mobility cuts for pitch action and turf sessions.',
    specs: ['Laser-cut side ventilation', '210 GSM Dry-fit breathable poly', 'Ribbed low-profile athletic collar', 'Fade-proof screenprint'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 15,
    title: 'French Flax Organic Linen-Cotton Slub Tee',
    category: 'linen',
    price: 899,
    origPrice: 1999,
    discount: 55,
    gsm: '200 GSM Linen-Cotton Slub',
    rating: 4.8,
    reviews: 410,
    badge: 'PURE LINEN',
    badgeType: 'quality',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80',
    description: '55% Normandy French Flax blended with 45% organic combed cotton. Gives natural textured breathability, keeping you breezy and cool under scorching Indian heat.',
    specs: ['55% French Flax Linen, 45% Cotton', 'Natural breathable textured slub', 'Heat-dissipating open weave', 'Pre-washed anti-stiffness feel'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 16,
    title: 'Resort Slub Linen Open-Collar Boxy Shirt-Tee',
    category: 'linen',
    price: 1199,
    origPrice: 2599,
    discount: 54,
    gsm: '220 GSM 100% Pure Linen',
    rating: 4.9,
    reviews: 330,
    badge: 'SUMMER HIT',
    badgeType: 'trending',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
    description: '100% Pure European flax linen with a relaxed Cuban camp collar and real coconut shell buttons. Wear buttoned up as a breezy tee or open over a tank.',
    specs: ['100% Pure European Flax Linen', 'Relaxed Cuban camp-collar cut', 'Real sustainable coconut shell buttons', 'Effortless drape that softens with every wash'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 17,
    title: 'Mineral-Washed Slub Linen Pocket Tee',
    category: 'linen',
    price: 849,
    origPrice: 1799,
    discount: 53,
    gsm: '210 GSM Linen Blend',
    rating: 4.7,
    reviews: 275,
    badge: 'CLEAN FIT',
    badgeType: 'quality',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
    description: 'Garment-dyed linen-cotton blend with an authentic vintage mineral wash. Features a single chest patch pocket and relaxed drop-shoulder cut.',
    specs: ['60% Linen, 40% Combed Cotton', 'Reinforced chest patch pocket', 'Vintage mineral pigment dye', 'Relaxed boxy summer silhouette'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 18,
    title: 'Textured Waffle-Knit Matching Co-Ord Set',
    category: 'coords',
    price: 1699,
    origPrice: 3699,
    discount: 54,
    gsm: '300 GSM Honeycomb Waffle',
    rating: 4.9,
    reviews: 485,
    badge: 'MATCHING SET',
    badgeType: 'steal',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    description: '2-Piece matching set: Heavyweight textured waffle boxy tee and matching drawstring relaxed shorts. The easiest 10/10 fit for weekend hangs and campus chill.',
    specs: ['Complete 2-Piece Set (Tee + Shorts)', '300 GSM Heavy waffle honeycomb knit', 'Elastic waistband with dipped drawcord', 'Pre-shrunk anti-pill finish'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 19,
    title: 'Breezy Pure Linen Matching Resort Co-Ord Set',
    category: 'coords',
    price: 1999,
    origPrice: 4299,
    discount: 53,
    gsm: '220 GSM Pure Flax Linen',
    rating: 5.0,
    reviews: 310,
    badge: 'VIP DROP',
    badgeType: 'steal',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80',
    description: 'Head-to-toe pure linen set: includes breathable short-sleeve resort camp shirt and tailored linen drawstring shorts with deep phone pockets.',
    specs: ['Complete 2-Piece Linen Fit', '100% Breathable European Flax', 'Deep phone pockets + rear pocket', 'Supreme airflow for warm holidays'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 20,
    title: 'Heavy French Terry Matching Street Track Set',
    category: 'coords',
    price: 1799,
    origPrice: 3899,
    discount: 54,
    gsm: '340 GSM Heavy Cotton Terry',
    rating: 4.9,
    reviews: 395,
    badge: 'CAMPUS STAPLE',
    badgeType: 'trending',
    image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=800&q=80',
    description: '2-Piece heavyweight track set: structured oversized boxy tee and heavy French Terry cargo sweatshorts with secure zippered pockets.',
    specs: ['Complete 2-Piece Set (Oversized Tee + Cargo Shorts)', '340 GSM 100% Cotton French Terry', 'Zippered utility pocket on shorts', 'Ultra-durable double-needle construction'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 21,
    title: 'Retro Blokecore Pitch Matching Jersey & Shorts Set',
    category: 'coords',
    price: 1599,
    origPrice: 3499,
    discount: 54,
    gsm: '240 GSM Athletic Aero-Mesh',
    rating: 4.8,
    reviews: 260,
    badge: 'FULL KIT',
    badgeType: 'trending',
    image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80',
    description: 'Complete vintage pitch uniform: retro striped V-neck football jersey paired with matching vented mesh shorts. Ready for turf match or festival.',
    specs: ['Complete 2-Piece Set (Jersey + Shorts)', '240 GSM Moisture-wicking aero-mesh', 'Contrast retro piping details', 'Internal drawstring waist'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 22,
    title: 'Japanese "Neo-Kanji" Streetwear Graphic Tee',
    category: 'tees',
    price: 899,
    origPrice: 1899,
    discount: 53,
    gsm: '280 GSM Pure Cotton',
    rating: 4.9,
    reviews: 412,
    badge: 'TRENDING FIT',
    badgeType: 'trending',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80',
    description: 'Harajuku-inspired graphic printed on ultra-dense 280 GSM combed cotton. Ribbed collar stays flat and tight wash after wash.',
    specs: ['280 GSM 100% Combed Cotton', 'Japanese typography backprint', 'Relaxed boxy cut with drop shoulders', 'Bio-washed anti-pilling fabric'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 23,
    title: 'Boxy Minimalist Heavyweight Solid Pocket Tee',
    category: 'tees',
    price: 749,
    origPrice: 1599,
    discount: 53,
    gsm: '270 GSM Compact Yarn',
    rating: 4.7,
    reviews: 520,
    badge: 'ESSENTIAL',
    badgeType: 'quality',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    description: 'Zero loud logos, pure silhouette perfection. Crafted from heavy compact yarn cotton with reinforced front patch pocket.',
    specs: ['270 GSM Compact-spun cotton', 'Minimalist front chest pocket', 'Wide ribbed neckband', 'Boxy drop shoulder cut'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 24,
    title: 'Vintage Acid-Wash "World Tour" Heavy Band Tee',
    category: 'tees',
    price: 899,
    origPrice: 1899,
    discount: 53,
    gsm: '280 GSM Heavy Acid-Wash',
    rating: 4.9,
    reviews: 460,
    badge: 'STEAL DEAL',
    badgeType: 'steal',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    description: 'Subtle distress detailing, authentic vintage acid-wash pattern, and cracked gothic tour print. 280 GSM cotton ensures substantial weight.',
    specs: ['280 GSM Pure cotton jersey', 'Acid-wash vintage hand processing', 'Cracked screenprint styling', 'Reinforced collar & hem'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 25,
    title: 'Mineral-Wash Graphic "Metropolis" Long-Sleeve Tee',
    category: 'tees',
    price: 949,
    origPrice: 1999,
    discount: 53,
    gsm: '260 GSM Carbon Cotton',
    rating: 4.8,
    reviews: 310,
    badge: 'NEW DROP',
    badgeType: 'trending',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80',
    description: 'Heavyweight long sleeve skate tee with faded cyberpunk graphics along both sleeves and back. Elastic ribbed cuffs for stacked wrist drape.',
    specs: ['260 GSM Heavy long-sleeve cotton', 'Full sleeve graphic screen-prints', 'Pre-washed vintage patina', 'Ribbed cuffs and crew collar'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 26,
    title: 'Heavyweight 400 GSM Drop-Shoulder Zip Hoodie',
    category: 'hoodies',
    price: 1699,
    origPrice: 3799,
    discount: 55,
    gsm: '400 GSM Heavy Fleece',
    rating: 4.9,
    reviews: 345,
    badge: 'BESTSELLER',
    badgeType: 'trending',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80',
    description: 'Massive 400 GSM fleece with dual silver metal zipper hardware. Double-layered hood that stays upright without collapsing.',
    specs: ['400 GSM Dense Cotton Fleece', 'Dual-way metal zipper', 'Oversized boxy streetwear drape', 'Reinforced waist & wrist ribbing'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 27,
    title: '90s Carpenter Utility Denim with Tool Loop',
    category: 'denim',
    price: 1899,
    origPrice: 4199,
    discount: 55,
    gsm: '14 oz Heavyweight Denim',
    rating: 4.8,
    reviews: 278,
    badge: 'MUST HAVE',
    badgeType: 'quality',
    image: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=80',
    description: 'Authentic 90s skate carpenter pants in 14 oz heavy indigo denim with triple-stitched utility pocket and hammer loop.',
    specs: ['14 oz Ring-spun durable cotton denim', 'Triple needle reinforced seams', 'Authentic utility tool pockets', 'Relaxed baggy straight-leg silhouette'],
    sizes: ['28', '30', '32', '34', '36']
  },
  {
    id: 28,
    title: 'Vintage Washed Olive Relaxed Cargo Joggers',
    category: 'cargoes',
    price: 1449,
    origPrice: 2999,
    discount: 52,
    gsm: '320 GSM Cotton Twill',
    rating: 4.9,
    reviews: 490,
    badge: 'TOP QUALITY',
    badgeType: 'quality',
    image: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80',
    description: 'Mineral washed army olive cargo joggers with elastic drawstring waistband, 6 deep utility pockets, and tapered cuffs.',
    specs: ['320 GSM Heavy cotton twill', 'Elasticated drawstring waist', '6 Ergonomic cargo pockets', 'Vintage mineral wash finish'],
    sizes: ['28', '30', '32', '34', '36']
  }
];

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
// 3. PINCODE DATABASE (Indian Courier Delivery Verification)
// =================================================================
const PINCODE_DIRECTORY = {
  // Delhi NCR
  '110001': { city: 'New Delhi (Connaught Place)', state: 'Delhi', days: '1-2 Days', cod: true },
  '110007': { city: 'Delhi University (North Campus)', state: 'Delhi', days: '1-2 Days', cod: true },
  '110016': { city: 'Hauz Khas / IIT Delhi', state: 'Delhi', days: '1-2 Days', cod: true },
  '201301': { city: 'Noida', state: 'Uttar Pradesh', days: '1-2 Days', cod: true },
  '122001': { city: 'Gurugram', state: 'Haryana', days: '1-2 Days', cod: true },
  
  // Mumbai
  '400001': { city: 'Mumbai (Fort / Colaba)', state: 'Maharashtra', days: '2-3 Days', cod: true },
  '400076': { city: 'Powai (IIT Bombay Campus)', state: 'Maharashtra', days: '2-3 Days', cod: true },
  '400050': { city: 'Bandra West', state: 'Maharashtra', days: '2-3 Days', cod: true },
  
  // Bengaluru
  '560001': { city: 'Bengaluru Central', state: 'Karnataka', days: '2-3 Days', cod: true },
  '560034': { city: 'Koramangala, Bengaluru', state: 'Karnataka', days: '2-3 Days', cod: true },
  '560095': { city: 'Koramangala 8th Block, Bengaluru', state: 'Karnataka', days: '2-3 Days', cod: true },
  
  // Hyderabad & Chennai & Kolkata
  '500001': { city: 'Hyderabad', state: 'Telangana', days: '2-3 Days', cod: true },
  '600001': { city: 'Chennai Central', state: 'Tamil Nadu', days: '2-3 Days', cod: true },
  '700001': { city: 'Kolkata', state: 'West Bengal', days: '2-3 Days', cod: true },
  '380001': { city: 'Ahmedabad', state: 'Gujarat', days: '2-3 Days', cod: true },
  '411001': { city: 'Pune Central', state: 'Maharashtra', days: '2-3 Days', cod: true },
  '302001': { city: 'Jaipur', state: 'Rajasthan', days: '2-3 Days', cod: true },
  '226001': { city: 'Lucknow', state: 'Uttar Pradesh', days: '2-3 Days', cod: true },
  '160001': { city: 'Chandigarh', state: 'Punjab/Haryana', days: '2-3 Days', cod: true }
};

function verifyPincode(pin) {
  const cleanPin = pin.trim();
  if (!/^\d{6}$/.test(cleanPin)) {
    return { valid: false, message: 'Please enter a valid 6-digit Indian PIN code.' };
  }

  // Check known directory first
  if (PINCODE_DIRECTORY[cleanPin]) {
    const info = PINCODE_DIRECTORY[cleanPin];
    return {
      valid: true,
      serviceable: true,
      city: info.city,
      state: info.state,
      days: info.days,
      cod: info.cod,
      message: `Delivery Available to ${info.city}, ${info.state}! Estimated arrival in ${info.days} via BlueDart / Delhivery Priority Air. Cash on Delivery (COD) & UPI available.`
    };
  }

  // Generalized Indian Pincode validation (First digit 1-8 are standard Indian postal zones)
  const firstDigit = parseInt(cleanPin[0], 10);
  if (firstDigit >= 1 && firstDigit <= 8) {
    return {
      valid: true,
      serviceable: true,
      city: 'Local Postal Division',
      state: 'India',
      days: '3-4 Days',
      cod: true,
      message: `Delivery Available to PIN ${cleanPin}! Estimated arrival in 3-4 business days via Delhivery Priority. Pre-paid UPI and Cash on Delivery both supported.`
    };
  }

  return {
    valid: true,
    serviceable: false,
    message: `Delivery is currently not serviceable to PIN ${cleanPin}. Please try an alternate campus or home address.`
  };
}

// =================================================================
// 4. TRACKING DATABASE (Live Simulation)
// =================================================================
const TRACKING_DATA = {
  '#VV-89240': {
    orderId: '#VV-89240',
    date: 'Today, 11:20 AM',
    eta: 'Arriving Today by 5:30 PM',
    status: 'Out For Delivery in Delhi NCR',
    step: 4,
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
      { title: 'Matte Black Water-Repellent Puffer Jacket', size: 'L', qty: 1, price: 2799 }
    ],
    total: '₹2,799'
  }
};

// =================================================================
// 5. REACTIVE APPLICATION STATE
// =================================================================
class AppState {
  constructor() {
    this.currentView = 'home';
    this.cart = this.loadCart();
    this.activeCategory = 'all';
    this.searchQuery = '';
    this.sortBy = 'featured';
    this.appliedCoupon = COUPONS['VYRATEEN35']; // default welcome discount
    this.wishlist = new Set([1, 4]);
    this.activeTrackingOrder = TRACKING_DATA['#VV-89240'];

    // State for the dedicated Quick Place Order Modal
    this.orderModalProduct = null;
    this.orderModalSize = 'L';
    this.orderModalQty = 1;
    this.orderModalPincode = '110001';
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
      console.warn('Could not save cart', e);
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
// 6. DOM INITIALIZATION
// =================================================================
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  }

  initNavigation();
  initOfferPopup();
  initSearchAndFilter();
  initCartDrawer();
  initOrderModal();
  initFlashTimer();
  initTracker();
  initProfile();
  
  renderProducts();
  renderCart();
  renderStealsUnder25();
  updateCategoryCounts();
  updateWishlistCount();

  setTimeout(() => {
    openPopup();
  }, 650);
});

// =================================================================
// 7. PLACE ORDER & PINCODE DELIVERY CHECKER MODAL
// =================================================================
function initOrderModal() {
  const modal = document.getElementById('orderModal');
  const closeBtn = document.getElementById('closeOrderModalBtn');
  const pincodeInput = document.getElementById('deliveryPincodeInput');
  const checkPincodeBtn = document.getElementById('checkPincodeBtn');
  const pincodeStatusBox = document.getElementById('pincodeStatusBox');
  const orderForm = document.getElementById('instantOrderForm');
  const applyPromoBtn = document.getElementById('orderApplyCouponBtn');
  const promoInput = document.getElementById('orderPromoInput');

  // Close modal
  const closeModal = () => {
    modal.classList.remove('active');
    setTimeout(() => { modal.style.display = 'none'; }, 200);
  };

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Check Pincode button handler
  checkPincodeBtn.addEventListener('click', () => {
    const pin = pincodeInput.value.trim();
    state.orderModalPincode = pin;
    const result = verifyPincode(pin);

    if (!result.valid) {
      pincodeStatusBox.className = 'pincode-status-box unserviceable';
      pincodeStatusBox.innerHTML = `<i data-lucide="alert-circle"></i> <span>${result.message}</span>`;
      pincodeStatusBox.style.display = 'flex';
      if (window.lucide) lucide.createIcons();
      return;
    }

    if (result.serviceable) {
      pincodeStatusBox.className = 'pincode-status-box serviceable';
      pincodeStatusBox.innerHTML = `<i data-lucide="check-circle-2"></i> <span>${result.message}</span>`;
      pincodeStatusBox.style.display = 'flex';
      showToast(`Delivery available to PIN ${pin}!`, 'truck');
    } else {
      pincodeStatusBox.className = 'pincode-status-box unserviceable';
      pincodeStatusBox.innerHTML = `<i data-lucide="x-circle"></i> <span>${result.message}</span>`;
      pincodeStatusBox.style.display = 'flex';
    }

    if (window.lucide) lucide.createIcons();
  });

  // Apply Coupon inside Order Modal
  applyPromoBtn.addEventListener('click', () => {
    const code = promoInput.value.trim().toUpperCase();
    if (COUPONS[code]) {
      state.appliedCoupon = COUPONS[code];
      showToast(`Applied ${COUPONS[code].label}!`, 'sparkles');
      updateOrderModalCalculations();
    } else {
      showToast('Invalid coupon code! Try VYRATEEN35 or FREEDELIVERY', 'alert-circle');
    }
  });

  // Form submit -> Confirm & Place Order!
  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!state.orderModalProduct) return;

    const pin = pincodeInput.value.trim();
    const pinCheck = verifyPincode(pin);

    if (!pinCheck.valid || !pinCheck.serviceable) {
      showToast('Please enter a serviceable 6-digit delivery PIN code.', 'alert-triangle');
      pincodeInput.focus();
      return;
    }

    const customerName = document.getElementById('orderCustomerName').value.trim();
    const customerPhone = document.getElementById('orderCustomerPhone').value.trim();
    const customerAddress = document.getElementById('orderCustomerAddress').value.trim();
    const paymentMode = document.getElementById('orderPaymentMethod').value.toUpperCase();

    // Generate real-time Order ID
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const orderId = `#VV-${randomNum}`;

    const subtotal = state.orderModalProduct.price * state.orderModalQty;
    let discount = 0;
    if (state.appliedCoupon && state.appliedCoupon.type === 'percent') {
      discount = (subtotal * state.appliedCoupon.discountPercent) / 100;
    }
    const finalAmount = Math.max(0, subtotal - discount);

    // Add to Tracking Database
    TRACKING_DATA[orderId] = {
      orderId: orderId,
      date: 'Just now',
      eta: `Expected in ${pinCheck.days || '2-3 business days'} to PIN ${pin}`,
      status: `Order Placed (${paymentMode}) • Quality Check In-Progress`,
      step: 0,
      carrier: 'BlueDart Express Air VIP',
      address: `${customerAddress}, PIN: ${pin} (Ph: ${customerPhone})`,
      items: [
        {
          title: state.orderModalProduct.title,
          size: state.orderModalSize,
          qty: state.orderModalQty,
          price: state.orderModalProduct.price
        }
      ],
      total: formatINR(finalAmount)
    };

    state.activeTrackingOrder = TRACKING_DATA[orderId];

    // Add also to cart / order history
    state.addToCart(state.orderModalProduct, state.orderModalSize);

    closeModal();
    showToast(`Order Confirmed! Tracking ID: ${orderId}`, 'package-check');

    // Smoothly redirect straight into the Live Order Tracker!
    setTimeout(() => {
      const trackerNavBtn = document.querySelector('[data-view="tracker"]');
      if (trackerNavBtn) trackerNavBtn.click();

      const trackingInput = document.getElementById('trackingCodeInput');
      if (trackingInput) trackingInput.value = orderId;
      renderTrackerResult(state.activeTrackingOrder);
    }, 450);
  });
}

function openOrderModal(product, preferredSize = null) {
  state.orderModalProduct = product;
  state.orderModalSize = preferredSize || product.sizes[0];
  state.orderModalQty = 1;

  const modal = document.getElementById('orderModal');
  const preview = document.getElementById('orderProductPreview');

  preview.innerHTML = `
    <img src="${product.image}" alt="${product.title}" class="order-product-thumb">
    <div class="order-product-details">
      <h4>${product.title}</h4>
      <div class="order-product-meta">
        <span class="neon-chip">${product.gsm}</span>
        <span style="font-size: 0.75rem; color: var(--text-muted);"><i data-lucide="shield-check" style="width:12px; height:12px; vertical-align:middle;"></i> 100% Pre-Shrunk</span>
      </div>

      <div style="display: flex; align-items: center; gap: 0.6rem; margin-top: 0.35rem; flex-wrap: wrap;">
        <span style="font-size: 0.775rem; font-weight: 700; color: var(--text-secondary);">Size:</span>
        <div class="size-selector-compact" id="modalSizeRow">
          ${product.sizes.map(sz => `
            <button type="button" class="size-btn ${sz === state.orderModalSize ? 'active' : ''}" data-modalsize="${sz}">${sz}</button>
          `).join('')}
        </div>
      </div>

      <div class="order-product-controls">
        <div style="display: flex; align-items: baseline; gap: 0.45rem;">
          <span style="font-family: var(--font-mono); font-size: 1.25rem; font-weight: 800; color: #09090b;">${formatINR(product.price)}</span>
          <span style="font-family: var(--font-mono); font-size: 0.8rem; text-decoration: line-through; color: var(--text-dim);">${formatINR(product.origPrice)}</span>
        </div>

        <div class="qty-control">
          <button type="button" class="qty-btn" id="modalQtyDec">-</button>
          <span class="qty-number" id="modalQtyVal">1</span>
          <button type="button" class="qty-btn" id="modalQtyInc">+</button>
        </div>
      </div>
    </div>
  `;

  // Attach size and quantity handlers in preview
  preview.querySelectorAll('[data-modalsize]').forEach(btn => {
    btn.onclick = () => {
      preview.querySelectorAll('[data-modalsize]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.orderModalSize = btn.dataset.modalsize;
    };
  });

  document.getElementById('modalQtyDec').onclick = () => {
    if (state.orderModalQty > 1) {
      state.orderModalQty -= 1;
      document.getElementById('modalQtyVal').textContent = state.orderModalQty;
      updateOrderModalCalculations();
    }
  };

  document.getElementById('modalQtyInc').onclick = () => {
    state.orderModalQty += 1;
    document.getElementById('modalQtyVal').textContent = state.orderModalQty;
    updateOrderModalCalculations();
  };

  updateOrderModalCalculations();

  // Run initial pincode check on pre-filled pincode (110001)
  const pinInput = document.getElementById('deliveryPincodeInput');
  if (pinInput && pinInput.value) {
    document.getElementById('checkPincodeBtn').click();
  }

  modal.style.display = 'flex';
  modal.classList.add('active');
  if (window.lucide) lucide.createIcons();
}

function updateOrderModalCalculations() {
  if (!state.orderModalProduct) return;

  const subtotal = state.orderModalProduct.price * state.orderModalQty;
  let discount = 0;
  if (state.appliedCoupon && state.appliedCoupon.type === 'percent') {
    discount = (subtotal * state.appliedCoupon.discountPercent) / 100;
  } else if (state.appliedCoupon && state.appliedCoupon.type === 'flat') {
    discount = Math.min(subtotal, state.appliedCoupon.discountFlat);
  }

  const finalTotal = Math.max(0, subtotal - discount);

  document.getElementById('modalQtyDisplay').textContent = state.orderModalQty;
  document.getElementById('modalItemSubtotal').textContent = formatINR(subtotal);
  document.getElementById('modalDiscountDisplay').textContent = `-${formatINR(discount)}`;
  document.getElementById('modalFinalTotal').textContent = formatINR(finalTotal);
  document.getElementById('btnPayAmount').textContent = formatINR(finalTotal);
}

// =================================================================
// 8. POP-UP MODAL (LATEST OFFERS ON OPEN)
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

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  if (openOffersBtn) openOffersBtn.addEventListener('click', openPopup);
  if (heroClaimBtn) heroClaimBtn.addEventListener('click', openPopup);

  copyBtn.addEventListener('click', () => {
    const code = document.getElementById('popupPromoCode').innerText;
    navigator.clipboard.writeText(code).then(() => {
      copyBtn.innerHTML = `<i data-lucide="check"></i> Copied!`;
      lucide.createIcons();
      showToast(`Promo Code ${code} copied!`, 'check-circle');
      setTimeout(() => {
        copyBtn.innerHTML = `<i data-lucide="copy"></i> Copy Code`;
        lucide.createIcons();
      }, 2000);
    });
  });

  claimBtn.addEventListener('click', () => {
    state.appliedCoupon = COUPONS['VYRATEEN35'];
    closeModal();
    showToast('Code VYRATEEN35 applied! 35% discount active.', 'sparkles');
    renderCart();
    
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
// 9. VIEW NAVIGATION
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
// 10. SEARCH, FILTER & SORT ENGINE (Pure Clothing Categories)
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
  const totalDropsCount = document.getElementById('totalDropsCount');
  if (totalDropsCount) totalDropsCount.textContent = PRODUCTS.length;
}

function updateWishlistCount() {
  const wishlistCount = document.getElementById('wishlistCount');
  if (wishlistCount) wishlistCount.textContent = state.wishlist.size;
}

// =================================================================
// 11. PRODUCT RENDERING & ADD TO BAG / ORDER POP-UP TRIGGER
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

            <!-- ADD TO BAG: Triggers the Quick Place Order Screen Modal! -->
            <button class="add-cart-action-btn" data-add-cart="${product.id}" title="Order this fit">
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

  // When clicking "Add to Bag": Open the Place Order / Pincode delivery popup!
  document.querySelectorAll('[data-add-cart]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = btn.closest('.product-card');
      const productId = parseInt(btn.dataset.addCart, 10);
      const product = PRODUCTS.find(p => p.id === productId);
      const activeSizeBtn = card.querySelector('.size-btn.active');
      const chosenSize = activeSizeBtn ? activeSizeBtn.dataset.size : product.sizes[0];

      if (product) {
        // Open the dedicated Place Order Modal with Pincode checker & total breakdown
        openOrderModal(product, chosenSize);
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

  // Hero Quick Add
  const heroBtn = document.querySelector('.quick-add-hero');
  if (heroBtn) {
    heroBtn.onclick = () => {
      const p = PRODUCTS.find(item => item.id === 1);
      if (p) openOrderModal(p, 'L');
    };
  }
}

// =================================================================
// 12. QUICK VIEW MODAL
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
        <i data-lucide="shopping-bag"></i> Order Now (${formatINR(product.price)})
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
    modal.classList.remove('active');
    setTimeout(() => { modal.style.display = 'none'; }, 200);
    openOrderModal(product, sz);
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
// 13. CART DRAWER & CHECKOUT ENGINE
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

    // Open first item or active cart in Order Modal
    closeDrawer();
    const firstItem = PRODUCTS.find(p => p.id === state.cart[0].id) || PRODUCTS[0];
    openOrderModal(firstItem, state.cart[0].size);
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
// 14. LIVE ORDER TRACKER VIEW
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
    <div style="display: flex; justify-content: space-between; font-size: 0.85rem; padding: 0.5rem 0; border-bottom: 1px solid var(--border-color);">
      <span>${item.qty}x <strong>${item.title}</strong> (Size ${item.size})</span>
      <span style="font-family: var(--font-mono); color: #09090b; font-weight: 800;">${formatINR(item.price)}</span>
    </div>
  `).join('');

  resultBox.innerHTML = `
    <div class="tracker-status-header">
      <div>
        <span class="order-badge-pill">${order.orderId}</span>
        <h3 style="font-size: 1.35rem; font-weight: 800; margin-top: 0.5rem; color: #09090b;">${order.status}</h3>
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
        <span class="meta-val" style="color: #09090b;">${order.total}</span>
      </div>
    </div>

    <div style="margin-top: 1.5rem; background: var(--bg-surface); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
      <h4 style="font-size: 0.85rem; font-weight: 800; color: var(--text-muted); margin-bottom: 0.75rem; text-transform: uppercase;">Parcel Manifest</h4>
      ${itemsHtml}
    </div>
  `;

  if (window.lucide) lucide.createIcons();
}

// =================================================================
// 15. USER PROFILE & AURA POINTS TABS
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
              <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">Placed Today, 11:20 AM • 2 Fits</p>
            </div>
            <span class="oh-status transit">⚡ Out For Delivery</span>
          </div>
          <div class="oh-items-preview">
            <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=150&q=80" class="oh-thumb">
            <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=150&q=80" class="oh-thumb">
            <span style="font-size: 0.85rem; color: var(--text-main); font-weight: 700;">Total: <strong style="color: #09090b;">₹2,298</strong></span>
          </div>
        </div>

        <div class="order-history-card">
          <div class="oh-header">
            <div>
              <span class="oh-id">#VV-45120</span>
              <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 2px;">Delivered Oct 28, 2026 • 1 Fit</p>
            </div>
            <span class="oh-status delivered"><i data-lucide="check"></i> Delivered</span>
          </div>
          <div class="oh-items-preview">
            <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=150&q=80" class="oh-thumb">
            <span style="font-size: 0.85rem; color: var(--text-secondary);">Cyber-Tokyo Graphic Tee (Size L)</span>
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
              <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.75rem;">
                <img src="${p.image}" style="width: 100%; height: 160px; object-fit: cover; border-radius: 6px; margin-bottom: 0.5rem;">
                <h5 style="font-size: 0.85rem; font-weight: 800; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: #09090b;">${p.title}</h5>
                <span style="font-family: var(--font-mono); color: #09090b; font-size: 0.95rem; font-weight: 800;">${formatINR(p.price)}</span>
                <button class="btn btn-primary btn-block" style="padding: 0.4rem; font-size: 0.75rem; margin-top: 0.5rem;" onclick="openOrderModal(PRODUCTS.find(x => x.id === ${p.id}))">
                  Order Fit
                </button>
              </div>
            `).join('')}
          </div>
        `;
      }
    } else if (tabType === 'rewards') {
      container.innerHTML = `
        <div style="background: var(--bg-surface); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem;">
          <h3 style="font-size: 1.15rem; font-weight: 800; color: #09090b; margin-bottom: 0.5rem;">Your VYRA Rewards Balance: 1,450 Coins (Value: ₹145)</h3>
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
// 16. FLASH SALE UNDER ₹999 & COUNTDOWN TIMER
// =================================================================
function renderStealsUnder25() {
  const container = document.getElementById('under25Grid');
  if (!container) return;

  const under999 = PRODUCTS.filter(p => p.price <= 999);
  container.innerHTML = under999.map(p => `
    <div style="background: #ffffff; border: 1px solid var(--border-color); border-radius: var(--radius-md); overflow: hidden; padding: 0.85rem; box-shadow: var(--shadow-xs);">
      <img src="${p.image}" style="width: 100%; height: 180px; object-fit: cover; border-radius: 6px; margin-bottom: 0.75rem;">
      <span class="neon-chip" style="font-size: 0.65rem;">${p.gsm}</span>
      <h4 style="font-size: 0.95rem; font-weight: 800; margin: 0.35rem 0; color: #09090b;">${p.title}</h4>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem;">
        <div>
          <span style="font-family: var(--font-mono); color: #09090b; font-weight: 800; font-size: 1.1rem;">${formatINR(p.price)}</span>
          <span style="font-size: 0.75rem; text-decoration: line-through; color: var(--text-dim); margin-left: 4px;">${formatINR(p.origPrice)}</span>
        </div>
        <button class="pill-btn-sm" style="background: #09090b; color: #fff;" onclick="openOrderModal(PRODUCTS.find(x => x.id === ${p.id}))">
          Order Now
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
// 17. FLOATING TOAST NOTIFICATION UTILITY
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
