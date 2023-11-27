import React from 'react'
import { logo } from '../assets'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <div className="max-w-[50rem] flex mt-44 flex-col mx-auto w-full h-full">
    <header className="mb-auto flex justify-center z-0 w-full py-4">
      <nav className="px-4 sm:px-6 lg:px-8" aria-label="Global">
      <img src={logo} className='w-52 h-52 ' alt="" />
      </nav>
    </header>

    <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="block text-7xl font-bold text-primary sm:text-9xl font-inter">404</h1>
      <h1 className="block text-2xl font-bold text-white"></h1>
      <p className="mt-3  font-poppins">Oops, something went wrong.</p>
      <p className=" font-poppins">Sorry, we couldn't find your page.</p>
      <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
        <Link to="/" className="w-full font-poppins sm:w-auto inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-primary hover:bg-primary hover:text-white hover:text-blue-700 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 " >
          Back to Home
        </Link>
      </div>
    </div>

    <footer className="mt-auto text-center py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-inter">
        <p className="text-sm text-gray">© All Rights Reserved. 2023.</p>
      </div>
    </footer>
  </div>
  )
}

export default ErrorPage