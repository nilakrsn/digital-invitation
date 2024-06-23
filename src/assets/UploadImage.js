import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen/index";

function UploadImage(publicId) {
    const cld = new Cloudinary({ cloud: { cloudName: "dpcgiupja" } });

    const img = cld.image(publicId).format("auto").quality("auto");

    return <AdvancedImage cldImg={img} />;
}

export default UploadImage;
