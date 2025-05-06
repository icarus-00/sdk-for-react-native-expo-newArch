# Appwrite React Native SDK - New Architecture Fix

This repository is a fork of the official [Appwrite React Native SDK](https://github.com/appwrite/sdk-for-react-native), specifically created to address TurboModule errors that occur when using the New Architecture in React Native.

## Background

Appwrite is a powerful backend platform for web and mobile applications. This fork exists as a temporary solution to resolve compatibility issues that emerged when testing applications after upgrading Expo and enabling the New Architecture.

> **Note:** This is a temporary workaround, not an official upgrade. Please use with caution and refer to the official repository for regular updates and maintenance.

## Why This Fork Exists

This package specifically addresses compatibility issues with the New Architecture in React Native. The modifications focus on resolving errors originating from `src/client.ts` by providing alternative module implementations.

### Current Status

This fork has been tested and works in production applications, but should be considered a temporary solution until the official SDK is updated.

### Fix Details

Two approaches have been tested:

1. **Using Expo Device Module:** 
   ```typescript
   import * as Device from 'expo-device';
   
   this.realtime.socket = new WebSocket(url, undefined, {
       headers: {
           Origin: `appwrite-${Device.osName}://${this.config.platform}`
       }
   });
   ```
   > This solution was found to be inconsistent on certain Android devices where `Device.osName` returns unexpected values.

2. **Using Expo Constants:**
   This is the current implementation which has been tested successfully across 7 devices (including 3 iOS devices) without errors.

## Installation

```bash
npx expo install @icarus00x/react-native-appwrite-expo-newarch react-native-url-polyfill
```

## Setup Guide

### 1. Import URL Polyfill

In your `index.js` file, add:

```javascript
import 'react-native-url-polyfill/auto'
```

> **iOS Note:** Remember to install pods with `cd ios && pod install && cd ..`

### 2. Initialize the SDK

```javascript
import { Client } from 'react-native-appwrite';

const client = new Client();

client
    .setEndpoint('https://your-endpoint/v1') // Your Appwrite Endpoint
    .setProject('your-project-id')           // Your project ID
    .setPlatform('com.example.yourapp')      // Your application ID or bundle ID
;
```

### 3. Make Your First Request

```javascript
import { Client, Account, ID } from 'react-native-appwrite';

const client = new Client();
client
    .setEndpoint('https://your-endpoint/v1')
    .setProject('your-project-id')
    .setPlatform('com.example.yourapp')
;

const account = new Account(client);

// Register User
account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });
```

## Platform Configuration

Before using this SDK, you'll need to configure your application in the Appwrite Console:

1. Create an account and project in Appwrite if you haven't already
2. Add your platform (Android or iOS)

### For iOS
- Add your app name and Bundle ID (found in XCode under the General tab or in `app.json` for Expo projects)

### For Android
- Add your app name and package name (typically the `applicationId` in your app-level `build.gradle` file or in `app.json` for Expo projects)

## Additional Resources

- 🚀 [Getting Started Tutorial](https://appwrite.io/docs/quick-starts/react-native)
- 📜 [Appwrite Documentation](https://appwrite.io/docs)
- 💬 [Discord Community](https://appwrite.io/discord)
- 🚂 [Appwrite React Native Playground](https://github.com/appwrite/playground-for-react-native)

## Contributing

This fork is maintained as a temporary solution. For long-term fixes, please consider contributing to the [official SDK repository](https://github.com/appwrite/sdk-for-react-native) following their [contribution guidelines](https://github.com/appwrite/sdk-generator/blob/master/CONTRIBUTING.md).

## License

This project is licensed under the [BSD-3-Clause license](https://raw.githubusercontent.com/appwrite/appwrite/master/LICENSE).