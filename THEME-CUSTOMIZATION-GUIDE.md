# Theme Customization Guide - Add Options to BigCommerce Theme Editor

This guide shows you how to add customizable options to **Storefront → My Themes → Customize → Theme Styles**

## 📋 Table of Contents

1. [Understanding the Structure](#understanding-the-structure)
2. [Adding Settings to schema.json](#adding-settings-to-schemajson)
3. [Using Settings in Templates](#using-settings-in-templates)
4. [Complete Implementation](#complete-implementation)

---

## Understanding the Structure

BigCommerce themes use two key files for customization:

### 1. **config.json**
- Default values for all settings
- Located at: `/config.json`

### 2. **schema.json**
- UI definition for Theme Editor
- Field types, labels, options
- Located at: `/schema.json`

### 3. **Template Files**
- Use `{{theme_settings.setting_name}}` to access values
- Located at: `/templates/`

---

## Field Types Available

| Type | Use Case | Example |
|------|----------|---------|
| `text` | Single line text input | URLs, phone numbers, short text |
| `textarea` | Multi-line text | HTML content, long descriptions |
| `color` | Color picker | Background colors, text colors |
| `checkbox` | Enable/disable | Show/hide features |
| `select` | Dropdown menu | Choose from preset options |
| `imageDimension` | Image size settings | Logo size, product images |
| `heading` | Section header | Organize settings visually |
| `paragraph` | Description text | Instructions for users |

---

## Complete Implementation for Your Requests

I'll add settings for all your requested features. Here's the comprehensive solution:

### Step 1: Add New Sections to schema.json

Add these sections to your `schema.json` file (before the closing `]` bracket):


```json
// Copy the entire content from schema-additions.json
// Paste it BEFORE the closing ] bracket in your schema.json file
```

### Step 2: Add Default Values to config.json

Add these default values to your `/config.json` file in the "settings" object:

```json
{
  "settings": {
    // ... existing settings ...
    
    // Header & Top Bar
    "topbar_promotion_enabled": true,
    "topbar_promotion_image": "/content/top-bar-promotion.png",
    "topbar_promotion_link": "/",
    "header_freeshipping_enabled": true,
    "header_freeshipping_text": "Free International Shipping. No Minimum Purchase Required*",
    "header_freeshipping_link": "/shipping",
    "header_phone_enabled": true,
    "header_phone_number": "1-800-123-4567",
    "header_phone_label": "Customer Service",
    "header_needhelp_enabled": true,
    "header_needhelp_link": "/contact-us",
    "header_needhelp_text": "Need Help?",
    
    // Megamenu
    "megamenu_style": "standard",
    "megamenu_featured_image1": "",
    "megamenu_featured_link1": "",
    "megamenu_featured_alt1": "",
    "megamenu_featured_image2": "",
    "megamenu_featured_link2": "",
    "megamenu_featured_alt2": "",
    "megamenu_custom_html_enabled": false,
    "megamenu_custom_html": "",
    
    // Homepage
    "home_slideshow_mode": "box",
    "home_header_html_enabled": false,
    "home_header_html": "",
    "home_right_banners_enabled": true,
    "home_right_banner1_image": "",
    "home_right_banner1_link": "",
    "home_right_banner1_alt": "",
    "home_right_banner2_image": "",
    "home_right_banner2_link": "",
    "home_right_banner2_alt": "",
    "home_right_banner_html": "",
    "home_shop_category_enabled": true,
    "home_shop_category_heading": "Shop by Category",
    "home_category1_image": "",
    "home_category1_link": "",
    "home_category1_title": "",
    "home_category2_image": "",
    "home_category2_link": "",
    "home_category2_title": "",
    "home_category3_image": "",
    "home_category3_link": "",
    "home_category3_title": "",
    "home_category4_image": "",
    "home_category4_link": "",
    "home_category4_title": "",
    "home_middle_banner_enabled": true,
    "home_middle_banner_image": "",
    "home_middle_banner_link": "",
    "home_middle_banner_alt": "",
    "home_brand_slider_enabled": true,
    "home_brand_slider_heading": "Shop by Brand",
    "home_brand_slider_count": 8,
    
    // Footer
    "footer_col1_heading": "About Us",
    "footer_col1_content": "",
    "footer_col2_heading": "Customer Service",
    "footer_col2_content": "",
    "footer_col3_heading": "My Account",
    "footer_col3_content": "",
    "footer_contact_enabled": true,
    "footer_contact_heading": "Contact Us",
    "footer_address": "",
    "footer_email": "",
    "footer_phone": "",
    "footer_logo_enabled": false,
    "footer_logo_image": "",
    "footer_social_enabled": true,
    "social_icon_facebook": "",
    "social_icon_twitter": "",
    "social_icon_instagram": "",
    "social_icon_pinterest": "",
    "social_icon_youtube": "",
    "social_icon_linkedin": "",
    "footer_payment_icons_enabled": true
  }
}
```

---

## Step 3: Update Template Files

Now update your template files to use the new settings:

### 1. **Header Top Bar Promotion** (`templates/components/common/header.html`)

**REPLACE THIS:**
```handlebars
<!-- Begin Top Bar Promotion -->
<div class="header-top hide" id="top-bar-promotion">
    <a href="#" title=""><img src="/product_images/uploaded_images/top-bar-promotion.png" title="top-bar-promotion"></a>
    <a href="javascript:void(0)" class="close"><svg><use xlink:href="#icon-close"></use></svg></a>
</div>
<!-- End Top Bar Promotion -->
```

**WITH THIS:**
```handlebars
<!-- Begin Top Bar Promotion -->
{{#if theme_settings.topbar_promotion_enabled}}
<div class="header-top hide" id="top-bar-promotion">
    <a href="{{theme_settings.topbar_promotion_link}}" title="">
        <img src="{{theme_settings.topbar_promotion_image}}" title="top-bar-promotion" alt="Promotion">
    </a>
    <a href="javascript:void(0)" class="close"><svg><use xlink:href="#icon-close"></use></svg></a>
</div>
{{/if}}
<!-- End Top Bar Promotion -->
```

---

### 2. **Header Free Shipping Message** (`templates/components/common/header.html`)

**REPLACE THIS:**
```handlebars
<div class="col-left col-sm-4">
    <p> <a href="#" title="Detail">Free International Shipping. No Minimum Purchase Required*<span>Detail</span></a></p>
</div>
```

**WITH THIS:**
```handlebars
<div class="col-left col-sm-4">
    {{#if theme_settings.header_freeshipping_enabled}}
    <p>
        <a href="{{theme_settings.header_freeshipping_link}}" title="Detail">
            {{theme_settings.header_freeshipping_text}}<span>Detail</span>
        </a>
    </p>
    {{/if}}
</div>
```

---

### 3. **Header Phone & Need Help** (`templates/components/common/navigation.html`)

**REPLACE THIS:**
```handlebars
<nav class="navUser">
    <ul>
        <li id="trigger-mobile" class="visible-xs"></li>
        {{#if settings.phone_number}}
        <li class="phone_number hidden-xs"><a href="tel:{{settings.phone_number}}">Customer Service <span>{{settings.phone_number}}</span></a></li>
        {{/if}}
        <li class="hidden-xs"><a href="#" title="Need Help?">Need Help?</a></li>
```

**WITH THIS:**
```handlebars
<nav class="navUser">
    <ul>
        <li id="trigger-mobile" class="visible-xs"></li>
        {{#if theme_settings.header_phone_enabled}}
        <li class="phone_number hidden-xs">
            <a href="tel:{{theme_settings.header_phone_number}}">
                {{theme_settings.header_phone_label}} <span>{{theme_settings.header_phone_number}}</span>
            </a>
        </li>
        {{/if}}
        {{#if theme_settings.header_needhelp_enabled}}
        <li class="hidden-xs">
            <a href="{{theme_settings.header_needhelp_link}}" title="{{theme_settings.header_needhelp_text}}">
                {{theme_settings.header_needhelp_text}}
            </a>
        </li>
        {{/if}}
```

---

### 4. **Megamenu Featured Images** (`templates/components/halothemes/halo-megamenu.html`)

Add this section where you want featured images in your megamenu:

```handlebars
{{#if theme_settings.megamenu_featured_image1}}
<div class="megamenu-featured-images">
    <div class="row">
        <div class="col-sm-6">
            <a href="{{theme_settings.megamenu_featured_link1}}">
                <img src="{{theme_settings.megamenu_featured_image1}}" 
                     alt="{{theme_settings.megamenu_featured_alt1}}">
            </a>
        </div>
        {{#if theme_settings.megamenu_featured_image2}}
        <div class="col-sm-6">
            <a href="{{theme_settings.megamenu_featured_link2}}">
                <img src="{{theme_settings.megamenu_featured_image2}}" 
                     alt="{{theme_settings.megamenu_featured_alt2}}">
            </a>
        </div>
        {{/if}}
    </div>
</div>
{{/if}}

{{#if theme_settings.megamenu_custom_html_enabled}}
<div class="megamenu-custom-html">
    {{{theme_settings.megamenu_custom_html}}}
</div>
{{/if}}
```

---

### 5. **Homepage Slideshow Mode** (`templates/pages/home.html`)

Wrap your slideshow section:

```handlebars
<div class="heroCarousel {{#if theme_settings.home_slideshow_mode '===' 'wide'}}heroCarousel--wide{{/if}}">
    {{> components/common/carousel}}
</div>
```

---

### 6. **Header Custom HTML Block** (`templates/components/halothemes/home-full-width-block.html`)

**REPLACE ENTIRE FILE WITH:**
```handlebars
{{#if theme_settings.home_header_html_enabled}}
<div class="home-header-custom-html">
    {{{theme_settings.home_header_html}}}
</div>
{{/if}}
```

---

### 7. **Right Sidebar Banners** (`templates/components/halothemes/home-right-slider-banners.html`)

**REPLACE ENTIRE FILE WITH:**
```handlebars
{{#if theme_settings.home_right_banners_enabled}}
<div class="home-right-banners">
    {{#if theme_settings.home_right_banner_html}}
        {{!-- Use custom HTML if provided --}}
        {{{theme_settings.home_right_banner_html}}}
    {{else}}
        {{!-- Use banner images --}}
        {{#if theme_settings.home_right_banner1_image}}
        <div class="banner-item">
            <a href="{{theme_settings.home_right_banner1_link}}">
                <img src="{{theme_settings.home_right_banner1_image}}" 
                     alt="{{theme_settings.home_right_banner1_alt}}">
            </a>
        </div>
        {{/if}}
        
        {{#if theme_settings.home_right_banner2_image}}
        <div class="banner-item">
            <a href="{{theme_settings.home_right_banner2_link}}">
                <img src="{{theme_settings.home_right_banner2_image}}" 
                     alt="{{theme_settings.home_right_banner2_alt}}">
            </a>
        </div>
        {{/if}}
    {{/if}}
</div>
{{/if}}
```

---

### 8. **Shop by Category** (`templates/components/halothemes/homeShopByTopCategory.html`)

**REPLACE ENTIRE FILE WITH:**
```handlebars
{{#if theme_settings.home_shop_category_enabled}}
<section class="home-shop-by-category">
    <h2 class="section-heading">{{theme_settings.home_shop_category_heading}}</h2>
    <div class="category-grid">
        <div class="row">
            {{#if theme_settings.home_category1_image}}
            <div class="col-sm-3 col-xs-6">
                <a href="{{theme_settings.home_category1_link}}" class="category-item">
                    <img src="{{theme_settings.home_category1_image}}" alt="{{theme_settings.home_category1_title}}">
                    <h3>{{theme_settings.home_category1_title}}</h3>
                </a>
            </div>
            {{/if}}
            
            {{#if theme_settings.home_category2_image}}
            <div class="col-sm-3 col-xs-6">
                <a href="{{theme_settings.home_category2_link}}" class="category-item">
                    <img src="{{theme_settings.home_category2_image}}" alt="{{theme_settings.home_category2_title}}">
                    <h3>{{theme_settings.home_category2_title}}</h3>
                </a>
            </div>
            {{/if}}
            
            {{#if theme_settings.home_category3_image}}
            <div class="col-sm-3 col-xs-6">
                <a href="{{theme_settings.home_category3_link}}" class="category-item">
                    <img src="{{theme_settings.home_category3_image}}" alt="{{theme_settings.home_category3_title}}">
                    <h3>{{theme_settings.home_category3_title}}</h3>
                </a>
            </div>
            {{/if}}
            
            {{#if theme_settings.home_category4_image}}
            <div class="col-sm-3 col-xs-6">
                <a href="{{theme_settings.home_category4_link}}" class="category-item">
                    <img src="{{theme_settings.home_category4_image}}" alt="{{theme_settings.home_category4_title}}">
                    <h3>{{theme_settings.home_category4_title}}</h3>
                </a>
            </div>
            {{/if}}
        </div>
    </div>
</section>
{{/if}}
```

---

### 9. **Middle Banner** (`templates/components/halothemes/home-middle-banner.html`)

**REPLACE ENTIRE FILE WITH:**
```handlebars
{{#if theme_settings.home_middle_banner_enabled}}
<section class="home-middle-banner">
    {{#if theme_settings.home_middle_banner_image}}
    <a href="{{theme_settings.home_middle_banner_link}}">
        <img src="{{theme_settings.home_middle_banner_image}}" 
             alt="{{theme_settings.home_middle_banner_alt}}" 
             class="img-responsive">
    </a>
    {{/if}}
</section>
{{/if}}
```

---

### 10. **Brand Slider** (`templates/components/halothemes/home-brand-slider.html`)

**UPDATE TO:**
```handlebars
{{#if theme_settings.home_brand_slider_enabled}}
<section class="home-brand-slider">
    <h2 class="section-heading">{{theme_settings.home_brand_slider_heading}}</h2>
    <div class="brand-slider" data-slick='{
        "slidesToShow": {{theme_settings.home_brand_slider_count}},
        "slidesToScroll": 1,
        "autoplay": true,
        "arrows": true,
        "dots": false
    }'>
        {{!-- Your existing brand slider code --}}
    </div>
</section>
{{/if}}
```

---

### 11. **Footer Customization** (`templates/components/common/footer.html`)

**ADD CUSTOM COLUMNS SECTION:**
```handlebars
<footer class="footer">
    <div class="container">
        <div class="row">
            {{!-- Column 1 --}}
            {{#if theme_settings.footer_col1_content}}
            <div class="col-sm-3 footer-column">
                <h3>{{theme_settings.footer_col1_heading}}</h3>
                <div class="footer-content">
                    {{{theme_settings.footer_col1_content}}}
                </div>
            </div>
            {{/if}}
            
            {{!-- Column 2 --}}
            {{#if theme_settings.footer_col2_content}}
            <div class="col-sm-3 footer-column">
                <h3>{{theme_settings.footer_col2_heading}}</h3>
                <div class="footer-content">
                    {{{theme_settings.footer_col2_content}}}
                </div>
            </div>
            {{/if}}
            
            {{!-- Column 3 --}}
            {{#if theme_settings.footer_col3_content}}
            <div class="col-sm-3 footer-column">
                <h3>{{theme_settings.footer_col3_heading}}</h3>
                <div class="footer-content">
                    {{{theme_settings.footer_col3_content}}}
                </div>
            </div>
            {{/if}}
            
            {{!-- Contact Info --}}
            {{#if theme_settings.footer_contact_enabled}}
            <div class="col-sm-3 footer-column">
                <h3>{{theme_settings.footer_contact_heading}}</h3>
                <div class="footer-contact">
                    {{#if theme_settings.footer_address}}
                    <p class="footer-address">
                        <i class="fa fa-map-marker"></i> {{theme_settings.footer_address}}
                    </p>
                    {{/if}}
                    {{#if theme_settings.footer_email}}
                    <p class="footer-email">
                        <i class="fa fa-envelope"></i> 
                        <a href="mailto:{{theme_settings.footer_email}}">{{theme_settings.footer_email}}</a>
                    </p>
                    {{/if}}
                    {{#if theme_settings.footer_phone}}
                    <p class="footer-phone">
                        <i class="fa fa-phone"></i> 
                        <a href="tel:{{theme_settings.footer_phone}}">{{theme_settings.footer_phone}}</a>
                    </p>
                    {{/if}}
                </div>
            </div>
            {{/if}}
        </div>
        
        {{!-- Social Media Icons --}}
        {{#if theme_settings.footer_social_enabled}}
        <div class="footer-social">
            {{#if theme_settings.social_icon_facebook}}
            <a href="{{theme_settings.social_icon_facebook}}" target="_blank" rel="noopener">
                <i class="fa fa-facebook"></i>
            </a>
            {{/if}}
            {{#if theme_settings.social_icon_twitter}}
            <a href="{{theme_settings.social_icon_twitter}}" target="_blank" rel="noopener">
                <i class="fa fa-twitter"></i>
            </a>
            {{/if}}
            {{#if theme_settings.social_icon_instagram}}
            <a href="{{theme_settings.social_icon_instagram}}" target="_blank" rel="noopener">
                <i class="fa fa-instagram"></i>
            </a>
            {{/if}}
            {{#if theme_settings.social_icon_pinterest}}
            <a href="{{theme_settings.social_icon_pinterest}}" target="_blank" rel="noopener">
                <i class="fa fa-pinterest"></i>
            </a>
            {{/if}}
            {{#if theme_settings.social_icon_youtube}}
            <a href="{{theme_settings.social_icon_youtube}}" target="_blank" rel="noopener">
                <i class="fa fa-youtube"></i>
            </a>
            {{/if}}
            {{#if theme_settings.social_icon_linkedin}}
            <a href="{{theme_settings.social_icon_linkedin}}" target="_blank" rel="noopener">
                <i class="fa fa-linkedin"></i>
            </a>
            {{/if}}
        </div>
        {{/if}}
        
        {{!-- Payment Icons --}}
        {{#if theme_settings.footer_payment_icons_enabled}}
        <div class="footer-payment-icons">
            {{#if theme_settings.show_accept_visa}}
            <span class="payment-icon visa"></span>
            {{/if}}
            {{#if theme_settings.show_accept_mastercard}}
            <span class="payment-icon mastercard"></span>
            {{/if}}
            {{#if theme_settings.show_accept_amex}}
            <span class="payment-icon amex"></span>
            {{/if}}
            {{#if theme_settings.show_accept_paypal}}
            <span class="payment-icon paypal"></span>
            {{/if}}
            {{#if theme_settings.show_accept_discover}}
            <span class="payment-icon discover"></span>
            {{/if}}
        </div>
        {{/if}}
    </div>
</footer>
```

---

## 📤 How to Upload Images

Since BigCommerce doesn't support direct image uploads in Theme Editor, follow these steps:

### Method 1: WebDAV (Recommended)
1. Enable WebDAV in **Server Settings → File Access (WebDAV)**
2. Connect using a WebDAV client (Cyberduck, FileZilla, etc.)
3. Upload images to `/content/` folder
4. Reference as: `/content/your-image.jpg` in Theme Editor

### Method 2: Product Images Folder
1. Go to **Products → Product Images**
2. Upload image
3. Copy the image URL from the uploaded image
4. Paste URL in Theme Editor

### Method 3: CDN
1. Upload to external CDN (Cloudinary, imgix, etc.)
2. Use full CDN URL in Theme Editor

---

## 🎨 Best Practices

### Image Sizes
- **Top Bar Promotion**: 1920x100px
- **Megamenu Featured**: 500x500px
- **Homepage Right Banners**: 400x600px each
- **Shop by Category**: 300x300px each
- **Middle Banner**: 1920x400px
- **Footer Logo**: 200x80px

### Naming Conventions
- Use lowercase
- Use hyphens (not spaces or underscores)
- Be descriptive: `summer-sale-banner.jpg` not `image1.jpg`

### Performance Tips
- Optimize images (use TinyPNG, ImageOptim, etc.)
- Use WebP format when possible
- Keep file sizes under 200KB
- Use lazy loading for below-the-fold images

---

## 🧪 Testing Your Changes

1. **Save your changes** to config.json and schema.json
2. **Upload theme** to BigCommerce (via Stencil CLI or zip upload)
3. **Go to Theme Editor**: Storefront → My Themes → Customize
4. **Look for new sections** in left sidebar
5. **Test each setting** to ensure it works
6. **Check responsive** behavior on mobile/tablet

---

## 🐛 Troubleshooting

### Settings Not Appearing in Theme Editor
- Check JSON syntax (use JSONLint.com)
- Ensure proper comma placement
- Verify no duplicate IDs
- Re-upload theme

### Images Not Loading
- Check file path (must start with `/` or `http`)
- Verify WebDAV permissions
- Check image file extension (.jpg, .png, .gif, .svg)
- Clear browser cache

### Changes Not Saving
- Check for JavaScript errors in console
- Verify theme is published (not draft)
- Try different browser
- Contact BigCommerce support if persists

---

## 📚 Additional Resources

- [BigCommerce Stencil Docs](https://developer.bigcommerce.com/stencil-docs)
- [Theme Editor Guide](https://support.bigcommerce.com/s/article/Stencil-Themes#edit)
- [Handlebars Helpers](https://developer.bigcommerce.com/stencil-docs/reference-docs/handlebars-helpers-reference)
- [WebDAV Setup](https://support.bigcommerce.com/s/article/File-Access-WebDAV)

---

## ✅ Summary

You've now added **comprehensive customization options** to your BigCommerce theme:

✅ **Top Bar Promotion** - Image, link, enable/disable
✅ **Header Messages** - Free shipping text, customizable
✅ **Phone & Help Links** - Fully customizable
✅ **Megamenu Options** - Featured images, HTML, styles
✅ **Homepage Content** - Slideshow modes, banners, categories
✅ **Footer Content** - Custom columns, contact info, social, payment icons

**All editable from Theme Editor** - No code editing required for store owners!

