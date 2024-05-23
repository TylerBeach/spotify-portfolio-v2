import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';
import Navbar from "@/Components/Navbar";
import TopNavButtons from "@/Components/TopNavButtons";
import MusicPlayer from "@/Components/MusicPlayer";


function About() {
    const [isSent, setIsSent] = useState(false);
    const emailJsUserID = process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID;


    if (!emailJsUserID) {
        console.error('The EMAIL_JS_USER_ID environment variable is not set in your .env.local file');
    }
  
  // send form through EmailJS
  const sendEmail = (e:any) => {
    e.preventDefault();

    if (!isSent) {
    emailjs
      .sendForm(
        'default_service',
        'template_qj5m35r',
        e.target,
        emailJsUserID
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSent(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
    }
  };

  return (
    <main className="flex flex-row gap-x-2 bg-black max-w-[100vw] pb-[90px] max-h-[100vh] md:pl-2 overflow-hidden">
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
    
      {/* Page Content Container */}
      <motion.div
        className="relative mt-0 md:mt-2 h-fit height-minus-musicPlayer w-full overflow-y-scroll"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0, transition: { delay: 1 } },
        }}
      >
        <div className="flex flex-col h-full w-full pt-0 card_background rounded-md  overflow-x-hidden">
          <TopNavButtons bannerColor="18, 18, 18" project={null} />
          <div className="pt-[100px] flex flex-col justify-center content-center">

            {/* EmailJS Form */}
            <form
              className="flex flex-col w-full mx-auto md:w-[50%] min-w-[400px] h-auto p-4 gap-y-2 justify-center"
              onSubmit={sendEmail}
              autoComplete="off"
            >
              <h2 className="text-white text-4xl font-SpotifyBold">Contact Me</h2>
              <input
                type="text"
                name="name"
                autoComplete="off"
                className="text-white text-2xl font-SpotifyRegular bg-black w-full p-2 rounded-md"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="from_name"
                autoComplete="off"
                className="text-white text-2xl font-SpotifyRegular bg-black w-full p-2 rounded-md"
                placeholder="Email"
                required
              />
              <textarea
                name="message"
                autoComplete="off"
                className="text-white text-2xl font-SpotifyRegular bg-black w-full min-h-[200px] h-[300px] p-2 rounded-md"
                placeholder="Message"
                required
              />
              <button type="submit" className="text-white text-2xl font-SpotifyRegular bg-black w-[25%] min-w-[150px] p-2 rounded-md">Send</button>
              {isSent && <p className="text-green-500 mt-2">Message sent successfully!</p>}
            </form>
          </div>
        </div>
      </motion.div>
      
      <MusicPlayer />
    </main>
  );
}

export default About;