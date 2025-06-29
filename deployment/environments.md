# Environment-Specific Builds

## Web
- `expo export:web`
- `web.output = 'export'` in app.json

## iOS/Android
- Use `eas build`
- Environment set with `.env.production`, etc

## Example .env:
```env
EXPO_PUBLIC_API_URL=https://api.example.com
EXPO_PUBLIC_ENVIRONMENT=production
```