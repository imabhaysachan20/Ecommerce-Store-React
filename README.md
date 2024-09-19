# E-Commerce Store

This is a fully responsive e-commerce store built using **React**, **Tailwind CSS** with **DaisyUI**, and **React Router DOM** for routing,**Redux Toolkit** for state management and **React Query** for request caching  The project includes features such as authentication (using JWT), guest login, theme switching between light and dark modes, dynamic content fetching for featured products, and advanced product filtering and searching.

## Features

- **Responsive Design:** The store is fully responsive and adapts to different screen sizes, ensuring a seamless user experience on both desktop and mobile devices.
- **Routing:** Set up using `React Router DOM` with routes for:
  - `Products`
  - `Single Product Details`
  - `About`
  - `Cart`
  - `Orders`
  - `Checkout`
  - `Login` and `Register`
- **Authentication:** 
  - Full user authentication implemented using **JWT (JSON Web Token)**
  - Users can log in using email and password or log in as a guest.
- **Dark Mode & Light Mode:** Integrated theme switching using **DaisyUI** themes, refactored to use **Redux state** for global theme management.
- **Landing Page:**
  - **Hero Component:** Contains a heading and a product carousel.
  - **Featured Products Section:** Dynamically fetched from an API using Axios and cached using **React Query**.
- **Products Page:**
  - **Searching and Filtering Options:**
    - Sort by price
    - Filter by price range, company, category, and free shipping
    - **View Options:** Switch between grid or list view for products
    - Pagination for browsing through multiple products
    - Data is fetched and cached using **React Query**.
- **Single Product Details:**
  - Displays product name, company, description, available colors, and the option to add to cart.
  - Product details are cached using **React Query**.
- **Cart Page:**
  - Allows users to:
    - Add or remove items
    - Change item quantity
    - View total amount, taxes, and shipping charges
    - If logged in, proceed to checkout; otherwise, log in to continue.
- **Checkout Page:** 
  - Users can provide address and required information to place an order.
  - Checkout data is cached using **React Query**.
- **Orders Page:**
  - Displays a list of all user orders, showing the user's name, address, products, cost, and date of the order.
