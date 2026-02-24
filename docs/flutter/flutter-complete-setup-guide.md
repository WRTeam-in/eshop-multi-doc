# Flutter & Java JDK Installation Guide

Set up your development environment the right way to start building beautiful apps with Flutter. This guide covers installing Flutter, setting up Java, configuring your IDE, and running your first project successfully.

---

<div style={{display: 'flex', justifyContent: 'center', padding: '2rem 0'}}>
  <a href="https://wrteam-in.github.io/common_app_doc/GeneralSettings/basicsetup" target="_blank" style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    padding: '2rem 3rem',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, rgba(254, 126, 123, 0.08), rgba(254, 126, 123, 0.15))',
    border: '2px solid #FE7E7B',
    textDecoration: 'none',
    color: 'inherit',
    boxShadow: '0 4px 20px rgba(254, 126, 123, 0.15)',
    transition: 'all 0.3s ease',
    maxWidth: '500px',
    width: '100%',
    textAlign: 'center'
  }}>
    <span style={{fontSize: '2.5rem'}}>🚀</span>
    <span style={{fontSize: '1.4rem', fontWeight: '700', color: '#FE7E7B'}}>Basic Setup Guide</span>
    <span style={{fontSize: '0.95rem', color: '#666', lineHeight: '1.5'}}>
      Follow our step-by-step common documentation to set up Flutter, Java JDK, IDE, and run your first app.
    </span>
    <span style={{
      marginTop: '0.5rem',
      padding: '0.6rem 1.8rem',
      borderRadius: '8px',
      backgroundColor: '#FE7E7B',
      color: 'white',
      fontWeight: '600',
      fontSize: '0.95rem',
      boxShadow: '0 4px 15px rgba(254, 126, 123, 0.3)'
    }}>View Setup Guide →</span>
  </a>
</div>


<!-- # Flutter & Java JDK Installation Guide

Set up your development environment the right way to start building beautiful apps with Flutter. This guide covers installing Flutter, setting up Java, configuring your IDE, and running your first project successfully.

---

## 1. Get Flutter Ready

### Download the Flutter SDK  
Head over to the official Flutter site and grab the **3.32.1 Stable** version:  
👉 [Download Flutter](https://docs.flutter.dev/get-started/install)

### Unzip the SDK  
Extract the ZIP file to a location of your choice:  
- **Windows**: Example `C:\dev\flutter`  
- **macOS/Linux**: Example `~/development/flutter`

### Add Flutter to PATH  
So you can run `flutter` from anywhere in the terminal:

- **Windows**:  
  - Go to **System Properties > Environment Variables**  
  - Add `C:\dev\flutter\bin` to the `Path` variable under system variables

- **macOS/Linux**:  
  - Open your terminal config file (`~/.zshrc`, `~/.bashrc`, etc.)  
  - Add:
    ```bash
    export PATH="$PATH:$HOME/development/flutter/bin"
    ```

### Check the Setup  
Run this command to verify:
```bash
flutter doctor
```

It will list what's ready and what needs fixing.

## 2. Install Java JDK

Java is required for Android development. Here's how to set it up.

### Download JDK

Get the version of the Java Development Kit from:
👉 [Oracle JDK](https://www.oracle.com/java/technologies/downloads/)
Choose the right installer for your OS.

### Set Environment Variables

* **Windows**:

  * Create a new variable `JAVA_HOME` and set it to the JDK installation directory
  * Update `Path` to include `%JAVA_HOME%\bin`

* **macOS/Linux**:
  Add to your terminal profile file:

  ```bash
  export JAVA_HOME=$(/usr/libexec/java_home)
  export PATH=$JAVA_HOME/bin:$PATH
  ```

### Test Java Setup

Run:

```bash
java -version
```

You should see the installed version displayed.

## 3. Install an IDE

Choose an editor that supports Flutter and Dart.

### Android Studio

* Download from: [Android Studio](https://developer.android.com/studio)
* Install **Flutter** and **Dart** plugins via `Settings > Plugins`

### Visual Studio Code

* Download: [VS Code](https://code.visualstudio.com/)
* Go to Extensions → Search and install:

  * Flutter
  * Dart

Use the one you're comfortable with — both work great with Flutter!

## 4. Launch Your First App

### Run the App

Navigate to your project folder in terminal, then run:

```bash
flutter pub get
flutter run
```

### Device Setup

* **Android**: Use AVD Manager in Android Studio to set up an emulator
* **iOS (macOS only)**: Install Xcode and open the Simulator

### Final Verification

Use:

```bash
flutter doctor
```

to make sure all tools are properly configured.

---

You're now ready to start building amazing Flutter apps. Enjoy coding!  -->