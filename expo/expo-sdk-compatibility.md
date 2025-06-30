# 🚨 Expo SDK Compatibility Guardrail

## ❗ Why This Matters

Expo SDK tightly couples package versions. Installing mismatched versions (e.g. via `npm install`) can **break your project** with errors like:

```
npm ERR! code ETARGET
npm ERR! No matching version found for expo-av@~13.1.3
```

---

## ✅ Guardrails for Compatibility

### 1. Use `expo install` Instead of `npm install`

```bash
expo install expo-av expo-camera expo-font
```

✅ This auto-resolves to versions that are **guaranteed compatible** with your current Expo SDK (e.g. 53).

---

### 2. Use `expo doctor` to Check Version Consistency

```bash
npx expo doctor
```

🧠 This will validate your dependencies match the installed SDK.

---

### 3. Check SDK Compatibility Before Upgrading

📖 Always reference:

- https://docs.expo.dev/versions/latest/sdk/
- [Expo SDK Changelog](https://blog.expo.dev/tagged/expo-sdk)

Or check this directly in the Expo repo:

```txt
https://github.com/expo/expo/blob/main/packages/expo/package.json
```

---

## ✅ Summary

| Do | Don’t |
|----|-------|
| ✅ Use `expo install` | ❌ Use `npm install expo-*` |
| ✅ Use `expo doctor` | ❌ Manually change versions |
| ✅ Lock SDK per project | ❌ Mix SDK versions and manual packages |
