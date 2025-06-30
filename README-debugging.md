# 🛠️ Debugging Guide (Expo SDK 53)

When something breaks, follow this order:

---

## 1. 🧹 Clean the Environment

```bash
npm run clear
```

or manually:

```bash
rm -rf node_modules
rm package-lock.json
```

---

## 2. 🩺 Check SDK Compatibility

```bash
npx expo-doctor
```

Review output and fix any mismatched versions. Use `expo install` for upgrades.

---

## 3. 🚀 Restart Fresh with Cache Clear

```bash
npx expo start -c
```

The `-c` flag clears cache and avoids stale bundling issues.

---

## 4. 🧪 Inspect Webview Errors (if debugging web)

Start the project, press `W` in the terminal, and open DevTools (`Cmd + Shift + I`).

---

## 5. 📄 Check `metro.config.js`

Ensure it follows the guardrail structure (see `/tooling/metro-config.md`).
