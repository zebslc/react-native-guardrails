# Cross-Platform Support

## ✅ Supported Platforms
- Web (Default)
- iOS
- Android

## 📌 Platform Constraints
- Use `Platform.OS` for conditional logic
- Always fallback for Web
- Avoid assumptions about native APIs

## 🧠 Use Platform.select:
```ts
const handler = Platform.select({
  ios: () => doIOS(),
  android: () => doAndroid(),
  web: () => doWeb(),
});
handler?.();
```