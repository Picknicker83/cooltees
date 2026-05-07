// ===== PRODUCT DATA =====
// badge options: "This Week's Pick" | "Hidden Gem" | "Cult Classic" | "Rising" | "Perfect Gift" | "Editor's Choice"
// ratings: score out of 10

const PRODUCTS = [
  {
    "id": "1",
    "slug": "vintage-sunset-tee",
    "title": "The Vintage Sunset Tee",
    "tagline": "Wear the golden hour.",
    "verdict": "This one caught us off guard. The design is deceptively simple but gets more interesting the longer you look at it. Wear it once and someone will ask where you got it.",
    "fullStory": "There's a certain kind of t-shirt that doesn't try too hard — and that's exactly what makes it so hard to ignore. The Vintage Sunset Tee is one of those rare finds that feels like it's been in someone's wardrobe for 30 years, even though you just pulled it out of an Amazon box. The faded, sun-drenched graphic channels the energy of a 1970s road trip: windows down, no plans, nowhere to be. It's printed on soft, relaxed-fit cotton that drapes well without being baggy, and the muted color palette means it works with almost anything in your wardrobe. Jeans, chinos, shorts — this shirt doesn't care. It just looks good. We've seen a lot of sunset graphics come and go, but this one has a restraint to it that most don't. The colors are faded just enough to feel authentic, and the placement on the chest is exactly right. Not too big, not too small. Just right.",
    "whoIsItFor": "The Vintage Sunset Tee is made for people who care about how they look but pretend they don't. It's for the traveller, the weekend adventurer, the person who'd rather be on a road trip than in a meeting. Age-wise it works for anyone — we've seen it look great on 20-somethings and 50-somethings alike.",
    "bestWornFor": ["Road trips & travel", "Weekend hangouts", "Festivals & outdoor events", "Casual Fridays at the office", "Beach days"],
    "whyGift": "Perfect for the friend who has everything but still manages to look underdressed. This one fixes that. It's the kind of gift that gets worn immediately — not tucked in a drawer.",
    "badge": "Hidden Gem",
    "ratings": { "coolness": 9, "wearability": 8, "giftScore": 7, "conversationStarter": 10 },
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
    "fullStory": "There's something timeless about mountain graphics on a black tee. Done badly, they look like every other shirt at a souvenir shop. Done well — like this one — they become a wardrobe staple you reach for again and again. The Midnight Mountain Tee sits firmly in the second category. The graphic is bold but not oversized, detailed but not cluttered. The mountain range sits perfectly on the chest, rendered in clean white lines that pop against the deep black base. The fabric is heavyweight cotton — the kind that feels substantial without being stiff — and the relaxed fit means it works whether you're actually heading into the mountains or just heading to the pub. What sets this apart from the hundreds of mountain tees out there is the quality of the print. It's crisp, well-registered, and feels like it'll last. No cracking after three washes. No peeling edges. Just a solid graphic that keeps looking good the longer you wear it.",
    "whoIsItFor": "Hikers, climbers, and outdoor enthusiasts will love this — but honestly, you don't need to have ever seen a mountain to pull it off. It works just as well for the city dweller who just appreciates good design. It leans masculine but is genuinely unisex in its appeal.",
    "bestWornFor": ["Hiking & trail days", "Camping weekends", "Casual everyday wear", "Layering under a flannel shirt", "Gift for the outdoorsy friend"],
    "whyGift": "The ultimate gift for hikers, adventurers, or anyone who just loves the mountains. They'll wear it every week — guaranteed. It's the kind of shirt that makes people think you spent way more than you did.",
    "badge": "Editor's Choice",
    "ratings": { "coolness": 9, "wearability": 9, "giftScore": 8, "conversationStarter": 7 },
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
    "fullStory": "The 80s are back — and honestly, they never really left. The Retro Wave Tee leans all the way into the synthwave aesthetic with a neon-drenched graphic that's bold, fun, and surprisingly wearable. Yes, it's loud. Yes, people will notice. But here's the thing: in a sea of plain tees and minimal basics, a shirt like this is genuinely refreshing. It says something about the person wearing it. Namely, that they don't take themselves too seriously — and that's always cool. The print itself is a work of art in the best possible way: layered gradients, geometric shapes, and that unmistakable retro palette of purple, pink, and electric blue. It's printed on ultra-soft ring-spun cotton that feels great against the skin and holds up wash after wash. Pair it with black jeans and white sneakers for maximum effect. Or just throw it on with whatever — it'll carry the whole outfit.",
    "whoIsItFor": "This one is for the extroverts, the nostalgics, and the people who have a poster of Back to the Future on their wall. It works brilliantly for anyone with a bold personal style, and it's an absolute hit at themed parties, festivals, and anywhere else where standing out is a feature rather than a bug.",
    "bestWornFor": ["80s themed parties", "Festivals & concerts", "Weekend outings", "Gift for the fun one in the group", "Anyone who loves retro design"],
    "whyGift": "For the person in your life who unironically loves the 80s — or just great design. Birthday, Christmas, or just because. It's the gift that gets an actual reaction when they open it.",
    "badge": "This Week's Pick",
    "ratings": { "coolness": 10, "wearability": 7, "giftScore": 9, "conversationStarter": 10 },
    "price": "$22.99",
    "affiliateUrl": "https://amzn.to/PLACEHOLDER3",
    "imageUrl": "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80",
    "designUrl": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    "category": "Retro",
    "tags": ["retro", "80s", "synthwave", "fun", "gift"],
    "featured": false
  },
  {
    "id": "4",
    "slug": "minimal-black-tee",
    "title": "The Minimal Black Tee",
    "tagline": "Less is more. Always.",
    "verdict": "The anti-statement statement shirt. No graphics, no slogans — just an impossibly well-cut black tee that makes everything else in your wardrobe look better.",
    "fullStory": "Sometimes the best shirt is the one that says nothing at all. The Minimal Black Tee is a masterclass in restraint — no graphics, no logos, no gimmicks. Just a perfectly weighted black cotton tee with a cut that actually flatters. We know what you're thinking: it's just a black t-shirt. And you're right. But here's what separates a great black tee from a forgettable one: the weight of the fabric, the fit through the shoulders, the length of the hem, the way the neckline sits. This one gets all of it right. It's the kind of shirt that makes your jeans look more expensive, your jacket look more intentional, and your whole outfit look more considered. Every wardrobe needs one. Most people just haven't found the right one yet.",
    "whoIsItFor": "Everyone. Genuinely. This is the most democratic shirt on the site. It works for any age, any style, any occasion. If you're buying a gift and you have no idea what to get — this is the answer.",
    "bestWornFor": ["Everyday wear", "Layering under jackets & shirts", "Smart casual occasions", "Travel (pairs with everything)", "The person who 'doesn't really wear graphic tees'"],
    "whyGift": "The perfect gift for the person who's impossible to buy for. It's useful, it's stylish, and it's something they'll actually wear. No joke — this might be the most reliably appreciated gift on the site.",
    "badge": "Cult Classic",
    "ratings": { "coolness": 7, "wearability": 10, "giftScore": 10, "conversationStarter": 4 },
    "price": "$19.99",
    "affiliateUrl": "https://amzn.to/PLACEHOLDER4",
    "imageUrl": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80",
    "designUrl": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
    "category": "Minimal",
    "tags": ["minimal", "black", "classic", "gift", "unisex"],
    "featured": false
  },
  {
    "id": "5",
    "slug": "nature-botanica-tee",
    "title": "The Botanica Tee",
    "tagline": "Wear the wild.",
    "verdict": "Quietly stunning. The kind of shirt that earns compliments from people with genuinely good taste. The botanical print is detailed, considered, and completely unique.",
    "fullStory": "Not every great shirt needs to shout. The Botanica Tee whispers — and somehow, that makes it more memorable than anything louder. The design features a beautifully rendered botanical illustration across the chest: leaves, stems, and flowers rendered in fine lines on a soft sage green base. It's the kind of print you'd expect to find in an independent boutique for three times the price. The fabric is lightweight and breathable — ideal for warmer months — and the relaxed cut means it works equally well tucked in or left out. What really sets this apart is the print quality. Botanical illustrations are notoriously hard to get right on fabric — the fine lines tend to blur or bleed. Not here. Every detail is crisp and clean, which makes the whole thing feel genuinely premium.",
    "whoIsItFor": "Nature lovers, plant parents, and anyone with an appreciation for considered design. It skews slightly feminine in its aesthetic but works beautifully as a unisex pick. Gardeners, hikers, and anyone who'd rather be outside will particularly love it.",
    "bestWornFor": ["Garden parties & outdoor events", "Farmers markets & weekend brunches", "Nature walks & light hiking", "Gift for the plant lover", "Summer days"],
    "whyGift": "The go-to gift for the plant lover, the nature enthusiast, or anyone who appreciates art on fabric. It feels thoughtful and personal — even if you found it in 30 seconds on Amazon.",
    "badge": "Rising",
    "ratings": { "coolness": 8, "wearability": 9, "giftScore": 9, "conversationStarter": 8 },
    "price": "$23.99",
    "affiliateUrl": "https://amzn.to/PLACEHOLDER5",
    "imageUrl": "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=800&q=80",
    "designUrl": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80",
    "category": "Nature",
    "tags": ["nature", "botanical", "plants", "gift", "unisex"],
    "featured": false
  }
  ,{
    "id": "6",
    "slug": "houston-i-have-so-many-problems",
    "title": "Houston, I Have So Many Problems",
    "tagline": "One small step for cat, one giant problem for mankind.",
    "verdict": "We didn't know we needed a cat astronaut shirt until we saw this one. The illustration is genuinely excellent — detailed, characterful, and funny without being try-hard. This is the rare shirt that makes people laugh AND think 'wow, that's actually a great design'.",
    "fullStory": "Let's be honest: the internet loves cats. The internet also loves space. So why has it taken this long for someone to combine them this perfectly? The Houston, I Have So Many Problems tee is exactly the kind of shirt that stops you mid-scroll and makes you think 'I need that'. The centrepiece is a beautifully rendered hand-drawn illustration of a cat in a full astronaut suit, floating weightlessly through space with the kind of serene, unbothered expression that only cats can pull off. Surrounding it: retro pink stars, bold vintage typography, and the iconic Houston reference twisted into something genuinely clever. The artwork has real quality to it — this isn't a cheap clip-art job. The linework on the spacesuit is intricate and detailed, the composition is balanced, and the colour palette (black ink, coral red, white base) is understated enough to let the design breathe. It's funny, it's well-crafted, and it's exactly the kind of shirt that earns a genuine laugh from strangers.",
    "whoIsItFor": "Cat lovers, obviously — but honestly this one goes way beyond the cat crowd. It's for anyone who appreciates clever humour and good illustration. Science fans, space nerds, people with a self-deprecating sense of humour, and anyone who's ever felt like they have, in fact, so many problems. Age range: pretty much anyone from teens to 50s.",
    "bestWornFor": ["Cat lover gifts", "Space & science fans", "Casual everyday wear", "Birthday gifts (especially for cat owners)", "Anyone who needs a laugh"],
    "whyGift": "This is one of those rare gifts that gets an actual reaction when unwrapped — a real laugh, followed by immediately putting it on. Perfect for cat lovers, space nerds, or literally anyone with a sense of humour. Extremely hard to go wrong with this one.",
    "badge": "Hidden Gem",
    "ratings": { "coolness": 9, "wearability": 8, "giftScore": 10, "conversationStarter": 10 },
    "price": "$24.99",
    "affiliateUrl": "https://amzn.to/PLACEHOLDER6",
    "imageUrl": "images/cat-in-outer-space.jpg",
    "designUrl": "images/cat-in-outer-space.jpg",
    "category": "Funny",
    "tags": ["cat", "space", "funny", "gift", "humor"],
    "featured": true
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

// ===== RATING BAR =====
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

// ===== BADGE =====
function badgeHtml(badge) {
  const color = BADGE_COLORS[badge] || "#ff4500";
  return `<span class="badge" style="background:${color}">${badge}</span>`;
}

// ===== PRODUCT CARD =====
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
        <p class="verdict-preview">${product.verdict.substring(0, 110)}...</p>
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
  featuredGrid.innerHTML = PRODUCTS.filter(p => p.featured).map(createCard).join('');
  allGrid.innerHTML = PRODUCTS.map(createCard).join('');
}

// ===== RENDER PRODUCT PAGE =====
function renderProduct() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id) return;

  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  document.title = `${product.title} Review — The Tee Edit`;
  document.querySelector('meta[name="description"]').setAttribute('content', product.verdict);

  const container = document.getElementById('product-detail');
  if (!container) return;

  const designHtml = product.designUrl ? `
    <div class="image-panel">
      <span class="image-label">The Design</span>
      <img src="${product.designUrl}" alt="${product.title} design" />
    </div>` : '';

  const wornForItems = product.bestWornFor.map(w => `<li>✓ ${w}</li>`).join('');

  container.innerHTML = `
    <section class="product-hero">
      <div class="container product-layout">

        <!-- LEFT: Images (sticky) -->
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

          <!-- Verdict -->
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

          <!-- Price + CTA -->
          <div class="price-cta">
            <div class="product-hero-price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
              <span itemprop="price" content="${product.price.replace('$','')}">${product.price}</span>
            </div>
            <a href="${product.affiliateUrl}" target="_blank" rel="noopener sponsored" class="btn-primary">
              🛒 Check Price on Amazon
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- FULL STORY SECTION -->
    <section class="content-section">
      <div class="container content-layout">

        <div class="content-main">
          <!-- Full Story -->
          <div class="content-block">
            <h2>📖 The Full Story</h2>
            <p>${product.fullStory}</p>
          </div>

          <!-- Who is it for -->
          <div class="content-block">
            <h2>👤 Who Is It For?</h2>
            <p>${product.whoIsItFor}</p>
          </div>
        </div>

        <div class="content-side">
          <!-- Best worn for -->
          <div class="side-box">
            <h3>🎯 Best Worn For</h3>
            <ul class="worn-list">${wornForItems}</ul>
          </div>

          <!-- Gift box -->
          <div class="side-box gift-side">
            <h3>🎁 As a Gift</h3>
            <p>${product.whyGift}</p>
          </div>

          <!-- Tags -->
          <div class="tags dark-tags">
            ${product.tags.map(t => `<span class="tag">#${t}</span>`).join('')}
          </div>
        </div>

      </div>
    </section>
  `;

  // Schema.org
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "description": product.fullStory,
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
