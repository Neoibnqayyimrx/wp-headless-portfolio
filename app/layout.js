import React from 'react';
import Footer from './components/footer';
import './globals.css';
import Header from './components/header';

export const metadata = {
  title: 'Headless Portfolio'
}

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Header />
      {children}
      <Footer />
    </body>
  </html>
)

export default RootLayout;
   