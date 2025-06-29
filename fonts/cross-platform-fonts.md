# Fonts: Google Fonts Only

## Use
- @expo-google-fonts
- `useFonts()` hook
- `SplashScreen.preventAutoHideAsync()` until fonts load

## Avoid
- Local fonts
- Asset loading of fonts

## Example:
```ts
const [fontsLoaded] = useFonts({
  'Inter-Regular': Inter_400Regular,
});
```