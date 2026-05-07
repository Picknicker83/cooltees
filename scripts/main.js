// ===== PRODUCT DATA =====
// To add a new product, copy one block and paste it inside the [ ] separated by a comma.
// badge options: "This Week's Pick" | "Hidden Gem" | "Cult Classic" | "Rising" | "Perfect Gift" | "Editor's Choice"
// ratings: score out of 10

const PRODUCTS = [
  {
    "id": "1",
    "slug": "vintage-sunset-tee",
    "title": "The Vintage Sunset Tee",
    "tagline": "Wear the golden hour.",
    "verdict": "This one caught us off guard. The design is deceptively simple but gets more interesting the longer you look at it. Wear it once and someone will ask where you got it.",
    "description": "This isn't just a t-shirt — it's a vibe. The faded sunset graphic feels like it was pulled straight from a 1970s road trip. Soft, relaxed fit, and the kind of shirt people will ask you about. Makes an incredible gift for anyone who loves the outdoors, travel, or just looking effortlessly cool.",
    "whyGift": "Perfect for the friend who has everything but still manages to look underdressed. This one fixes that.",
    "badge": "Hidden Gem",
    "ratings": {
      "coolness": 9,
      "wearability": 8,
      "giftScore": 7,
      "conversationStarter": 10
    },
    "price": "$24.99",
    "affiliateUrl": "https://amzn.to/PLACEHOLDER1",
    "imageUrl": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
    "designUrl": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    "category": "Vintage",
    "tags": ["vintage", "sunset", "gift", "unisex"],
    "featured": true
  },
  {
    "id": "2",
    "slug": "midnight-mountain-tee",
    "title": "The Midnight Mountain Tee",
    "tagline": "For those who peak differently.",
    "verdict": "Bold without being loud. This is the shirt you reach for when you want to look like you have your life together without trying too hard. The mountain graphic ages like fine wine.",
    "description": "Bold, dark, and unapologetically cool. The Midnight Mountain Tee features a stunning mountain range graphic on a deep black base. Heavyweight cotton, relaxed fit — this shirt means business. Whether you're hiking or just hiking to the fridge, you'll look great doing it.",
    "whyGift": "The ultimate gift for hikers, adventurers, or anyone who just loves the mountains. They'll wear it every week.",
    "badge": "Editor's Choice",
    "ratings": {
      "coolness": 9,
      "wearability": 9,
      "giftScore": 8,
      "conversationStarter": 7
    },
    "price": "$27.99",
    "affiliateUrl": "https://amzn.to/PLACEHOLDER2",
    "imageUrl": "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80",
    "designUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    "category": "Adventure",
    "tags": ["mountain", "adventure", "hiking", "gift"],
    "featured": true
  },
  {
    "id": "3",
    "slug": "retro-wave-tee",
    "title": "The Retro Wave Tee",
    "tagline": "Back to the future of fashion.",
    "verdict": "Loud, proud, and unapologetically fun. This is not a shirt for the faint-hearted — it's for people who walk into a room and own it. The 80s never looked this good.",
    "description": "Synthwave meets streetwear. This neon-tinged retro design is loud, proud, and incredibly fun. Printed on ultra-soft ring-spun cotton, it's comfortable enough to live in. The kind of shirt that turns a Tuesday into an event.",
    "whyGift": "For the person in your life who unironically loves the 80s — or just great design. Birthday, Christmas, or just because.",
    "badge": "This Week's Pick",
    "ratings": {
      "coolness": 10,
      "wearability": 7,
      "giftScore": 9,
      "conversationStarter": 10
    },
    "price": "$22.99",
    "affiliateUrl": "https://amzn.to/PLACEHOLDER3",
    "imageUrl": "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80",
    "designUrl": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    "category": "Retro",
    "tags": ["retro", "80s", "synthwave", "fun", "gift"],
    "featured": false
  }
];

// ===== BADGE CONFIG =====
const BADGE_COLORS = {
  "This Week's Pick": "#ff4500",
  "Hidden Gem":       "#7c3aed",
  "Cult Classic":     "#b45309",
  "Rising":           "#0891b2",
  "Perfect Gift":     "#be185d",
  "Editor's Choice":  "#15803d"
};

// ===== RATING BAR HTML =====
function ratingBar(label, icon, score) {
  return `
    <div class="rating-row">
      <span class="rating-label">${icon} ${label}</span>
      <div class="rating-bar-track">
        <div class="rating-bar-fill" style="width:${score * 10}%"></div>
      </div>
      <span class="rating-score">${score}<span class="rating-max">/10</span></span>
    </div>
  `;
}

// ===== BADGE HTML =====
function badgeHtml(badge) {
  const color = BADGE_COLORS[badge] || "#ff4500";
  return `<span class="badge" style="background:${color}">${badge}</span>`;
}

