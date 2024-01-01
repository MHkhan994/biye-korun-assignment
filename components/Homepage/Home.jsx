"use client";
import React, { useState } from "react";
import HomeTabs from "./HomeTabs";
import Features from "./Features";
import Resources from "./Resources";

const Home = () => {
  const [currentTab, setCurrentTab] = useState("features");

  return (
    <div className="bg-gray my-container min-h-screen lg:p-[30px] p-[20px]">
      <HomeTabs setCurrentTab={setCurrentTab} currentTab={currentTab} />
      <hr className="lg:my-8 md:my-5 hidden md:block" />

      <div className="hidden md:block">
        <h3 className="text-lg font-bold">
          Welcome to <span className="text-[#CC176A]">BiyeKorun</span>{" "}
          Documentation.
        </h3>
        <p className="text-sm text-gray-500 pt-2">
          Find user guides, developer guides and API references.
        </p>
      </div>

      {/* tabs and sidebars */}
      <div className="grid lg:grid-cols-[2fr_1fr] md:grid-cols-2 grid-cols-1 lg:mt-[30px] mt-[20px] gap-[20px] lg:gap-0">
        {/* left side tab */}
        <div className="bg-white md:min-h-[530px] w-full lg:p-[30px] p-[20px] rounded-[10px] border">
          <div className="md:hidden pb-[16px]">
            <h3 className="text-base lg:text-xl font-bold">
              Welcome to <span className="text-[#CC176A]">BiyeKorun</span>
              Documentation.
            </h3>
            <p className="text-sm text-gray-500 pt-2">
              Find user guides, developer guides and API references.
            </p>
          </div>
          <h1 className="text-base lg:text-2xl font-bold leading-none pb-[15px]">
            {currentTab === "features"
              ? "Features"
              : currentTab === "resources"
              ? "Developer Resources"
              : ""}
          </h1>
          <div>{currentTab === "features" ? <Features /> : <Resources />}</div>
        </div>

        {/* right side bar */}
        <div className="bg-white lg:mx-[30px] lg:p-[30px] p-[20px] h-full lg:w-fit w-full rounded-[10px] border"></div>
      </div>
    </div>
  );
};

export default Home;
