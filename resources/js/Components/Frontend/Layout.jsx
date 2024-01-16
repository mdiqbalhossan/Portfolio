import React, { useEffect } from 'react';

import Header from './Header';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

export default function Layout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <main>

      </main>
      <CustomCursor />
      <Footer />
    </>
  );
}
