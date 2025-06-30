# Security Guardrails

## Sensitive Data Handling
- Never hardcode secrets, API keys, or credentials in source code.
- Use secure storage solutions (e.g., `react-native-keychain`, `SecureStore`) for sensitive data.
- Avoid logging sensitive information.

## Network Security
- Always use HTTPS for API requests.
- Validate SSL certificates; do not disable certificate validation.
- Use libraries that support certificate pinning if possible.

## Code Obfuscation & Attack Surface
- Enable code obfuscation (e.g., Proguard for Android, Hermes for JS).
- Minimize app permissions and exposed endpoints.
- Regularly audit dependencies for vulnerabilities.
