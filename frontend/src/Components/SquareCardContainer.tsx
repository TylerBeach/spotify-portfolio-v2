import React from "react";
import ProjectData from "../data.json";
import Link from "next/link";
import { motion } from "framer-motion";
import SquareCardGeneric from "./SquareCardGeneric";

function SquareCardContainer() {
  return (
    <div>
      <h1 className="text-white text-4xl my-3">Projects</h1>
      <div className="flex flex-row flex-wrap gap-x-6 w-[100%] h-min overflow-y-hidden">
        {ProjectData.projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: 1.5 + index * 0.1 },
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
