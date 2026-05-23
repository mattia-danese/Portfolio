import Tilt from "react-parallax-tilt";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

const ServiceCard = ( {index, title, description, icon} ) => {
    return(
        <Tilt
            className='xs:w-[250px] w-full'
            glareEnable
            glareMaxOpacity={0.12}
            glareColor="#ffffff"
            glarePosition="all"
            scale={1.02}
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            transitionSpeed={900}
        >
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75, 100)}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className='group relative w-full overflow-hidden rounded-[24px] p-[1px] shadow-card'
            >
                <div className='absolute inset-0 bg-[linear-gradient(135deg,#00cea8,#804dee,#bf61ff)] opacity-80 transition-opacity duration-300 group-hover:opacity-100' />
                <div className='absolute -inset-20 bg-[radial-gradient(circle_at_50%_0%,rgba(191,97,255,0.45),transparent_45%)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100' />
                <div
                    className='relative min-h-[235px] rounded-[23px] border border-white/10 bg-[#151030]/75 px-7 py-8 backdrop-blur-md transition-colors duration-300 group-hover:bg-[#1b133c]/80'
                >
                    <div className='absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent' />
                    <div className='mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] shadow-[0_0_35px_rgba(128,77,238,0.35)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(0,206,168,0.35)]'>
                        <div className='absolute h-20 w-20 rounded-full bg-[#804dee]/20 blur-xl transition-colors duration-300 group-hover:bg-[#00cea8]/20' />
                        <img src={icon} alt={title} className='relative z-10 h-14 w-14 object-contain'/>
                    </div>

                    <div className='mt-7 text-center'>
                        <h3 className='text-white text-[20px] font-bold'>{title}</h3>
                        <p className='mt-3 text-[13px] leading-5 text-secondary'>{description}</p>
                    </div>

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
                <ServiceCard key={service.title} index={index} {...service} />
            ))}
        </div>
    
    </>
  )
}

export default SectionWrapper(About, "about")