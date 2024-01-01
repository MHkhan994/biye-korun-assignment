import React from "react";
import features from "../../public/features.json";
import resources from "../../public/resources.json";
import InfoCards from "./InfoCards";

import homeStyles from "./Home.module.css";
import SidebarResources from "./SidebarResources";
import SidebarFeatures from "./SidebarFeatures";

const HomeContent = ({currentTab}) => {
  return (
    <div className="grid lg:grid-cols-[2fr_1fr] md:grid-cols-2 grid-cols-1 lg:mt-[30px] mt-[20px] gap-[20px] lg:gap-0">
      {/* left side tab */}
      <div className="bg-white md:min-h-[530px] w-full lg:p-[30px] p-[20px] rounded-[10px] border">
        <div className="md:hidden pb-[16px]">
          <h3 className="text-base lg:text-xl font-bold">
            Welcome to <span className="text-[#CC176A]">BiyeKorun</span>
            Documentation.
          </h3>
          <p className="text-sm text-gray-500 pt-2">Find user guides, developer guides and API references.</p>
        </div>
        <h1 className="text-base lg:text-2xl font-bold leading-none pb-[15px]">
          {currentTab === "features" ? "Features" : currentTab === "resources" ? "Developer Resources" : ""}
        </h1>
        <div>
          {currentTab === "features" ? (
            <div
              className={`${homeStyles.tab_container} grid lg:grid-cols-2 grid-cols-1 justify-center gap-[20px] md:h-[412px] w-full tab-container pr-3 overflow-y-auto`}
            >
              {features && features.map((f) => <InfoCards key={f.id} item={f} />)}
            </div>
          ) : (
            <div
              className={`${homeStyles.tab_container} grid lg:grid-cols-2 grid-cols-1 justify-center gap-[20px] md:h-[412px] w-full tab-container pr-3 overflow-y-auto`}
            >
              {features && resources.map((f) => <InfoCards key={f.id} item={f} />)}
            </div>
          )}
        </div>
      </div>

      {/* right side bar */}
      <div className="bg-white lg:ms-[30px] lg:p-[30px] p-[20px] h-full rounded-[10px] border">
        {currentTab === "features" ? <SidebarFeatures /> : <SidebarResources />}
      </div>
    </div>
  );
};

export default HomeContent;
