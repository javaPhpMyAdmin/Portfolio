import React, { FunctionComponent, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavItem: FunctionComponent<{
    activeItem: string,
    setActiveItem: Function,
    name: string,
    route: string
}> = ({ activeItem, setActiveItem, name, route }) => {
    return (
        activeItem !== name ? (
            <Link href={route}>
                <a><span onClick={() => setActiveItem(name)} className='hover:text-green'>{name}</span></a>
            </Link>
        ) : null
    )
}

function NavBar() {
    const [activeItem, setActiveItem] = useState<string>('')

    const { pathname } = useRouter()

    useEffect(() => {
        if (pathname === '/') setActiveItem('About')
        if (pathname === '/projects') setActiveItem('Projects')
        if (pathname === '/resume') setActiveItem('Resume')
    }, [pathname])

    return (
        <div className='flex justify-between px-5 py-3 my-3'>
            <span className='text-xl font-bold border-b-4 text-green md:text-2xl border-green'>
                {activeItem}
            </span>
            <div className='flex space-x-5 text-lg '>
                <NavItem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name='About'
                    route='/'
                />
                <NavItem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name='Resume'
                    route='/resume'
                />
                <NavItem
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    name='Projects'
                    route='/projects'
                />
            </div>
        </div>
    )
}

export default NavBar
