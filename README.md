# E-Commerce Store

This is a fully responsive e-commerce store built using **React**, **Tailwind CSS** with **DaisyUI**, and **React Router DOM** for routing. The project includes features such as authentication, guest login, theme switching between light and dark modes, dynamic content fetching for featured products, and advanced product filtering and searching.

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
- **Authentication:** Users can log in using an email and password or as a guest.
- **Dark Mode & Light Mode:** Integrated theme switching using **DaisyUI** themes.
- **Landing Page:** The landing page features:
  - **Hero Component:** Contains a heading and a product carousel.
  - **Featured Products Section:** Dynamically fetched from an API using Axios.
- **Products Page:** Displays all products available
  - **Searching and Filtering Options:**
    - Sort by price
    - Filter by price range, company, category, and free shipping
    - Pagination for browsing through multiple products
- **Single Product Details:** Displays:
  - Product Name
  - Company
  - Description
  - Available Colors
  - Option to add to cart
- **About Page:** The "About" page is complete with placeholder lorem text.

## Technologies Used

- **React:** Front-end framework
- **Tailwind CSS:** Utility-first CSS framework for styling
- **DaisyUI:** Tailwind CSS component library for pre-built UI elements
- **React Router DOM:** For managing page navigation and routing
- **Axios:** For making API requests to fetch featured products

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/imabhaysachan20/Ecommerce-Store-React.git
