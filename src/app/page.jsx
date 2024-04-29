import Image from "next/image";
import React from "react";

import Coin from "/public/images/coin.png";
import Membership from "/public/images/membership.png";
import Doller from "/public/images/doller.png";
export default function Home() {
  return (
    <div class="container">
      <div class="pt-14 pb-2"> 
      <div class="flex flex-row justify-between">
        <div class="ml-5 w-fit pb-3">
          <button class="bg-purple-500 w-[40px] top-[56px] h-[40px] rounded-full grid justify-center items-center text-white-50">
            <svg
              width="8"
              height="15"
              viewBox="0 0 8 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1.32532L1 7.32532L7 13.3253"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div >
        <div class="w-full text-center grid justify-center items-center mr-12"> <p class="text-base font-normal leading-5">wallet</p></div>
      </div>

      <div class="w-full h-[152px] top-[108px] pt-[12px] pr-[20px] pl-[20px] pb-[12px] justify-center flex flex-row gap-4">
        {/* <div class="flex flex-row justify-center h-[128px] w-[351px]"> */}
        <div class="box-shadow bg- bg-orange-500 w-1/2 md:w-[167.5px] min-h-[124px] h-auto p-3 rounded-[12px] border border-solid border-white grid justify-between ">
          <div class="h-[40px] w-[40px] bg-orange-300 rounded-[8px] grid justify-center items-center self-start ">
            <Image src={Doller} class="w-[20px] h-[18.33px]" />
          </div>

          <div class="self-end">
            <p className="text-xs text-white font-normal leading-4">
            Remaining Balance
            </p>
            <p class="text-lg font-semibold leading-6.5">$16987</p>
          </div>
        </div>

        <div class="box-shadow bg- bg-orange-500 w-1/2 md:w-[167.5px] min-h-[124px] h-auto p-3 rounded-[12px] border border-solid border-white grid justify-between ">
          <div class="h-[40px] w-[40px] bg-orange-300 rounded-[8px] grid justify-center items-center self-start ">
            <Image src={Coin} class="w-[20px] h-[18.33px]" />
          </div>

          <div class="self-end">
            <p className="text-xs text-white font-normal leading-4">
              Sweet Balls
            </p>
            <p class="text-lg font-semibold leading-6.5">3600 </p>
          </div>
        </div>

        {/* </div> */}
      </div>
    </div>

      <div class="w-full pt-[20px]  flex flex-col gap-[32px] rounded-tl-[12px] rounded-tr-[12px] rounded-bl-none rounded-br-none bg-[#9F8CF0] p-[20px]">
        <div class="h-auto">
          <p class="text-white text-xl font-semibold leading-6">
            Transaction History
          </p>
        </div>

        <div class="flex flex-col gap-[20px]">
          <div>
            <p class="text-white">Today</p>
          </div>

          <div class="flex flex-col gap-[8px]">
          <div class="w-full min-h-[64px] rounded-xl bg-[#CDC4F8] flex flex-row p-[12px] justify-between ">
              <div class="flex flex-row gap-[12px] items-center">
                <div>
                  <Image
                    src={Membership}
                    class="max-w-[40px] max-h-[40px] rounded-lg"
                  />
                </div>
                <div class="flex flex-col justify-center h-auto">
                  <p class=" text-[16px] font-normal leading-normal ">
                    Renew Membership
                  </p>
                  <p class=" text-[14px] text-[#6E726F] font-normal leading-normal">
                    Time Crystal
                  </p>
                </div>
              </div>
              <div class="grid justify-center text-base font-semibold leading-5">
                <p class="text-center self-center">$10000</p>
              </div>
            </div>

            <div class="w-full min-h-[64px] rounded-xl bg-[#CDC4F8] flex flex-row p-[12px] justify-between ">
              <div class="flex flex-row gap-[12px] items-center">
                <div>
                  <Image
                    src={Membership}
                    class="max-w-[40px] max-h-[40px] rounded-lg"
                  />
                </div>
                <div class="flex flex-col justify-center h-auto">
                  <p class=" text-[16px] font-normal leading-normal ">
                    Renew Membership
                  </p>
                  <p class=" text-[14px] text-[#6E726F] font-normal leading-normal">
                    Time Crystal
                  </p>
                </div>
              </div>
              <div class="grid justify-center text-base font-semibold leading-5">
                <p class="text-center self-center">$10000</p>
              </div>
            </div>
            <div />
          </div>

          <div>
            <p class="text-white">Yesterday</p>
          </div>

          <div class="flex flex-col gap-[8px]">
          <div class="w-full min-h-[64px] rounded-xl bg-[#CDC4F8] flex flex-row p-[12px] justify-between ">
              <div class="flex flex-row gap-[12px] items-center">
                <div>
                  <Image
                    src={Membership}
                    class="max-w-[40px] max-h-[40px] rounded-lg"
                  />
                </div>
                <div class="flex flex-col justify-center h-auto">
                  <p class=" text-[16px] font-normal leading-normal ">
                    Renew Membership
                  </p>
                  <p class=" text-[14px] text-[#6E726F] font-normal leading-normal">
                    Time Crystal
                  </p>
                </div>
              </div>
              <div class="grid justify-center text-base font-semibold leading-5">
                <p class="text-center self-center">$10000</p>
              </div>
            </div>

            <div class="w-full min-h-[64px] rounded-xl bg-[#CDC4F8] flex flex-row p-[12px] justify-between ">
              <div class="flex flex-row gap-[12px] items-center">
                <div>
                  <Image
                    src={Membership}
                    class="max-w-[40px] max-h-[40px] rounded-lg"
                  />
                </div>
                <div class="flex flex-col justify-center h-auto">
                  <p class=" text-[16px] font-normal leading-normal ">
                    Renew Membership
                  </p>
                  <p class=" text-[14px] text-[#6E726F] font-normal leading-normal">
                    Time Crystal
                  </p>
                </div>
              </div>
              <div class="grid justify-center text-base font-semibold leading-5">
                <p class="text-center self-center">$10000</p>
              </div>
            </div>

            <div class="w-full min-h-[64px] rounded-xl bg-[#CDC4F8] flex flex-row p-[12px] justify-between ">
              <div class="flex flex-row gap-[12px] items-center">
                <div>
                  <Image
                    src={Membership}
                    class="max-w-[40px] max-h-[40px] rounded-lg"
                  />
                </div>
                <div class="flex flex-col justify-center h-auto">
                  <p class=" text-[16px] font-normal leading-normal ">
                    Renew Membership
                  </p>
                  <p class=" text-[14px] text-[#6E726F] font-normal leading-normal">
                    Time Crystal
                  </p>
                </div>
              </div>
              <div class="grid justify-center text-base font-semibold leading-5">
                <p class="text-center self-center">$10000</p>
              </div>
            </div>
            <div />
          </div>
        </div>
      </div>
    </div>
  );
}
