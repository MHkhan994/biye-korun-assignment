"use client";
import React, { useState } from "react";
import HomeTabs from "./HomeTabs";

const Home = () => {
  const [currentTab, setCurrentTab] = useState("features");

  return (
    <div className="bg-gray my-container min-h-screen lg:p-[30px] p-[20px]">
      <HomeTabs setCurrentTab={setCurrentTab} currentTab={currentTab} />
    </div>
  );
};

export default Home;
