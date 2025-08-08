---
id: flutter-how-to-change-app-version
title: How to change App Version
---

1. Go to pubspec.yaml
2. EX.Update version:A.B.C+X in pubspec.yaml.
3. **For Android:**
   - A.B.C represents the versionName such as 1.0.0. X (the number after the +) represents the versionCode such as 1, 2, 3, etc.
   - <b>Do not forget</b> to execute flutter packages get, flutter build or flutter run after this step

![Version Update](/img/version_1.png)

4. **For iOS**
   - A.B.C represents the CFBundleShortVersionString such as 1.0.0. X (the number after the +) represents the CFBundleVersion such as 1, 2, 3, etc.
   - <b>Do not forget</b> to execute flutter packages get, flutter build or flutter run after this step

![Version Update](/img/iOS-app-version.png)

   - **Additional iOS Build Settings:**

      - Open your iOS project in Xcode
      - Go to Runner -> Build Settings
      - Search for "FLUTTER_BUILD_NAME" and "FLUTTER_BUILD_NUMBER"
      - Update these values to match your desired version

![Version Update](/img/iOS-app-version-2.png)