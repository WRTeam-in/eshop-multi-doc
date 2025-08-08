---
id: flutter-how-to-add-remove-language
title: How to Add/Remove language
---

### 1. To Add New Language

    - If you want to Add new language then copy one json file from language folder and add it to languge folder then rename it to language code of your new language

    - now open that json file and change value of string to your language string. remember here you need to add all string in file if any one string is missing in any file then when you change that language then it will give you error. so add all string in all json file.

![eShop](/img/lan2.png)

    - Go to lib > Helper > Constant.dart file. Add your language name, language code and language image in below list

![eShop](/img/lang1.png)

### 2. To remove language

    - Now search in whole project "en", by pressing ctrl shift f. Now where you see language code in list remove language code that you don't want.

![eShop](/img/lang1.png) 