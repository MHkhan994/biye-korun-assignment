import React from "react";
import menus from "../../public/accordionMenu.json";
import "../../app/documentation/document.css";

const Accordion = ({menuStates}) => {
  return (
    <div>
      <h2 className="text-xl text-[#9908F5] font-semibold pb-[30px]">BiyeKorun Introduction</h2>
      <div className="space-y-[20px] h-cover border-r border-[#00000099]">
        {menus.map((m, i) => (
          <div key={m.id} className="collapse collapse-arrow rounded-none capitalize">
            <input type="radio" name="my-accordion-2" className="" />
            <div className={`collapse-title text-xl font-medium`}>{m.menu}</div>
            <div className="collapse-content space-y-3">
              {m.sub_menu.map((sub_m, i) => (
                <p onClick={() => menuStates.setActiveSubMenu(sub_m.title)} className="text-[#636363] cursor-pointer text-base" key={i}>
                  {sub_m.title}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
