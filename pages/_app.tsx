import 'tailwindcss/tailwind.css'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import '../styles/globals.css'

import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute='class'>
      <div className='grid grid-cols-12 gap-6 p-5 mx-0 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-100'>
        <div className='h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark'>
          <SideBar />
        </div>
        <div className='flex flex-col col-span-12 overflow-hidden bg-white dark:bg-dark-500 rounded-2xl lg:col-span-9 shadow-custom-light dark:shadow-custom-dark'>
          <NavBar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default MyApp