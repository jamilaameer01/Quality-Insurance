import React from 'react'

const Support = () => {
  return (
    <div>
      <div className="container mx-auto px-[100px]">
        <p className="text-[#021A56] text-center text-[40px]">
          here’s why you’ll love OQVIC
        </p>
        <div className="flex  justify-around gap-16 items-center ">
          <div className="font-montserrat  flex flex-col items-center text-[#021A56]  font-semibold gap-y-5">
            <img src="s1.svg" alt="s1" className="w-[104px] h-[100px]" />
            <p className="text-[24px]">Incredibly low premiums</p>
            <p className="text-[16px] font-normal">
              Insuring things that matter to you shouldn't come at a cost.
              That's why when you buy from us, you get insurance that fits your
              pocket.
            </p>
          </div>
          <div className="font-montserrat  flex flex-col items-center text-[#021A56]  font-semibold gap-y-5">
            <img src="s2.svg" alt="s1" className="w-[104px] h-[100px]" />
            <p className="text-[24px]">Superquick and easy</p>
            <p className="text-[16px] font-normal">
              We're easy, effortless and 100% digital. Forget paperwork, just
              access all our services with just a few clicks.
            </p>
          </div>
          <div className="font-montserrat  flex flex-col items-center text-[#021A56]  font-semibold gap-y-5">
            <img src="s3.svg" alt="s1" className="w-[104px] h-[100px]" />
            <p className="text-[24px]">Quick Customer Support</p>
            <p className="text-[16px] font-normal">
              We're on a mission to make insurance claims stress-free. Just give
              us a call or file a claim online and experience cashless, speedy
              claim settlernents.
            </p>
          </div>

          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Support