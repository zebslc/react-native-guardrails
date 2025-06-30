# ✅ Testability Guardrail

## ✅ Must-Haves
- All services should be unit-tested
- Components should be testable via props/hooks
- Use dependency injection for services or external utilities

## ✅ Libraries
- `@testing-library/react-native`
- `jest`, `msw` for mocks

## ✅ Good Patterns
- Export hooks separately for mocking
- Accept injectable dependencies

## 📌 Example (Testable Component)
```ts
export function SoundButton({ soundService }) {
  return <Button onPress={() => soundService.play()}>Play</Button>;
}
```
