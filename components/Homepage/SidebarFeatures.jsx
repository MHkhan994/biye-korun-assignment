import React from "react";
import Image from "next/image";
import homeStyles from "./Home.module.css";

const SidebarFeatures = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Getting Started with BiyeKorun</h1>
      <p className="py-5 text-sm text-gray-500">
        Learn the fundamentals and start building on BiyeKorun. Find best practices to help you launch your first application and get to know the
        Biyekorun Management Console.
      </p>
      <div className="space-y-[20px]">
        <button className={homeStyles.sidebar_btn}>
          <span>Create an BiyeKorun account</span>
          <Image src={"/arrowRight.svg"} alt="arrow right icon" height={13} width={18} />
        </button>
        <button className={homeStyles.sidebar_btn}>
          <span>Set up your BiyeKorun account</span>
          <Image src={"/arrowRight.svg"} alt="arrow right icon" height={13} width={18} />
        </button>
        <button className={homeStyles.sidebar_btn}>
          <span>Getting started resources center</span>
          <Image src={"/arrowRight.svg"} alt="arrow right icon" height={13} width={18} />
        </button>
        <button className={homeStyles.sidebar_btn}>
          <span>BiyeKorun cloud security</span>
          <Image src={"/arrowRight.svg"} alt="arrow right icon" height={13} width={18} />
        </button>
      </div>
    </div>
  );
};

export default SidebarFeatures;
