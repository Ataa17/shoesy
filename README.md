# Shoesy - E-Commerce Shoe Shop

Shoesy is a modern e-commerce website designed for a shoe store. The primary purpose of this project is to learn and implement Tailwind CSS to create a responsive and aesthetically pleasing web interface. Currently, the project is a front-end single-page application (SPA).

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Components Overview](#components-overview)
- [Learning Tailwind CSS](#learning-tailwind-css)



## Features

- **Responsive Design:** Optimized for various screen sizes using Tailwind CSS.
- **Product Listings:** Showcases popular shoes.
- **Service Section:** Highlights the services offered by Shoesy.
- **Customer Reviews:** Displays feedback from satisfied customers.
- **Subscription Form:** Allows users to subscribe for updates and promotions.
- **Footer:** Provides additional information and links.
- **Front-End SPA:** Currently, Shoesy is a front-end single-page application built with React and tailwindcss.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Ataa17/shoesy.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd shoesy
    ```
3. **Install dependencies:**
    ```bash
    npm install
    ```
4. **Run the project:**
    ```bash
    npm start
    ```

## Usage

Once the project is up and running, navigate to `http://localhost:3000` in your browser. You will see the main page with the following sections:

1. **Navigation Bar (Nav):** Provides navigation options across the website.
2. **Hero Section:** The main banner showcasing the theme or featured shoes.
3. **Popular Products:** Lists popular shoes for quick access.
4. **Quality Section:** Information about the quality and assurance of the shoes.
5. **Services:** Outlines the services provided by Shoesy.
6. **Customer Reviews:** Displays reviews from happy customers.
7. **Subscription Form:** A form to collect user emails for newsletters and promotions.
8. **Footer:** Contains links and additional information.

## Folder Structure

Here's an overview of the project structure:

```
├── public 
│ ├── favicon.ico
│ └── index.html 
├── src 
│ ├── assets 
│ │ ├── icons
│ │ └── images 
│ ├── components 
│ │ ├── Button.jsx 
│ │ ├── Nav.jsx 
│ │ ├── ProductCard.jsx 
│ │ ├── ReviewCard.jsx 
│ │ ├── ServiceCard.jsx 
│ │ ├── ShoeCard.jsx 
│ │ └── index.js 
│ ├── constants 
│ │ └── index.js 
│ ├── sections
│ │ ├── Hero.js 
│ │ ├── PopularProducts.js 
│ │ ├── Quality.js 
│ │ ├── Services.js 
│ │ ├── CustomerReviews.js 
│ │ ├── Subscribe.js 
│ │ └── Footer.js
│ ├── App.js 
│ ├── index.css 
│ └── index.js 
├── package-lock.json 
├── package.json 
└── tailwind.config.js
```

## Sections Overview

- **Hero:** The main section with a large banner or call to action.
- **PopularProducts:** Section showcasing the most popular shoes.
- **Quality:** Provides information about the quality of the shoes.
- **Services:** Lists the services offered by Shoesy.
- **CustomerReviews:** Displays customer feedback and testimonials.
- **Subscribe:** Section with a form for users to subscribe to newsletters and promotions.
- **Footer:** The bottom section with additional links and information.

## Components Overview
- **Nav:** The navigation bar at the top of the page.
- **ProductCard:** A card component to display product information.
- **ReviewCard:** A card component to display customer reviews.
- **ServiceCard:** A card component to display service information.
- **ShoeCard:** A card component to display shoe details.
- **Button:** A reusable button component with different styles.

## Learning Tailwind CSS

The primary goal of this project is to practice and master Tailwind CSS. Each section is styled using Tailwind's utility-first classes, allowing for rapid UI development and responsive design.
additonally, the project is built with React, which allowed me to gain further experience with React and its component-based architecture, hooks and conditional rendering and discover how Tailwind CSS can be integrated with React components 

Key Tailwind CSS features used in this project:
- **Responsive Design:** Utility classes like `xl:`, `py-10`, `bg-blue-100`, etc.
- **Padding & Margin:** Custom padding and margin for spacing.
- **Typography:** Tailored text styles for headings, paragraphs, and buttons.
- **Colors:** Tailwind’s color palette for backgrounds, text, and accents.



