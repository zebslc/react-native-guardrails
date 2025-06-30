# 🔉 Audio Support

## ✅ Must Use
- `expo-av` for mobile playback
- `Platform.OS` for fallback detection
- Audio controls must be visible and user-triggered
- Mobile-first playback (native first, web fallback)

## ❌ Must Not
- Autoplay sounds
- Rely on audio if permission denied or unsupported
- Auto-stop on screen change (leave control to user)

## ✅ Example
```ts
import { Audio } from 'expo-av';
const sound = new Audio.Sound();

await sound.loadAsync(require('@/assets/white-noise.mp3'));
await sound.playAsync(); // triggered by user action
```

## 📌 Example
```ts
<Button onPress={handleStop}>Stop Sound</Button>
```
