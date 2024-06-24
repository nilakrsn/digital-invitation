import "../App.css";
import UseScrollVisible from "./trasitions/UseScrollVisible";

function Maps() {
  const elementId = "maps-section";
  const isVisible = UseScrollVisible(elementId);

  return (
    <div
      id={elementId}
      className={`relative flex flex-col items-center md:min-h-screen justify-center md:pb-10 pt-24 ${
        isVisible ? "slide-down-cover active" : "  slide-down-cover"
      }`}
    >
      <div className="maps-right-flower" />
      <div className="maps-left-flower" />
      <div className="maps-rounded shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.821321521362!2d107.76025407410656!3d-6.911956167645914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68dca7e220f475%3A0xb46c9cf59f07a456!2sJatinangor%20National%20Golf%20%26%20Resort!5e0!3m2!1sid!2sid!4v1719216499602!5m2!1sid!2sid"
          width="500"
          height="300"
          style={{ border: "0", borderRadius: "25" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>
      <div className="relative flex justify-center md:p-3 p-2">
        <div className="crop-maps">
          <img
            src="https://res.cloudinary.com/dpcgiupja/image/upload/v1719150853/invaite/button.png"
            alt=""
            className="crop-img"
          />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-3 flex items-center justify-center md:text-xl text-base butler text-[#F9EFE3]">
          <a href="https://maps.app.goo.gl/gdaR98WPyb3FLX4j9">GO TO MAPS</a>
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="text-sm md:text-2xl tracking-widest georgia">
          LIVE STREAMING :
        </div>
        <div className="text-sm md:text-2xl georgia">Instagram Live</div>
      </div>
      <div className="relative flex justify-center">
        <div className="crop-live">
          <img
            src="https://res.cloudinary.com/dpcgiupja/image/upload/v1719150853/invaite/live.png"
            alt=""
            className="crop-img"
          />
        </div>
        <div className="absolute top-0 left-10 right-0 bottom-3 flex items-center justify-center md:text-lg butler-regular ">
          JOIN LIVE HERE
        </div>
      </div>
    </div>
  );
}

export default Maps;
