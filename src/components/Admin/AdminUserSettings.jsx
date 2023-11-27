import React from 'react'

const AdminUserSettings = () => {
  return (
    <>                    <section className="bg-white min-h-screen sm:my-0 my-10">
    <div className="p-4 sm:ml-64">
    <h1 className='font-inter text-3xl mt-3'>User Settings</h1>
        <hr className='border-primary mt-3 mb-3' />
        <div className="mx-auto max-w-5xl px-4  sm:px-6 lg:px-8 py-5">
  <div className="rounded-xl  p-4 shadow-lg border border-gray/10  sm:p-7">
    <form>
      <div className="grid gap-2  py-8 first:border-transparent first:pt-0 last:pb-0  sm:grid-cols-12 sm:gap-4">
        <div className="sm:col-span-12">
          <h2 className="text-lg font-semibold font-inter  ">Personal Information</h2>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="" className="mt-2.5 inline-block text-sm font-medium font-poppins "> Full name </label>
        </div>
        <div className="sm:col-span-9">
          <div className="sm:flex">
            <input id="" type="text" className="relative  block w-full border rounded-lg border-gray/30 px-3 py-2 pe-11 text-sm shadow-sm  focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50  font-inter" />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="af-submit-application-email" className="mt-2.5 inline-block text-sm font-medium font-poppins "> Email </label>
        </div>
        <div className="sm:col-span-9">
        <input id="" type="text" className="relative  block w-full border rounded-lg border-gray/30 px-3 py-2 pe-11 text-sm shadow-sm  focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50  font-inter" />
        </div>
        <div className="sm:col-span-3">
          <div className="inline-block">
            <label htmlFor="af-submit-application-phone" className="mt-2.5 inline-block text-sm font-medium font-poppins"> Phone Number </label>
          </div>
        </div>
        <div className="sm:col-span-9">
        <input id="" type="text" className="relative  block w-full border rounded-lg border-gray/30 px-3 py-2 pe-11 text-sm shadow-sm  focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50  font-inter" />

        </div>
      </div>
      <div className="grid gap-2 border-t border-gray/10 py-8 first:border-transparent first:pt-0 last:pb-0  sm:grid-cols-12 sm:gap-4">
        <div className="sm:col-span-12">
          <h2 className="text-lg font-semibold font-inter  ">General Information</h2>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="" className="mt-2.5 inline-block text-sm font-medium font-poppins "> Department </label>
        </div>
        <div className="sm:col-span-9">
          <div className="sm:flex">
            <input id="" type="text" className="relative  block w-full border rounded-lg border-gray/30 px-3 py-2 pe-11 text-sm shadow-sm  focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50  font-inter" />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="af-submit-application-email" className="mt-2.5 inline-block text-sm font-medium font-poppins "> Employee ID </label>
        </div>
        <div className="sm:col-span-9">
        <input id="" type="text" className="relative  block w-full border rounded-lg border-gray/30 px-3 py-2 pe-11 text-sm shadow-sm  focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50  font-inter" />
        </div>
        <div className="sm:col-span-3">
          <div className="inline-block">
            <label htmlFor="af-submit-application-phone" className="mt-2.5 inline-block text-sm font-medium font-poppins"> Role </label>
          </div>
        </div>
        <div className="sm:col-span-9">
        <input id="" type="text" className="relative  block w-full border rounded-lg border-gray/30 px-3 py-2 pe-11 text-sm shadow-sm  focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50  font-inter" />

        </div>
      </div>
      <div className="grid gap-2 border-t border-gray/10 py-8 first:border-transparent first:pt-0 last:pb-0  sm:grid-cols-12 sm:gap-4">
        <div className="sm:col-span-12">
          <h2 className="text-lg font-semibold font-inter  ">Password</h2>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="" className="mt-2.5 inline-block text-sm font-medium font-poppins "> Old Password </label>
        </div>
        <div className="sm:col-span-9">
          <div className="sm:flex">
            <input id="" type="text" className="relative  block w-full border rounded-lg border-gray/30 px-3 py-2 pe-11 text-sm shadow-sm  focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50  font-inter" />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="af-submit-application-email" className="mt-2.5 inline-block text-sm font-medium font-poppins "> New Password </label>
        </div>
        <div className="sm:col-span-9">
        <input id="" type="text" className="relative  block w-full border rounded-lg border-gray/30 px-3 py-2 pe-11 text-sm shadow-sm  focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50  font-inter" />
        </div>
        <div className="sm:col-span-3">
          <div className="inline-block">
            <label htmlFor="af-submit-application-phone" className="mt-2.5 inline-block text-sm font-medium font-poppins"> Confirm Password </label>
          </div>
        </div>
        <div className="sm:col-span-9">
        <input id="" type="text" className="relative  block w-full border rounded-lg border-gray/30 px-3 py-2 pe-11 text-sm shadow-sm  focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50  font-inter" />

        </div>
      </div>
      <div className='flex flex-col justify-center items-center text-center'>
      <button type="button" className="inline-flex w-full max-w-sm justify-center   gap-x-2 rounded-full border border-transparent bg-primary font-inter hover:bg-primarydark px-2  py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 ">Save Changes</button>
      </div>
    </form>
  </div>
</div>

    </div>
    </section>

    </>
  )
}

export default AdminUserSettings