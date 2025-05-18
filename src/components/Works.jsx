import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link  }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75, 70)}>
            <Tilt
                options={{
                    max: 25,
                    scale: 1,
                    speed: 450
                }}
                className='bg-tertiary p-5 rounded 2xl sm:w-[360px] w-full'
            >
                <div className='relative w-full h-[230px]'>
                    {image.type === "png" ? 
                        <img src={image.src} alt={name} className={`w-full h-full ${image.src.includes('scan') ? 'object-contain' : 'object-cover'} rounded-2xl`}/> : 
                        
                        <iframe
                            className='w-full h-full object-cover rounded-2xl z-10000'
                            src={image.src}
                            allowFullScreen
                            title="Embedded youtube"
                        />
                    }

                    <div
                        onClick={() => window.open(source_code_link, "_blank")}
                        className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer absolute top-2 right-2'
                    >   
                            <img src={github} alt="github" className='w-1/2 h-1/2 object-contain'/>
                    </div>
        
                </div>

                <div className='mt-5 '>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                    <div className='mt-4 flex flex-wrap gap-2'>
                        {tags.map((tag) => (
                            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                                #{tag.name}
                            </p>
                        ))}
                    </div>
                </div>
            </Tilt>
        </motion.div>

    )
}

const Works = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>
                My work
            </p>
            <h2 className={styles.sectionHeadText}>
               Projects.
            </h2>
        </motion.div>

        <div className='w-full flex'>
            <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
                These projects highlight my technical skills and hands-on experience through real-world applications. Each includes a brief overview and links to the source code. Together, they demonstrate my ability to solve complex problems, work across diverse technologies, and deliver well-managed, effective solutions.
            </motion.p>
        </div>
        <div className='md:mt-10 flex flex-wrap gap-7'>
            {projects.map((project, index) => (
                <ProjectCard 
                    key={`project-${index}`}
                    index={index}
                    {...project}
                />
            ))}
        </div>
    </>
  )
}

export default SectionWrapper(Works, "projects");