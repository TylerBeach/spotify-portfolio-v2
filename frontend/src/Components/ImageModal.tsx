import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';

function ImageModal({ imageURL, caption }: { imageURL: string, caption: string }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="hover-effect card_background p-2.5 gap-y-1 flex flex-col w-[180px] h-auto rounded-md text-white">
        <div className='flex flex-col gap-y-1'>
          <Image
            className="w-[160px] h-[160px] rounded-md cursor-pointer"
            width={160}
            height={160}
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
            className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center"
          >
            {/* Blur for the background */}
            <div onClick={() => setShowModal(false)} className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-[2000]"></div>

            {/* Pop Up Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, y: 150, scale: 0.6 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { delay: 0.2 } },
              }}
              className="relative w-fit md:w-fit max-w-[90%] card_background z-[3000] rounded-md p-4"
            >
              {/* Exit Button */}
              <Image alt='X' src="/images/X.png" onClick={() => setShowModal(false)} className="filter-button absolute top-5 right-5 p-1.5 z-50 w-6 h-6 bg-red-700 rounded-xl cursor-pointer"
              width={24}
              height={24} />

              {/* Content */}
              <div className="flex flex-col gap-y-2">
                <img src={imageURL} className="max-h-[80vh] max-w-full object-contain rounded-md" alt="Title" 
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ImageModal;
