# 🧭 Navigation Structure (Mobile-First)

## ✅ Defaults
- Use tab navigation as the main structure.
- Use stack navigation within tabs for screen hierarchies.
- Modals, drawers, and bottom sheets are allowed as needed.

## ✅ Good Practices
- Limit navigation nesting to 3 levels.
- Use descriptive, consistent screen and tab names.
- Use navigation hooks (`useNavigation`, `useRoute`) for logic.
- Use navigation methods (`navigate`, `goBack`, `reset`, etc.) appropriately.

## ❌ Avoid
- Nesting tabs inside tabs.
- Screens without a clear purpose or accessible path.
- Hardcoded screen names in navigation.
- Passing complex objects in navigation params.
- Using navigation for non-navigation purposes (e.g., state management).
