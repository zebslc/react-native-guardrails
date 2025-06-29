# 🌐 API Communication Guardrail

## ✅ Purpose
Ensure reliable and secure API calls across platforms.

## 📦 Recommended
- `axios` or native `fetch`

## ✅ Do
- Handle loading, success, error states
- Use environment variables for base URLs
- Retry or timeout requests if needed

## ❌ Don’t
- Hardcode URLs
- Expose secrets in source

## 📌 Example

```ts
const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/submit`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```
