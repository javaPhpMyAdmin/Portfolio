import React, { FunctionComponent, useState } from 'react'
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'
import { IProject } from '../type'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '../animations'

const ProjectCard: FunctionComponent<{
    project: IProject,
    showDetail: number | null,
    setShowDetail: (id: number | null) => void,
}> = (
    {project: 
        {
         id,
         name,
         deployed_url,
         description,
         github_url,
         image_path,
         key_techs
        }, showDetail, setShowDetail
    }) => {

    
    return (
        <div>
            <Image 
                src={image_path} 
                alt={name} 
                className='cursor-pointer' 
                onClick={()=>setShowDetail(id)}
                width='300'
                height='150'
                layout='responsive'
            />
            <p className='my-2 text-center'>{name}</p>
            {
                showDetail === id && (
                <div 
                    className="absolute left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-400 rounded-lg top-12 md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100"
                >
                    <motion.div variants={stagger} initial='initial' animate='animate'>
                        <motion.div variants={fadeInUp} className='border-4 border-gray-100'>
                            <Image 
                                src={image_path} 
                                alt={name} 
                                width='300'
                                height='150'
                                layout='responsive'
                            />    
                        </motion.div>
                        <motion.div 
                            className='flex justify-center my-4 space-x-3'
                            variants={fadeInUp}
                        >
                            <a className='flex items-center px-4 space-x-3 text-lg bg-gray-200 dark:bg-dark-200' href={github_url}><AiFillGithub/><span>GitHub</span></a>
                            <a className='flex items-center px-4 space-x-3 text-lg bg-gray-200 dark:bg-dark-200' href={deployed_url}><AiFillProject/><span>Project</span></a>
                        </motion.div>
                    </motion.div>
                    <motion.div variants={stagger} initial='initial' animate='animate'>
                        <motion.h2 variants={fadeInUp} className='mb-3 text-xl font-medium md:text-2xl'>{name}</motion.h2>
                        <motion.h3  variants={fadeInUp}className='mb-3 font-medium'>{description}</motion.h3>
                        
                        <motion.div variants={fadeInUp} className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'>
                            {
                                key_techs.map(tech=>(
                                    <span key={tech} className='px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200'>{tech}</span>
                                ))
                            }
                        </motion.div>
                        
                    </motion.div>
                    <button onClick={()=>setShowDetail(null)}
                            className='absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200'
                    >
                            <MdClose size={30}/>
                    </button>
                </div>
            )}  
        </div>
    )
}

export default ProjectCard
