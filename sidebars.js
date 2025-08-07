// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Admin Panel',
      items: [
        {
          type: 'doc',
          id: 'backend/installation',
          label: 'Installation',
        },
        {
          type: 'doc',
          id: 'backend/manual-installation',
          label: 'Manual Installation',
        },
        {
          type: 'doc',
          id: 'backend/web-installation',
          label: 'Web Installation',
        },
        {
          type: 'doc',
          id: 'backend/common-issues',
          label: 'Common Issues',
        },
        {
          type: 'doc',
          id: 'backend/shipping-methods',
          label: 'Shipping Methods',
        },
        {
          type: 'doc',
          id: 'backend/generate-client-api-secret-key',
          label: 'Generate Client API Secret Key',
        },
        {
          type: 'doc',
          id: 'backend/firebase-config',
          label: 'Firebase Configuration',
        },
        {
          type: 'doc',
          id: 'backend/social-login-configuration',
          label: 'Social Login Configuration',
        },
        {
          type: 'doc',
          id: 'backend/auto-update',
          label: 'Auto Update',
        },
        {
          type: 'doc',
          id: 'backend/support',
          label: 'Support',
        },
        {
          type: 'category',
          label: 'Web Overview',
          items: [
            'backend/web-overview/web-overview',
          ],
        },
        {
          type: 'category',
          label: 'Orders',
          items: [
            'backend/orders/orders',
            'backend/orders/order-tracking',
            'backend/orders/shipping-order-flow',
          ],
        },
        {
          type: 'category',
          label: 'Sellers',
          items: [
            'backend/sellers/sellers',
            'backend/sellers/wallet-transactions',
          ],
        },
        {
          type: 'category',
          label: 'Categories',
          items: [
            'backend/categories/categories',
          ],
        },
        {
          type: 'category',
          label: 'Products',
          items: [
            'backend/products/add-products',
            'backend/products/attributes',
            'backend/products/attribute-sets',
            'backend/products/attribute-values',
            'backend/products/tax',
            'backend/products/manage-products',
            'backend/products/products-order',
          ],
        },
        {
          type: 'category',
          label: 'Media Management',
          items: [
            'backend/media-management/media-management',
            'backend/media-management/home-slider-images',
            'backend/media-management/new-offers-images',
            'backend/media-management/promo-code',
            'backend/media-management/manage-stock',
          ],
        },
        {
          type: 'category',
          label: 'Featured Sections',
          items: [
            'backend/featured-sections/manage-sections',
            'backend/featured-sections/sections-order',
          ],
        },
        {
          type: 'category',
          label: 'Customer',
          items: [
            'backend/customer/view-customers',
            'backend/customer/transaction',
            'backend/customer/wallet-transaction',
          ],
        },
        {
          type: 'category',
          label: 'Return Requests',
          items: [
            'backend/return-requests/return-requests',
          ],
        },
        {
          type: 'category',
          label: 'Delivery Boys',
          items: [
            'backend/delivery-boys/manage-delivery-boys',
            'backend/delivery-boys/fund-transfer',
          ],
        },
        {
          type: 'category',
          label: 'Send Notification',
          items: [
            'backend/send-notification/send-notification',
          ],
        },
        {
          type: 'category',
          label: 'Affiliate System',
          items: [
            'backend/affiliate-system/affiliate-dashboard',
            'backend/affiliate-system/affiliate-users',
            'backend/affiliate-system/add-affiliate-users',
            'backend/affiliate-system/affiliate-settings',
            'backend/affiliate-system/terms-and-policies',
          ],
        },
        {
          type: 'category',
          label: 'System',
          items: [
            'backend/system/store-settings',
            'backend/system/email-settings',
            'backend/system/payment-methods',
            'backend/system/time-slots',
            'backend/system/authentication-mode',
            'backend/system/sms-gateway-settings',
            'backend/system/notification-settings',
            'backend/system/contact-us',
            'backend/system/privacy-policy',
            'backend/system/admin-privacy-policy',
            'backend/system/delivery-boy-privacy-policy',
            'backend/system/about-us',
          ],
        },
        {
          type: 'category',
          label: 'Location',
          items: [
            'backend/location/zipcode',
            'backend/location/city',
            'backend/location/area',
            'backend/location/bulk-upload',
          ],
        },
        {
          type: 'category',
          label: 'Reports',
          items: [
            'backend/reports/sales-report',
          ],
        },
        {
          type: 'category',
          label: 'FAQ',
          items: [
            'backend/faq/faq',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Flutter App',
      items: [
        'flutter/flutter-required-software',
        'flutter/flutter-complete-setup-guide',
        'flutter/flutter-how-to-change-appname',
        'flutter/flutter-how-to-change-app-version',
        'flutter/flutter-how-to-change-app-logo',
        'flutter/flutter-how-to-change-app-color',
        'flutter/flutter-how-to-change-package-name',
        'flutter/flutter-how-to-change-images-in-app',
        'flutter/flutter-how-to-fit-xy-fill-product-image-in-box',
        'flutter/flutter-how-to-change-language-string-value',
        'flutter/flutter-how-to-add-remove-language',
        'flutter/flutter-how-to-change-default-language-of-app',
        'flutter/flutter-how-to-remove-dark-theme',
        'flutter/flutter-how-to-change-app-font',
        'flutter/flutter-how-to-change-server-url',
        'flutter/flutter-how-to-create-firebase-project',
        'flutter/flutter-how-to-enable-firebase-phone-authentication-otp',
        'flutter/flutter-how-to-change-default-country-code-for-otp',
        'flutter/flutter-how-to-enable-firebase-blaze-billing',
        'flutter/flutter-steps-to-authenticate-firebase-using-google',
        'flutter/flutter-steps-to-authenticate-firebase-using-apple',
        'flutter/flutter-how-to-set-notification',
        'flutter/flutter-how-to-create-deep-link-for-share-item',
        'flutter/flutter-how-to-add-map-api-key-for-address',
        'flutter/flutter-how-to-manage-payment-gateway-and-add-credential-in-admin-panel',
        'flutter/flutter-enable-cloudkit-in-ios-for-multiple-file-upload',
        'flutter/flutter-how-to-manage-preferred-delivery-date-time',
        'flutter/flutter-how-to-set-currency-code-for-application',
        'flutter/flutter-how-to-increase-product-load-limit',
        'flutter/flutter-get-privacy-policy-url-for-playstore',
        'flutter/flutter-how-to-change-api-parameters',
        'flutter/flutter-app-deployment',
      ],
    },
    {
      type: 'doc',
      id: 'changelog',
      label: 'ChangeLog',
    },
    // {
    //   type: 'doc',
    //   id: 'features',
    //   label: 'Features',
    // },
    {
      type: 'doc',
      id: 'need-support',
      label: 'Support',
    },
    {
      type: 'doc',
      id: 'your-feedback',
      label: 'Rating',
    },
    {
      type: 'doc',
      id: 'contact-us',
      label: 'Contact Us',
    },
  ],
};

module.exports = sidebars;
