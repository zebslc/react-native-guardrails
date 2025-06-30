# 📱 Layout & Framework Ready Hook

## ✅ Must Include
- `useFrameworkReady()` call in `app/_layout.tsx`
- `Stack` wrapper with `headerShown: false`

## Required Example
```ts
import { Stack } from 'expo-router';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';

export default function Layout() {
  useFrameworkReady();
  return <Stack screenOptions={{ headerShown: false }} />;
}
```
