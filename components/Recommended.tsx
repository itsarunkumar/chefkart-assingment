import React from "react";
import { Separator } from "./ui/separator";
import { ChevronDownIcon, Refrigerator, SquareDot, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function Recommended() {
  const data = await fetch(
    "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
  );
  const { dishes } = await data.json();
  console.log(dishes);

  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full justify-between px-4 ">
        <p className="self-start font-bold"> Recommended</p>
        <p className="self-end btn bg-slate-950 rounded-lg lg:px-4 lg:py-2 px-3 py-1 text-white flex items-center gap-2">
          Menu
          <ChevronDownIcon
            className="w-4 h-4 text-lg text-white"
            strokeWidth={1.5}
          />
        </p>
      </div>
      <div className="flex justify-center items-center flex-col w-full lg:my-10">
        {dishes.map((item: Items) => {
          return <Card {...item} />;
        })}
        {dishes.map((item: Items) => {
          return <Card {...item} />;
        })}
      </div>
    </div>
  );
}

type Items = {
  name: string;
  rating: number;
  description: string;
  equipments: string[];
  image: string;
  id: any;
};

function Card({ name, image, rating, description, id, equipments }: Items) {
  return (
    <div className="flex lg:w-4/6 h-full mt-10 w-5/6 gap-2 justify-between items-center lg:border border-slate-200 lg:py-4 lg:px-5 rounded-md ">
      <div className="w-2/3 mr-5">
        <div className="flex gap-3 py-2 items-center justify-center">
          <span>{name}</span>
          <span>
            <SquareDot className="w-4 h-4 fill-white text-green-600" />
          </span>
          <span className="flex items-center text-sm bg-green-600 w-fit px-1  h-4 rounded-sm">
            {rating}
            <Star className="text-white fill-white w-3 h-3 " />
          </span>
        </div>
        <Separator className="bg-gray-100" />
        <div className="flex justify-evenly my-2">
          <span className="flex gap-2 text-center">
            {equipments.map((item) => {
              return (
                <span className="text-center flex flex-col items-center">
                  <Refrigerator />
                  <span className="text-[8px] "> {item}</span>
                </span>
              );
            })}
          </span>
          <Separator
            orientation="vertical"
            className="h-8 bg-gray-100 text-white"
          />
          <span className="text-sm flex items-center flex-col">
            ingredients
            <Link
              href={"/ingredient"}
              className="text-orange-500 text-xs cursor-pointer"
            >
              view all
            </Link>
          </span>
        </div>
        <p className="w-full text-justify text-sm text-gray-500 mt-5">
          {description}
        </p>
      </div>
      <div className="w-1/3 h-full rounded-md relative flex justify-center items-center">
        <Image
          src="/dish.jpg"
          alt=""
          width={100}
          height={100}
          className="rounded-md"
        />
        <span className="absolute bg-white px-2 text-sm mt-24 py-1 cursor-pointer rounded-sm border border-orange-500">
          Add +
        </span>
      </div>
    </div>
  );
}

export default Recommended;
