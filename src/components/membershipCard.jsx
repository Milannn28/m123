import React from 'react'
import Profile from "/public/images/profile.png";
import Image from "next/image";

const membershipCard = () => {
  return (
    <div className="px-5">
    <div className="membership bg-black grid gap-[19px] px-[26px] py-[23px] text-white border border-white rounded-xl">
      <div className="flex justify-between ">
        <p className="text-[17px] pl-[2px] font-bold">Gdooo</p>
        <p className="text-xs font-normal self-center">Anti Matter</p>
      </div>
      <div className="flex gap-6 items-center">
        <div>
          <Image src={Profile} className="h-[98px] w-[98px]" />
        </div>
        <div className="grid">
          <div>
            <p className="text-[23px] font-bold">Steph Golik</p>
          </div>
          <div className="grid gap-1 text-xs font-normal">
            <p>ID No : 123456789</p>
            <p>Join : 08/08/2024</p>
            <p>Expire : 08/08/2025</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default membershipCard
