# 🎛️ Advanced Audio Guardrails

## ✅ Must Use
- Use `expo-av` for standard playback; for advanced needs, consider native modules or libraries like `react-native-sound`, `react-native-track-player`, or custom native code.
- For mixing multiple sounds, manage each `Audio.Sound` instance separately and control volume/panning per instance.
- Use stereo panning APIs (`setPanAsync`) for left/right balance if supported.
- For white noise or procedural audio, use pre-generated files or generate audio buffers natively (not supported in Expo Go; requires custom dev client or bare workflow).
- Test audio features on all target platforms (iOS, Android, Web) for compatibility.

## ✅ Good Practices
- Release/unload all sound resources when not in use to avoid memory leaks.
- Use `Audio.setAudioModeAsync` to configure mixing, ducking, and background playback.
- Document any native code or custom audio logic for maintainability.
- Handle audio interruptions (calls, notifications) gracefully.

## ❌ Must Not
- Assume all devices support advanced audio features (test and provide fallbacks).
- Block the UI thread with audio processing.
- Leave multiple sounds playing unintentionally (always manage lifecycle).


## 📌 Example: Mixing Two Sounds
```ts
import { Audio } from 'expo-av';

const sound1 = new Audio.Sound();
const sound2 = new Audio.Sound();

await sound1.loadAsync(require('@/assets/white-noise.mp3'));
await sound2.loadAsync(require('@/assets/music.mp3'));

await sound1.setVolumeAsync(0.5);
await sound2.setVolumeAsync(0.5);

await sound1.playAsync();
await sound2.playAsync();
```

## 📌 Example: Stereo Panning
```ts
await sound1.setPanAsync(-1); // Left
await sound2.setPanAsync(1);  // Right
```


## 📌 Example: Mixing White Noise (Left) and Pink Noise (Right)

> Procedural audio generation requires a custom dev client or native module. The following is a conceptual example using a native module or Web Audio API (for web).

### Native Module (Conceptual, Pseudocode)
```ts
// Pseudocode for a custom native module or web implementation

// Generate white noise buffer
function generateWhiteNoiseBuffer(length) {
  const buffer = new Float32Array(length);
  for (let i = 0; i < length; i++) {
    buffer[i] = Math.random() * 2 - 1;
  }
  return buffer;
}

// Generate pink noise buffer (Voss-McCartney algorithm)
function generatePinkNoiseBuffer(length) {
  const buffer = new Float32Array(length);
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
  for (let i = 0; i < length; i++) {
    const white = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + white * 0.0555179;
    b1 = 0.99332 * b1 + white * 0.0750759;
    b2 = 0.96900 * b2 + white * 0.1538520;
    b3 = 0.86650 * b3 + white * 0.3104856;
    b4 = 0.55000 * b4 + white * 0.5329522;
    b5 = -0.7616 * b5 - white * 0.0168980;
    buffer[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
    buffer[i] *= 0.11; // (roughly) compensate for gain
    b6 = white * 0.115926;
  }
  return buffer;
}

// Create stereo buffer: left = white, right = pink
const length = 44100 * 5; // 5 seconds at 44.1kHz
const left = generateWhiteNoiseBuffer(length);
const right = generatePinkNoiseBuffer(length);

// Combine into stereo interleaved buffer
const stereoBuffer = new Float32Array(length * 2);
for (let i = 0; i < length; i++) {
  stereoBuffer[i * 2] = left[i];     // Left channel
  stereoBuffer[i * 2 + 1] = right[i]; // Right channel
}

// Play using a custom audio module or Web Audio API
```

### Web Audio API (Web Only)
```js
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const length = audioCtx.sampleRate * 5; // 5 seconds

// White noise (left)
const whiteBuffer = audioCtx.createBuffer(1, length, audioCtx.sampleRate);
const whiteData = whiteBuffer.getChannelData(0);
for (let i = 0; i < length; i++) whiteData[i] = Math.random() * 2 - 1;

// Pink noise (right)
const pinkBuffer = audioCtx.createBuffer(1, length, audioCtx.sampleRate);
const pinkData = pinkBuffer.getChannelData(0);
// (Use pink noise generation as above)

const stereoBuffer = audioCtx.createBuffer(2, length, audioCtx.sampleRate);
stereoBuffer.copyToChannel(whiteData, 0); // Left
stereoBuffer.copyToChannel(pinkData, 1);  // Right

const source = audioCtx.createBufferSource();
source.buffer = stereoBuffer;
source.connect(audioCtx.destination);
source.start();
```

## 📌 Example: Advanced Sound Generation (Sine Sweep)

```js
// Web Audio API example: Sine sweep from 200Hz to 2000Hz over 5 seconds
const ctx = new (window.AudioContext || window.webkitAudioContext)();
const osc = ctx.createOscillator();
osc.type = 'sine';
osc.frequency.setValueAtTime(200, ctx.currentTime);
osc.frequency.linearRampToValueAtTime(2000, ctx.currentTime + 5);
osc.connect(ctx.destination);
osc.start();
osc.stop(ctx.currentTime + 5);
```

> For mobile, use a custom native module (Swift/Kotlin/C++) for real-time synthesis or advanced DSP.

---

**Note:**  
- Expo Go does not support real-time audio buffer playback or synthesis. Use a custom dev client or bare workflow for advanced audio.
- For cross-platform advanced audio, consider libraries like Superpowered, AudioKit, or custom native modules.

> For real-time audio synthesis or advanced DSP, use native modules or Web Audio API