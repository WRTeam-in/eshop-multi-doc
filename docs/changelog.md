# ChangeLog

Welcome to the eShop Multi Vendor ChangeLog! This section documents all the important changes, updates, and improvements made to the eShop Multi Vendor platform.

## Version Compatibility Table

| Product Version | Flutter Version | Kotlin Version | AGP Version | distributionUrl (Gradle) | JDK Version |
|----------------|----------------|---------------|-------------|-------------------------|-------------|
| 3.0.0          | 3.32.1         | 2.0.10        | 8.6.0       | 8.7                     | 19.0.2 & 21.0     |
| 2.10.5         | 3.32.1         | 2.0.10        | 8.6.0       | 8.7                     | 19.0.2      |
| 2.10.4         | 3.27.3         | 2.0.10        | 8.5.0       | 8.7                     | 19.0.2      |
| 2.10.3         | 3.24.3         | 1.9.22        | 7.3.0       | 7.6                     | 19.0.2      |
| 2.10.2         | 3.24.3         | 1.9.22        | 7.3.0       | 7.6                     | 19.0.2      |
| 2.10.1         | 3.24.3         | 1.9.22        | 7.3.0       | 7.6                     | 19.0.2      |
| 2.10.0         | 3.24.3         | 1.9.22        | 7.3.0       | 7.6                     | 19.0.2      |


## Version History

### Version 3.0.0 (Updated on 7-August-2025)

**Improvements**
- Updated PhonePe payment flow to support latest version
- Enhanced multi-notification system for better reliability
- Optimized bulk product upload, update & download

**Fixes**
- General bug fixes and code improvements

**Affiliate System Details**

- **Admin Panel**
  - Affiliate Management – create, edit & manage affiliate accounts
  - Commission Policies – global or category-specific rules
  - Category-based Commissions – set % by product category
  - Sales Reports – track affiliate-driven revenue
  - Bulk Affiliate Settings – update affiliate product settings en masse

- **Affiliate Panel**
  - Dashboard Overview – earnings, referrals & performance at a glance
  - Link Generator – shareable product links with unique tokens
  - Product-wise Tracking – monitor traffic, clicks & conversions
  - Commission Tracking – Pending Amount, Confirmed Earnings, Requested Withdrawals, Paid (Withdrawn) Amount
  - Withdraw Request – request payout of confirmed commissions
  - Transaction History – full log of all commission payments & requests

### Version 2.10.5 (Updated on 6-June-2025)

**New Features**
- Add low stock settings for sellers: support both global and product-wise options
- Enable multi-device notifications
- Add role-based permissions for the admin dashboard
- Provide option to delete languages
- Enhance reports in both seller and admin panels

**Improvements**
- Improve language structure flow in app
- Improve order attachment flow (multiple attachments)
- Improve UI of the settings page
- Added View Transaction for delivery boy

**Fixes & Updates**
- Bugs fixes and code improvements
- Compatible with Flutter 3.32.1



### Version 2.10.4 (Updated on 20-March-2025)

**New Features**
- Reason for return items
- Image for return items
- Particular seller sale report
- Custom country code

**Improvements**
- Order attachment flow
- Cash collection from delivery boy
- Seller deliverability flow
- Order tracking from the admin side

**Fixes & Updates**
- Compatible with Flutter 3.27.3
- Bugs fixes and code improvements

### Version 2.10.3 (Updated on 30-Jan-2025)

**New Features**
- Add order attachment flow
- Min/Max range for price to do COD orders (set range from admin panel)
- Sellers can choose categories at registration
- Admin can show and update parcels
- Seller can change status as delivered with OTP
- Seller can generate AWB code on Shiprocket order
- Seller can download label on Shiprocket order
- Seller can send pickup request on Shiprocket order

**Improvements**
- Delivery boy order status update notification for sellers
- Return request notification for admin
- Create Shiprocket parcel based on pickup locations

**Fixes & Updates**
- Fixed product variant issue
- Bugs fixes and code improvements

### Version 2.10.2 (Updated on 23-Nov-2024)

