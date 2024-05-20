import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PersonalPopUp({title, paragraphContent, index}:{title: string, paragraphContent: string, index: number}) {
    
  
  
  
    const [showPopUp, setShowPopUp] = useState(false);

  return (
    <div className="max-h-[43px] overflow-hidden">
        <div onClick={() => { setShowPopUp(true); }} className='hover-effect2 flex flex-row rounded-md w-full h-max min-w-[350px] max-w-[600px] gap-x-2 pl-2 md:pl-6 items-center SpotifyLightFont'>
                            <h2 className='text-gray-400 w-2'>{index+1}</h2>
                            <img className='rounded-md w-[35px] h-[35px] object-contain m-1 ' src={"https://placehold.co/400"} alt="Title"/>
                            <h1 className='text-white text-xl SpotifyLightFont'>{title}</h1>
                        </div>

    <AnimatePresence>
      {showPopUp && (

        // Pop Up Container 
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
          <div onClick={()=>{setShowPopUp(false)}}className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>

            {/* Pop Up Content Here */}
            <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                hidden: { opacity: 0, y: 150, scale: 0.6 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { delay: 0.2 } },
                }}
                className="fixed top-0 left-0 right-0 bottom-0 w-[50%] h-[70%] m-auto card_background z-30 rounded-md p-4"
            >

                {/* Exit Button for the Pop Up  */}
                <img src="/images/X.png" onClick={() => { setShowPopUp(false); }} className="filter-button absolute top-4 right-4 p-1.5 z-50 w-6 h-6 bg-red-700 rounded-xl"/>

                {/* Actual Content Here */}
                {/* <h2 className="text-white z-30">Showing pop up</h2> */}
                <h1 className="text-white z-30">{title}</h1>
                <p className="text-white z-30 SpotifyLightFont">{paragraphContent}</p>


            </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
  );
}
