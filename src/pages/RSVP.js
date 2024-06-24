import UseScrollVisible from "./trasitions/UseScrollVisible";

function RSVP() {
  const elementId = "rsvp-section";
  const isVisible = UseScrollVisible(elementId);

  return (
    <div
      id={elementId}
      className="relative flex flex-col items-center min-h-screen px-4"
    >
      <div
        className={`text-6xl md:text-8xl tracking-wide butler mt-5 mb-8 ${
          isVisible ? "slide-up active" : "  slide-up"
        }`}
        style={{ letterSpacing: 1 }}
      >
        RSVP
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-24 w-full max-w-4xl">
        <div
          className={`flex flex-col md:w-2/4 items-center justify-center ${
            isVisible ? "slide-in active" : "  slide-in"
          }`}
        >
          <div className="md:w-5/6 w-3/4 flex flex-col">
            <div
              className="text-sm md:text-lg text-gray-600 max-w-[25rem] georgia mb-3"
              style={{ letterSpacing: 0.5 }}
            >
              Dimohon untuk mengisi konfirmasi kehadiran dibawah ini
            </div>
            <div className="mb-3 w-full">
              <input
                type="text"
                className="border rounded-lg md:py-2 px-4 py-1 georgia border-gray-600 w-full"
                placeholder="Nama"
              />
            </div>
            <div className="mb-3 w-full">
              <textarea
                className="border rounded-lg md:py-20 py-5 px-4 georgia border-gray-600 w-full"
                placeholder="Ucapan dan Do'a"
              />
            </div>
            <div className="mb-3 w-full">
              <select className="select border rounded-lg md:py-2 py-1 px-4 georgia border-gray-600 w-full">
                <option defaultValue selected>
                  Konfirmasi Kehadiran
                </option>
              </select>
            </div>
          </div>
          <div className="relative flex justify-center items-center md:mt-4">
            <div className="crop-maps">
              <img
                src="https://res.cloudinary.com/dpcgiupja/image/upload/v1719150853/invaite/button.png"
                alt=""
                className="crop-img"
              />
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-3 flex items-center justify-center md:text-2xl text-lg butler text-[#F9EFE3] cursor-pointer">
              KIRIM
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col items-start bg-[#F6E3D2] p-4 md:w-2/4 ${
            isVisible ? "slide-out active" : "  slide-out"
          }`}
        >
          <div className="md:pl-2 w-full">
            <div className="flex flex-row items-start md:items-center gap-4 mb-2">
              <div
                className="text-sm md:text-lg font-semibold georgia"
                style={{ letterSpacing: 0.5 }}
              >
                Tamu 1
              </div>
              <div className="text-xs md:text-sm roboto bg-[#F9EFE4] text-[#E18648] rounded-lg py-1 px-3">
                Hadir
              </div>
            </div>
            <div
              className="text-xs md:text-lg text-gray-600 w-full georgia mb-3"
              style={{ letterSpacing: 0.5 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              rutrum nunc libero, eu ornare velit dignissim sit amet.
            </div>
            <hr className="w-full border-gray-600 border-[1.5px] mb-3" />
            <div className="w-full">
              <div className="flex flex-row items-start md:items-center gap-4 mb-2">
                <div
                  className="text-sm md:text-lg font-semibold georgia"
                  style={{ letterSpacing: 0.5 }}
                >
                  Tamu 2
                </div>
                <div className="text-xs md:text-sm roboto bg-[#F9EFE4] text-[#E18648] rounded-lg py-1 px-3">
                  Hadir
                </div>
              </div>
              <div
                className="text-xs md:text-lg text-gray-600 w-full georgia mb-3"
                style={{ letterSpacing: 0.5 }}
              >
                Etiam vitae metus ac eros convallis iaculis quis at magna.
              </div>
              <hr className="w-full border-gray-600 border-[1.5px] mb-3" />
              <div className=" w-full">
                <div className="flex flex-row items-start md:items-center gap-4 mb-2">
                  <div
                    className="text-sm md:text-lg font-semibold georgia"
                    style={{ letterSpacing: 0.5 }}
                  >
                    Tamu 3
                  </div>
                  <div className="text-xs md:text-sm roboto bg-[#F9EFE4] text-[#E18648] rounded-lg py-1 px-3">
                    Tidak Hadir
                  </div>
                </div>
                <div
                  className="text-xs md:text-lg text-gray-600 w-full georgia mb-3"
                  style={{ letterSpacing: 0.5 }}
                >
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Proin porttitor iaculis
                  nibh sit amet viverra.
                </div>
                <div
                  className="text-xs md:text-lg georgia"
                  style={{ letterSpacing: 0.5 }}
                >
                  &lt;Sebelumnya <strong>1</strong> 2 3 4 5{" "}
                  <strong>Selanjutnya&gt;</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RSVP;
