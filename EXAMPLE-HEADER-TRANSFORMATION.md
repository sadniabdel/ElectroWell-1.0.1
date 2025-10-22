# Visual Example: Header Template Transformation

## Before & After Comparison

This shows exactly what changes in one template file.

---

## File: `templates/components/common/header.html`

### ❌ BEFORE (Hardcoded)

```handlebars
<header class="header" role="banner">

    <!-- Begin Top Bar Promotion -->
    <div class="header-top hide" id="top-bar-promotion">
        <a href="#" title="">
            <img src="/product_images/uploaded_images/top-bar-promotion.png"
                 title="top-bar-promotion">
        </a>
        <a href="javascript:void(0)" class="close">
            <svg><use xlink:href="#icon-close"></use></svg>
        </a>
    </div>
    <!-- End Top Bar Promotion -->

    <div class="header-top">
        <div class="row">
            <div class="col-left col-sm-4">
                <p>
                    <a href="#" title="Detail">
                        Free International Shipping. No Minimum Purchase Required*
                        <span>Detail</span>
                    </a>
                </p>
            </div>
            <div class="col-right col-sm-8 hidden-xs">
                {{> components/common/navigation}}
            </div>
        </div>
    </div>

    <!-- Rest of header... -->
</header>
```

**Problems:**
- ❌ Image path hardcoded
- ❌ Link hardcoded
- ❌ Text hardcoded
- ❌ Can't disable features
- ❌ Store owner must edit code to change

---

### ✅ AFTER (Customizable from Theme Editor)

```handlebars
<header class="header" role="banner">

    <!-- Begin Top Bar Promotion -->
    {{#if theme_settings.topbar_promotion_enabled}}
    <div class="header-top hide" id="top-bar-promotion">
        <a href="{{theme_settings.topbar_promotion_link}}" title="">
            <img src="{{theme_settings.topbar_promotion_image}}"
                 title="top-bar-promotion"
                 alt="Promotion">
        </a>
        <a href="javascript:void(0)" class="close">
            <svg><use xlink:href="#icon-close"></use></svg>
        </a>
    </div>
    {{/if}}
    <!-- End Top Bar Promotion -->

    <div class="header-top">
        <div class="row">
            <div class="col-left col-sm-4">
                {{#if theme_settings.header_freeshipping_enabled}}
                <p>
                    <a href="{{theme_settings.header_freeshipping_link}}" title="Detail">
                        {{theme_settings.header_freeshipping_text}}
                        <span>Detail</span>
                    </a>
                </p>
                {{/if}}
            </div>
            <div class="col-right col-sm-8 hidden-xs">
                {{> components/common/navigation}}
            </div>
        </div>
    </div>

    <!-- Rest of header... -->
</header>
```

**Benefits:**
- ✅ Image path in Theme Editor
- ✅ Link in Theme Editor
- ✅ Text in Theme Editor
- ✅ Can enable/disable with checkbox
- ✅ Store owner changes without code

---

## What Store Owner Sees in Theme Editor

When they go to **Storefront → My Themes → Customize**, they'll see:

```
┌─────────────────────────────────────────────┐
│ Header & Top Bar                        [▼] │
├─────────────────────────────────────────────┤
│                                             │
│ Top Bar Promotion Banner                    │
│ ─────────────────────────────────────────── │
│                                             │
│ ☑ Enable Top Bar Promotion                 │
│                                             │
│ Top Bar Promotion Image URL                 │
│ [/content/summer-sale.jpg              ]    │
│                                             │
│ Top Bar Promotion Link URL                  │
│ [/summer-sale                          ]    │
│                                             │
│ ─────────────────────────────────────────── │
│                                             │
│ Header Top Message                          │
│ ─────────────────────────────────────────── │
│                                             │
│ ☑ Enable Free Shipping Message             │
│                                             │
│ Free Shipping Message                       │
│ [Free International Shipping. No       ]    │
│ [Minimum Purchase Required*            ]    │
│                                             │
│ Free Shipping Detail Link                   │
│ [/shipping                             ]    │
│                                             │
│ [Save]                                      │
└─────────────────────────────────────────────┘
```

---

## Real-World Usage Example

### Scenario: Black Friday Promotion

**Store Owner Actions:**
1. Opens Theme Editor
2. Goes to "Header & Top Bar"
3. Changes:
   - Image URL: `/content/black-friday-2025.jpg`
   - Link: `/black-friday-deals`
   - Message: `Black Friday: 50% Off Everything!`
