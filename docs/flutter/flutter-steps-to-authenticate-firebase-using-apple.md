---
id: flutter-steps-to-authenticate-firebase-using-apple
title: Steps to Authenticate firebase using Apple
---

1. Open your firebase console.
2. Go to Sign-in method in Authentication.
3. Go to the Apple and enable apple sign in.

![eShop](/img/apple1.png) 

4. In Xcode, select the Signing & Capabilities tab, and add "Sign In With Apple" as a new Capability then select a team on the Code Signing section.

![eShop](/img/apple2.png) 

5. This will generate and configure an App ID in the "Certificates, Identifiers & Profiles" section of the Apple Developer portal.

    > **Important:** 
    > For iOS authentication setup and URL scheme configuration, please refer to our <a href="https://wrteam-in.github.io/common_app_doc/GeneralSettings/firebase/#-for-ios-authentication-setup" target="_blank" rel="noopener noreferrer">comprehensive guide</a>. This step is crucial for enabling Apple Sign-In in your iOS app.
