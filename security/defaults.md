# 🔐 Permissions Guardrail

## ✅ Prompt Strategy
Use permission prompts with fallbacks:

- Use `expo-permissions` or API-specific hooks (e.g., `useCameraPermissions`)
- Handle denied state with appropriate UX fallback
- Always provide a reason why a permission is needed
- Use `Platform.OS` to handle platform-specific permission logic
- Use `useEffect` to check permissions on mount
- Use `useCallback` for permission request functions
- Use `useState` to manage permission state

## ✅ Fallback Examples
- Camera denied → Show placeholder message
- Microphone denied → Disable recording feature
- Location denied → Disable location-based features
- Notifications denied → Disable push notifications

## ❌ Avoid
- Hardcoding permissions in components
- Using permissions without user consent
- Ignoring denied permissions

## 📌 Example (Camera)
```ts
if (!permission.granted) {
  return <Text>Enable camera in settings to scan QR codes</Text>;
}
```
