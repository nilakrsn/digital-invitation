import "../App.css";

function RSVP() {
  return (
    <div className="relative flex flex-col items-center min-h-screen md:pt-6 px-4 py-2 md:px-0">
      <div className="text-6xl md:text-8xl tracking-wide butler md:mt-5 md:mb-5" style={{ letterSpacing: 1 }}>
        RSVP
      </div>
      <div className="flex flex-col md:flex-row justify-center w-full">
        <div className="flex flex-col items-center justify-center px-4 md:px-12 py-6 w-full md:w-auto">
          <div className="text-sm md:text-lg text-gray-600 w-full max-w-[25rem] georgia mb-3" style={{ letterSpacing: 0.5 }}>
            Dimohon untuk mengisi konfirmasi kehadiran dibawah ini
          </div>
          <div className="mb-3 w-full max-w-[25rem]">
            <input type="text" className="border rounded-lg py-2 px-4 georgia border-gray-600 w-full" placeholder="Nama" />
          </div>
          <div className="mb-3 w-full max-w-[25rem]">
            <textarea className="border rounded-lg py-20 px-4 georgia border-gray-600 w-full" placeholder="Ucapan dan Do'a" />
          </div>
          <div className="mb-3 w-full max-w-[25rem]">
            <select className="select border rounded-lg py-2 px-4 georgia border-gray-600 w-full">
              <option defaultValue selected>
                Konfirmasi Kehadiran
              </option>
            </select>
          </div>
          <div className="relative flex justify-center w-full max-w-[25rem]">
            <div className="crop-maps">
              <img src="https://res.cloudinary.com/dpcgiupja/image/upload/v1719150853/invaite/button.png" alt="" className="crop-img" />
            </div>
            <div className="absolute top-0 left-0 right-0 md:bottom-3 bottom-0 flex items-center justify-center md:text-xl text-base butler text-[#F9EFE3]">
              KIRIM
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start bg-[#F6E3D2] px-6 md:px-10 py-5 mb-8 w-full md:w-auto">
          <div className="pl-2 w-full">
            <div className="flex flex-row items-start md:items-center gap-4 mb-2">
              <div className="text-sm md:text-lg font-semibold georgia" style={{ letterSpacing: 0.5 }}>
                Tamu 1
              </div>
              <div className="text-xs md:text-sm roboto bg-[#F9EFE4] text-[#E18648] rounded-lg py-1 px-3">
                Hadir
              </div>
            </div>
            <div className="text-xs md:text-lg text-gray-600 w-full md:w-[24rem] georgia mb-3" style={{ letterSpacing: 0.5 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum nunc libero, eu ornare velit dignissim sit amet.
            </div>
          </div>
          <hr className="w-full border-gray-600 border-[1.5px] mb-3" />
          <div className="pl-2 w-full">
            <div className="flex flex-row items-start md:items-center gap-4 mb-2">
              <div className="text-sm md:text-lg font-semibold georgia" style={{ letterSpacing: 0.5 }}>
                Tamu 2
              </div>
              <div className="text-xs md:text-sm roboto bg-[#F9EFE4] text-[#E18648] rounded-lg py-1 px-3">
                Hadir
              </div>
            </div>
            <div className="text-xs md:text-lg text-gray-600 w-full md:w-[24rem] georgia mb-3" style={{ letterSpacing: 0.5 }}>
              Etiam vitae metus ac eros convallis iaculis quis at magna.
            </div>
          </div>
          <hr className="w-full border-gray-600 border-[1.5px] mb-3" />
          <div className="pl-2 w-full">
            <div className="flex flex-row items-start md:items-center gap-4 mb-2">
              <div className="text-sm md:text-lg font-semibold georgia" style={{ letterSpacing: 0.5 }}>
                Tamu 3
              </div>
              <div className="text-xs md:text-sm roboto bg-[#F9EFE4] text-[#E18648] rounded-lg py-1 px-3">
                Tidak Hadir
              </div>
            </div>
            <div className="text-xs md:text-lg text-gray-600 w-full md:w-[24rem] georgia mb-3" style={{ letterSpacing: 0.5 }}>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin porttitor iaculis nibh sit amet viverra.
            </div>
          </div>
          <div className="text-xs md:text-lg georgia" style={{ letterSpacing: 0.5 }}>
            &lt;Sebelumnya <strong>1</strong> 2 3 4 5 <strong>Selanjutnya&gt;</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RSVP;
