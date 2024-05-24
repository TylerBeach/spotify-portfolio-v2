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
    <main className="flex flex-row gap-x-2 bg-black max-w-[100vw] pb-[90px] min-h-[100vh] max-h-[100vh] md:pl-2 overflow-hidden">
      {/* Navbar Container */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0, transition: { delay: 1 } },
        }}
        className="hidden md:flex w-[300px] md:max-w-[300px] md:min-w-[300px] mt-2"
      >
        <Navbar />
      </motion.div>

      <motion.div
        className="relative mt-0 md:mt-2 h-fit height-minus-musicPlayer w-full  overflow-y-scroll"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0, transition: { delay: 1 } },
        }}
      >
        <div className="flex flex-col h-fit w-full pt-0 card_background rounded-md  height-minus-musicPlayer-full overflow-x-hidden">
          <TopNavButtons imageURL="/images/Resume.png" title="Resume" />
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
    </main>
  )
}

export default resume