# State Management

## Library Recommendations
- Use proven libraries: Redux, Zustand, Jotai, or React Context for state management.

## State Separation
- Separate local, global, and server state.
- Avoid prop drilling; use context or state libraries as needed.
- Do not use global mutable state.

## Best Practices
- Keep state minimal and colocated where possible.
- Use selectors and memoization to avoid unnecessary re-renders.
