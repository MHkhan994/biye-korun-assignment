"use client";
import Image from "next/image";
import React from "react";
import navStyles from "./Navbar.module.css";
import {useRouter} from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="my-container lg:mb-[24px] w-full bg-nav navbar h-[91px] flex items-center px-[20px] justify-between">
      <div onClick={() => router.push("/")}>
        <Image src={"/logo.svg"} alt="biye korun logo" width={173} height={44} className="w-[126px] cursor-pointer h-[32px] navbar-img" />
      </div>
      <div className="flex gap-[15px]">
        <div className={`${navStyles.nav_button} lg:hidden flex justify-center items-center`}>
          <Image src={"/search-icon.png"} alt="search icon" height={16} width={16} />
        </div>

        <div className={`flex justify-center items-center ${navStyles.nav_button}`}>
          <Image src={"/notification-logo.svg"} alt="nav notification logo" width={24} height={24} />
        </div>

        <div className={`${navStyles.nav_button}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
