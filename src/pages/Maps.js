import "../App.css";
function Maps() {
    return (
        <div className="relative flex flex-col items-center md:min-h-screen justify-center md:pb-10 pt-24">
             <div className="maps-right-flower" />
             <div className="maps-left-flower" />
            <div className="maps-rounded rounded-3xl border shadow-lg">
                <img src="https://res.cloudinary.com/dpcgiupja/image/upload/v1719150855/invaite/maps.png" alt="" className="crop-maps-rounded" />
            </div>
            <div className="relative flex justify-center md:p-8 p-2">
                <div className="crop-maps">
                    <img src="https://res.cloudinary.com/dpcgiupja/image/upload/v1719150853/invaite/button.png" alt="" className="crop-img" />
                </div>
                <div className="absolute top-0 left-0 right-0 bottom-3 flex items-center justify-center md:text-xl text-base butler text-[#F9EFE3]">
                    GO TO MAPS
                </div>
            </div>
            <div className="flex flex-row gap-2">
                <div className="text-sm md:text-2xl tracking-widest georgia">
                    LIVE STREAMING :
                </div>
                <div className="text-sm md:text-2xl georgia">
                    Instagram Live
                </div>
            </div>
            <div className="relative flex justify-center">
                <div className="crop-live">
                    <img src="https://res.cloudinary.com/dpcgiupja/image/upload/v1719150853/invaite/live.png" alt="" className="crop-img" />
                </div>
                <div className="absolute top-0 left-10 right-0 bottom-3 flex items-center justify-center md:text-xl butler-regular ">
                    JOIN LIVE HERE
                </div>
            </div>
        </div>
    );
}

export default Maps;
