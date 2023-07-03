import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaSwift, FaReacteurope, } from 'react-icons/fa';
import { SiMysql, SiExpress, SiNextdotjs, SiKotlin, SiRedis, SiFirebase, SiMocha} from 'react-icons/si';

import Circles from '../../components/Circles';
import { useState } from 'react';
import CountUp from 'react-countup';

const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Full Stack Development',
        icons: [
          {
            name: 'React',
            iconLink: <FaReact />
          },
          {
            name: 'Next.JS',
            iconLink: <SiNextdotjs />
          },
          {
            name: 'Javascript',
            iconLink: <FaJs />
          },
          {
            name: 'HTML 5',
            iconLink: <FaHtml5 />
          },
          {
            name: 'CSS 3',
            iconLink: <FaCss3 />
          },
          {
            name: 'Node JS',
            iconLink: <FaNodeJs />
          },
          {
            name: 'MySQL',
            iconLink: <SiMysql />
          },
          {
            name: 'Express JS',
            iconLink: <SiExpress />
          },
          {
            name: 'Redis',
            iconLink: <SiRedis />
          },
        ],
      },
      {
        title: 'Mobile App Development',
        icons: [
          {
            name: 'React Native',
            iconLink: <FaReacteurope />
          },
          {
            name: 'Kotlin',
            iconLink: <SiKotlin />
          },
          {
            name: 'Swift',
            iconLink: <FaSwift />
          },
          {
            name: 'Firebase',
            iconLink: <SiFirebase />
          },
          {
            name: 'Mocha',
            iconLink: <SiMocha />
          },
      ],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'EY Machine Learning Hackathon Finalist - Gurgaon',
        stage: 'Feb 2018',
      },

    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Full Stack Developer - Taxfix (Madrid)',
        stage: 'Mar 2022 - Present',
      },
      {
        title: 'Senior React Native Engineer - Guru.com (Pittsburgh)',
        stage: 'Jun 2021 - Mar 2022',
      },
      {
        title: 'Mobile Application Developer - Ayu Health (Bangalore)',
        stage: 'Jun 2020 - Jan 2021',
      },
      {
        title: 'Full-stack Developer - MyScoot (Delhi)',
        stage: 'Jul 2019 - Jan 2020',
      },
      {
        title: 'Senior Software Engineer - Nucleus Software (Delhi)',
        stage: 'Jul 2016 - Jun 2018',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'B.Tech. in Electronics Engineering - DTU',
        stage: 'Aug 2012 - May 2016',
      },
    ],
  },
];

// Framer motion

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Head from 'next/head';

const About = () => {
  const [index, setIndex] = useState(0);
  return (<div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
     <Head>
        <title>Prateek Chachra | About</title>
        <meta property="og:title" content="Prateek Chachra | About" key="title" />
      </Head>
    <Circles />
    <div className='container mx-auto h-full flex flex-col items-center xl:flex-row
    gap-x-6'>
      <div className='flex-1 flex flex-col justify-center'>
        <motion.h2 
        variants={fadeIn('down', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='h2'>Captivating <span className='text-accent'>stories</span> birth magnificent designs</motion.h2>
        <motion.p
        variants={fadeIn('down', 1)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 '>6 years ago, I began my journey as a Developer with Java. 
          I saw myself gravitating towards ReactJS/Next.JS because it helped me launch my own entrepreneurial ideas. 
          Since then, I've done various projects with this marvellous JS FE Library.</motion.p>
          <motion.div
          variants={fadeIn('down', 1.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          >
            <div className='flex flex-1 xl:gap-x-6 xl:max-w-none mx-auto xl:mx-0 mb-8'>
              <div className='relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={6} duration={5}/> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Years of Experience</div>
              </div>
              <div className='relative flex-1 after:w-[1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={24} duration={5}/> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Projects</div>
              </div>
            </div>
          </motion.div>
      </div>
      
      <motion.div
       variants={fadeIn('left', 0.2)}
       initial='hidden'
       animate='show'
       exit='hidden'
      className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>{aboutData.map((item,itemIndex) => (
          <div key={itemIndex} className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px]
          after:bg-white after:absolute after:-bottom-1 after:left-0`}
          onClick={() => setIndex(itemIndex)}>
            {item.title}
          </div>
        ))}</div>
        <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
          {aboutData[index].info.map((item, itemIndex) => (
            <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center justify-between text-white'>
              <div className='font-light mb-2 md:mb-0 max-w-[260px]'>{item.title}</div>
              <div className='hidden md:flex ml-4'> {item.stage}</div>
              {item.icons?.map((icon, ind) => <div key={ind} className='text-2xl transition-all relative group duration-500'>
              <div className='absolute pr-14 right-0 z-50 hidden xl:group-hover:flex hover:transition-all duration-400'>
                <div className='bg-white relative flex text-primary items-center
                p-[6px] rounded-[3px]'>
                  <div className='text-[12px] leading-none font-semibold capitalize'>{icon.name}</div>
                    {/* Triangle */}
                    <div className='border-solid border-l-white border-l-8 border-y-transparent 
                    border-y-[6px] border-r-0 absolute -right-2'></div>
                </div>
                </div>
                {icon.iconLink}</div>)}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>);
};

export default About;
