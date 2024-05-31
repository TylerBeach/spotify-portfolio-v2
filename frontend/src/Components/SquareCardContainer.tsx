import React from "react";
import ProjectData from "../data.json";
import Link from "next/link";
import { motion } from "framer-motion";
import SquareCardGeneric from "./SquareCardGeneric";

function SquareCardContainer() {
  return (
    <div>
      <div className='flex flex-row pr-1 w-full justify-between'>
        <h1 className='text-white text-4xl font-SpotifyBold'>Projects</h1>
        <Link href="/projects">
          <h3 className="text-white text-lg SpotifyLightFont"> Show all </h3>
        </Link>
      </div>
      <div className="flex flex-row flex-wrap gap-x-6 w-[100%] h-min max-h-[308px] overflow-y-hidden">
        {ProjectData.projects.map((project, index) => (
          <motion.div
          className="flex-1 sm:flex-none"
            key={project.id}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 0.6 + index * 0.1 },
              },
            }}
          >
              <SquareCardGeneric title={project.title} caption={project.cardDescription} imageURL={project.imageURL} link={`/projects/${project.id}`} modalEnabled={false}/>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SquareCardContainer;
