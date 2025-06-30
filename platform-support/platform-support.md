# 📱 Platform Support (Mobile-First)

## ✅ Primary Platforms
- iOS (primary)
- Android (primary)

## 🧩 Secondary Platform
- Web (should function correctly, but not lead design)

## ❌ Unsupported Platforms
- Desktop (not supported)
- TV (not supported)

## Platform Guidance
- Always test on mobile devices or emulators first
- Ensure feature parity with fallback for web
- Use `Platform.select()` for conditional platform behaviour
- Use `Platform.OS` to detect platform-specific features

## 📌 Example
```ts
import { Platform } from 'react-native';  
if (Platform.OS === 'ios') {
  // iOS-specific code
} else if (Platform.OS === 'android') {
  // Android-specific code
} else {
  // Web fallback
}
```


## 📌 Example
```ts
import { Platform } from 'react-native';

if (Platform.OS !== 'web') {
  // Mobile-only code
} else {
  // Web fallback
}
```
