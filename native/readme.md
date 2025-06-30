# Native Guardrails & Advanced Integration

This folder contains rules, best practices, and step-by-step instructions for integrating **custom native code** into your React Native or Expo project. Use these guardrails when you need features not available in Expo Go, such as real-time audio synthesis, advanced device APIs, or third-party native libraries.

---

## When to use these guardrails

- You need to add custom native modules (Kotlin/Java for Android, Swift/Obj-C for iOS).
- You want to implement advanced features (e.g., procedural audio, DSP, custom sensors).
- You are using the **bare workflow** or an **Expo custom dev client** (not Expo Go).

---

## 📚 Step-by-Step: Setting Up a Custom Audio Noise Generator

### 1. **Choose Your Workflow**

- **Expo Custom Dev Client:** Lets you use Expo APIs and your own native code. [Expo Custom Dev Client Docs](https://docs.expo.dev/clients/installation/)
- **Bare Workflow:** Full React Native project with direct access to native code.

> **Expo Go does NOT support custom native code.**

---

### 2. **Project Structure**

```
/your-project
  /android
    /app
      /src/main/java/com/yourapp/NoiseEngineModule.kt
  /ios
    /NoiseEngine.swift
  /native
    audio-advanced.md
    native-code-guardrails.md
    README.md
  /expo
    ...
  /web
    noiseGenerator.js
  App.js
  ...
```

---

### 3. **Install Required Packages**

- For bare workflow:  
  ```sh
  npx react-native init YourApp
  ```
- For Expo custom dev client:  
  ```sh
  npx create-expo-app -t
  npx expo install expo-dev-client
  npx expo prebuild
  ```

---

### 4. **Add Native Code**

#### **Android (Kotlin)**
- Create `NoiseEngineModule.kt` in `android/app/src/main/java/com/yourapp/`
- Use the provided Kotlin code for white noise + notch filter.
- Register the module in your `MainApplication.java` or `MainApplication.kt`:
  ```kotlin
  packages.add(new NoiseEngineModule(reactContext));
  ```

#### **iOS (Swift)**
- Add `NoiseEngine.swift` to your Xcode project in the `ios/` folder.
- Use the provided Swift code for white noise + notch filter.
- If needed, add a bridging header for React Native:
  ```objc
  #import <React/RCTBridgeModule.h>
  ```
- Register the module in your Xcode project’s build phases.

#### **Web**
- Create `noiseGenerator.js` in a `/web` folder.
- Use the Web Audio API for white noise and filtering (see previous examples).

---

### 5. **Link Native Modules**

- **iOS:**  
  ```sh
  npx pod-install
  ```
- **Android:**  
  Rebuild your app after adding native code.

---

### 6. **Build Your App**

- **Expo custom dev client:**  
  ```sh
  npx expo run:android
  npx expo run:ios
  # or use EAS Build for production
  ```
- **Bare workflow:**  
  ```sh
  npx react-native run-android
  npx react-native run-ios
  ```

---

### 7. **Use the Native Module in JS**

```js
import { NativeModules, Platform } from 'react-native';

if (Platform.OS === 'android' || Platform.OS === 'ios') {
  NativeModules.NoiseEngine.startNoise(1000, 10); // 1kHz notch, Q=10
  // ...
  NativeModules.NoiseEngine.stopNoise();
} else if (Platform.OS === 'web') {
  // Use your Web Audio API implementation
}
```

---

### 8. **Test on Device/Emulator**

- Install your built app (APK/AAB/IPA) on your device.
- Verify that the noise generator works and the filter is applied.

---

## 🛑 Notes & Best Practices

- **Expo Go cannot use custom native modules.** Always use a custom dev client or bare workflow for native code.
- Keep your native modules in platform-specific folders (`android/`, `ios/`, `web/`).
- Document your native APIs and JS interfaces for maintainability.
- Test all platforms (Android, iOS, Web) for feature parity and fallbacks.

---

**For more details, see `audio-advanced.md` and `native-code-guardrails.md` in this