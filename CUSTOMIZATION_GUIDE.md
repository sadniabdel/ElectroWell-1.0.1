# ElectroWell Theme Customization Guide

## 🎨 How to Customize Your Theme

Due to BigCommerce Stencil limitations, custom text/image/URL fields cannot appear in the Theme Editor UI. Instead, you'll customize these by editing the `config.json` file directly.

## 📝 Where to Edit

**File Location:** `config.json`

You can edit this file:
1. **Locally**: Before uploading your theme
2. **Via WebDAV**: After uploading to BigCommerce
3. **Via Theme Download**: Download, edit, and re-upload

---

## 🎯 Available Customization Options

All settings are in the `"settings"` section of config.json. Simply find the setting name and change its value.

### 1. Header Top Bar Promotion

```json
"show_top_bar_promotion": false,           // Change to true to show
"top_bar_promotion_image": "/product_images/uploaded_images/top-bar-promotion.png",
"top_bar_promotion_link": "#"
```

**How to use:**
1. Upload your banner image to BigCommerce
2. Copy the image URL
3. Paste it in `top_bar_promotion_image`
4. Set `show_top_bar_promotion` to `true`

---

### 2. Header Free Shipping Message

```json
"header_free_shipping_text": "Free International Shipping. No Minimum Purchase Required*",
"header_free_shipping_link": "#",
"header_free_shipping_detail": "Detail"
```

**Example customization:**
```json
"header_free_shipping_text": "Free Shipping on Orders Over $50",
"header_free_shipping_link": "/shipping-policy",
"header_free_shipping_detail": "Learn More"
```

---

### 3. Navigation Customization

```json
"nav_phone_label": "Customer Service",
"nav_need_help_text": "Need Help?",
"nav_need_help_link": "#"
```

**Example customization:**
```json
"nav_phone_label": "Call Us Now",
"nav_need_help_text": "Support",
"nav_need_help_link": "/contact-us"
```

---

### 4. Megamenu Images (4 Images)

```json
"megamenu_image_1": "/product_images/uploaded_images/image-menu-1.png",
"megamenu_image_1_link": "#placeholder_link",
"megamenu_image_2": "/product_images/uploaded_images/image-menu-2.png",
"megamenu_image_2_link": "#placeholder_link",
// ... continues for image_3 and image_4
```

**Steps:**
1. Upload 4 images to BigCommerce (recommended size: 200x200px)
2. Get the image URLs
3. Replace the values above
4. Set the links to your desired category/product pages

---

### 5. Megamenu Brand Images (6 Brands)

```json
"megamenu_brand_1": "/product_images/uploaded_images/image-menu-brand-1.png",
"megamenu_brand_1_link": "/area-rugs/",
// ... continues for brand_2 through brand_6
```

---

### 6. Megamenu Style Options

```json
"megamenu_item2_align": "left",        // Options: "left", "right", "center", "fullWidth"
"megamenu_item2_width": "700px",
"megamenu_item2_type": "noImage",      // Options: "noImage", "imageLeft", "imageRight", "imageTop"
"megamenu_item2_columns": "3",

"megamenu_item3_align": "left",
"megamenu_item3_width": "900px",
"megamenu_item3_type": "imageTop",
"megamenu_item3_columns": "4"
```

---

### 7. Home Page Custom HTML Block

```json
"home_custom_html_label": "The Store Advantage",
"home_custom_box1_icon": "fa-check",
"home_custom_box1_title": "Shop with confidence",
"home_custom_box2_icon": "fa-cog",
"home_custom_box2_title": "Customizable PCs",
"home_custom_box3_icon": "fa-star",
"home_custom_box3_title": "Rewards Program",
"home_custom_box4_icon": "fa-rotate-left",
"home_custom_box4_title": "14-Day Free Returns"
```

**Icon options** (FontAwesome classes):
- `fa-check` - Checkmark
- `fa-cog` - Settings/Gear
- `fa-star` - Star
- `fa-truck` - Delivery truck
- `fa-shield` - Security shield
- `fa-credit-card` - Credit card
- `fa-heart` - Heart
- `fa-thumbs-up` - Thumbs up
- `fa-bolt` - Lightning bolt
- `fa-gift` - Gift box