**New Features & Improvements**
- Notifications on Android now display images when the app is terminated
- Confirmation dialog for address deletion in the customer app
- Enhanced SMS gateway support for country codes
- Optimized Point of Sale (POS) system
- Upgraded promo code, offer, and slider sections
- Streamlined data deletion process
- Enhanced show/hide password functionality
- Product FAQs: Added delete confirmation and fixed bottom sheet issue in seller app

**Fixes & Updates**
- UI issues for a smoother user experience
- Delete account functionality in Delivery Boy and Seller apps
- Bug fixes and performance improvements

### Version 2.10.1 (Updated on 4-Nov-2024)

**New Features**
- Delivery charge flow for local shipping
- Return flow in order management
- Zipcode or city selection for sellers during registration
- Separate icons for app and notifications per Android update
- Welcome balance on social media login
- Zipcode/city-based delivery charge for local shipping
- Default delivery charge for orders outside selected zipcode/city in local shipping
- Enable/disable switches across all panels
- Dynamic titles for custom notifications
- Address, latitude, and longitude in admin profile (return order drop point)
- Auto-save for all data on product add/edit
- Selected delivery boy display in return requests and order edits (seller view)
- Restriction on item cancellation after parcel creation
- Native link option if web is unavailable (app-only)
- "Forgot Password" feature aligned with app design
- City selection option for product add/edit
- Custom onboarding images per theme in customer app

**Improvements & Fixes**
- Image stretch option, managed from panel
- "No Item Found" issue in tag-redirected products
- Variant selection flow in Flutter code
- Zipcode and city selection for delivery boys during registration
- Tab icon for seller and delivery boy app

### Version 2.10.0 (Updated on 20-Sept-2024)

**New Features**
- Parcels system
- Multi-tax system
- Refer and earn
- Delivery charges based on city
- Reminder notification to user about items added in cart

**UI & System Improvements**
- Seller and delivery boy application full UI changes
- Customer application order UI
- Backend code quality and security
- System health
- Update Stripe library
- Update documentation
- Place order flow for Shiprocket
- Application constants are now retrieved from the backend
- Theme-wise images
- Promocode based on product's payment method

**Fixes & Updates**
- App code compatible with Flutter 3.24.3
- Review product from customer
- Shiprocket delivery charge change in COD payment method
- FAQ feature in sellers app

### Version 2.9.3 (Updated on 6-Aug-2024)

**New Features**
- Native link for web, Android, and iOS
- "Buy Now" feature in application
- Bulk delete for media and zipcode
- Map in seller app for seller location
- POS orders display in seller panel

**Improvements**
- Auth functions UI in all 3 apps, profile UI in seller and delivery boy apps
- Sort by UI in customer app
- Features in all 3 apps

**Fixes**
- Cart list to product details page variant price and value

### Version 2.9.2 (Updated on 14-June-2024)

**New Features & Improvements**
- Order note in sellers app
- Transaction status in customer app
- Migration to HTTP v1 API for Firebase notifications
- App code compatible with Flutter 3.22.2
- UI/UX of customer application
- Notification of tickets
- Code structure by removing unnecessary code and API parameters from sellers and delivery app

**Fixes**
- Loading issue in orders of delivery boy
- Sending chat messages from sellers with wrong identification

### Version 2.9.1 (Updated on 15-May-2024)

**New Features & Improvements**
- New promocode animation when applied successfully
- Product FAQs viewable without login for customers
- UI/UX of customer application
- Phone number validator in forgot password
- Code structure by removing unnecessary code and API parameters

**Fixes**
- Price range filter for product list page

### Version 2.9.0 (Updated on 19-Mar-2024)

**New Features**
- SMS gateway for OTP verification across all 3 applications (Firebase or SMS gateway based on admin panel preference)
- City-wise product deliverability feature (check delivery by pin code or city name for local shipping)

**Improvements**
- Authentication token generation for APIs, now handled securely from the backend

**Fixes & Compatibility**
- "View All Reviews" button not displaying on product details page in customer app
- Compatible with Flutter v3.19.3

