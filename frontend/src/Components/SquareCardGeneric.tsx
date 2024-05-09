import React from 'react'
import ModalImage from "react-modal-image";

function SquareCardGeneric({ caption, imageURL, link}: {caption: string, imageURL: string, link: string}) {
  return (
    <div>
        <h2>{caption}</h2>   
        <ModalImage small={imageURL} medium={imageURL} large={imageURL} alt=""/>     

    </div>
  )
}

export default SquareCardGeneric