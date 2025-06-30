# ♿ Accessibility Guardrail

## ✅ Must Use
- `accessible` and `accessibilityLabel` props on all interactive elements (e.g., buttons, touchables, links)
- Sufficient color contrast for text and UI elements (follow WCAG AA guidelines)
- Semantic roles and hints (`accessibilityRole`, `accessibilityHint`) where appropriate
- `accessibilityState` to indicate state (e.g., selected, disabled, checked)
- `accessibilityLiveRegion` for dynamic content updates
- Logical tab order and focus management for keyboard navigation
- Test accessibility using screen readers (VoiceOver, TalkBack)
- Support dynamic font scaling (`allowFontScaling` on all text)
- Set correct language using `accessibilityLanguage` where needed
- Respect user preferences for reduced motion (`AccessibilityInfo.isReduceMotionEnabled`)
- Announce form errors and validation messages to assistive technologies
- Programmatically move focus to important elements using `AccessibilityInfo.setAccessibilityFocus`
- Ensure custom components expose appropriate accessibility props and roles
- Use automated accessibility testing tools (e.g., `@testing-library/react-native` with aXe) in CI/CD
- Ensure all interactive elements are accessible via hardware keyboard navigation (especially for web and TV)

## ❌ Must Not
- Use color as the only means of conveying information
- Hide interactive elements from assistive technology (unless intentional, use `accessible={false}`)
- Use non-descriptive or duplicate `accessibilityLabel` values
- Rely solely on gestures without alternative controls
- Use animations or motion that cannot be disabled if the user prefers reduced motion

## ✅ Good Practices
- Use large touch targets (minimum 44x44 points)
- Provide alternative text for all images (`accessibilityLabel` or `alt`)
- Group related elements using `accessibilityRole="header"` or `accessibilityRole="list"`
- Use `accessibilityActions` for custom actions
- Announce important changes with `AccessibilityInfo.announceForAccessibility`
- Test with both light and dark themes for readability
- Document accessibility considerations in component docs

## ✅ Example
```ts
import { TouchableOpacity, Text, AccessibilityInfo } from 'react-native';

<TouchableOpacity
  accessible={true}
  accessibilityLabel="Play audio"
  accessibilityRole="button"
  accessibilityState={{ disabled: false }}
  onPress={handlePlay}
>
  <Text allowFontScaling={true}>Play</Text>
</TouchableOpacity>

// Announce an error
AccessibilityInfo.announceForAccessibility('Form submission failed. Please check required fields.');
```