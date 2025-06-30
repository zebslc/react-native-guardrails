# Build & Release Guardrails

These guardrails ensure your application is built, versioned, and released in a reliable, secure, and maintainable way.

---

## 1. Versioning & Changelogs

- Use [Semantic Versioning](https://semver.org/) (MAJOR.MINOR.PATCH) for all releases.
- Update the version in `app.json` (Expo) or `package.json` (bare) before each release.
- Maintain a `CHANGELOG.md` with clear, dated entries for every release.
- Tag each release in your version control system (e.g., `git tag v1.2.3`).

---

## 2. Build Process

### Expo (Managed or Custom Dev Client)
- Use `expo build` (legacy) or [EAS Build](https://docs.expo.dev/build/introduction/) for cloud builds:
  ```sh
  npx expo run:android
  npx expo run:ios
  npx eas build --platform android
  npx eas build --platform ios
  ```
- Always run `npx expo doctor` and `npx expo prebuild` before building.
- For web, use:
  ```sh
  npx expo export --platform web
  ```

### Bare React Native
- Android:  
  ```sh
  npx react-native run-android
  ./gradlew assembleRelease
  ```
- iOS:  
  ```sh
  npx react-native run-ios --configuration Release
  xcodebuild -workspace YourApp.xcworkspace -scheme YourApp -configuration Release
  ```
- Web:  
  Use your chosen bundler (Webpack, Vite, etc.).

---

## 3. Release Channels & OTA

- Use release channels for staging, QA, and production (Expo: `--release-channel` flag).
- For Expo, use OTA (Over-the-Air) updates responsibly:
  - Only push OTA updates for bug fixes and minor changes.
  - Avoid breaking changes or native code changes in OTA updates.
  - Test OTA updates on all platforms before publishing.

---

## 4. Signing & Security

- **Android:**  
  - Use a secure keystore for signing APKs/AABs.
  - Never commit keystore files or credentials to version control.
- **iOS:**  
  - Use Xcode-managed or manual signing with secure distribution certificates and provisioning profiles.
  - Never commit `.p12` or provisioning profiles to version control.

---

## 5. Automated CI/CD

- Use CI/CD pipelines (e.g., GitHub Actions, CircleCI, Bitrise) to automate builds, tests, and releases.
- Automate version bumping, changelog generation, and artifact uploads.
- Run all tests and linters before building release artifacts.

---

## 6. Testing Before Release

- Run all unit, integration, and end-to-end tests.
- Manually test release builds on all target platforms and devices.
- Verify OTA updates, push notifications, analytics, and deep linking.

---

## 7. Release Artifacts

- Store release artifacts (APKs, AABs, IPAs, web bundles) in a secure, versioned location (e.g., cloud storage, CI/CD artifacts).
- Document the release process and artifact locations for your team.

---

## 8. Rollback Strategy

- Be prepared to rollback to a previous release in case of critical issues.
- For Expo OTA, use `expo publish:rollback`.
- For app store releases, keep previous versions available for re-deployment.

---

## 9. Post-Release

- Monitor crash reports, analytics, and user feedback.
- Patch and hotfix as needed, following the same guardrails.

---

**References:**
- [Expo Build & Release Docs](https://docs.expo.dev/distribution/introduction/)
- [React Native Release Process](https://reactnative.dev/docs/signed-apk-android)
- [EAS Build](https://docs.expo.dev/build/introduction/)

---