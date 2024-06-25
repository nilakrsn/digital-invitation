import { useState } from "react";
import "../App.css";

function PopUp({ trigger, setTrigger }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setTrigger(false);
    }, 300);
  };

  if (!trigger && !isClosing) {
    return null;
  }

  return (
    <div className={`popup-container ${isClosing ? "fade-out" : ""}`}>
      <div className={`popup-content ${isClosing ? "fade-out" : ""}`}>
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
        <div className="relative flex flex-col items-center justify-end p-7">
          <div className="text-center">
            <div className="text-base md:text-xl tracking-widest text-gray-600 georgia">
              THE WEDDING OF
            </div>
            <div
              className="text-6xl md:text-8xl tracking-wide butler mt-5"
              style={{ letterSpacing: 1 }}
            >
              ERICK
            </div>
            <div className="text-4xl md:text-6xl snellRoundHand tracking-wider">
              and
            </div>
            <div
              className="text-6xl md:text-8xl tracking-wide butler"
              style={{ letterSpacing: -1 }}
            >
              WULAN
            </div>
            <div className="mt-10 md:mt-14">
              <div
                className="text-base md:text-xl tracking-widest text-gray-600 georgia"
                style={{ letterSpacing: -0.1 }}
              >
                INVITATION TO FOLLOW
              </div>
              <div className="flex items-baseline justify-center">
                <div className="text-2xl md:text-3xl snellRoundHand tracking-wider text-gray-600">
                  dear,
                </div>
                <hr className="ml-1 w-1/6 border-gray-600" />
              </div>
              <div className="relative flex justify-center mt-1">
                <div className="crop">
                  <img
                    src="https://res.cloudinary.com/dpcgiupja/image/upload/v1719150851/invaite/button_2.png"
                    alt=""
                    className="crop-img"
                  />
                </div>
                <button
                  onClick={handleClose}
                  className="absolute top-0 left-7 right-0 md:bottom-3 bottom-2 flex items-center justify-center text-base md:text-xl butler text-[#F9EFE3]"
                >
                  OPEN INVITATION
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
