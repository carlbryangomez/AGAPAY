import React from 'react'
import { FireIcon, ArrowTrendingDownIcon, ExclamationTriangleIcon} from '@heroicons/react/24/outline';
import { flood } from '../../assets';
const RecordCards = () => {
  return (
   <>
    <h1 className='font-inter text-3xl mt-3'>Records</h1>
        <hr className='border-primary mt-3 mb-3' />
          <div className="grid grid-cols-1 gap-5 sm:gap-5 sm:grid-cols-4 p-4 rounded-lg ">    
<div className="max-w-xs p-6 bg-white border border-gray/20 rounded-lg shadow-md ">
    <FireIcon className='w-7 h-7 text-primary' />
        <div className='mx-auto justify-center text-center'>
        <h5 className="mb-2 text-4xl font-semibold tracking-tight font-inter">34 </h5>
    <p className="mb-3 font-normal text-lg font-poppins text-gray"> Fire Reports</p>
    </div>
</div>
<div className="max-w-xs p-6 bg-white border border-gray/20 rounded-lg shadow-md ">
    <img src={flood} className='w-7 h-7 text-primary' alt="" />
        <div className='mx-auto justify-center text-center'>
        <h5 className="mb-2 text-4xl font-semibold tracking-tight font-inter">34 </h5>
    <p className="mb-3 font-normal text-lg font-poppins text-gray"> Flood Reports</p>
    </div>
</div>
<div className="max-w-xs p-6 bg-white border border-gray/20 rounded-lg shadow-md ">
    <ArrowTrendingDownIcon className='w-7 h-7 text-primary' />
        <div className='mx-auto justify-center text-center'>
        <h5 className="mb-2 text-4xl font-semibold tracking-tight font-inter">34 </h5>
    <p className="mb-3 font-normal text-lg font-poppins text-gray"> Earthquake Reports</p>
    </div>
</div>
<div className="max-w-xs p-6 bg-white border border-gray/20 rounded-lg shadow-md ">
    <ExclamationTriangleIcon className='w-7 h-7 text-primary' />
        <div className='mx-auto justify-center text-center'>
        <h5 className="mb-2 text-4xl font-semibold tracking-tight font-inter">34 </h5>
    <p className="mb-3 font-normal text-lg font-poppins text-gray">Road Accidents</p>
    </div>
</div>
          </div>
   </>
  )
}

export default RecordCards