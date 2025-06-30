# 🧱 Metro Config (Expo SDK 53 Guardrail)

Use this configuration to prevent issues like:

- `ERR_UNKNOWN_FILE_EXTENSION`
- CJS/ESM conflicts
- Asset bundling errors

---

## `metro.config.js`

```js
const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);

config.resolver.sourceExts = ['js', 'jsx', 'ts', 'tsx', 'json', 'mjs', 'cjs'];
config.resolver.assetExts = [...config.resolver.assetExts, 'png', 'jpg', 'jpeg', 'gif', 'svg'];
config.resolver.platforms = ['native', 'web', 'ios', 'android'];

// Optional: disable package export resolution if needed
// config.resolver.unstable_enablePackageExports = false;

module.exports = config;
```

---

## 🔎 Tips

- Use this for Hermes or bundling issues.
- Restart with cache: `npx expo start -c`.
