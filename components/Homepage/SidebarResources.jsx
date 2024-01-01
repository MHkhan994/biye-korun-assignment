import Image from "next/image";
import React from "react";
import homeStyles from "./Home.module.css";

const SidebarResources = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">BiyeKorun CLI</h1>
      <p className="py-5 text-sm text-gray-500">
        The BiyeKorun Command Line Interface (BiyeKorun CLI) is a unified tool to manage your Biyekorun products.
      </p>
      <div className="space-y-[20px]">
        <button className={homeStyles.sidebar_btn}>
          <span>CLI User Guide</span>
          <Image src={"/arrowRight.svg"} alt="arrow right icon" height={13} width={18} />
        </button>
        <button className={homeStyles.sidebar_btn}>
          <span>Install the latest version of the CLI</span>
          <Image src={"/arrowRight.svg"} alt="arrow right icon" height={13} width={18} />
        </button>
        <button className={homeStyles.sidebar_btn}>
          <span>Configure the BiyeKorun CLI</span>
          <Image src={"/arrowRight.svg"} alt="arrow right icon" height={13} width={18} />
        </button>
      </div>
    </div>
  );
};

export default SidebarResources;
