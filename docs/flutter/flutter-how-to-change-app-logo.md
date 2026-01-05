---
id: flutter-how-to-change-app-logo
title: How to Change App Logo
---

## Overview

This guide shows you how to change your app logo for both Android and iOS using the `flutter_launcher_icons` package.

---

## Step 1: Add Package

Open `pubspec.yaml` and add the package under `dev_dependencies`:

```yaml
dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_localizations:
    sdk: flutter
  flutter_lints: ^6.0.0
  flutter_launcher_icons: ^0.14.4
```

Then run:
```bash
flutter pub get
```

---

## Step 2: Configure Icons

Add this configuration in your `pubspec.yaml` file:

```yaml
flutter_launcher_icons:
  android: true
  ios: true
  image_path: "assets/images/icons/ic_launcher.png"
  adaptive_icon_foreground: "assets/images/icons/ic_launcher_transparent.png"
  adaptive_icon_background: "assets/images/icons/ic_launcher_background.png"
  remove_alpha_ios: true
  background_color_ios: "#FE7E7B"
```

![Pubspec Configuration](/img/app_icon_pubspec.png)

**Configuration Options:**
- `android: true` - Generate icons for Android
- `ios: true` - Generate icons for iOS
- `image_path` - Main app icon (1024x1024px recommended)
- `adaptive_icon_foreground` - Foreground for Android adaptive icons (transparent PNG)
- `adaptive_icon_background` - Background for Android adaptive icons
- `remove_alpha_ios` - Remove transparency from iOS icons
- `background_color_ios` - Background color for iOS icons (hex code)

---

## Step 3: Prepare Your Icon Images

Create these icon files in your project:

1. **Main Icon**: `assets/images/icons/ic_launcher.png` (1024x1024px)
2. **Adaptive Foreground**: `assets/images/icons/ic_launcher_transparent.png` (1024x1024px with transparency)
3. **Adaptive Background**: `assets/images/icons/ic_launcher_background.png` (1024x1024px)

![Assets Images Folder](/img/app_icon_assets_image.png)

---

## Step 4: Generate Icons

Run this command to generate all icon sizes automatically:

```bash
flutter pub run flutter_launcher_icons
```

This will create all required icon sizes for both Android and iOS platforms.

### Android Icons Generated

After running the command, icons will be generated in the Android folders:

![Android App Icons](/img/android_app_icon.png)

### iOS Icons Generated

Icons will also be generated in the iOS assets folder:

![iOS App Icons](/img/iOS_app_icon.png)

---

## Step 5: Clean and Run

After generating icons, clean and rebuild your project:

```bash
flutter clean
flutter pub get
flutter run
```

**Note:** For iOS, you may need to delete the app from the simulator/device before reinstalling to see the changes.

---

## Important Tips

1. **Image Format**: Use PNG files
2. **Recommended Size**: Start with 1024x1024px icons
3. **iOS Transparency**: Set `remove_alpha_ios: true` to remove transparency
4. **Testing**: Always test on both Android and iOS devices
5. **Adaptive Icons**: Android adaptive icons look best with centered designs

---

## Quick Reference

```bash
# Install package
flutter pub get

# Generate all icons
flutter pub run flutter_launcher_icons

# Clean and rebuild
flutter clean
flutter pub get
flutter run
```