[See more icons at FontAwesome](https://fontawesome.com/v4.7.0/icons/)

---

### 8. Home Right Banner

```json
"home_right_banner_image": "/product_images/uploaded_images/right-slide-banner.jpg",
"home_right_banner_link": "#placeholder_link",
"home_right_banner_title": "Bundle"
```

---

### 9. Shop By Top Categories (6 Categories)

```json
"home_top_category_heading": "Shop by",
"home_top_category_heading_highlight": "Top Categories",

"home_category1_image": "/product_images/uploaded_images/top-categories-1.jpg",
"home_category1_link": "#",
"home_category1_title": "Home Appliances",
"home_category1_desc": "Sale up to 30% off on selected items",
// ... continues for category2 through category6
```

**To customize a category:**
1. Upload category image (recommended: 300x300px)
2. Set the image URL
3. Set the link to your category page
4. Customize title and description

---

### 10. Home Middle Banner

```json
"home_middle_banner_image": "/product_images/uploaded_images/banner-first-block.jpg",
"home_middle_banner_link": "#"
```

---

### 11. Home Brand Slider (10 Brands)

```json
"home_brand1_image": "/product_images/uploaded_images/brands-1.jpg",
"home_brand1_link": "#",
"home_brand1_title": "loremous",
// ... continues for brand2 through brand10
```

**Steps:**
1. Upload brand logos (recommended: 150x80px transparent PNG)
2. Set image URLs
3. Link to brand pages
4. Set brand names as titles

---

### 12. Footer Information

```json
"footer_info_text": "Need help? We're available at",
"footer_info_phone": "1800-000-6890",
"footer_info_email": "service@domain.com"
```

---

### 13. Footer Service Blocks (4 Services)

```json
"footer_service1_title": "Worldwide Delivery",
"footer_service1_text": "Metus tellus ultricies et quam sit amet...",
// ... continues for service2 through service4
```

---

### 14. Footer Payment Icons (5 Methods)

```json
"footer_payment1_image": "/product_images/uploaded_images/skrill.png",
"footer_payment1_link": "#",
"footer_payment1_title": "Skrill",
// ... continues for payment2 through payment5
```

---

## 📤 How to Upload Images

### Method 1: Through BigCommerce Admin
1. Go to **Store Design** → **Image Manager**
2. Upload your images
3. Click on the image to get the URL
4. Copy the URL (it will look like `/product_images/uploaded_images/your-image.png`)
5. Paste it in config.json

### Method 2: Direct File Path
If you place images in your theme's `/assets/img/` folder, reference them like:
```json
"home_brand1_image": "{{cdn 'assets/img/brand1.png'}}"
```

---

## 🔄 How to Apply Changes

### Method A: Before Upload
1. Edit `ElectroWell+Stencil-1.0.0/config.json`
2. Save the file
3. Zip the theme folder
4. Upload to BigCommerce: **Storefront** → **My Themes** → **Upload Theme**

### Method B: After Upload (WebDAV)
1. Enable WebDAV in BigCommerce
2. Connect to your store via WebDAV client
3. Navigate to `/template/config.json`
4. Download, edit, and re-upload
5. Changes apply immediately

### Method C: Download → Edit → Re-upload
1. Download your current theme from BigCommerce
2. Extract the ZIP
3. Edit `config.json`
4. Re-zip and upload

---

## 🎨 Using SVG Logos

For SVG logos, BigCommerce has a built-in logo uploader:
1. Go to **Storefront** → **My Themes** → **Customize**
2. Click **Logo**
3. Upload your SVG file

The theme will automatically use your uploaded logo.

---

## ⚠️ Important Notes

1. **Always backup config.json** before making changes
2. **Validate JSON syntax** - one missing comma breaks everything
3. **Image paths** must be exact - case sensitive
4. **Test locally** with Stencil CLI before uploading (optional)
5. **URLs starting with `/`** are relative to your store domain

---

## 🛠️ Testing Your Changes

After editing config.json:
1. Save the file
2. Upload/apply to your store
3. Clear your browser cache
4. View your store to see changes

---

## 💡 Quick Tips

- **Finding image URLs**: Upload to Image Manager, right-click image, copy URL
- **Placeholder links**: Use `#` for links you'll add later
- **Description text**: Can be left empty with `""`
- **Icon classes**: Browse [FontAwesome 4.7](https://fontawesome.com/v4.7.0/icons/)

---

## 🆘 Need Help?

If something doesn't work:
1. Check for JSON syntax errors (use jsonlint.com)
2. Verify image URLs are correct
3. Clear browser cache
4. Check BigCommerce error logs

---

## 📋 Complete Settings Reference

Here's the complete list of all customizable settings:

<details>
<summary>Click to expand full settings list</summary>

**Header:**
- show_top_bar_promotion
- top_bar_promotion_image
- top_bar_promotion_link
- header_free_shipping_text
- header_free_shipping_link
- header_free_shipping_detail
- nav_phone_label
- nav_need_help_text
- nav_need_help_link

**Megamenu:**
- megamenu_image_1 through megamenu_image_4 (with _link)
- megamenu_brand_1 through megamenu_brand_6 (with _link)
- megamenu_item2_align, _width, _type, _columns
- megamenu_item3_align, _width, _type, _columns

**Home Page:**
- home_custom_html_label
- home_custom_box1-4 (with _icon and _title)
- home_right_banner_image, _link, _title
- home_top_category_heading, _heading_highlight
- home_category1-6 (with _image, _link, _title, _desc)
- home_middle_banner_image, _link
- home_brand1-10 (with _image, _link, _title)

**Footer:**
- footer_info_text, _phone, _email
- footer_service1-4 (with _title, _text)
- footer_payment1-5 (with _image, _link, _title)

</details>

---

**Happy Customizing! 🎉**
