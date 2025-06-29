# 🛠️ Guardrail Setup Guide (Bolt / Copilot / Windsurf)

## 📁 Where to Put These
Place this folder in your project root:

```
/guardrails
```

## 🧭 For Bolt.new
- Copy `/guardrails` into the root of your Bolt.new template
- Reference in your README or use as part of your developer onboarding

## 🤖 For GitHub Copilot
- Use `copilot.json` or `.copilot/settings.json` to bias toward local context
- Ensure Copilot has access to this directory in your repo

## 🌊 For Windsurf / Context7
- Upload or sync this directory to [https://context7.com](https://context7.com)
- Use it as the base knowledge source when prompting AI

## 📌 Tip
Add a `CONTRIBUTING.md` with:

```md
Before submitting code, ensure you followed all [guardrails](./guardrails).
```

Happy building!
