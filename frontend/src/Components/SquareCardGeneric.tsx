import Link from "next/link";
import React from "react";
import ModalImage from "react-modal-image";

function SquareCardGeneric({ caption, imageURL, link}: { caption: string; imageURL: string; link: string; }) {

    const imageStyle = {
        width: "100%",
        height: "160px",
        borderRadius: "8px",
    }
        
    return (
        <div className="hover-effect card_background p-2.5 gap-y-1 flex flex-col w-[180px] h-auto rounded-md text-white">
        {link === "" ? (
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
                {caption && (
                    <h2 className="SpotifyLightFont text-sm brightness-75">
                    {caption}
                    </h2>
                )}
            </div>
        ) : (
            <Link href={link}>
                <img
                    className="w-[100%] h-[160px] rounded-md"
                    src={imageURL}
                    alt=""
                />
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
