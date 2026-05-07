# 📦 How to Add or Update Products

The entire website is controlled by ONE file:

👉 `data/products.json`

---

## Adding a new product

Copy this block and paste it into the products.json file (inside the [ ] brackets, separated by a comma):

```json
{
  "id": "4",
  "slug": "your-product-name",
  "title": "Your Product Title",
  "tagline": "A short catchy line.",
  "description": "Write a few sentences describing the shirt. Why is it cool? Who is it for?",
  "whyGift": "Explain why this makes a great gift.",
  "price": "$24.99",
  "affiliateUrl": "https://amzn.to/YOURLINK",
  "imageUrl": "https://your-image-url.jpg",
  "category": "Vintage",
  "tags": ["tag1", "tag2", "gift"],
  "featured": false
}
```

## Changing an affiliate URL

Find the product in products.json and replace the `affiliateUrl` value.

## Making a product "Featured"

Set `"featured": true` — it will show up in the Featured section on the homepage.

## Image tips

- Use the Amazon product image URL directly
- Or use Unsplash: https://images.unsplash.com/photo-XXXXX?w=800&q=80
- Recommended size: at least 800x1000px

