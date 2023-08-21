import Country from "@/components/Country";
import DateAndTime from "@/components/DateAndTime";
import PopularDished from "@/components/PopularDished";
import Recommended from "@/components/Recommended";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Coffee } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full relative flex justify-center items-center flex-col">
      <DateAndTime />

      <Country />
      <PopularDished />
      <Separator className="my-4" />
      <Recommended />
      <div className=" text-sm flex items-center justify-center gap-2 fixed bottom-5 w-[250px] bg-slate-900 text-white px-4 py-2 rounded-md">
        <Coffee size={20} strokeWidth={1.25} /> 3 food items selected{" "}
        <ArrowRight />
      </div>
    </div>
  );
}
