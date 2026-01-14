import React from "react";
import Navbar from "../components/shared/Navbar";
import { Fanwood_Text } from "next/font/google";
import Footer from "../components/shared/Footer";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[70vh]">
        {children}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default layout;
