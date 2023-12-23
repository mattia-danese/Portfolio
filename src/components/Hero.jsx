import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { profile } from '../assets';


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl max-auto flex flex-row items-start gap-5`}>
            <div className='flex flex-col justify-center items-center mt-5 z-1000000'>
                {/* DOT */}
                <div className='w-5 h-5 rounded-full bg-[#915eff]'/> 
                {/* LINE */}
                <div className='w-1 sm:h-80 h-40 violet-gradient'/>
            </div>

            <div>
                <div className='flex gap-4'>
                    <h1 className={`${styles.heroHeadText} text-white inline align-middle`}>
                        Hi, I'm <span className='text-[#915eff]'>Mattia</span>
                    </h1>

                    <img src={profile} className='lg:w-32 lg:h-32 xs:w-24 xs:h-24 xxs:w-32 xxs:h-32 rounded-full inline align-middle'/>

                </div>

                <p className={`${styles.heroSubText} mt-5 text-white-100`}>
                    I'm a Software Developer with a specific <br className='sm: hidden block'/> interest in <span className='text-[#915eff]'>Cybersecurity</span> and <span className='text-[#915eff]'>Full Stack <br className='sm: hidden block'/> Applications</span>
                </p>
            </div>
        </div>

        <br />

        <ComputersCanvas />

        {/* Scrolling loop */}
        <div className='absolute bottom-32 xs:bottom-1.5 w-full flex justify-center items-center'>
            <a href='#about'>
                <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                    <motion.div
                        animate={{
                            y: [0, 24, 0]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatTyoe: 'loop'
                        }}
                        className="w-3 h-3 rounded-full bg-secondary mb-1" 
                    >
                    </motion.div>
                </div>
            </a>
        </div>

    </section>
  )
}

export default Hero