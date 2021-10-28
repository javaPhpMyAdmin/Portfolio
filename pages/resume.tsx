import React from 'react'
import Bar from '../components/Bar'
import { languages, tools } from '../data'
import { motion } from 'framer-motion'
import { fadeInUp, routerAnimation } from '../animations'

function resume() {
    return (
        <motion.div 
            exit='exit'
            className='px-6 py-2' 
            variants={routerAnimation} 
            initial='initial' 
            animate='animate'
        >
            <div className='grid gap-6 md:grid-cols-2'>
                <motion.div variants={fadeInUp} initial='initial' animate='animate'>
                    <h5 className='my-3 text-2xl font-bold'>Education</h5>
                    <div>
                        <h5 className='my-2 text-xl font-bold'>Computer Science Engineering</h5>
                        <p className='font-semibold'>Academy of Technology(2016-2021)</p>
                        <p className='my-3'>
                            I am currently pursuing B. Tech Degree(Final Year) in Computer
                            Science Enginnering from University.
                        </p>
                    </div>
                </motion.div>
                <motion.div variants={fadeInUp} initial='initial' animate='animate'>
                    <h5 className='my-3 text-2xl font-bold'>Experience</h5>
                    <div>
                        <h5 className='my-2 text-xl font-bold'>
                            Software Engineer Jr.
                        </h5>
                        <p className='font-semibold'>
                            DNM (2014 - ON)
                        </p>
                        <p className='my-3'>
                            Some cute description
                        </p>
                    </div>
                </motion.div>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
                <div className="">
                    <h5 className="my-3 text-2xl font-bold">
                        Languages & Frameworks
                    </h5>
                    <div className='my-2'>
                        {
                            languages.map((language)=><Bar data={language} key={language.name}/>)
                        }
                    </div>
                </div>
                <div className="">
                    <h5 className="my-3 text-2xl font-bold">
                        Tools & Softwares
                    </h5>
                    <div className='my-2'>
                        {
                            tools.map((tool)=><Bar data={tool} key={tool.name}/>)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default resume
