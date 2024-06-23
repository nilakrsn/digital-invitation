import "../App.css";

function Cover() {
    return (
        <div className="relative flex flex-col items-center md:min-h-screen md:mt-9">
            <div className="right-flower"></div>
            <div className="img-rounded">
                <img src="https://res.cloudinary.com/dpcgiupja/image/upload/v1719150856/invaite/assets_3.png" alt="" className="crop-img-rounded" />
            </div>
            <div className=" mt-2 md:mt-5 text-center">
                <div className="text-md md:text-xl tracking-widest text-gray-600 georgia">
                    JATINANGOR NATIONAL GOLF
                </div>
                <div className="mt-5 md:mt-8">
                    <div className="text-sm md:text-xl tracking-widest text-gray-600 georgia">
                        #sharERmomentwithLAN
                    </div>
                    <div className="flex flex-row justify-center items-center gap-6 mt-2">
                        <div className="text-3xl md:text-5xl tracking-wide butler-regular">
                            02
                        </div>
                        <div className="w-0.5 h-9 bg-gray-300 inline-block"></div>
                        <div className="text-3xl md:text-5xl tracking-wide butler-regular">
                            06
                        </div>
                        <div className="w-0.5 h-9 bg-gray-300 inline-block"></div>
                        <div className="text-3xl md:text-5xl tracking-wide butler-regular">
                            24
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cover;
