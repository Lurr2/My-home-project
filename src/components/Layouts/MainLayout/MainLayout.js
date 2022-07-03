import React from 'react'
import NavigationBar from '../../navigationbar/NavigationBar';
const MainLayout = ({ children }) => (
  <section>
    <NavigationBar />
    {children}
  </section>
);

export default MainLayout;