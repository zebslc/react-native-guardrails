# 🧭 React Native Guardrail Pack (Expo SDK 53+)

This pack provides a structured, opinionated foundation for cross-platform React Native apps using Expo and Expo Router. It includes everything needed to bootstrap a Bolt-compatible project that works across **Web, iOS, and Android**.

---

## 📦 Directory Overview

```
/guardrails
├── .copilot.json                ← Copilot AI tuning
├── CONTRIBUTING.md              ← Coding + script rules
├── README.md                    ← Project overview (you are here)
├── README-debugging.md          ← Error recovery guide
├── application/                 ← App-level guardrails (performance, docs, errors, dependencies)
├── components/                  ← Component guardrails
├── data/                        ← Data, API, state, and storage guardrails
├── deployment/                  ← Build, release, analytics, telemetry guardrails
├── expo/                        ← Expo config and scripts
├── media/                       ← Audio, camera, QR, media guardrails
├── navigation/                  ← Navigation structure guardrails
├── permissions/                 ← Permissions guardrails
├── platform-support/            ← Device/platform compatibility guardrails
├── scripts/                     ← Project scripts and script guardrails
├── security/                    ← Security and permissions guardrails
├── styling/                     ← Styling, fonts, tokens, accessibility, i18n guardrails
├── testing/                     ← Testing and testability guardrails
├── tooling/                     ← Tooling, Metro config, AI context guardrails
```

---

## 🚀 How to Use

---

## ⚡️ Important: Specify Your Workflow

Before starting development, decide if your application will:
- **Run with Expo Go only** (no custom native code, managed workflow), or
- **Require advanced/native features** (custom native modules, advanced audio, device APIs, etc.)

> This decision affects your folder structure and which guardrails to follow (`expo/` vs `native/`).

**Sample prompt:**  
> “This application uses advanced features (e.g., real-time audio, custom device APIs) that require native code”

> “This application can run entirely with Expo Go and has no features that require native code”


---

### In Bolt.new

1. Open [Bolt.new](https://bolt.new)
2. Paste this folder’s contents into your working directory
3. Use `bolt:discuss` to guide your scaffolding
4. Ensure Copilot points to `.copilot.json` in project root

### In Windsurf

1. Create or clone your repo
2. Copy the entire `guardrails/` directory into the root
3. Add the following to your `package.json`:
```json
"scripts": {
  "guard:expo": "node scripts/check-expo-install.js",
  "clear": "rm -rf node_modules package-lock.json"
}
```
4. Restart Windsurf and ensure AI suggestions follow your rules

### In VS Code with GitHub Copilot

1. Ensure `.copilot.json` is in your project root:
```json
{
  "default_completion_scope": "project",
  "experimental": {
    "prompt_starters": [
      "Follow the guardrails in /guardrails/",
      "Use StyleSheet.create and Expo Router only",
      "Validate cross-platform compatibility for audio, camera, storage"
    ]
  }
}
```
2. Reload VS Code or the Copilot extension
3. Copilot will now prioritize suggestions aligned to your structure

---

## 🧪 Recommended Commands

```bash
npm run clear         # Reset dependencies
npm run guard:expo    # Validate package versions
npx expo doctor       # Check overall SDK health
npx expo start -c     # Start clean with cache clear
```

---

## 💡 Suggested package.json Scripts

Add to your `package.json`:

```json
"scripts": {
  "clear": "rm -rf node_modules package-lock.json",
  "guard:expo": "node scripts/check-expo-install.js"
}
```

- `npm run clear`: quick reset of dependencies
- `npm run guard:expo`: validates Expo-compatible versions


## 🧱 Reference Docs

- `tooling/expo-sdk-compatibility.md` – version safety
- `tooling/metro-config.md` – resolve bundling issues
- `README-debugging.md` – structured recovery
- `CONTRIBUTING.md` – script conventions and rules

Happy hacking!