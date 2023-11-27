import React, {useEffect} from 'react'
import { yellowbg1 } from '../../assets'
import SafetyContents from './SafetyContents'
import Footer from "./Footer";
const SafetyGuidelines = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div
    className=" bg-cover bg-center bg-no-repeat sm:py-40 pt-32 pb-10  p-5" // Add any additional classes you need and adjust height as necessary
    style={{ backgroundImage: `url(${yellowbg1})` }}
  >
    <div className='mt-20'>
  <h2 className="sm:text-6xl text-4xl  font-semibold mb-2 text-primary font-inter text-center">
         Safety Guidelines
          </h2>
          <p className="font-poppins text-lg font-normal text-center">
        We have outlined essential safety guidelines to ensure a secure environment for everyone.
          </p>
          </div>
  </div>
  <SafetyContents />
  <Footer/>
  </>
  )
}

export default SafetyGuidelines