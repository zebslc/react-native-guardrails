# 📷 Camera + QR Scanning Guardrails

## ✅ Use
- `expo-camera` for camera view
- `expo-barcode-scanner` for QR and barcode reading
- Ask for permission and handle fallback
- Unmount camera on screen change
- Use `Platform.OS` for fallback detection
- Provide clear user instructions for scanning
- Use `Camera` component for camera view
- Use `BarCodeScanner` component for scanning
- Use `useCameraPermissions` hook for permission handling
- Use `useBarcodeScanner` hook for scanning logic
- Use `Camera` and `BarCodeScanner` components together

## ✅ Example
```ts
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
```