// ===== CREATE PRODUCT CARD HTML =====
function createCard(product) {
  const color = BADGE_COLORS[product.badge] || "#ff4500";
  return `
    <article class="product-card" itemscope itemtype="https://schema.org/Product">
      <a href="product.html?id=${product.id}" class="card-image-link">
        <img src="${product.imageUrl}" alt="${product.title}" loading="lazy" itemprop="image" />
        <span class="badge card-badge" style="background:${color}">${product.badge}</span>
      </a>
      <div class="product-card-body">
        <p class="product-category">${product.category}</p>
        <h3 itemprop="name">
          <a href="product.html?id=${product.id}" style="color:inherit;text-decoration:none;">${product.title}</a>
        </h3>
        <p class="product-tagline">"${product.tagline}"</p>
        <p class="verdict-preview">${product.verdict.substring(0, 100)}...</p>
        <div class="card-ratings">
          ${ratingBar('Coolness', '😎', product.ratings.coolness)}
          ${ratingBar('Gift Score', '🎁', product.ratings.giftScore)}
        </div>
        <div class="product-card-footer" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
          <span class="product-price" itemprop="price" content="${product.price.replace('$','')}">${product.price}</span>
          <a href="${product.affiliateUrl}" target="_blank" rel="noopener sponsored" class="btn-amazon-small">
            See it on Amazon →
          </a>
        </div>
      </div>
    </article>
  `;
}

// ===== RENDER HOMEPAGE =====
function renderHome() {
  const featuredGrid = document.getElementById('featured-grid');
  const allGrid = document.getElementById('all-grid');
  if (!featuredGrid || !allGrid) return;
  const featured = PRODUCTS.filter(p => p.featured);
  featuredGrid.innerHTML = featured.map(createCard).join('');
  allGrid.innerHTML = PRODUCTS.map(createCard).join('');
}

// ===== RENDER PRODUCT PAGE =====
function renderProduct() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id) return;

  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  document.title = `${product.title} — The Tee Edit`;
  document.querySelector('meta[name="description"]').setAttribute('content', product.description);

  const container = document.getElementById('product-detail');
  if (!container) return;

  const designHtml = product.designUrl ? `
    <div class="image-panel">
      <span class="image-label">The Design</span>
      <img src="${product.designUrl}" alt="${product.title} design" />
    </div>
  ` : '';

  container.innerHTML = `
    <section class="product-hero">
      <div class="container product-layout">

        <!-- LEFT: Images -->
        <div class="product-images">
          <div class="image-panel">
            <span class="image-label">Mockup</span>
            <img src="${product.imageUrl}" alt="${product.title}" itemprop="image" />
          </div>
          ${designHtml}
        </div>

        <!-- RIGHT: Info -->
        <div class="product-info">
          <a href="index.html" class="back-link">← Back to The Tee Edit</a>

          <div class="product-top">
            ${badgeHtml(product.badge)}
            <p class="product-hero-category">${product.category}</p>
          </div>

          <h1 itemprop="name">${product.title}</h1>
          <p class="product-hero-tagline">"${product.tagline}"</p>

          <!-- Our Verdict -->
          <div class="verdict-box">
            <p class="verdict-label">✍️ Our Verdict</p>
            <p class="verdict-text">${product.verdict}</p>
          </div>

          <!-- Ratings -->
          <div class="ratings-box">
            <p class="ratings-title">Our Scores</p>
            ${ratingBar('Coolness', '😎', product.ratings.coolness)}
            ${ratingBar('Wearability', '👕', product.ratings.wearability)}
            ${ratingBar('Gift Score', '🎁', product.ratings.giftScore)}
            ${ratingBar('Conversation Starter', '💬', product.ratings.conversationStarter)}
          </div>

          <p class="product-hero-desc">${product.description}</p>

          <div class="product-hero-price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
            <span itemprop="price" content="${product.price.replace('$','')}">${product.price}</span>
          </div>

          <a href="${product.affiliateUrl}" target="_blank" rel="noopener sponsored" class="btn-primary">
            🛒 Check Price on Amazon
          </a>

          <div class="tags">
            ${product.tags.map(t => `<span class="tag">#${t}</span>`).join('')}
          </div>

          <div class="gift-box">
            <h3>🎁 Why it makes a great gift</h3>
            <p>${product.whyGift}</p>
          </div>
        </div>

      </div>
    </section>
  `;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "description": product.description,
    "image": product.imageUrl,
    "offers": {
      "@type": "Offer",
      "price": product.price.replace('$',''),
      "priceCurrency": "USD",
      "url": product.affiliateUrl,
      "availability": "https://schema.org/InStock"
    }
  };
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

// ===== INIT =====
if (document.getElementById('featured-grid')) renderHome();
if (document.getElementById('product-detail')) renderProduct();
