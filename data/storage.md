# 💾 Device Storage Rules

## ✅ What to Store
- Preferences (e.g. sound volume, mode)
- Last used tab or feature
- Device or browser ID for uniqueness

## ✅ Use
- `@react-native-async-storage/async-storage`
- Store app preferences, settings, and session state
- Use device/browser ID for uniqueness
- Encrypt if needed
- Use for small amounts of data (less than 6MB)
- Use for data that doesn't require complex queries
- Use for data that can be easily serialized to JSON
- Use for data that can be easily deserialized from JSON
- Use for data that can be easily stored as key-value pairs
- Use for data that can be easily retrieved by key
- Use for data that can be easily removed by key

## ❌ Must Not
- Store sensitive data (passwords, tokens) without encryption
- Store large files (use file system instead)
- Use for real-time data (use WebSocket or similar)
- Use for critical data that requires high reliability (use a database)
- Use for data that requires complex queries (use a database)
- Use for data that needs to be shared across multiple apps (use a database or cloud storage)

## ✅ Example
```ts
await AsyncStorage.setItem('volume', JSON.stringify(0.8));
```

## ✅ Good Practice
- Use `AsyncStorage` and encrypt if necessary
- Reset data if storage gets corrupted
- Use a consistent key naming convention
- Handle errors gracefully
- Use try-catch blocks when accessing storage
- Use `await` for asynchronous operations
- Use `JSON.stringify` and `JSON.parse` for serialization
- Use `AsyncStorage.clear()` to reset all data if needed
- Use `AsyncStorage.removeItem(key)` to remove specific items
- Use `AsyncStorage.getItem(key)` to retrieve specific items
- Use `AsyncStorage.multiSet(pairs)` for batch operations
- Use `AsyncStorage.multiGet(keys)` for batch retrieval
- Use `AsyncStorage.multiRemove(keys)` for batch removal
