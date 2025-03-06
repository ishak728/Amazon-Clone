# Amazon Clone

You can browse and purchase products just like on Amazon with this application.
This project includes full e-commerce functionality such as authentication, product management, cart system, and secure payments.

# Major Features

- `User Authentication` – JWT-based authentication with email verification (`Nodemailer`).

- `Product Management` – Display, search, and filter products dynamically.

- `Shopping Cart` – Add, remove, and update items in the cart with `Redux Persist`.

- `Order History` – View and track previous orders.

- `Secure Payments` – `Stripe API` integration for handling transactions.

- `Favorites` – Save products for later using `Redux Persist`.

- `Optimized Search` – Implemented with `useCallback` and `debounce` for a smooth experience.

- `Responsive UI` – `React Native Gesture Handler` & `Reanimated` for animations.

# Tech Stack

# `Frontend`

- `React Native`

- `Redux Toolkit + Redux Persist`

- `React Navigation`

- `Axios & Fetch API`

- `AsyncStorage`

- `React Native Gesture Handler & Reanimated`

# `Backend`

- `Node.js & Express.js`

- `MongoDB & Mongoose`

- `JWT Authentication`

- `Nodemailer` (Email Verification)

- `Stripe API` (Secure Payments)

- `Socket.IO` (Real-time updates)

# Installation

# `Prerequisites`

Make sure you have the following installed:

- `Node.js` (v16 or higher)

- `MongoDB` (local or Atlas)

- `Stripe Developer Account` (for payments)

- `Clone the Repository`

```sh
git clone https://github.com/ishak728/Amazon-Clone.git
cd Amazon-Clone
```

# `Backend Setup`

```sh
cd backend
npm install
```
Create a `.env` file and configure it as follows:
```env
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_key
```
 

# `Screenshots`

Here are some screenshots of the application:

!(https://your-image-link.com)
!(https://your-image-link.com)
!(https://your-image-link.com)






