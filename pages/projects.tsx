import React, { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectsNavBar from '../components/ProjectsNavBar'
import { projects as projectsData } from '../data'
import { Category } from '../type'
import {motion} from 'framer-motion'
import { fadeInUp, routerAnimation, stagger } from '../animations'

function Projects() {
    const [projects, setProjects] = useState(projectsData)
    const [active, setActive] = useState('all')

    const [showDetail, setShowDetail] = useState<number|null>(null)

    const handlerFilterCategory = (category: Category | 'all') => {
        if(category === 'all'){
            setProjects(projectsData)
            setActive(category)
            return 
        }
        
        const newArray = projectsData.filter((project) => project.category.includes(category))
        setProjects(newArray)
        setActive(category)
    }

    return (
        <motion.div 
            exit='exit'
            variants={routerAnimation} 
            initial='initial' 
            animate='animate' 
            className='px-5 py-2 overflow-y-scroll' 
            style={{height:'65vh'}}
        >
            <ProjectsNavBar handlerFilterCategory={handlerFilterCategory} active={active}/>
            
            <motion.div 
                className='relative grid grid-cols-12 gap-4 my-3'
                initial='initial'
                animate='animate'
                variants={stagger}
            >
                {
                    projects.map((project)=>(
                        <motion.div
                            key={project.name}
                            variants={fadeInUp} 
                            className='col-span-12 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200'>
                            <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail}/>
                        </motion.div>
                    ))
                }
            </motion.div>
        </motion.div>
    )
}

export default Projects
