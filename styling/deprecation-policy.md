# 🚫 Deprecation Policy

## 🔧 Styling
Applications **must not** use deprecated or unsupported style props or features.

### ❌ Avoid
- Using `boxShadow` (not supported in React Native core)
- Using iOS shadow props (`shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowRadius`) on Android (use `elevation` instead)

### ✅ Use Instead
```ts
const styles = StyleSheet.create({
  card: {
    // For iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    // For Android
    elevation: 3,
  }
});
```

## 🛠️ Other Common React Native Deprecations to Avoid

| Deprecated (or Bad Practice)         | Replacement / Best Practice          |
|--------------------------------------|--------------------------------------|
| `AsyncStorage` (from RN core)        | Use `@react-native-async-storage/async-storage` |
| `ListView`, `Navigator`, `WebView` (from core) | Use community packages (`@react-native-webview`, etc.) |
| `PropTypes` in core components       | Use TypeScript or external prop validation |
| Deprecated lifecycle methods: `componentWillMount`, `componentWillReceiveProps`, `componentWillUpdate` | Use hooks or `UNSAFE_` prefix if absolutely necessary |
| `YellowBox`                         | Use `LogBox`                         |
| `removeClippedSubviews` on Android  | Usually not needed; test before using |
| Inline styles for performance-critical components | Use `StyleSheet.create`              |
| `Touchable*` components for new code | Prefer `Pressable`                   |
| `require('image.png')` outside static context | Use static imports for images         |
| `FlatList` without `keyExtractor`   | Always define `keyExtractor`         |
| `Text` without `fontFamily`         | Specify `fontFamily` for consistency |
| `Image` with deprecated props       | Use current documented props         |
| `TouchableOpacity` without `activeOpacity` | Set `activeOpacity` for feedback      |
| `Modal` without `animationType`     | Set `animationType` to `fade` or `slide` |
| `StatusBar` without `barStyle`      | Set `barStyle` to `dark-content` or `light-content` |
| `TextInput` without `autoCapitalize`| Set `autoCapitalize` as needed       |
| `Button` without `title`            | Always set `title` prop              |
| `Switch` without `trackColor`       | Set `trackColor` prop                |
| `ActivityIndicator` without `size`  | Set `size` to `small` or `large`     |
| `Picker` without `selectedValue`    | Set `selectedValue` prop             |
| `FlatList` without `renderItem`     | Always define `renderItem` prop      |
| `SectionList` without `renderSectionHeader` | Define `renderSectionHeader` if using sections |
| `Pressable` without `onPress`       | Always define `onPress` prop         |
| `WebView` without `javaScriptEnabled` | Set `javaScriptEnabled` as needed    |
| `PanResponder` without `onMoveShouldSetPanResponder` | Always define this prop              |
| `TouchableWithoutFeedback` without `onPress` | Always define `onPress` prop         |
| `TouchableHighlight` without `underlayColor` | Set `underlayColor` prop             |
| `TouchableNativeFeedback` without `background` | Set `background` prop                |

> **Note:** Some props (like `pointerEvents`, `resizeMode`, `keyboardShouldPersistTaps`) are string props and do not require object values. Only set them as documented in the React Native docs.

---

## Additional Notes

- Always check the [React Native documentation](https://reactnative.dev/docs/getting-started) for the latest best practices and deprecations.
- Prefer hooks and functional components for new code.
- Use community-maintained packages for features removed from core.