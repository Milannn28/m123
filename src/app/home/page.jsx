"use client";
import React from "react";
import Intro from "../../components/introduction"
import Swiper1 from "../../components/swiper1";
import Buttons from "../../components/buttons.jsx";
import Membership from "../../components/membershipCard.jsx";
import Swiper2 from "../../components/swiper2.jsx";
import BottomNavBar from "../../components/bottomNavBar.jsx";

const page = () => {
  return (
    <div className="container">
      <div className="grid gap-8">
        
      <Intro/>

      <Swiper1/>

      <Buttons/>

      <Membership/>

      <Swiper2/>

      </div>

      <BottomNavBar/>

    </div>
  );
};

export default page;
