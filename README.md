> This is a fork from the official appwrite react native sdk, please refer to them to get regular updates and maintance
>this repo is just to test for a solution regarding the sudden TurboModule Error with the new Architicture
# A wrokaround for appwrite react native sdk

Appwrite is an amazing platform to provide backend to your app or website, this is a fork of the official sdk (please refer to their official github page) made for react native apps.
## why
well the only reason was an error that occured while testing the app after upgrading expo version and enabling new Archticture.
this is just a test to fix, not an upgrade or anything else
use with caution.

### why not do a pull request
for multiple of reasons biggest one so far is my lack of expertise with github and github development community, all my work so far and interaction with github was personal and limited, so i don't know where to get  started and how to test my fixes properly to not cause more harm.
so this fork stands, as just a workaround until the more experienced devs of appwrite can track where the error is originating from and fix it.


## does this npm package work?
yes but on a limited time frame, it'll be not maintained, so if there are other issues and fixes i'll sync this fork to the upstream, until the main issue the npm package was created for get fixed.

### why use it
use it with caution just for personal projects, ofcouse, for anything more valuable i advice contacting the appwrite team to get a quicker fix to the issue.

### how do i know this repo fixes the issue
it works on one of my production apps, that's all i know
i saw the error, and found out the error originates from src/client.ts so i changed the Platform module to other modules just as a workaround, and sure it works now, but i haven't gotten around why now, so i'll have to do more testing to find out.

### Fixes attempted
1. using Device module from expo-device

example:

```
import * as Device from 'expo-device';
///code before
 this.realtime.socket = new WebSocket(url, undefined, {
                    headers: {
                        Origin: `appwrite-${Device.osName}://${this.config.platform}`
                    }
///code after
```
> while testing on a realme phone this fix was thrown away, as Device.osName returns something other than android.
2. using Constants from expo-constants

> currently onattempt number 2, this one addresses the previous issue with fix number 1 as 7 devices including 3 ios devices were working fine without any errors or issues.



## Installation

To install

```bash
npx expo install @icarus00x/react-native-appwrite-expo-newarch react-native-url-polyfill
```

> guide from the offical repo on how to use the sdk 

## Getting Started

### Add your Platform
If this is your first time using Appwrite, create an account and create your first project.

Then, under **Add a platform**, add a **Android app** or a **Apple app**. You can skip optional steps.

#### iOS steps
Add your app **name** and **Bundle ID**. You can find your **Bundle Identifier** in the **General** tab for your app's primary target in XCode. For Expo projects you can set or find it on **app.json** file at your project's root directory.

#### Android steps
Add your app's **name** and **package name**, Your package name is generally the **applicationId** in your app-level **build.gradle** file. For Expo projects you can set or find it on **app.json** file at your project's root directory.

## Setup

On `index.js` add import for `react-native-url-polyfill`

```
import 'react-native-url-polyfill/auto'
```

> If you are building for iOS, don't forget to install pods
> `cd ios && pod install && cd ..`

### Init your SDK
Initialize your SDK with your Appwrite server API endpoint and project ID which can be found in your project settings page.

```js
import { Client } from 'react-native-appwrite';
// Init your React Native SDK
const client = new Client();

client
    .setEndpoint('http://localhost/v1') // Your Appwrite Endpoint
    .setProject('455x34dfkj') // Your project ID
    .setPlatform('com.example.myappwriteapp') // Your application ID or bundle ID.
;
```

### Make Your First Request
Once your SDK object is set, access any of the Appwrite services and choose any request to send. Full documentation for any service method you would like to use can be found in your SDK documentation or in the [API References](https://appwrite.io/docs) section.

```js
const account = new Account(client);

// Register User
account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });

```

### Full Example
```js
import { Client, Account } from 'react-native-appwrite';
// Init your React Native SDK
const client = new Client();

client
    .setEndpoint('http://localhost/v1') // Your Appwrite Endpoint
    .setProject('455x34dfkj')
    .setPlatform('com.example.myappwriteapp') // YOUR application ID
;

const account = new Account(client);

// Register User
account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
```

### Learn more
You can use the following resources to learn more and get help
- 🚀 [Getting Started Tutorial](https://appwrite.io/docs/quick-starts/react-native)
- 📜 [Appwrite Docs](https://appwrite.io/docs)
- 💬 [Discord Community](https://appwrite.io/discord)
- 🚂 [Appwrite React Native Playground](https://github.com/appwrite/playground-for-react-native)

## Contribution

This library is auto-generated by Appwrite custom [SDK Generator](https://github.com/appwrite/sdk-generator). To learn more about how you can help us improve this SDK, please check the [contribution guide](https://github.com/appwrite/sdk-generator/blob/master/CONTRIBUTING.md) before sending a pull-request.

## License

Please see the [BSD-3-Clause license](https://raw.githubusercontent.com/appwrite/appwrite/master/LICENSE) file for more information.