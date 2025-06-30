# Application Guardrails

This folder contains rules and best practices for application-level concerns in your React Native project.

## What belongs here?

- Performance guardrails
- Error handling and logging
- Documentation and code comment standards
- Dependency management
- General application structure and setup

## Folder Structure Guidance

When starting a new project, use this folder to guide the setup of your overall application structure.  
Refer to the included guardrail files for best practices on organizing, maintaining, and scaling your app.

## Workflow Selection

- If your app will use only Expo APIs and no custom native code, follow the guardrails in the `expo/` folder.
- If your app will require advanced features or custom native modules, follow the guardrails in the `native/` folder and set up your project accordingly.

For more details, see the main project