### Version 2.8.2 (Updated on 01-Feb-2024)

**New Features**
- PhonePe payment gateway in customer app's wallet
- Brands on customer app home page
- Out of stock label on products across all screens in customer app
- "Go to Cart" button on product details page for items already in cart
- Access to product details by tapping any cart item
- "Skip" button on customer app login screen

**Fixes & Improvements**
- PhonePe functionality during ordering, enhanced security in customer app
- Issues in add/edit products form in seller app
- Comprehensive bugs across all three applications

### Version 2.8.1 (Updated on 3-Dec-2023)

**New Features**
- PhonePe payment gateway
- Product statistics
- Re-ordering functionality

**Fixes**
- Addressed bugs and implemented code improvements

### Version 2.8.0 (Updated on 1-Nov-2023)

**New Features**
- Chat feature
- Personalize custom notification for email and SMS template
- Custom SMS gateway

### Version 2.7.0 (Updated on 17-Sep-2023)

**New Features**
- Instamojo payment gateway
- Delivery boys can now register through the delivery boy app

**Improvements**
- Enhanced address functionality, allowing customers to add areas manually
- Improved delivery charge calculation by considering zip codes
- General improvements and bug fixes

### Version 2.6.0 (Updated on 24-June-2023)

**New Features**
- Notification service without login
- Driving license for delivery boy

**Updates & Improvements**
- Project compatible with Flutter 3.10
- General improvements and bug fixes

### Version 2.5.0 (Updated on 02-May-2023)

**New Features**
- Social login (Google and Apple)

**Upgrades & Improvements**
- Order return flow (admin can approve/decline return order)
- JWT token authentication system
- Code improvements

### Version 2.4.0 (Updated on 23-Mar-2023)

**New Features**
- ShipRocket integration

**Updates & Improvements**
- Change order flow - separated orders seller-wise
- Compatible with latest Flutter version
- Change deprecated packages
- Code improvements

### Version 2.3.0 (Updated on 10-Jan-2023)

**Updates & Improvements**
- System and support for PHP 8.1
- Forgot password option for admin, seller, and delivery boy panel
- General improvements and fixes
- **Note:** No changes in applications

### Version 2.2.0 (Updated on 29-Dec-2022)

**New Features**
- Digital product - options to sell

### Version 2.1.0 (Updated on 10-Dec-2022)

**New Features**
- Manage stock feature in admin panel, seller panel, and seller app
- Delivery boy application UI improvement
- Delivery charge and discount option in POS system
- General improvements and bug fixes

### Version 2.0.9 (Updated on 18-Nov-2022)

**New Features**
- Brand bulk upload
- POS system for seller in seller panel
- HSN code for products
- Selection of latitude and longitude from map in seller app
- Seller and delivery boy code converted to Provider state management

**Improvements**
- Seller application UI
- Single-seller order system
- Brand feature

### Version 2.0.8 (Updated on 21-Oct-2022)

**New Features**
- My Fatoorah payment gateway

