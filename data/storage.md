# 💾 Local Storage Guardrail

## ✅ Purpose
Persist user preferences and app state reliably across devices.

## 📦 Required Libraries
- `@react-native-async-storage/async-storage`

## ✅ Do
- Use AsyncStorage wrapper
- Validate JSON before saving
- Fallback gracefully if storage fails

## ❌ Don’t
- Use window.localStorage (web-only)
- Store sensitive data without encryption

## 📌 Example

```ts
import AsyncStorage from '@react-native-async-storage/async-storage';

await AsyncStorage.setItem('prefs', JSON.stringify({ volume: 0.5 }));
const saved = await AsyncStorage.getItem('prefs');
```
