// ===== LOAD PRODUCTS FROM JSON =====
async function loadProducts() {
  const res = await fetch('data/products.json');
  const products = await res.json();
  return products;
}

// ===== CREATE PRODUCT CARD HTML =====
function createCard(product) {
  return `
    <article class="product-card" itemscope itemtype="https://schema.org/Product">
      <a href="product.html?id=${product.id}">
        <img src="${product.imageUrl}" alt="${product.title}" loading="lazy" itemprop="image" />
      </a>
      <div class="product-card-body">
        <p class="product-category">${product.category}</p>
        <h3 itemprop="name"><a href="product.html?id=${product.id}" style="color:inherit;text-decoration:none;">${product.title}</a></h3>
        <p class="product-tagline">"${product.tagline}"</p>
        <p class="product-description">${product.description.substring(0, 120)}...</p>
        <div class="product-card-footer" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
          <span class="product-price" itemprop="price" content="${product.price.replace('$','')}">${product.price}</span>
          <a href="${product.affiliateUrl}" target="_blank" rel="noopener sponsored" class="btn-amazon-small">
            Buy on Amazon →
          </a>
        </div>
      </div>
    </article>
  `;
}

// ===== RENDER HOMEPAGE =====
async function renderHome() {
  const products = await loadProducts();

  const featuredGrid = document.getElementById('featured-grid');
  const allGrid = document.getElementById('all-grid');

  if (!featuredGrid || !allGrid) return;

  const featured = products.filter(p => p.featured);
  const all = products;

  featuredGrid.innerHTML = featured.map(createCard).join('');
  allGrid.innerHTML = all.map(createCard).join('');
}

// ===== RENDER PRODUCT PAGE =====
async function renderProduct() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id) return;

  const products = await loadProducts();
  const product = products.find(p => p.id === id);
  if (!product) return;

  // Update page title & meta
  document.title = `${product.title} — CoolTees`;
  document.querySelector('meta[name="description"]').setAttribute('content', product.description);

  const container = document.getElementById('product-detail');
  if (!container) return;

  container.innerHTML = `
    <section class="product-hero">
      <div class="container">
        <div>
          <a href="index.html" class="back-link">← Back to all shirts</a>
          <p class="product-hero-category">${product.category}</p>
          <h1 itemprop="name">${product.title}</h1>
          <p class="product-hero-tagline">"${product.tagline}"</p>
          <p class="product-hero-desc">${product.description}</p>
          <div class="product-hero-price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
            <span itemprop="price" content="${product.price.replace('$','')}">${product.price}</span>
          </div>
          <a href="${product.affiliateUrl}" target="_blank" rel="noopener sponsored" class="btn-primary">
            🛒 Buy on Amazon
          </a>
          <div class="tags">
            ${product.tags.map(t => `<span class="tag">#${t}</span>`).join('')}
          </div>
          <div class="gift-box">
            <h3>🎁 Why it makes a great gift</h3>
            <p>${product.whyGift}</p>
          </div>
        </div>
        <img src="${product.imageUrl}" alt="${product.title}" itemprop="image" />
      </div>
    </section>
  `;

  // Schema.org JSON-LD for SEO
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
