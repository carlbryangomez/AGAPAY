import React from 'react'
import { ShieldExclamationIcon,UserGroupIcon,UserCircleIcon, ChatBubbleBottomCenterIcon, ShieldCheckIcon, ChatBubbleLeftRightIcon,ChatBubbleOvalLeftEllipsisIcon,ClockIcon, XMarkIcon,ExclamationTriangleIcon  } from '@heroicons/react/24/outline'
const AdminDashboard = () => {
  return (
   <>
                    <section className="bg-white min-h-screen sm:my-0 my-10">
        <div className="p-4 sm:ml-64">
        <h1 className='font-inter text-3xl mt-3'>Dashboard</h1>
        <hr className='border-primary mt-3 mb-3' />
          <div className="grid grid-cols-1 gap-5 sm:gap-5 sm:grid-cols-3 p-4 rounded-lg ">    
          <div className="max-w-xs p-6 bg-white border border-gray/20 rounded-lg shadow-md">
    <UserGroupIcon className='w-7 h-7 text-primary' />
        <div className='mx-auto justify-center text-center'>
        <h5 className="mb-2 text-4xl font-semibold tracking-tight font-inter">34 </h5>
    <p className="mb-3 font-normal text-lg font-poppins text-gray">Total Users</p>
    </div>
</div>
<div className="max-w-xs p-6 bg-white border border-gray/20 rounded-lg shadow-md">
    <UserCircleIcon className='w-7 h-7 text-primary' />
        <div className='mx-auto justify-center text-center'>
        <h5 className="mb-2 text-4xl font-semibold tracking-tight font-inter">34 </h5>
    <p className="mb-3 font-normal text-lg font-poppins text-gray">Total Admin</p>
    </div>
</div>
<div className="max-w-xs p-6 bg-white border border-gray/20 rounded-lg shadow-md">
    <ClockIcon className='w-7 h-7 text-primary' />
        <div className='mx-auto justify-center text-center'>
        <h5 className="mb-2 text-4xl font-semibold tracking-tight font-inter">34 </h5>
    <p className="mb-3 font-normal text-lg font-poppins text-gray">Total Responders</p>
    </div>
</div>
<div className="max-w-xs p-6 bg-white border border-gray/20 rounded-lg shadow-md ">
    <ShieldExclamationIcon className='w-7 h-7 text-primary' />
        <div className='mx-auto justify-center text-center'>
        <h5 className="mb-2 text-4xl font-semibold tracking-tight font-inter">34 </h5>
    <p className="mb-3 font-normal text-lg font-poppins text-gray">Total Incidents</p>
    </div>
</div>
<div className="max-w-xs p-6 bg-white border border-gray/20 rounded-lg shadow-md">
    <ChatBubbleBottomCenterIcon className='w-7 h-7 text-primary' />
        <div className='mx-auto justify-center text-center'>
        <h5 className="mb-2 text-4xl font-semibold tracking-tight font-inter">34 </h5>
    <p className="mb-3 font-normal text-lg font-poppins text-gray">Total Response</p>
    </div>
</div>
<div className="max-w-xs p-6 bg-white border border-gray/20 rounded-lg shadow-md">
    <ShieldCheckIcon className='w-7 h-7 text-primary' />
        <div className='mx-auto justify-center text-center'>
        <h5 className="mb-2 text-4xl font-semibold tracking-tight font-inter">34 </h5>
    <p className="mb-3 font-normal text-lg font-poppins text-gray">Total Resolution</p>
    </div>
</div>
<div className="max-w-xs p-6 bg-white border border-gray/20 rounded-lg shadow-md">
    <ChatBubbleLeftRightIcon className='w-7 h-7 text-primary' />
        <div className='mx-auto justify-center text-center'>
        <h5 className="mb-2 text-4xl font-semibold tracking-tight font-inter">34 </h5>
    <p className="mb-3 font-normal text-lg font-poppins text-gray">User Feedback</p>
    </div>
</div>
<div className="max-w-xs p-6 bg-white border border-gray/20 rounded-lg shadow-md">
    <ChatBubbleOvalLeftEllipsisIcon className='w-7 h-7 text-primary' />
        <div className='mx-auto justify-center text-center'>
        <h5 className="mb-2 text-4xl font-semibold tracking-tight font-inter">34 </h5>
    <p className="mb-3 font-normal text-lg font-poppins text-gray">Average Response Time</p>
    </div>
</div>
<div className="max-w-xs p-6 bg-white border border-gray/20 rounded-lg shadow-md">
    <ClockIcon className='w-7 h-7 text-primary' />
        <div className='mx-auto justify-center text-center'>
        <h5 className="mb-2 text-4xl font-semibold tracking-tight font-inter">34 </h5>
    <p className="mb-3 font-normal text-lg font-poppins text-gray">Average Resolution Time</p>
    </div>
</div>
          </div>
          {/* ANALYTICS */}
        </div>
        
      </section>
      <div
        tabIndex="-1"
        className="fixed top-0 left-0 right-0  flex justify-end items-end p-4 overflow-x-hidden  z-10    overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full"
      >
        <div className="relative w-full max-w-md max-h-full ">
          <div className="relative bg-white rounded-lg  shadow-xl border border-gray/30">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray bg-transparent hover:bg-gray/20 hover:text-gray rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
            >
              <XMarkIcon className="w-5 h-5" />
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center">
              <ExclamationTriangleIcon className="h-12 w-12 mb-5 mx-auto text-red" />
              <h3 className="mb-5 text-lg font-normal text-gray font-inter ">
              A new incident report has been submitted.      Your attention to this matter is appreciated.
              </h3>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="text-white bg-red hover:bg-red/80 focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default AdminDashboard