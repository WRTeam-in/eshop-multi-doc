---
id: flutter-how-to-set-notification
title: How to set Notification
---

For detailed information about Firebase Cloud Messaging (FCM) setup and configuration, please refer to our <a href="https://wrteam-in.github.io/common_app_doc/GeneralSettings/notifications" target="_blank" rel="noopener noreferrer">comprehensive guide</a>.

1. Go to your firebase project in project settings -> general. Copy your project id from there as below image.

![eShop](/img/notification1.png)

2. Go to your firebase project in project settings -> Cloud Messaging. Copy your vap id key from there as below image.

![eShop](/img/notification2.png)

3. Go to project settings -> service accounts. For download service json file click on Generate new private key button as below image.

![eShop](/img/notification3.png)

4. Now add your project id, vap id key and downloaded service json file in admin panel Settings > Notification Settings and save it.

![eShop](/img/notification4.png)

> **Important:** 
> Don't forget to add SHA1 and SHA256 keys in Firebase. For adding SHA1 and SHA256 keys in Firebase, please refer to our <a href="https://wrteam-in.github.io/common_app_doc/GeneralSettings/firebase#-add-sha1--sha256-keys-in-firebase" target="_blank" rel="noopener noreferrer">comprehensive guide</a>. This step is crucial for enabling notifications in your Android app.