# BigCommerce Theme Installation & Bundling Guide

## ⚠️ Error: TR-601 - Missing Parsed Templates

This error occurs when template files are modified but not rebundled with Stencil CLI. Here's how to fix it:

---

## 🚀 Quick Fix - Option 1: Use Pre-Bundled Theme (Recommended)

I'll create a clean bundled version for you. But first, here's how to do it yourself:

---

## 🛠️ Option 2: Bundle the Theme Yourself

### Prerequisites
- Node.js 14+ installed
- BigCommerce Stencil CLI

### Step 1: Install Stencil CLI

```bash
npm install -g @bigcommerce/stencil-cli
```

### Step 2: Navigate to Theme Directory

```bash
cd ElectroWell+Stencil-1.0.0
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Bundle the Theme

```bash
stencil bundle
```

This creates a `.zip` file in the theme directory that's ready for upload.

### Step 5: Upload to BigCommerce

1. Go to **Storefront** → **My Themes**
2. Click **Upload Theme**
3. Select the `.zip` file created by `stencil bundle`
4. Apply the theme

---

## 🔧 Option 3: Manual Template Edits (Alternative)

If you can't install Stencil CLI, you can:

1. **Upload the ORIGINAL theme** (before modifications)
2. **Use WebDAV** to edit template files directly on BigCommerce
3. **Edit config.json** via WebDAV for all customizations

### How to Enable WebDAV:

1. BigCommerce Admin → **Server Settings** → **File Access (WebDAV)**
2. Enable WebDAV
3. Note your credentials
4. Connect using FileZilla or another WebDAV client

### WebDAV Server Details:
- **Host**: `https://store-{hash}.mybigcommerce.com`
- **Username**: Your admin email
- **Password**: Your WebDAV password

Once connected, you can edit files in `/template/` directory directly.

---

## 📦 What Needs to Be Bundled?

When you run `stencil bundle`, it:
- ✅ Regenerates parsed templates
- ✅ Compiles SCSS to CSS
- ✅ Bundles JavaScript
- ✅ Validates schema.json
- ✅ Creates upload-ready ZIP

---

## 🎯 Which Approach Should You Use?

| Approach | Best For | Difficulty |
|----------|----------|------------|
| **Stencil CLI Bundling** | Development, testing locally | Medium |
| **WebDAV Editing** | Quick edits, live changes | Easy |
| **Pre-bundled Upload** | One-time setup, no CLI | Easy |

---

## 💡 Recommended Workflow

### For Development:
```bash
# 1. Install Stencil CLI
npm install -g @bigcommerce/stencil-cli

# 2. Setup theme
cd ElectroWell+Stencil-1.0.0
npm install

# 3. Start local dev server
stencil start

# 4. Make changes, test locally

# 5. Bundle when ready
stencil bundle

# 6. Upload the generated .zip
```

### For Quick Customizations:
```bash
# 1. Upload original theme
# 2. Enable WebDAV
# 3. Edit config.json via WebDAV
# 4. Changes apply immediately
```

---

## 🐛 Troubleshooting

### Error: "stencil: command not found"
```bash
# Install Stencil CLI globally
npm install -g @bigcommerce/stencil-cli

# Verify installation
stencil --version
```

### Error: "Node version not supported"
```bash
# Install Node.js 14 or higher
# Download from: https://nodejs.org/

# Verify Node version
node --version  # Should be v14.0.0 or higher
```

### Error: "npm install fails"
```bash
# Clear npm cache
npm cache clean --force

# Try again
npm install
```

### Error: "Bundle validation failed"
```bash
# Check schema.json syntax
# Use: https://jsonlint.com/

# Check config.json syntax
# Make sure all brackets and quotes match
```

---

## 📝 Files Modified in This Theme

These files were customized and need bundling:

```
ElectroWell+Stencil-1.0.0/
├── config.json                    ← Settings/defaults
├── schema.json                    ← Theme Editor structure
└── templates/
    └── components/
        ├── common/
        │   ├── header.html        ← Modified
        │   └── navigation.html    ← Modified
        └── halothemes/
            ├── halo-megamenu.html         ← Modified
            ├── home-full-width-block.html ← Modified
            ├── home-middle-banner.html    ← Modified
            └── home-right-slider-banners.html ← Modified
```

---

## ✅ Quick Validation Checklist

Before uploading:
- [ ] `config.json` is valid JSON (no syntax errors)
- [ ] `schema.json` is valid JSON
- [ ] All image paths exist or are placeholders
- [ ] Theme is bundled with `stencil bundle`
- [ ] Resulting ZIP is under 50MB

---

## 🆘 Still Having Issues?

Common solutions:

1. **Use the original theme**: Upload the unmodified theme, then edit via WebDAV
2. **Validate JSON**: Check config.json and schema.json at jsonlint.com
3. **Check Node version**: Must be 14+
4. **Clear bundle cache**: Delete `.dist` and `.cache` folders, rebundle
5. **Contact BigCommerce support**: They can help with bundling issues

---

## 📚 Additional Resources

- [Stencil CLI Documentation](https://developer.bigcommerce.com/stencil-docs/installing-stencil-cli/installing-stencil)
- [Theme Bundling Guide](https://developer.bigcommerce.com/stencil-docs/deploying-a-theme/bundling-and-pushing)
- [WebDAV Setup](https://support.bigcommerce.com/s/article/File-Access-WebDAV)
- [JSON Validator](https://jsonlint.com/)

---

## 🎓 Next Steps After Successful Upload

1. **Activate the theme**
2. **Go to Theme Editor**: Storefront → My Themes → Customize
3. **Test the working options**:
   - Toggle "Show Top Bar Promotion"
   - Change megamenu styles
   - Modify colors
4. **Edit config.json** for custom content (see CUSTOMIZATION_GUIDE.md)

---

**Good luck! 🚀**