4. Clicks Save

**Result:**
- Top bar instantly shows Black Friday banner
- Links to deals page
- Shows special message
- **Zero code editing required**

### Scenario: After Promotion Ends

**Store Owner Actions:**
1. Opens Theme Editor
2. Goes to "Header & Top Bar"
3. Unchecks "Enable Top Bar Promotion"
4. Clicks Save

**Result:**
- Top bar disappears
- **Takes 10 seconds, no code**

---

## Template Pattern Used

This pattern is used throughout your templates:

```handlebars
{{!-- 1. Check if feature is enabled --}}
{{#if theme_settings.feature_enabled}}

    {{!-- 2. Use dynamic content from Theme Editor --}}
    <div class="feature">
        <h2>{{theme_settings.feature_heading}}</h2>
        <p>{{theme_settings.feature_text}}</p>
        <a href="{{theme_settings.feature_link}}">
            <img src="{{theme_settings.feature_image}}" alt="Feature">
        </a>
    </div>

{{/if}}
```

**Pattern Benefits:**
- ✅ Conditional rendering (show/hide)
- ✅ All content editable
- ✅ No hardcoded values
- ✅ Flexible and maintainable

---

## Side-by-Side Comparison

### For Navigation Phone Number:

| Aspect | Before (Hardcoded) | After (Customizable) |
|--------|-------------------|---------------------|
| **Code** | `{{settings.phone_number}}` | `{{theme_settings.header_phone_number}}` |
| **Label** | "Customer Service" (hardcoded) | `{{theme_settings.header_phone_label}}` (editable) |
| **Enable/Disable** | Not possible | `{{#if theme_settings.header_phone_enabled}}` |
| **Change Phone** | Edit template code | Theme Editor text field |
| **Change Label** | Edit template code | Theme Editor text field |
| **Hide Feature** | Comment out code | Uncheck checkbox |
| **Technical Skill** | Developer required | Store owner can do it |
| **Time to Change** | 15-30 minutes | 30 seconds |

---

## Complete Flow Diagram

```
┌──────────────────────────────────────────────────┐
│  Store Owner                                     │
│  Opens Theme Editor                              │
└────────────────┬─────────────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────────────┐
│  Sees Organized Settings:                        │
│  • Header & Top Bar                              │
│  • Megamenu Settings                             │
│  • Homepage Content                              │
│  • Footer Content                                │
└────────────────┬─────────────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────────────┐
│  Changes Values:                                 │
│  • Image URLs                                    │
│  • Text content                                  │
│  • Links                                         │
│  • Enable/disable features                       │
└────────────────┬─────────────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────────────┐
│  Clicks Save                                     │
└────────────────┬─────────────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────────────┐
│  BigCommerce Updates:                            │
│  • config.json with new values                   │
│  • Refreshes storefront                          │
│  • Templates use {{theme_settings.xxx}}          │
└────────────────┬─────────────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────────────┐
│  Customer Sees:                                  │
│  • Updated images                                │
│  • Updated text                                  │
│  • Updated links                                 │
│  • Features shown/hidden                         │
└──────────────────────────────────────────────────┘
```

---

## Key Takeaways

### What Changes in Templates:

```handlebars
Replace:  <img src="/hardcoded/path.jpg">
With:     <img src="{{theme_settings.image_url}}">

Replace:  <a href="/hardcoded">Hardcoded Text</a>
With:     <a href="{{theme_settings.link}}">{{theme_settings.text}}</a>

Replace:  <div>Always Shows</div>
With:     {{#if theme_settings.enabled}}<div>Conditionally Shows</div>{{/if}}
```

### What Gets Added to schema.json:

```json
{
  "type": "text",
  "label": "What user sees in editor",
  "id": "what_you_use_in_template",
  "description": "Helper text for user"
}
```

### What Gets Added to config.json:

```json
{
  "settings": {
    "what_you_use_in_template": "default value here"
  }
}
```

---

## 🎯 Final Result

**Before:** Developer needed for every small change
**After:** Store owner makes changes in 30 seconds

**Before:** 50+ lines of hardcoded values
**After:** 50+ customizable options in Theme Editor

**Before:** Inflexible, time-consuming
**After:** Flexible, instant updates

**This is what modern theme customization looks like!** 🚀
