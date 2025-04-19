import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import {  why_to_choose} from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, description }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[000001C*] rounded-[20px] py-0 px-4 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
        <p className="  "
        >{description}</p>
        

      </div>
    </motion.div>
  </Tilt>
);

const Whytochoose = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
       
        <h2 className={styles.sectionHeadText}>Why Choose <span className="text-[#915EFF] translate-x-1 ease-in"> thalautiya?</span></h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-white text-[17px] max-w-3xl leading-[30px]'
      >
       We offer a comprehensive learning experience with features designed to help you succeed.


      </motion.p>

      <div className='mt-16 p-0 text-20px flex flex-wrap gap-10'>
        {why_to_choose.map((why_to_choose, index) => (
          <ServiceCard key={why_to_choose.title} index={index} {...why_to_choose} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Whytochoose, "about");
