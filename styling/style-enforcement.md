# 🎨 Styling Guardrail

## ✅ Must Use
- `StyleSheet.create` for all style definitions
- Centralized design tokens for all color, spacing, and typography values
- Responsive units (`Dimensions`, `useWindowDimensions`, or similar) for scalable layouts
- Theme support for dark and light mode (via context or theme provider)
- Accessibility props (`accessible`, `accessibilityLabel`, etc.) for interactive elements

## ❌ Must Not
- NativeWind
- styled-components
- Inline styles unless scoped and justified
- Hardcoded color, spacing, or font values (always use tokens)
- Deprecated or unsupported style props (see deprecation policy)
- Absolute positioning for main layout (only for overlays/floating elements)
- Magic numbers for spacing, font sizes, etc.

## ✅ Good Practices
- Use `StyleSheet.flatten` for combining multiple style objects
- Use functional styles for dynamic values based on props or state
- Use `Platform.select` for platform-specific style tweaks
- Document and enforce any custom style utilities/helpers
- Prefer semantic naming for style objects (e.g., `container`, `buttonPrimary`)

## ✅ Example
```ts
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors, spacing, fonts } from '../styling/design-tokens';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    backgroundColor: colors.gray[50],
    fontFamily: fonts.regular,
    minWidth: width * 0.9,
    ...(Platform.OS === 'ios' && { shadowColor: colors.gray[900] }),
  },
  buttonPrimary: {
    backgroundColor: colors.primary[500],
    paddingVertical: spacing.sm,
    borderRadius: 8,
  },
});
```