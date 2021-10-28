import React, { FunctionComponent } from 'react'
import { Category } from '../type' 

export const NavItem:FunctionComponent<
    {
        value:Category | 'all', 
        handlerFilterCategory: Function,
        active:string,
    }> = ({value, handlerFilterCategory, active}) => {
        let className = 'capitalize cursor-pointer hover:text-green'
        if(active === value)
            className += ' text-green'
    return (
        <li onClick={()=> handlerFilterCategory(value)} 
            className={className}
        >
            {value}
        </li>
    )
}

const ProjectsNavBar:FunctionComponent<
    {
        handlerFilterCategory: Function,
        active:string,
    }> = (props) => {
    return (
        <div className='flex px-3 py-2 space-x-3 overflow-x-auto list-none'>
            <NavItem {...props} value='all'/>
            <NavItem {...props} value='react'/>
            <NavItem {...props} value='mongo'/>
            <NavItem {...props} value='node'/>
            <NavItem {...props} value='express'/>
            <NavItem {...props} value='python-flask'/>
        </div>
    )
}

export default ProjectsNavBar
