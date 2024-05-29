import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HomePageWideCard({imageURL, title, link} : {imageURL: string, title: string, link: string}) {
  return (
    <div>
       
          <motion.div
            className="w-full"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 1.3 },
              },
            }}
          >
            <Link
              className="project_box card_background_light flex flex-row rounded-md h-20 w-[100%] lg:w-[100%] lg:max-w-[100%] xl:w-[100%]"
              href={`/${link}`}
              passHref
            >
              <Image
                width={80}
                height={80}
                className="rounded-md rounded-tr-none rounded-br-none w-[80px] h-[80px] min-w-[80px] object-cover "
                src={imageURL}
                alt={title}
              />
              <h1 className="text-white text-2xl my-auto ml-3">
                {title}
              </h1>
              {/* <h3 className='text-white'>{project.cardDescription}</h3> */}
            </Link>
          </motion.div>
      </div>
  );
}
