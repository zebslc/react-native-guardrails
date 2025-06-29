# 📷 Camera + QR Code Support Guardrail

## ✅ Purpose
Support reading QR codes on all devices using the camera.

## 📦 Required Libraries
- `expo-camera`
- `expo-barcode-scanner`

## ✅ Do
- Request permissions before accessing camera
- Handle both iOS and Android hardware quirks
- Always fallback or notify on web

## ❌ Don’t
- Use HTML5 `<video>` for QR scanning
- Assume camera is always available

## 📌 Example

```ts
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';

<Camera
  onBarCodeScanned={({ data }) => alert(`Scanned: ${data}`)}
  barCodeScannerSettings={{ barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr] }}
/>
```
