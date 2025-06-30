# ⚙️ app.json Configuration (Expo)

## ✅ Required Keys
```json
{
  "expo": {
    "name": "AppName",
    "slug": "appname",
    "orientation": "portrait",
    "userInterfaceStyle": "automatic",
    "plugins": ["expo-router", "expo-font"],
    "web": {
      "output": "single"
    }
  }
}
```

## ✅ Notes
- `plugins` must include `expo-router`, `expo-font`
- `web.output = "single"` for SSR/SPA compatibility
