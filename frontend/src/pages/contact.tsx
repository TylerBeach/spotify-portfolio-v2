import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from 'emailjs-com';
import Navbar from "@/Components/Navbar";
import TopNavButtons from "@/Components/TopNavButtons";
import MusicPlayer from "@/Components/MusicPlayer";
import GeneralPageHeader from "@/Components/GeneralPageHeader";

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
    <main className="flex flex-row gap-x-2 bg-black max-w-[100vw] pb-[90px] max-h-[100vh] md:pl-2 overflow-hidden scroll-hidden">
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
        className="relative mt-0 md:mt-2 h-fit height-minus-musicPlayer w-full scroll-hidden"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0, transition: { delay: 1 } },
        }}
      >
       <div className="flex flex-col h-fit w-full pt-0 card_background rounded-md height-minus-musicPlayer overflow-x-hidden scroll-hidden">
          <TopNavButtons bannerColor="18, 18, 18" title="Contact Me" />
          <GeneralPageHeader title="Contact Me" subHeading="Send me an email!" imageURL="/images/ContactMe.png" />
          <div className="mt-[-170px] flex flex-col pb-[50px]">

            {/* EmailJS Form */}
            <div className="flex flex-row flex-wrap">
            <form
              className="flex flex-col w-full min-w-[300px] lg:w-[50%] lg:min-w-[700px] h-auto p-4 gap-y-2"
              onSubmit={sendEmail}
              autoComplete="off"
            >
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
                className="text-white text-2xl font-SpotifyRegular bg-black w-full min-h-[200px] h-[250px] p-2 rounded-md"
                placeholder="Message"
                required
              />
              <button type="submit" className="text-white text-2xl font-SpotifyRegular bg-black w-[25%] min-w-[150px] p-2 rounded-md">Send</button>
              {isSent && <p className="text-green-500 mt-2">Message sent successfully!</p>}
            </form>
            <h2 className="text-white text-4xl SpotifyLightFont font-SpotifyBold min-w-[100px] w-[500px] pt-4 pl-4">Send me an email directly at <a href="mailto:tabeach@ualberta.ca" className="text-blue-500 hover:underline"> tabeach@ualberta.ca </a></h2>
            </div>
          </div>
        </div>
      </motion.div>
      
      <MusicPlayer />
    </main>
  );
}

export default About;