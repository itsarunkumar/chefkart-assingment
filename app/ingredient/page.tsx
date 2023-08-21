import { Separator } from "@/components/ui/separator";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import {
  ArrowBigDown,
  ChevronLeft,
  Clock1,
  Refrigerator,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function page() {
  const data = await fetch(
    "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1"
  );

  const ingredients = await data.json();

  console.log(ingredients);

  return (
    <div className="w-full h-full flex justify-center items-center flex-col pb-20">
      <Link href={"/"} className="flex self-start mt-5 lg:px-10">
        <ChevronLeft />
        Back
      </Link>
      <div className="w-5/6   lg:my-10 py-10 relative">
        <h4 className="font-bold text-2xl flex items-center gap-6">
          {ingredients.name}
          <span className="flex items-center font-normal text-sm bg-green-600 w-fit px-1  h-4 rounded-sm">
            4
            <Star className="text-white fill-white w-3 h-3 " />
          </span>
        </h4>
        <p className="w-4/6 text-start text-sm text-gray-500 mt-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint culpa
          cum laborum quidem facere. Modi odio facere velit veritatis ipsam!
        </p>

        <span className="flex items-center text-sm gap-2 mt-5">
          <Clock1 className="w-5 h-5 fill-white text-orange-600" />{" "}
          {ingredients.timeToPrepare}
        </span>

        <div className="object-contain absolute -right-12 top-40">
          <Image src={"/veg.png"} alt="" width={300} height={200} />
        </div>
      </div>
      <div className="w-5/6 mt-5">
        <Separator className="my-4" />
        <h3 className="font-bold text-2xl">Ingredients</h3>
        <span className="text-sm text-slate-600">For 2 people</span>
        <Separator className="my-4" />
      </div>
      <div className="w-5/6 flex justify-center items-center flex-col">
        <div className="w-full">
          <h4 className="font-bold text-2xl mb-3 flex items-center gap-2">
            Vegetables({ingredients.ingredients.vegetables.length})
            <ChevronDownIcon
              className="w-4 h-4 text-lg text-black"
              strokeWidth={1.5}
            />
          </h4>
          {ingredients.ingredients.vegetables.map((item: any) => {
            return (
              <div className="w-full flex justify-between items-center text-sm py-1 ">
                <span>{item.name}</span>
                <span>{item.quantity} PC</span>
              </div>
            );
          })}
        </div>
        <div className="w-full">
          <h4 className="font-bold text-2xl mb-3 flex items-center gap-2">
            Spices({ingredients.ingredients.spices.length})
            <ChevronDownIcon
              className="w-4 h-4 text-lg text-black"
              strokeWidth={1.5}
            />
          </h4>
          {ingredients.ingredients.spices.map((item: any) => {
            return (
              <div className="w-full flex justify-between items-center text-sm py-1 ">
                <span>{item.name}</span>
                <span>{item.quantity}</span>
              </div>
            );
          })}
        </div>
        <div className="w-full">
          <h4 className="font-bold text-2xl mb-3 flex items-center gap-2">
            Appliances{" "}
            <ChevronDownIcon
              className="w-4 h-4 text-lg text-black"
              strokeWidth={1.5}
            />
          </h4>
          <div className="w-full flex justify-evenly items-center mt-5">
            {ingredients.ingredients.appliances.map((item: any) => {
              return (
                <div className="text-center flex justify-center flex-col items-center">
                  <Refrigerator
                    className="w-20 font-thin h-20"
                    strokeWidth={1}
                  />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
