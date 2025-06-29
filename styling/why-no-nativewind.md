# ❌ Why NativeWind / Tailwind Is Not Used

While Tailwind (via NativeWind) is often considered cross-platform compatible, there are critical issues that make it unsuitable for this framework’s goals.

## ⚠️ Reasons for Exclusion

### 1. Expo Web Incompatibility
NativeWind relies on Babel and runtime transformation. This causes:
- Broken or incorrect styles when statically exporting for web
- Flickering or inconsistent layouts in Expo Router + SSR

### 2. Design Token Conflict
Your design system uses strict tokens:
```ts
const colors = { primary: '#3b82f6', ... }
```
NativeWind uses its own Tailwind token set — resulting in duplication, confusion, and inconsistency.

### 3. Runtime Performance
`StyleSheet.create()` is optimised and compiled.
NativeWind:
- Calculates class styles at runtime
- Adds React context overhead
- Is slower in scroll views and animation-heavy lists

### 4. Testing & Snapshot Fragility
NativeWind styles are not easily inspectable in Jest snapshots or React Native Testing Library.
You can't check `styles.button.backgroundColor === '#3b82f6'` easily.

### 5. Dependency Overhead
Adds:
- Babel plugins
- Tailwind config
- PostCSS-like tooling
- ~100ms+ startup cost

### ✅ Preferred: StyleSheet.create

```ts
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3b82f6',
    padding: 16,
    borderRadius: 8,
  }
});
```

- Native performance
- Full IntelliSense and static typing
- Works on web/iOS/Android
- Matches design system exactly

---

## 🧪 Can I Use NativeWind If I Want?

You can — but only if you:
- Fully align its token system to match your own
- Avoid static export (`output: 'export'`)
- Accept some web/test quirks

But for **cross-platform, design-token-driven, web-ready** frameworks, it is **not recommended**.
