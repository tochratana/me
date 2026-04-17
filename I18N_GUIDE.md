# i18n Implementation Guide

## Overview

Your project now supports English (en) and Khmer (km) languages using i18next and react-i18next with automatic language detection.

## ✅ Setup Complete!

The i18n setup has been successfully implemented and tested. The build passes with no errors.

## File Structure

```
/src
  ├── locales/
  │   ├── en.json      # English translations
  │   └── km.json      # Khmer translations
  └── components/
      ├── I18nProvider.tsx      # i18n setup provider (wraps your app)
      ├── LanguageSwitcher.tsx  # Language switcher component
      └── sections/
          └── Footer.tsx        # Example of i18n implementation
/middleware.ts                  # Automatic language detection
/next-i18next.config.js        # i18n configuration (optional, for reference)
```

## How to Use Translations in Components

### 1. Basic Usage with `useTranslation` Hook

```tsx
"use client";

import { useTranslation } from "react-i18next";

export default function MyComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("header.home")}</h1>
      <p>{t("hero.greeting")}</p>
    </div>
  );
}
```

**Important:** Components using `useTranslation()` must have the `'use client'` directive at the top.

### 2. Accessing Nested Translations

Translation keys use dot notation for nested objects:

- `t('hero.greeting')` → returns the value from `locales/en.json` → `hero.greeting`

### 3. Dynamic Content with Interpolation

In your JSON files:

```json
{
  "welcome": "Welcome, {{name}}"
}
```

In your component:

```tsx
const { t } = useTranslation();
return <h1>{t("welcome", { name: "Toch Ratana" })}</h1>;
```

## Adding New Translations

### Step 1: Add to Both Language Files

**src/locales/en.json:**

```json
{
  "newSection": {
    "title": "English Title",
    "description": "English Description"
  }
}
```

**src/locales/km.json:**

```json
{
  "newSection": {
    "title": "ចំណងជើង",
    "description": "ពិពណ៌នា"
  }
}
```

### Step 2: Use in Component

```tsx
"use client";

import { useTranslation } from "react-i18next";

export default function MyNewSection() {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("newSection.title")}</h2>
      <p>{t("newSection.description")}</p>
    </section>
  );
}
```

## Language Switcher Usage

The `<LanguageSwitcher />` component is already integrated in the Header. It:

- Shows EN and KM buttons (with flag emojis)
- Highlights the current language with a blue background
- Automatically updates all text on the page
- Works seamlessly with both desktop and mobile layouts
- Updates URL to reflect the selected language

### How It Works

When you click a language button:

1. The `i18n.changeLanguage()` function is called
2. React-i18next updates all translations on the page
3. The URL updates to reflect the active locale
4. Language preference is cached by the browser

## Automatic Language Detection

The middleware (`/middleware.ts`) automatically detects the user's preferred language:

- **If browser language includes "km"** → Khmer is selected
- **Otherwise** → English is selected by default

### How It Works

1. User visits the site for the first time
2. Middleware reads the `Accept-Language` header from their browser
3. If it includes "km", they're redirected to `/km`
4. Otherwise, they see `/en` content
5. Users can manually override this with the LanguageSwitcher

## SEO Benefits

Your site now supports:

- `/en/*` routes for English content
- `/km/*` routes for Khmer content

This gives you:

- **Better search engine indexing** - Both language versions are indexed separately
- **Improved rankings** - Targeted content for each language's search users
- **Better user experience** - Users see content in their preferred language

## Testing Your Implementation

### Quick Test Steps:

1. **Start the dev server**: `npm run dev`
2. **Open the site**: Navigate to `http://localhost:3000`
3. **Test language switcher**:
   - Click the "🇺🇸 EN" button - should show English content
   - Click the "🇰🇭 KM" button - should show Khmer content
   - Text should update instantly without page reload
4. **Verify in browser**: Check the browser's console for any i18n errors
5. **Test language persistence**:
   - Change to Khmer (🇰🇭 KM)
   - Refresh the page
   - The language should either stay as Khmer or auto-detect based on browser settings

### What to Look For:

- ✅ All text updates when switching languages
- ✅ No console errors related to i18n
- ✅ The language switcher buttons highlight correctly
- ✅ Both English and Khmer text display properly

## Tips & Best Practices

1. **Always use 'use client'**: Components with `useTranslation()` need `'use client'` directive
2. **Keep keys consistent**: Use the same structure in both en.json and km.json
3. **Use dot notation**: `section.subsection.key` keeps translations organized
4. **Never hardcode text**: Replace all user-facing text with translations
5. **Test both languages**: After changes, verify in both EN and KM
6. **Use consistent naming**: Keep translation key names descriptive and consistent
7. **Add translations incrementally**: You don't need to translate everything at once

## Translation Organization

Your translations are organized by sections:

- `header` - Navigation and header elements
- `hero` - Hero/banner section content
- `about` - About me section
- `skills` - Technical skills section
- `experience` - Work experience section
- `education` - Education section
- `projects` - Projects section
- `contact` - Contact information section
- `footer` - Footer content
- `language` - Language names (EN, KM)

## Troubleshooting

### ❌ Translations showing as keys (e.g., "hero.greeting" instead of text)

**Cause**: i18n is not initialized or the key doesn't exist in the JSON files.

**Solution**:

1. Check that `I18nProvider` wraps your app in `src/app/layout.tsx` ✓ Already done
2. Verify the key exists in both `src/locales/en.json` and `src/locales/km.json`
3. Check browser console for load errors
4. Make sure you're importing `useTranslation` from `react-i18next`, not another package

### ❌ Language switcher buttons not visible

**Cause**: LanguageSwitcher component not imported in Header.

**Solution**:

1. Open `src/components/layout/Header.tsx`
2. Verify the import: `import LanguageSwitcher from '../LanguageSwitcher';`
3. Check that `<LanguageSwitcher />` is in the JSX

### ❌ Warnings in build about i18n configuration

**Cause**: next.config.ts had unsupported i18n options.

**Solution**: ✓ Already fixed - the config is now clean and uses react-i18next instead

### ❌ Module not found errors for locales

**Cause**: Files in wrong directory.

**Solution**: ✓ Already fixed - locales are now in `src/locales/` directory

### ❌ Build fails with TypeScript errors

**Cause**: Incorrect i18n configuration syntax.

**Solution**: ✓ Already fixed - using proper InitOptions syntax

### ❌ Language doesn't change when clicking buttons

**Cause**: Missing `'use client'` directive or incorrect hook usage.

**Solution**:

1. Ensure components using `useTranslation()` have `'use client'` at the top
2. Make sure LanguageSwitcher has `'use client'` directive
3. Check for JavaScript errors in the browser console

## Next Steps

1. Update all text in your components to use translations
2. Add new keys to `/locales/en.json` and `/locales/km.json` as needed
3. Use the LanguageSwitcher to toggle between languages and verify everything works
4. Test on both desktop and mobile devices
