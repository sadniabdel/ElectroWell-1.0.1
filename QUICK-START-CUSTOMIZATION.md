# Quick Start: Adding Theme Customization Options

## 🚀 5-Minute Implementation

### Step 1: Add to schema.json (2 minutes)

Open `/ElectroWell+Stencil-1.0.0/schema.json` and **BEFORE the closing `]` bracket**, paste the content from `/schema-additions.json`.

**Location to paste:**
```json
  },
  {
    "name": "Other Settings",
    //... existing content ...
  }
  // ← Paste new sections HERE (before this closing bracket)
]
```

### Step 2: Add Defaults to config.json (1 minute)

Open `/ElectroWell+Stencil-1.0.0/config.json` and in the `"settings"` object, add:

```json
"topbar_promotion_enabled": true,
"topbar_promotion_image": "/content/top-bar-promotion.png",
"header_phone_number": "1-800-123-4567",
"header_phone_label": "Customer Service"
```

*(See full list in THEME-CUSTOMIZATION-GUIDE.md)*

### Step 3: Update Templates (2 minutes)

Update these template files with code from the guide:

**Priority Files:**
1. `templates/components/common/header.html` - Top bar, phone, shipping message
2. `templates/components/common/navigation.html` - Phone & help links
3. `templates/components/common/footer.html` - Footer customization

### Step 4: Test

1. Upload theme to BigCommerce
2. Go to **Storefront → My Themes → Customize**
3. Look for new sections in sidebar:
   - Header & Top Bar
   - Homepage Content
   - Megamenu Settings
   - Footer Content

---

## 🎯 Most Common Use Cases

### Use Case 1: Change Top Bar Promotion Image

**In Theme Editor:**
1. Go to "Header & Top Bar" section
2. Find "Top Bar Promotion Image URL"
3. Enter: `/content/summer-sale.jpg`
4. Find "Top Bar Promotion Link URL"
5. Enter: `/summer-sale`
6. Click Save

**Result:** Top bar now shows your summer sale image with link!

### Use Case 2: Update Phone Number

**In Theme Editor:**
1. Go to "Header & Top Bar" section
2. Find "Phone Number"
3. Enter: `1-800-555-1234`
4. Find "Phone Label Text"
5. Enter: `24/7 Support`
6. Click Save

**Result:** Header shows "24/7 Support: 1-800-555-1234"

### Use Case 3: Add Shop by Category Section

**In Theme Editor:**
1. Go to "Homepage Content" section
2. Find "Shop by Category Section"
3. Check "Enable Shop by Category"
4. For each category:
   - Enter image URL: `/content/category-electronics.jpg`
   - Enter link: `/electronics`
   - Enter title: `Electronics`
5. Click Save

**Result:** Homepage shows clickable category grid!

---

## 📂 File Structure

```
ElectroWell+Stencil-1.0.0/
├── config.json                    ← Add default values here
├── schema.json                    ← Add new settings here
└── templates/
    ├── components/
    │   ├── common/
    │   │   ├── header.html       ← Update for top bar & shipping
    │   │   ├── navigation.html   ← Update for phone & help
    │   │   └── footer.html       ← Update for footer content
    │   └── halothemes/
    │       ├── halo-megamenu.html              ← Update for megamenu
    │       ├── home-right-slider-banners.html  ← Update for banners
    │       ├── homeShopByTopCategory.html      ← Update for categories
    │       ├── home-middle-banner.html         ← Update for banner
    │       └── home-brand-slider.html          ← Update for brands
    └── pages/
        └── home.html             ← Update for slideshow mode
```

---

## 🖼️ How to Upload Images

### Quick Method (WebDAV)

1. **Enable WebDAV**: BigCommerce → Server Settings → File Access (WebDAV)
2. **Get Credentials**: Note your WebDAV URL, username, password
3. **Connect**:
   - **Mac**: Finder → Go → Connect to Server
   - **Windows**: Map Network Drive
   - **URL Format**: `https://store-xxxxx.mybigcommerce.com/dav`
4. **Upload**: Drag images to `/content/` folder
5. **Reference**: Use `/content/your-image.jpg` in Theme Editor

### Alternative Method (Product Images)

1. **Upload**: Products → Product Images → Upload
2. **Copy URL**: Click image → Copy URL
3. **Paste**: In Theme Editor setting

---

## 💡 Pro Tips

### Tip 1: Use Descriptive Filenames
```
✅ Good: /content/summer-2025-sale-banner.jpg
❌ Bad:  /content/image123.jpg
```

### Tip 2: Optimize Images First
- Use TinyPNG.com or Squoosh.app
- Target size: Under 200KB
- Format: JPG for photos, PNG for graphics

### Tip 3: Test on Mobile
- Always check responsive behavior
- Use browser dev tools (F12)
- Test on actual mobile devices if possible

### Tip 4: Keep Backups
- Download theme before making changes
- Save a copy of original files
- Use version control (git) if possible

---

## 🐛 Common Issues & Fixes

### Issue: "Settings not showing in Theme Editor"
**Fix:**
- Check JSON syntax at JSONLint.com
- Verify commas between objects
- Ensure no duplicate IDs
- Re-upload theme

### Issue: "Image not loading"
**Fix:**
- Check path starts with `/` or `http`
- Verify file uploaded to correct folder
- Check file extension (.jpg, .png, not .jpeg)
- Clear cache and hard refresh (Ctrl+Shift+R)

### Issue: "Changes not saving"
**Fix:**
- Check browser console for errors (F12)
- Try incognito/private mode
- Use different browser
- Verify theme is published (not draft)

---

## ✅ Checklist

Before deploying to production:

- [ ] All JSON files have valid syntax
- [ ] Default values set in config.json
- [ ] Schema settings added to schema.json
- [ ] Templates updated with new Handlebars code
- [ ] Images uploaded to /content/ folder
- [ ] Theme tested in staging
- [ ] Mobile responsive check
- [ ] All links tested
- [ ] Images optimized for web
- [ ] Theme uploaded to BigCommerce
- [ ] Settings accessible in Theme Editor
- [ ] Store owner can modify settings
- [ ] Changes save successfully
- [ ] No console errors

---

## 🆘 Need Help?

1. **Check Full Guide**: Read `THEME-CUSTOMIZATION-GUIDE.md` for detailed examples
2. **Review Schema**: See `schema-additions.json` for complete settings
3. **BigCommerce Docs**: https://developer.bigcommerce.com/stencil-docs
4. **Community**: https://support.bigcommerce.com/s/community

---

## 🎉 Result

After implementation, store owners can customize:

✅ Top bar promotion images & links
✅ Free shipping messages
✅ Phone numbers & contact info
✅ Megamenu featured images & HTML
✅ Homepage slideshow mode
✅ Homepage banners & categories
✅ Footer columns & social links
✅ Payment icons

**All through Theme Editor - No code required!** 🚀
