import React from "react";
  
import NavBar from "./NavBar";
  import Footer from "./Footer";

  
const Layout = ({ children }:any) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};
  
export default Layout;