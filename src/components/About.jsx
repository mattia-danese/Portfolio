import React from 'react'
import Tilt from "react-parallax-tilt";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

const ServiceCard = ( {index, title, icon} ) => {
    return(
        <Tilt className='xs:w-[250px] w-full'>
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75, 100)}
                className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
            >
                <div
                    options={{
                        max: 45, 
                        scale: 1, 
                        speed: 450
                    }}
                    className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
                >
                    <img src={icon} alt="title" className='w-16 h-16 object-contain'/>
                    <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

                </div>
            </motion.div>
        </Tilt>
    )
}

const About = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>
                Introduction
            </p>
            <h2 className={styles.sectionHeadText}>
                Overview.
            </h2>
        </motion.div>

        <motion.div variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3 leading-[30px]'>
            Hi! Here is a little bit about me 😊
        </motion.div>

        <motion.p 
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3 leading-[30px]'
        >
            I'm a versatile software engineer with a strong foundation in computer science, backed by both a Bachelor's and Master's degree in the field and significant industry experience. I thrive in collaborative environments, communicate effectively with both technical and non-technical stakeholders, and quickly adapt to new technologies and challenges. I specialize in building scalable, efficient, and user-centric solutions to real-world problems, and approach the inevitable complexities of software development with resilience and persistence.      
        </motion.p>

        <motion.div variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3 leading-[30px]'>
            Below, you'll find highlights of my industry experience, personal projects, and the technologies I work with. Take a look around, and if anything sparks your interest — let’s connect! 👋
        </motion.div>

        <div className='mt-10 flex flex-wrap gap-10'>
            {services.map((service, index) => (
                <ServiceCard key={service.title} index={service.index} {...service} />
            ))}
        </div>
    
    </>
  )
}

export default SectionWrapper(About, "about")