**Improvements**
- Single seller system (restricts adding multiple sellers' products to cart if enabled)
- General improvements and bug fixes
- **Note:** No changes in delivery boy and seller app

### Version 2.0.7 (Updated on 10-Oct-2022)

**New Features**
- Midtrans payment gateway
- Brand feature for product
- Category-wise product search

**Improvements**
- Attributes section in admin panel
- Provider state management and folder structure
- General improvements and bug fixes

### Version 2.0.6 (Updated on 08-Aug-2022)

**New Features**
- Webhook for each payment gateway
- Custom notification text (set in any language/format)
- Sales report in admin and seller panel
- Payment method filter on order section in admin and seller panel
- Send notification to a specific user
- Multi-language option in admin panel
- 2 sections based on user interaction in customer app
- "You Are Looking For" and "You Might Also Like" product sections
- Product FAQs search in customer app

**Improvements**
- Customer app UI
- Various issues fixed

### Version 2.0.5 (Updated on 19-June-2022)

**New Features**
- Fixed amount for delivery boy commission
- Admin can track who updated order status
- Send notification to specific customer
- FAQs on products
- Delete account options for customers, sellers, and delivery boy

**Improvements**
- Seller app UI
- Welcome wallet balance issue resolved

### Version 2.0.4.1 (Updated on 3-June-2022)

**Upgrade**
- Application compatible with v3.0
- **Note:** Only changes in Flutter code, no need to update PHP files or panels

### Version 2.0.4 (Updated on 23-May-2022)

**New Features**
- Bulk update delivery charge
- Dynamic decimal point for price (applications)

**Fixes & Improvements**
- Search-bar background color issue (customer app)
- Small bugs and improvements
- UI improvements (customer app)

### Version 2.0.3 (Updated on 02-May-2022)

**Fixes & Improvements**
- Product variants issue in seller app
- Support for multiple languages in delivery boy app
- Attribute selection in seller app
- Edit profile page in seller app
- UI improvements in customer app
- General improvements and bug fixes
- System version v3.1.13
- Pre-filled options in "Made In" menu in add/edit product
- Cashback system issue
- Welcome wallet balance issue
- Delete account options for customers, sellers, and delivery boy

### Version 2.0.2 (Updated on 18-Apr-2022)

**New Features**
- Display only seller media on seller panel/app
- Send notification on admin panel
- Wallet cashback system on promo-code
- Hidden promo-code system
- Add and view order tracking (seller app)
- Sales report (seller app/panel)
- View product review (seller app/panel)
- Product activate/deactivate option (seller app)
- Notification navigation (customer app)
- Seller/store search option (customer app)
- Cash collection option (delivery boy app/admin panel)
- Tax inclusive in price and reverse calculation at order time (customer app)

**Improvements & Fixes**
- General improvements and bug fixes

### Version 2.0.1 (Updated on 17-Mar-2022)

**New Features**
- Currency separation operators for decimal numbers and currency number separation for multiple currency systems
- Review update by customer in order details/product details page
- Available promo codes section in customer app and web
- User can check their added note on order details page
- Media upload option in seller app
- Delete account options for customers, sellers, and delivery boy

**Fixes & Improvements**
- Refund wallet amount and order amount calculation issues
- Deliverable zip code issue in checkout
- Quantity issue while placing an order
- Featured section issue
- Not redirecting after login
- Code compatible with Flutter 2.10 and Android v12
- App code converted from Java to Kotlin
- Image upload in add/edit product
- General improvements and bug fixes

### Version 2.0.0 (Updated on 11-Mar-2022)

**New Features**
- Support for PHP 8.0
- Welcome wallet balance feature for customers during registration
- APIs for null safety
- Product tax field display in add/edit product (e.g., GST(10%))
- Edit (update) product feature in seller app
- New seller registration in seller app
- Seller uploads photos and videos from gallery in add product
- Offline favorite/cart option in customer app

**Improvements & Fixes**
- Invoice issue
- Feature section issues
- Edit seller profile
- UI improvements in customer app
- General improvements and bug fixes

### Version 1.0.3 (Updated on 20-Dec-2021)

**New Features**
- Add product feature in seller app
- Seller details in delivery boy app
- Show top sellers and categories on admin dashboard
- Shipping and return policy
- Admin can add wallet balance to customer from backend
- Seller outlines on dashboard

**Improvements & Fixes**
- General improvements and bug fixes

### Version 1.0.2 (Updated on 26-Nov-2021)

**New Features**
- Update seller commission manually from manage seller page in admin panel
- Option to edit seller profile
- Push notification for seller commission
- Icon option at profile sections

**Fixes & Improvements**
- Dark mode color change issue in customer app
- UI improvements and bug fixes

### Version 1.0.1 (Updated on 21-Oct-2021)

**New Features**
- Order item-wise OTP system
- Order tracking system
- Special note while placing order

**Fixes & Improvements**
- Edit seller issue and general improvements

## Need Help?

If you have any questions about the changes or need assistance with updates, please visit our [Support](./support.md) section or contact our support team.
