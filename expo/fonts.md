# 🔤 Fonts (Expo Google Fonts)

## ✅ Must Use
- `@expo-google-fonts/inter` or similar
- `useFonts` from `expo-font`
- `SplashScreen.preventAutoHideAsync()` until fonts are ready

## ❌ Must Not
- Use local fonts
- Import fonts manually from static files

## ✅ Example
```ts
import { useFonts } from 'expo-font';
import { Inter_400Regular } from '@expo-google-fonts/inter';
import { SplashScreen } from 'expo-router';

SplashScreen.preventAutoHideAsync();

const [fontsLoaded] = useFonts({ 'Inter-Regular': Inter_400Regular });
```
