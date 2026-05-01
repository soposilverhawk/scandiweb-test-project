# Scandiweb E-Commerce Project - Frontend Documentation

## Overview

This is the documentation for the front-end part of a full-stack e-commerce application built as part of the Scandiweb assessment. The front-end uses different core react concepts and tools to achieve product listing, filtering by category, product details, cart functionality, and order placement.

---

## Utilized concepts and tools:

- **Component-based architecture**
- **React hooks**
- **Custom hooks**
- **Context API**
- **Conditional rendering**
- **Props**
- **Utility functions**

## Utilized Libraries:

- **React Router**: For routing
- **Styled-components:** For styling
- **html-react-parser:** For converting html strings from backend to react components
- **dompurify:** XSS sanitizer for backend html strings
- **graphql with @apollo/client:** For GraphQL interactions

---

## Features

- Product listing by category (All, Clothes, Tech)
- Product details with attributes selection
- Add to cart with attribute support
- Cart management (quantity, remove items)
- Order placement and persistence
- GraphQL API for all data operations

---

## Project Structure

```
/public -> Assets/images not used by the main application (favicon)
/src/api -> API interactions (GraphQL Mutations, Queries)
/src/components -> Specific components of the application
/src/components/Shared -> Shared components of the application (header, content wrapper, etc)
/src/context -> Context APIs for different parts of the application
/src/hooks -> Custom hooks
/src/pages -> Separate page builds
/src/routes -> Contains Routes object and and respective routing components (AppRoutes)
/src/utils -> Utility functions
App.css -> Common CSS variables and general styles
App.jsx -> Main application structure
index.css -> Sets reset.css
main.jsx -> Handles Apollo/client setup, providing context and routing of the application
```

---

## Data flow

1. Frontend sends GraphQL queries via Apollo Client
2. Backend resolves queries and fetches data from MySQL
3. Data is normalized and returned to frontend
4. Components consume data via hooks and context
5. UI updates based on state changes (cart, selected attributes, etc)
