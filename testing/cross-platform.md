# Cross-Platform Testing

## Requirements
- Run Jest tests with `jest-expo`
- Test Web with `Playwright` or `Testing Library`
- Use `Platform.OS` guards if needed

## Tip:
```ts
if (Platform.OS === 'web') {
  expect(console.log).toHaveBeenCalled();
}
```