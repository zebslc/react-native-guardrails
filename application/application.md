# Application Guardrails

This folder contains rules and best practices for application-level concerns (performance, documentation, error handling, dependency management, etc.).

---

## 📁 Folder Structure Guidance

When starting a new project, set up your folders as follows:

```
/guardrails
  /application         ← App-level guardrails
  /components          ← Component guardrails
  /data                ← Data, API, state, and storage guardrails
  /deployment          ← Build, release, analytics, telemetry guardrails
  /expo                ← Expo Go & managed workflow guardrails
  /media               ← Media (audio, camera, etc.) guardrails
  /native              ← Native code & advanced feature guardrails
  /navigation          ← Navigation guardrails
  /permissions         ← Permissions guardrails
  /platform-support    ← Device/platform compatibility guardrails
  /scripts             ← Project scripts and script guardrails
  /security            ← Security and permissions guardrails
  /styling             ← Styling, fonts, tokens, accessibility, i18n guardrails
  /testing             ← Testing and testability guardrails
  /tooling             ← Tooling, Metro config, AI context guardrails
```

- Use the `expo/` folder for rules and examples that work with Expo Go or the Expo managed workflow.
- Use the `native/` folder for rules, examples, and setup instructions for custom native code or advanced features (e.g., real-time audio, custom device APIs).
- Place platform-specific implementations (Android, iOS, Web) in their respective folders as needed.

---

## 🚦 Choosing Your Workflow

- **If your app only uses Expo APIs and does not require custom native code:**  
  Follow the guardrails in the `expo/` folder.
- **If your app needs advanced features or custom native modules:**  
  Follow the guardrails in the `native/` folder and set up your project using the provided instructions.

---

## 📝 Sample Prompt for New Projects

> Specify at project start:  
> “Will this application use advanced features (e.g., real-time audio, custom device APIs) that require native code, or can it run entirely with Expo Go?”

Example prompt for AI/codegen tools:
```
I am starting a new React Native project.  
- If the app will use only Expo APIs and no custom native code, set up the folder structure and guardrails for Expo Go.  
- If the app will require advanced features or custom native modules, set up the folder structure and guardrails for native code, and include platform-specific folders for Android, iOS, and Web.
```