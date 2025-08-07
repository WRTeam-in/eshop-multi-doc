---
id: flutter-how-to-change-package-name
title: How to change package name
---

1. Your package directory you can see like below image.

![Package Structure](/img/packagename_2.png)

2. Individually select each directory you want to rename, and: Right-click it, Select Refactor Click on Rename current In the Pop-up dialog.

![Package Rename](/img/packagename_3.png)

3. Enter the new name and hit Refactor. Allow a minute to let Android Studio update all changes.

![Package Refactor](/img/packagename_4.png)

4. Now press ctrl + shift + R and replace old packagename with your new packagename

![Package Replace](/img/packagename_5.png)

5. For ios open ios > Runner > info.plist > there is the key CFBundleIdentifier change the string value for that as shown in below

![iOS Package](/img/packagename_6.png) 