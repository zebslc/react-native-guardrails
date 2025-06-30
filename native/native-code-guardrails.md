# 🛠️ Native Code Guardrails & Expo Go Limitations

## ❗ Expo Go Limitations
- Expo Go does **not** support custom native modules or code.
- Advanced features (real-time audio synthesis, custom device APIs, native libraries) require a custom dev client or bare workflow.
- Some guardrails (e.g., local fonts, advanced audio) are only possible outside Expo Go.

## ✅ When to Use Native Code
- When you need features not available in Expo Go or the managed Expo SDK.
- For real-time audio, DSP, custom device APIs, or third-party native libraries.

## 🚀 Step-by-Step: Adding Native Code

### 1. Switch to Bare Workflow or Custom Dev Client
- **Bare Workflow:** Run `npx expo eject` or start with React Native CLI.
- **Custom Dev Client:** Use [Expo Custom Dev Client](https://docs.expo.dev/clients/installation/).

### 2. Add Your Native Module
- Place your native code in `android/` (Kotlin/Java) and `ios/` (Swift/Obj-C).
- Register the module in your app’s native code.

### 3. Link Native Modules
- For bare workflow, use `npx pod-install` (iOS) and rebuild your app.
- For custom dev client, rebuild using `eas build` or `expo run:android` / `expo run:ios`.

### 4. Use in React Native
```ts
import { NativeModules } from 'react-native';
NativeModules.YourModule.yourMethod();
```

### 5. Test on Device/Emulator
- Install your built app (APK/AAB/IPA) on your device.
- Verify native features work as expected.

---

**Summary:**  
- Isolate Expo Go-only rules in your docs.
- Add a clear section for native code guardrails and step-by-step native integration.