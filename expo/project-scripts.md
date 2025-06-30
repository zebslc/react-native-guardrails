# 🧪 Project Scripts (package.json)

## Required Scripts
```json
"scripts": {
  "dev": "EXPO_NO_TELEMETRY=1 expo start",
  "build:web": "expo export --platform web",
  "lint": "expo lint",
  "type-check": "tsc --noEmit",
  "clear": "rm -rf node_modules package-lock.json",
  "guard:expo": "node scripts/check-expo-install.js"
}
```
