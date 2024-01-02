import Image from "next/image";
import React from "react";

const InfoCards = ({item}) => {
  return (
    <div className="bg-[#F5F5F5] p-[15px] min-w-[300px] md:min-w-[323px] h-[88px] w-full rounded-[10px] border flex items-center justify-between gap-3">
      <div className={`h-[52px] w-[52px] rounded-[8px] flex justify-center items-center flex-shrink-0`} style={{backgroundColor: item.color}}>
        <Image src={item.photo} alt="info cards photo" height={35} width={35} className="" />
      </div>
      <div>
        <h1 className="text-lg font-semibold text-green">{item.title}</h1>
        <p className="text-xs">{item.message}</p>
      </div>
    </div>
  );
};

export default InfoCards;
