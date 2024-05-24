import Link from "next/link";
import React from "react";
import ModalImage from "react-modal-image";

function SquareCardGeneric({title, caption, imageURL, link, modalEnabled}: { title: string; caption: string; imageURL: string; link: string; modalEnabled: boolean;}) {

    const imageStyle = {
        width: "100%",
        height: "160px",
        borderRadius: "8px",
    }
        
    return (
        <div className="hover-effect card_background p-2.5 gap-y-1 flex flex-col xs:w-full min-w-[140px] md:w-[180px] h-[288px] rounded-md text-white">
        {modalEnabled ? (
            <div>
                <ModalImage
                    className="w-[100%] h-[160px] rounded-md"
                    small={imageURL}
                    medium={imageURL}
                    large={imageURL}
                    alt=""
                    hideDownload={true}
                    hideZoom={true}
                />
                 {title && (
                    <h1 className="text-xl SpotifyLightFont font-semibold">
                    {title}
                    </h1>
                )}
                {caption && (
                    <p className="SpotifyLightFont text-sm brightness-75">
                    {caption}
                    </p>
                )}
            </div>
        ) : (
            <Link href={link}>
                <img
                    className="w-[100%] h-[160px] rounded-md"
                    src={imageURL}
                    alt=""
                />
                {title && (
                    <h1 className="pt-1 text-xl SpotifyLightFont font-semibold">
                    {title}
                    </h1>
                )}
                {caption && (
                    <h2 className="SpotifyLightFont text-sm brightness-75">
                    {caption}
                    </h2>
                )}
            </Link>
            )}
        </div>
    
    );
}

export default SquareCardGeneric;
