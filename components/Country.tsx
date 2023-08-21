import React from "react";

function Country() {
  return (
    <div className="w-full h-16 mt-10 px-5 flex justify-center items-center">
      <div className="lg:w-full h-full flex lg:justify-center justify-start items-center gap-5 overflow-x-auto">
        {[
          "italian",
          "indian",
          "indian",
          "indian",
          "indian",
          "indian",
          "indian",
        ].map((item, i) => (
          <div
            key={i}
            className="border border-orange-600 rounded-2xl px-3 py-1 whitespace-nowrap"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Country;
