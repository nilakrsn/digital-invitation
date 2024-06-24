import React from "react";
import "../App.css";
import UseScrollVisible from "./trasitions/UseScrollVisible";

function Gift() {
  const elementId = "gift-section";
  const isVisible = UseScrollVisible(elementId);

  return (
    <div
      id={elementId}
      className="relative flex flex-col items-center md:h-[85vh] h-[55vh]"
    >
      <div className="gift-flower" />
      <div className="center-rounded"></div>
      <div className="text-center text-gift flex flex-col">
        <div
          className={`flex flex-col items-center ${
            isVisible ? "slide-in active" : "  slide-in"
          }`}
        >
          <div
            className="text-6xl md:text-8xl tracking-wide butler mb-2"
            style={{ letterSpacing: 1 }}
          >
            HADIAH
          </div>
          <div className="text-sm md:text-xl georgia max-w-[20em]">
            Hadiah dan ucapan terima kasih dari Anda bisa dikirimkan melalui
            salah satu rekening di bawah ini. Doa dan restu Anda merupakan
            karunia terbesar dalam pernikahan kami.
          </div>
          <div className="gap-2 flex flex-col items-center justify-center md:mt-12 md:ml-16 ml-10 mt-5">
            <div className="flex flex-row md:gap-6 ">
              <div className="flex flex-col items-start">
                <div className="text-sm md:text-xl font-semibold georgia">
                  Bank 1
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <div className="text-sm md:text-xl roboto">0123456789</div>
                  <img
                    src="https://res.cloudinary.com/dpcgiupja/image/upload/v1719150843/invaite/copy.png"
                    alt=""
                    style={{
                      width: "18px",
                      height: "auto",
                    }}
                  />
                </div>
                <div className="text-sm md:text-xl w-2/3  text-left georgia">
                  A/N Nama Rekening
                </div>
              </div>
              <div className="w-0.5 bg-gray-300 inline-block"></div>
              <div className="flex flex-col items-start ml-10">
                <div className="text-sm md:text-xl font-semibold georgia">
                  Bank 2
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <div className="text-sm md:text-xl roboto">0123456789</div>
                  <img
                    src="https://res.cloudinary.com/dpcgiupja/image/upload/v1719150843/invaite/copy.png"
                    style={{
                      width: "18px",
                      height: "auto",
                    }}
                  />
                </div>
                <div className="text-sm md:text-xl w-2/3 georgia text-left">
                  A/N Nama Rekening
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gift;
