# 🌐 API Wrapper Guardrail

## ✅ Purpose
Abstract API calls to allow mocking and structured retries

## ✅ Structure
- One service per domain (e.g. `userService`, `audioService`)
- Separate types, base config, and error handlers

## ✅ Must
- Be testable and mockable
- Log and track errors
- Retry on failure where applicable
- Use a consistent naming convention (e.g. `getUserProfile`, `updateAudioSettings`)
- Handle network errors gracefully
- Use a consistent base URL or configuration
- Use a consistent error handling strategy (e.g. custom error classes)
- Use a consistent response structure (e.g. `{ data, error }`)
- Use a consistent request structure (e.g. `{ method, url, data }`)
- Use a consistent timeout strategy (e.g. 30 seconds)
- Use a consistent retry strategy (e.g. exponential backoff)
- Use a consistent logging strategy (e.g. `logError`, `logInfo`)
- Use a consistent caching strategy (e.g. in-memory cache, local storage)
- Use a consistent authentication strategy (e.g. token-based, OAuth)
- Use a consistent versioning strategy (e.g. API version in URL)
- Use a consistent header strategy (e.g. `Content-Type`, `Authorization`)
- Use a consistent query parameter strategy (e.g. `?page=1&limit=10`)
- Use a consistent response format (e.g. JSON, XML)
- Use a consistent error format (e.g. `{ code, message, details }`)
- Use a consistent request format (e.g. `{ method, url, headers, body }`)


## ✅ Technologies
- `fetch` or `axios` wrapped in a service
- Logging hooks or interceptors
- Custom error classes for structured error handling

## ❌ Must Not
- Use inline fetch calls in components
- Use hardcoded URLs or endpoints
- Use global state for API responses
- Use inconsistent error handling across services
- Use different libraries for different services (e.g. mixing `fetch` and `axios`)
- Use unstructured responses (e.g. raw JSON without a wrapper)
- Use unstructured errors (e.g. raw error objects without a wrapper)
- Use hardcoded retry logic in components
- Use hardcoded timeouts in components
- Use hardcoded headers in components
- Use hardcoded query parameters in components
- Use hardcoded authentication in components
- Use hardcoded caching in components


## 📌 Example Wrapper
```ts
export async function getUserProfile(id) {
  try {
    const res = await fetch(`${API_BASE}/users/${id}`);
    return await res.json();
  } catch (e) {
    logError(e);
    throw e;
  }
}
```
