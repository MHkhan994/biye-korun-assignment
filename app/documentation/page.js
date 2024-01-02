"use client";
import React, {useState} from "react";
import "./document.css";
import Introduction from "@/components/Documentation/FeatureDoc/Introduction";
import Accordion from "@/components/Documentation/Accordion";
import Image from "next/image";
import {closeModal} from "@/common/ModalControll";

const Documentation = () => {
  const [activeMenu, setActiveMenu] = useState("overview");
  const [activeSubMenu, setActiveSubMenu] = useState("introduction");

  const menuStates = {activeMenu, setActiveMenu, activeSubMenu, setActiveSubMenu};

  return (
    <div className="my-container bg-gray lg:p-[30px] p-[20px] rounded-[8px]">
      <div className="flex text-xl items-center gap-2 capitalize">
        <p>Documentations</p>
        <Image src={"/buttonNext.png"} alt="" height={8} width={25} className="h-5 w-7" />
        <span className="text-[#9908F5]">{activeSubMenu}</span>
      </div>

      <hr className="my-[30px]" />

      <div className="grid relative min-h-64 md:grid-cols-[1fr_3fr] grid-cols-1 gap-[30px]">
        {/* sidebar accordion */}
        <Accordion menuStates={menuStates} />
        {/* doccumentation content */}
        <div className="bg-white w-full p-[30px] hidden md:block rounded-[10px]">{activeSubMenu === "introduction" && <Introduction />}</div>

        {/* documentation mobile view */}
        <dialog id="my_modal_4" className="modal lg:hidden lg:invisible">
          <div className="modal-box w-11/12 max-w-5xl">
            <div className="modal-action h-full pb-5">
              <button className="absolute right-5 top-5" onClick={() => closeModal("my_modal_4")}>
                X
              </button>
              <form method="dialog">{activeSubMenu === "introduction" && <Introduction />}</form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Documentation;
