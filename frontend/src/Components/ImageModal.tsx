import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

function ImageModal({imageURL, caption}:{imageURL:string, caption:string}) {
    const [showModal, setShowModal] = useState(false);
  
    return (
    <div>
        <div className="hover-effect card_background p-2.5 gap-y-1 flex flex-col w-[180px] h-auto rounded-md text-white">
            <div className='flex flex-col gap-y-1'>
                <img
                    className="w-[100%] h-[160px] rounded-md"
                    src={imageURL}
                    alt=""
                    onClick={() => setShowModal(true)}
                />
                {caption && (
                    <p className="SpotifyLightFont text-sm brightness-75">
                    {caption}
                    </p>
                )}
            </div>
        </div>
        
        <AnimatePresence>

        {showModal && (
            <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { delay: 0.1 } },
            }}
            className="w-[100vw] h-[100vh] z-50 fixed"
            >
            {/* Blur for the background */}
            <div onClick={()=>{setShowModal(false)}}className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>
  
              {/* Pop Up Content Here */}
              <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                      hidden: { opacity: 0, y: 150, scale: 0.6 },
                      visible: { opacity: 1, y: 0, scale: 1, transition: { delay: 0.2 } },
                    }}
                    className="fixed top-0 left-0 right-0 bottom-0 w-[50%] h-fit min-w-[90%] md:min-w-[550px] m-auto card_background z-30 rounded-md p-4"
                    >
  
                  {/* Exit Button for the Pop Up  */}
                  <img src="/images/X.png" onClick={() => { setShowModal(false); }} className="filter-button absolute top-5 right-5 p-1.5 z-50 w-6 h-6 bg-red-700 rounded-xl"/>
  
                  {/* Actual Content Here */}
                  {/* <h2 className="text-white z-30">Showing pop up</h2> */}
                  <div className="flex flex-col gap-y-2">
                    <img src={imageURL} className="rounded-md object-cover z-30" alt="Title"/>
                  </div>
  
  
              </motion.div>
          </motion.div>
        )}
        </AnimatePresence>
    </div>
  )
}
 export default ImageModal;