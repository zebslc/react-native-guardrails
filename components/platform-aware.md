# Platform-Aware Components

## Rules
- Always wrap native-only APIs with platform checks
- Avoid crash-prone imports on web

## Example:
```ts
import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';

if (Platform.OS !== 'web') {
  Haptics.impactAsync();
}
```