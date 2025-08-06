Nexus

This project converts a static website (Home, About, Contact Us) into a React JS application with Tailwind CSS styling and Formspree API integration for form submission.



## Features

- **Component-based Architecture**: Organized into layouts, pages, and views
- **Tailwind CSS**: Modern utility-first CSS framework for styling
- **React Router**: Client-side routing for navigation
- **Formspree Integration**: Contact form with API integration
- **Responsive Design**: Mobile-friendly layout
- **Modern UI**: Clean and professional design

## Technologies Used

- React JS
- Tailwind CSS
- React Router DOM
- Formspree API

## Installation and Setup

1. Navigate to the project directory:
   ```bash
   cd static-to-react-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Pages

### Home Page
- Hero section with call-to-action
- Features section highlighting key benefits
- Responsive grid layout

### About Page
- Company mission and values
- Team member profiles
- Professional layout with cards

### Contact Page
- Contact form integrated with Formspree
- Contact information display
- Form validation and success/error handling

## Formspree Integration

The contact form is integrated with Formspree using the endpoint:
`https://formspree.io/f/xdkdwbqg`

The form includes:
- Email validation
- Message textarea
- Loading states
- Success/error feedback

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App

## Deployment

To build for production:
```bash
npm run build
```

This creates a `build` folder with optimized production files ready for deployment.
