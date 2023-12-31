"use client";
import React, {useState} from "react";
import HomeTabs from "./HomeTabs";
import HomeContent from "./HomeContent";
import Blogs from "./Blogs";

const Home = () => {
  const [currentTab, setCurrentTab] = useState("features");

  return (
    <div className="bg-gray my-container min-h-screen lg:p-[30px] p-[20px] rounded-[8px]">
      <HomeTabs setCurrentTab={setCurrentTab} currentTab={currentTab} />

      <hr className="lg:my-8 md:my-5 hidden md:block" />

      <div className="hidden md:block">
        <h3 className="text-lg font-bold">
          Welcome to <span className="text-[#CC176A]">BiyeKorun</span> Documentation.
        </h3>
        <p className="text-sm text-gray-500 pt-2">Find user guides, developer guides and API references.</p>
      </div>

      {/* tabs and sidebars */}
      <HomeContent currentTab={currentTab} />

      <Blogs currentTab={currentTab} />
    </div>
  );
};

export default Home;
