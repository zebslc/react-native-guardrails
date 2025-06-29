# 🎧 Audio Support Guardrail

## ✅ Purpose
Ensure consistent audio playback (e.g. white/pink/brown noise) across Web, iOS, and Android.

## 📦 Required Libraries
- `expo-av` – for audio playback

## ✅ Do
- Use `Audio.Sound` for playback
- Always `unloadAsync()` when finished
- Check `Platform.OS` if using advanced controls

## ❌ Don’t
- Use HTML `<audio>` tags
- Assume autoplay works on web/iOS without user gesture

## 📌 Example

```ts
import { Audio } from 'expo-av';
import { useEffect } from 'react';

const sound = new Audio.Sound();

async function playWhiteNoise() {
  await sound.loadAsync(require('@/assets/audio/white-noise.mp3'));
  await sound.playAsync();
}

useEffect(() => {
  return () => {
    sound.unloadAsync();
  };
}, []);
```
