import React from "react";
import "../App.css";
import UseScrollVisible from "./trasitions/UseScrollVisible";

function EventPage() {
  const elementId = "event-section";
  const isVisible = UseScrollVisible(elementId);

  return (
    <div
      id={elementId}
      className="relative flex flex-col items-center justify-center md:min-h-screen md:py-16 "
    >
      <div className="center-bg"></div>
      <div className={`${isVisible ? "slide-in active" : "slide-in"}`}>
        <div className="text-content text-center ">
          <div className="text-sm md:text-2xl text-gray-600 georgia pb-4 font-bold">
            بِسْــــــــــــــــــمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </div>
          <div className="text-sm md:text-lg tracking-widest text-gray-600 georgia md:pb-5">
            Assalamu'alaikum warahmatullahi wabarakatuh
          </div>
          <div
            className="text-base md:text-2xl text-gray-600 georgia w-4/5 md:w-2/3 mx-auto md:pb-12 pb-6 pt-5"
            style={{ letterSpacing: 0.5 }}
          >
            Dengan Rahmat dan Ridho Allah SWT, kami akan menyelenggarakan
            pernikahan putra - putri kami:
          </div>
          <div className="flex flex-col items-center">
            <div
              className="text-6xl md:text-8xl tracking-wide butler mb-2"
              style={{ letterSpacing: 1 }}
            >
              ERICK
            </div>
            <div className="text-2xl md:text-5xl tracking-wide snellRoundHand text-[#9C7951] mb-1">
              Bripda Erick Tri Suparyono
            </div>
            <div className="text-sm md:text-2xl text-gray-600 georgia w-3/4">
              Putra dari Alm. Akp. Suparyono S.H dan Hj. Rumilaeli S. Pd
            </div>
          </div>
          <div className="text-4xl md:text-6xl snellRoundHand tracking-wider md:p-10 p-2">
            and
          </div>
          <div className="flex flex-col items-center">
            <div
              className="text-6xl md:text-8xl tracking-wide butler"
              style={{ letterSpacing: 1 }}
            >
              WULAN
            </div>
            <div className="text-2xl md:text-5xl tracking-wide snellRoundHand text-[#9C7951]">
              Wulandari S.M
            </div>
            <div className="text-sm md:text-2xl text-gray-600 georgia mt-2">
              Alm. H Saripudin dan Hj Yayah
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-right-flower" />
      <div className="bottom-left-flower" />
    </div>
  );
}

export default EventPage;
