import Image from "next/image";
import React from "react";

type Props = {};

type Item = {
  image: string;
  name: string;
};

async function PopularDished({}: Props) {
  const data = await fetch(
    "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
  );
  const { popularDishes } = await data.json();

  // console.log(popularDishes);

  return (
    <div className="w-full h-24 px-5 flex justify-center items-center flex-col">
      <p className="self-start font-bold text-xl lg:text-2xl">Popular Dishes</p>
      <div className="lg:w-full h-full overflow-x-auto">
        <div className="flex lg:justify-center justify-start items-center gap-5 overflow-x-auto">
          {popularDishes.map((item: Item, i: number) => (
            <>
              <div
                key={i}
                className="border border-orange-600 rounded-full overflow-hidden mx-2 relative"
                style={{ flexShrink: 0, width: "60px", height: "60px" }}
              >
                <div className="w-full h-full bg-opacity-50 bg-slate-950 absolute inset-0 rounded-full flex justify-center items-center text-white text-[10px] text-center">
                  {item.name}
                </div>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularDished;
