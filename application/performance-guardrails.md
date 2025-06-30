# Performance Guardrails

## Rendering Optimization
- Use `React.memo` for functional components to prevent unnecessary re-renders.
- Use `useCallback` and `useMemo` to memoize functions and values passed as props.
- Avoid creating new functions or objects inside render unless necessary.

## Common Performance Pitfalls
- Avoid rendering large images; resize and compress assets.
- Use optimized image components (e.g., `react-native-fast-image`).
- Avoid unoptimized lists; use `FlatList` or `SectionList` for large data sets.
- Do not block the JS thread with heavy computations; offload to native modules or background tasks.
- Minimize the number of re-renders by lifting state up only when needed.

## Efficient List Usage
- Always provide `keyExtractor` for `FlatList`/`SectionList`.
- Use `initialNumToRender`, `maxToRenderPerBatch`, and `windowSize` props to control rendering.
- Use `getItemLayout` when possible for fixed-height items.
- Avoid inline arrow functions and object literals in list item renderers.
