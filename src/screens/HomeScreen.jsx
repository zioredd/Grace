import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import WhoWeAre from "../components/WhoWeAre";
import Questions from "../components/Questions";
import Information from "../components/Information";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const HomeScreen = () => {
  return (
    <>
      <Header />
      <WhoWeAre />
      <Questions />
      <Information />
      <CTA />
      <Footer />
      {/* <Information />
      <CTA />
      <Footer /> */}
    </>
  );
};

export default HomeScreen;
