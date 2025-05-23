import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
    <>
        { Array.isArray(experience) ? 
            <VerticalTimelineElement
                className=""
                contentStyle={{background: '#1d1836', color: '#fff'}}
                contentArrowStyle={{borderRight: '7px solid #232631'}}
                // date={experience.date}
                iconStyle={{ background: experience[0].iconBg }}
                icon={
                    <div className="flex justify-center items-center w-full h-full">
                        <img src={experience[0].icon} 
                            alt={experience[0].company_name} 
                            className="w-[80%] h-[80%] object-contain"/>
                    </div>
                }
            >
                {experience.map((e, i) => 
                    <div key={`experience-entry-${i}`}>
                        <div>
                            <h3 className="text-white text-[24px] font-bold">
                                {e.title}
                            </h3>
                            <p className="text-secondary text-[16px] font-semibold" style={{margin: 0 }}>{e.company_name}</p>
                            <div className='flex flex-wrap gap-2'>
                                {e.tags.map((tag) => (
                                    <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                                        #{tag.name}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <ul className="mt-5 list-disc ml-5 space-y-2">
                            {e.points.map((bullet, index) => {
                                let text, bullet_style;

                                if (typeof(bullet) === "object") {
                                    ({ text, bullet_style } = bullet)
                                }

                                return (
                                    <li
                                        key={`experience-point-${index}`}
                                        className={"text-white-100 text-[14px] pl-1 tracking-wider"}
                                        style={bullet_style ? { listStyleType: bullet_style } : {}}
                                    >
                                        {text ? text : bullet}
                                    </li>
                                )
                            })}
                        </ul>
                        <div className={`mt-5 text-secondary text-[14px] font-semibold ${i !== experience.length - 1 ? 'mb-5' : ''}`}>{e.date}</div>
                    </div>
                )}
            </VerticalTimelineElement>
            : 
            <VerticalTimelineElement
                className=""
                contentStyle={{background: '#1d1836', color: '#fff'}}
                contentArrowStyle={{borderRight: '7px solid #232631'}}
                // date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                    <div className="flex justify-center items-center w-full h-full">
                        <img src={experience.icon} 
                            alt={experience.company_name} 
                            className="w-[80%] h-[80%] object-contain"/>
                    </div>
                }
            >
                <div>
                    <h3 className="text-white text-[24px] font-bold">
                        {experience.title}
                    </h3>
                    <p className="text-secondary text-[16px] font-semibold" style={{margin: 0 }}>{experience.company_name}</p>
                    <div className='flex flex-wrap gap-2'>
                        {experience.tags.map((tag) => (
                            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                                #{tag.name}
                            </p>
                        ))}
                    </div>
                </div>
                <ul className="mt-5 list-disc ml-5 space-y-2">
                    {experience.points.map((bullet, index) => (
                        <li
                            key={`experience-point-${index}`}
                            className="text-white-100 text-[14px] pl-1 tracking-wider"
                        >
                            {bullet}
                        </li>
                    ))}
                </ul>
                <div className="mt-5 text-secondary text-[14px] font-semibold">{experience.date}</div>
            </VerticalTimelineElement>
        }
    </>
)

const Experience = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>
                What I have done so far
            </p>
            <h2 className={styles.sectionHeadText}>
                Work Experience.
            </h2>
        </motion.div>

        <div className="mt-20 flex flex-col">
            <VerticalTimeline>
                {experiences.map((experience, index) => (
                    <ExperienceCard key={index} experience={experience} />
                ))}
            </VerticalTimeline>
        </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")