---
id: flutter-how-to-create-deep-link-for-share-item
title: How to create Deep Link for Share Item
---

1. Open your admin panel.
2. Go to System > Store Settings.
3. Add android playstore link, ios appstore link, one word scheme and Host name. (Note: after release apps in appstore and playstore don't forgot to add your link in admin panel)

![eShop](/img/nativelink1.png)

4. For android go to android > app > src > main > AndroidManifest.xml and change scheme and your DomainName here

![eShop](/img/nativelink2.png)

5. For ios go to ios > Runner > Info.plist and change scheme

![eShop](/img/nativelink3.png)

6. Change your DomainName in lib > helper > Constant.dart. 

![eShop](/img/nativelink4.png)