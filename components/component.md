# 🧩 Component Guardrails

## ✅ Must Use
- Functional components with hooks (no new class components)
- PropTypes or TypeScript for prop validation
- Clear, descriptive component and prop names
- `StyleSheet.create` for styles (no inline styles except for dynamic cases)
- Accessibility props (`accessible`, `accessibilityLabel`, etc.) for interactive elements
- Default props for optional values

## ✅ Good Practices
- Keep components small and focused (single responsibility)
- Split complex UIs into smaller subcomponents
- Use memoization (`React.memo`, `useMemo`, `useCallback`) to optimize performance
- Document public components with JSDoc or TypeScript comments
- Accept children and render them appropriately
- Use forwardRef for components that expose refs

## ❌ Must Not
- Use side effects in render logic
- Mutate props or state directly
- Use deprecated lifecycle methods or class components
- Hardcode values that should be configurable via props
- Rely on global state unless necessary (prefer props/context)
- Export multiple components from a single file (except for small subcomponents)

## 📌 Example
```ts
import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  title: string;
  subtitle?: string;
};

export const Card = memo(function Card({ title, subtitle }: Props) {
  return (
    <View style={styles.container} accessible accessibilityLabel={title}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
});

const styles = StyleSheet.create({
  container: { padding: 16, borderRadius: 8, backgroundColor: '#fff' },
  title: { fontWeight: 'bold', fontSize: 18 },
  subtitle: { color: '#666', fontSize: 14 },
});
```
