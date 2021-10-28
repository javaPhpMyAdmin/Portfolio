import { motion } from "framer-motion"
import { fadeInUp, routerAnimation, stagger } from "../animations"
import ServiceCard from "../components/ServiceCard"
import { services } from "../data"

const index = () => {
  return (
    <motion.div
      className='flex flex-col flex-grow px-6 pt-1'
      variants={routerAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <h6 className='my-3 font-medium'>
        I&aposm a software engineering student
        I am currently pursuing B. Tech Degree(Final Year) in Computer
        Science Enginnering from University. I have 3+ years of
        experiene in Web Development and I have interesting on....bla bla blaa
      </h6>
      <div
        className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100'
        style={{ marginRight: '-1.5rem', marginLeft: '-1.5rem' }}
      >
        <h6 className='my-3 text-lg font-bold tracking-widest'>What I Offer</h6>
        <motion.div
          initial='initial'
          animate='animate'
          variants={stagger}
          className='grid gap-6 lg:grid-cols-2'>
          {
            services.map(service => (
              <motion.div
                variants={fadeInUp}
                className='bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1'
                key={service.about}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))
          }
        </motion.div>
      </div>
    </motion.div>
  )
}

export default index

/*export const getServerSideProps = async (context: GetServerSidePropsContext) => {

  const res = await fetch('http://localhost:3000/api/services')
  const data = await res.json()

  return {
    props:{
      services: data.services,
    }
  }

}*/

/*export const getStaticProps = async (context: GetStaticPropsContext) => {

const res = await fetch('http://localhost:3000/api/services')
const data = await res.json()

return {
  props:{
    services: data.services,
  }
}

}*/