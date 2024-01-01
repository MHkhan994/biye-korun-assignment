import React from "react";
import features from "../../public/features.json";
import InfoCards from "./InfoCards";

import homeStyles from "./Home.module.css";

const Features = () => {
  return (
    <div
      className={`${homeStyles.tab_container} grid lg:grid-cols-2 grid-cols-1 justify-center gap-[20px] md:h-[412px] w-full tab-container pr-3 overflow-y-auto`}
    >
      {features && features.map((f) => <InfoCards key={f.id} item={f} />)}
    </div>
  );
};

export default Features;
