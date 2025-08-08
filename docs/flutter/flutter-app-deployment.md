---
id: flutter-app-deployment
title: App Deployment Overview
---

# App Deployment Overview

This section outlines the process of launching your mobile application across major app distribution platforms. For platform-specific walkthroughs, please consult our full deployment documentation.

## Deployment by Platform

### Publishing on Google Play Store

To launch your app on the Google Play Store, follow these general steps:

    - **Steps to Deploy on Google Play Store**

        1. **Register for a Google Play Developer Account**  
        Sign up at the [Google Play Console](https://play.google.com/console) to publish and manage your apps.

        2. **Build and prepare your app for a production release**  
        Generate a signed release version of your app using an Android App Bundle (`.aab`).

        3. **Create a new app entry in the Play Console**  
        Provide the app name, default language, and other basic details when creating a new listing.

        4. **Upload your App Bundle (.aab)**  
        Navigate to the “Release” section and upload the `.aab` file under the appropriate track (e.g., internal testing, production).

        5. **Complete all required store listing information**  
        Add a description, screenshots, feature graphic, app icon, category, contact details, and privacy policy.

        6. **Submit the app for Google’s review and approval**  
        Once all information and files are provided, submit the app and wait for approval from Google’s review team.


### Releasing to the Apple App Store

To distribute your app via the App Store, you'll need to:

    - **Steps to Deploy on Apple App Store**

        1. **Have an Apple Developer account**  
        Enroll in the [Apple Developer Program](https://developer.apple.com/programs/) to access distribution tools and services.

        2. **Prepare your app for release**  
        Configure your app's version, build settings, and ensure it is archived properly using Xcode.

        3. **Create a new app in App Store Connect**  
        Log in to [App Store Connect](https://appstoreconnect.apple.com/) and create a new app record with all required metadata.

        4. **Upload your build**  
        Use Xcode to upload your app build to App Store Connect.

        5. **Complete the app information**  
        Fill in necessary fields like the app description, keywords, category, privacy policy URL, and screenshots.

        6. **Submit for review**  
        After all data is filled and build is processed, submit your app for Apple’s review process.


## Full Deployment Instructions

For a detailed walkthrough including screenshots, code signing setup, and platform-specific configurations, please refer to our <a href="https://wrteam-in.github.io/common_app_doc/GeneralSettings/deployment" target="_blank" rel="noopener noreferrer">Comprehensive Deployment Guide</a>.

## Pre-Submission Checklist

Before submitting your app, make sure to:

- Review and comply with the platform’s submission guidelines
- Keep signing credentials safe and properly stored
- Perform thorough testing of the release version
- Anticipate a review window that could span several days
- Prepare all necessary materials (screenshots, privacy policy, etc.)

## Universal Submission Essentials

Both the Play Store and App Store typically require:

- A valid **Privacy Policy** URL  
- App icons in multiple resolutions  
- High-quality **screenshots**  
- Well-written **descriptions** and **keywords**  
- A **support contact email/URL**  
- Optional **marketing assets** (like a promo video or feature graphic)

## Troubleshooting Deployment Issues

If you run into problems during submission:

- Double-check platform documentation and error messages
- Make sure all assets meet resolution and format requirements
- Confirm your build passes all validations and test flows
- If rejected, review the feedback carefully and make necessary changes
