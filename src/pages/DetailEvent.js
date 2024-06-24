import React from "react";
import "../App.css";
import UseScrollVisible from "./trasitions/UseScrollVisible";

function DetailEvent() {
  const elementId = "detail-section";
  const isVisible = UseScrollVisible(elementId);
  
  return (
    <div
      id={elementId}
      className={`relative flex flex-col items-center justify-center md:min-h-screen text-center md:pt-16 md:pb-80 pt-24 ${
        isVisible ? "slide-in active" : "  slide-in"
      }`}
    >
      <div
        className="text-sm md:text-2xl text-gray-600 georgia w-full md:w-2/3 mx-auto"
        style={{ letterSpacing: 0.5 }}
      >
        Insya Allah diselenggarakan pada :
      </div>
      <div className="mt-5">
        <div className="gap-2 flex flex-col items-center justify-center">
          <div className="text-sm md:text-2xl tracking-widest text-gray-600 georgia">
            JUNI
          </div>
          <div className="flex flex-row justify-center items-center gap-6 pt-2">
            <div className="text-sm md:text-2xl tracking-wide georgia font-medium md:font-semibold text-gray-600">
              AKAD 08.00
            </div>
            <div className="w-0.5 h-9 bg-gray-300 inline-block"></div>
            <div className="text-3xl md:text-5xl tracking-wide butler-regular">
              02
            </div>
            <div className="w-0.5 h-9 bg-gray-300 inline-block"></div>
            <div className="text-sm md:text-xl tracking-wide georgia font-medium md:font-semibold text-gray-600">
              RESEPSI 10-14
            </div>
          </div>
          <div className="text-sm md:text-2xl tracking-widest text-gray-600 georgia">
            MINGGU
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:py-12 py-5 ">
          <hr className="md:w-[20em] w-1/2 border-gray-400 md:py-5 py-2" />
          <div
            className="text-sm md:text-2xl tracking-widest text-[#9C7951] georgia"
            style={{ letterSpacing: 3 }}
          >
            JATINANGOR NATIONAL GOLF
          </div>
          <div className="text-sm md:text-2xl text-gray-600 georgia w-[20em]">
            Jalan Raya Jatinangor, Km. 20 Bandung 45363 West Java - Indonesia
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailEvent;
