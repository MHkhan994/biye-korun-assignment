"use client";
import Image from "next/image";
import React from "react";

const HomeTabs = ({ setCurrentTab, currentTab }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="lg:flex items-center gap-[20px]">
      <div className="flex lg:gap-[144px] items-center justify-between">
        <h1 className="lg:text-2xl text-xl font-bold">Documentations</h1>
        <div className="bg-[#076a491a] text-green text-sm rounded-[5px] flex border border-[#0000001a] h-[40px]">
          <button
            className={`lg:w-[140px] w-[84px] h-full rounded-[4px] ${
              currentTab === "features" ? "bg-green text-white" : ""
            }`}
            onClick={() => setCurrentTab("features")}
          >
            Features
          </button>
          <button
            className={`lg:w-[140px] w-[84px] h-full rounded-[4px] ${
              currentTab === "resources" ? "bg-green text-white" : ""
            }`}
            onClick={() => setCurrentTab("resources")}
          >
            Resources
          </button>
        </div>
      </div>

      <div className="flex gap-[20px] items-center justify-between mt-[20px] lg:mt-0">
        <form
          onSubmit={handleSubmit}
          className="md:w-[400px] w-[276px] h-[40px] bg-white rounded-[6px] border flex items-center gap-2 px-[20px]"
        >
          <input
            type="text"
            placeholder="search"
            className="w-full outline-none text-base"
          />
          <button>
            <Image
              src={"/search-icon.png"}
              alt="search icon"
              height={16}
              width={16}
            />
          </button>
        </form>

        <button className="bg-[#F42A41] h-[40px] w-[86px] rounded-[6px] flex items-center justify-center text-white gap-2">
          <Image
            src={"/filter-icon.svg"}
            alt="fileter icon"
            width={16}
            height={16}
          />
          <span className="text-sm">Filter</span>
        </button>
      </div>
    </div>
  );
};

export default HomeTabs;
