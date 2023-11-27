import React, {useState} from 'react'
import Footer from './Footer'
import { EyeSlashIcon,EyeIcon } from '@heroicons/react/24/outline'
import { yellowbg1 } from '../../assets'
const UserDetails = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isPasswordVisible1, setIsPasswordVisible1] = useState(false);
    const [isPasswordVisible2, setIsPasswordVisible2] = useState(false);
    const [inputType, setInputType] = useState("password");
    const [inputType1, setInputType1] = useState("password");
    const [inputType2, setInputType2] = useState("password");
    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
      setInputType(isPasswordVisible ? "password" : "text");
    };
    const togglePasswordVisibility1 = () => {
      setIsPasswordVisible1(!isPasswordVisible1);
      setInputType1(isPasswordVisible1 ? "password" : "text");
    };
    const togglePasswordVisibility2 = () => {
      setIsPasswordVisible2(!isPasswordVisible2);
      setInputType2(isPasswordVisible2 ? "password" : "text");
    };
  return (
    <>
    <div
    className=" bg-cover bg-center bg-no-repeat sm:py-40 pt-32 pb-10  p-5" // Add any additional classes you need and adjust height as necessary
    style={{ backgroundImage: `url(${yellowbg1})` }}
  >
    <div className='mt-20'>
  <h2 className="sm:text-6xl text-4xl  font-semibold mb-2 text-primary font-inter text-center">
         User Details
          </h2>
          <p className="font-poppins text-lg font-normal text-center">
   
          </p>
          </div>
  </div>
 <section>
    <div className='p-5 rounded-xl mx-auto sm:w-full md:w-[80%] lg:w-[90%] xl:w-[90%]'>
    <div className=' border-b border-gray/20 py-6'>
    <h1 className='font-inter text-xl font-semibold leading-loose'>Profile</h1>
<p className='text-base font-poppins tracking-wide'>The information presented here are the details you've submitted on the Registration Process.</p>
    </div>
    <div className=' border-b border-gray/20 py-6 flex sm:flex-row flex-col sm:justify-between justify-center'>
    <h1 className='font-inter text-xl font-semibold '>Full Name</h1>
<p className='text-base font-poppins tracking-wide'>Joko B. Gadingan</p>
<p></p>
    </div>
    <div className=' border-b border-gray/20 py-6 flex sm:flex-row flex-col sm:justify-between justify-center'>
    <h1 className='font-inter text-xl font-semibold '>Email Address</h1>
<p className='text-base font-poppins tracking-wide'>jokogadingan@gmail.com</p>
<div className='flex justify-center'>
<button className='p-2 bg-primary rounded-xl font-inter text-white hover:bg-primarydark font-semibold w-full max-w-xs mt-3'>Change</button>
</div>
    </div>
    <div className=' border-b border-gray/20 py-6 flex sm:flex-row flex-col sm:justify-between justify-center'>
    <h1 className='font-inter text-xl font-semibold '>Contact Number</h1>
<p className='text-base font-poppins tracking-wide'>0951-399-2162</p>
<div className='flex justify-center'>
<button className='p-2 bg-primary rounded-xl font-inter text-white hover:bg-primarydark font-semibold w-full max-w-xs mt-3'>Change</button>
</div>
    </div>
    </div>
 </section>
 <section>
    <div className='p-5 rounded-xl mx-auto sm:w-full md:w-[80%] lg:w-[90%] xl:w-[90%] '>
    <div className='  py-6'>
    <h1 className='font-inter text-xl font-semibold leading-loose'>Change Password</h1>
<p className='text-base font-poppins tracking-wide'>Update your password associated with your account.</p>
    </div>
    <div className='w-full max-w-sm mx-auto font-poppins'>
    <div className="mb-6">
        <label for="password" className="block mb-2 text-sm font-medium  ">Old Password</label>
        <input type="password" id="password" className="bg-gray-50 border border-gray/20  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="•••••••••" required/>
    </div> 
    <div className="mb-6">
        <label for="confirm_password" className="block mb-2 text-sm font-medium  ">New password</label>
        <input type="password" id="confirm_password" className="bg-gray-50 border border-gray/20  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="•••••••••" required/>
    </div> 
    <div className="mb-6">
        <label for="confirm_password" className="block mb-2 text-sm font-medium  ">Confirm password</label>
        <input type="password" id="confirm_password" className="bg-gray-50 border border-gray/20  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="•••••••••" required/>
    </div> 
    <div className='flex justify-center'>
    <button className='bg-primary rounded-full font-inter font-semibold text-sm px-2 py-2 text-white hover:bg-primarydark'>Save Changes</button>
    </div>
    </div>
    </div>
 </section>
  </>
  )
}

export default UserDetails