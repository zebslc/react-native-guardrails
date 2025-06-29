# 🤝 Contributing Guidelines

Thank you for contributing!

## ✅ Please Follow These Guardrails

Before submitting any code, ensure you:

- Follow all rules defined in the [/guardrails](./guardrails) directory
- Use `StyleSheet.create` for styles
- Only use cross-platform compatible APIs
- Validate audio, camera, storage, and API code across platforms

## 🧠 AI & Codegen Developers

If you're using GitHub Copilot, Windsurf, or Context7:

- Reference `/guardrails` as your source of truth
- Avoid generating components outside the documented architecture
- Do not rely on hallucinated modules or APIs

## 🛠 How to Validate

Run the app using:

```bash
npm run dev
npm run type-check
npm run lint
```

Then test on:

- Web (`expo export:web`)
- iOS (simulator)
- Android (emulator)

Happy building!
