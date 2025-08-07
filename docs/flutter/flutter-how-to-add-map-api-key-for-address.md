---
id: flutter-how-to-add-map-api-key-for-address
title: How to Add Map API key for Address
---

1. Go to Google Cloud Platform. [Click here](https://cloud.google.com/)
2. Click on console.

![eShop](/img/mapAPI1.png)

3. Select your Firebase Project

![eShop](/img/mapAPI2.png)

4. Search for APIs, which are shown in below image.

![eShop](/img/mapAPI3.png)

5. Click on Enable to, enable that APIs

![eShop](/img/mapAPI4.png) 

6. Do above steps for below listed API. (enable all below APIs one by one by searching)

![eShop](/img/mapAPI5.png) 

7. Go to Credential Tab. you will find your Androiod and iOS API keys.

![eShop](/img/mapAPI6.png) 

8. You have to setup those above API keys for both Platform.

    ### 1. Android Setup

        - Next, open `android ‣ app ‣ src ‣ main ‣ AndroidManifest.xml` and paste the Google Maps meta data tag into your application tag before the activity tag, placing the API key you copied before to replace `YOUR_API_KEY_HERE`.

            ```bash
            <meta-data 
                android:name="com.google.android.geo.API_KEY"
                android:value="{{YOUR_API_KEY_HERE}}" />
            ```
        
       > **Note:** For the `value` field, please paste in your API Key from the Google Maps API registration process.

    ![eShop](/img/mapAPI7.png)

    ### 2. iOS Setup

        - Next, open the `ios ‣ Runner ‣ AppDelegate.swift` file and paste the following code at shown in image.

            ```bash
            GMSServices.provideAPIKey("YOUR KEY HERE")
            ```

            > **Note:** Again, for the value field please paste in your API Key from the registration process.

            ![eShop](/img/mapAPI8.png)



       
