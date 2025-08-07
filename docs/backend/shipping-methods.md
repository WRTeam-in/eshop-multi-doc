---
id: shipping-methods
title: Shipping Methods
---

# Shipping Methods

- **In Shipping, you can select shipping methods for delivering orders to customers.**
- **Currently, 2 shipping methods are available in eShop. You can use both shipping methods at the same time.**

## Type:

1. **Local Shipping**
2. **Standard Shipping**
   - Shiprocket

### How to Change Shipping Methods

![Shipping Method Settings](../../static/backend/img/shipping_method.png)

---

## Local Shipping Method

- In this method, you can assign your delivery boy to deliver customer orders.

---

## Standard Shipping

- In this method, you can use other courier services like Shiprocket to deliver orders to customers.

#### Shiprocket

Shiprocket, a product of Delhi-based BigFoot Retail Solution, is India's first automated shipping software that aims to reduce ecommerce shipping to its bare bones. You can print bulk shipping labels and ship your products to destinations in and around the world using a single platform.

---

## Account

- First, create a Shiprocket account. [Click here](https://app.shiprocket.in/register).

![Create Shiprocket Account](../../static/backend/img/shiprocket_account.png)

---

## Recharge Wallet

- After successfully logging in, you need to recharge your Shiprocket wallet. Without a wallet balance, you cannot use Shiprocket's services.

![Recharge Shiprocket Wallet](../../static/backend/img/shiprocket_wallet.png)

---

## API Config

- To use Shiprocket in your system, first go to API Config from [here](https://app.shiprocket.in/api-user).

![Shiprocket API Config](../../static/backend/img/shiprocketApi_config.png)
![Create Shiprocket API User](../../static/backend/img/create_shiprocketApi.png)

- Create a user to use Shiprocket in your system.

![Create Shiprocket API User Step 2](../../static/backend/img/create_shiprocketApi2.png)

- After creating the user, add the user credentials in your admin panel.

![Shipping Methods Admin Panel](../../static/backend/img/shipping_methods.png)

---

## How It Will Work?

### 1. Add Pickup Location

- Shiprocket uses a pickup location to pick up orders from the owner.
- In your system, only the seller can add a pickup location. Sellers can add pickup locations from their panel.

![Seller Pickup Location](../../static/backend/img/seller_pickup_location.png)

After adding the pickup location, the admin must verify the pickup location from both the admin panel and the Shiprocket dashboard.

1. **Verify pickup location from admin panel:**
   ![Admin Pickup Location Verification](../../static/backend/img/admin_pickup_location.png)
2. **Verify pickup location from Shiprocket dashboard:**
   ![Shiprocket Pickup Location Dashboard](../../static/backend/img/shiprocket_pickup_location.png)
   ![Shiprocket Verify Pickup Location](../../static/backend/img/shiprocket_verify_pickup_location.png)

---

### 2. Add Product or Edit Product

- After successfully verifying the pickup location, you can add or edit products.

  - **For simple product:**  
    ![Add Simple Product](../../static/backend/img/add_simple_product.png)

  - **For variable product:**  
    ![Add Variable Product](../../static/backend/img/add_variable_product.png)

---

## How to Create Shiprocket Order?

- After receiving orders and if you want to deliver an order using Shiprocket, you have to create a Shiprocket order. Go to "Edit Order" in your panel.

1. **Select Pickup Location** for which you want to create a parcel and click on "Create Shiprocket Order" button.  
   ![Create Shiprocket Order](../../static/backend/img/create_order.png)
2. **Generate AWB Code** (a unique number used to identify the order).  
   ![Generate AWB](../../static/backend/img/generate_awb.png)
3. **Send Pickup Request** to schedule your shipping.  
   ![Send Pickup Request](../../static/backend/img/send_pickup_request.png)
4. **Generate and Download Label.**  
   ![Generate Label](../../static/backend/img/generate_label.png)
   ![Download Label](../../static/backend/img/download_label.png)
5. **Generate and Download Invoice.**  
   ![Generate Invoice](../../static/backend/img/generate_invoice.png)
   ![Download Invoice](../../static/backend/img/download_invoice.png)
6. **Cancel Shiprocket Order.**  
   ![Cancel Order](../../static/backend/img/cancel_order.png)
7. **Shiprocket Order Tracking.**  
   ![Order Tracking](../../static/backend/img/order_tracking.png)