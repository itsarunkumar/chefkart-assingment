import React from "react";
import { DatePicker } from "./DatePicker";
import { Clock10 } from "lucide-react";
import { Separator } from "./ui/separator";

function DateAndTime() {
  return (
    <div className="w-full h-16 bg-slate-800 flex justify-center items-center">
      <div className="lg:w-4/6 w-5/6 h-full bg-white mt-16 shadow-xl rounded-lg flex justify-center lg:justify-evenly items-center gap-2">
        <DatePicker />
        <Separator orientation="vertical" className="h-8" />
        <span className=" font-bold text-[10px] lg:text-sm flex items-center">
          <Clock10 className="w-4 h-4" /> 10:30 Pm-12:30 Pm
        </span>
      </div>
    </div>
  );
}

export default DateAndTime;
