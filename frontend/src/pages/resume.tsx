import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/Components/Navbar'
import TopNavButtons from '@/Components/TopNavButtons'
import MusicPlayer from '@/Components/MusicPlayer'
import ResumeDisplay from '@/Components/ResumeDisplay'
import PDFViewer from '@/Components/ResumeDisplay'
import GeneralPageHeader from '@/Components/GeneralPageHeader'

function resume() {
  return (
    <main className="flex flex-col justify-between bg-black max-h-[100vh] h-[100vh]  w-[100%] max-w-[100%] md:pt-2 md:pl-2 overflow-x-hidden">
            <div className="flex flex-row w-full z-10 overflow-x-hidden scroll-hidden gap-x-2 md:pr-0 rounded-md">

      {/* Navbar Container */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0, transition: { delay: 0.5 } },
        }}
        className="hidden md:flex w-[300px] md:max-w-[300px] md:min-w-[300px] mt-2"
      >
        <Navbar />
      </motion.div>

      {/* Page Content Container */}
      <motion.div
        className="h-fit bg-black w-full overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0, transition: { delay: 0.5 } },
        }}
        >
          <div 
          className="flex flex-col h-fit w-full pb-8 gap-y-2 card_background rounded-lg height-minus-musicPlayer overflow-y-scroll">          <TopNavButtons imageURL="/images/Resume.png" title="Resume" />
          <GeneralPageHeader title="Resume" subHeading="Tyler Beach Resume" imageURL="/images/Resume.png" />
          {/* Content here  */}
          <div className='w-full content-center h-fit mt-[-140px] pb-16 flex flex-col gap-y-2'>
            <a href="/TylerBeachResume.pdf" download={true} className='mx-auto w-fit'>
              <h2 className='text-white w-fit text-2xl hover:underline'>Download Resume</h2>
            </a>
            <ResumeDisplay pdfUrl='/TylerBeachResume.pdf'  />
          </div>
        </div>
      </motion.div>
      <MusicPlayer />
      </div>
    </main>
  )
}

export default resume