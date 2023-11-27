import React from 'react'

const CreateAnnouncement = () => {
  return (
  <>
      <section className="bg-white min-h-screen sm:my-0 my-10">
    <div className="p-4 sm:ml-64">
    <h1 className='font-inter text-3xl mt-3'>Announcement</h1>
        <hr className='border-primary mt-3 mb-3' />
  <div className=" py-5 px-4 mx-auto bg-white rounded-xl w-full max-w-5xl border border-gray/30 shadow-lg mt-10  font-inter">
      <form action="#">
          <div className="flex flex-row gap-4 mb-5">
              <div className="w-full">
                  <label for="name" className="block mb-2 text-sm font-semibold text-black ">Title</label>
                  <input type="text" name="name" id="name" className="bg-variantwhite/80  border border-gray/30 text-black text-sm rounded-lg focus:ring-primary focus:border-primary focus:outline-none block w-full p-2.5" required=""/>
              </div>
              <div className='w-full'> 
                  <label for="category" className="block mb-2 text-sm font-semibold text-black ">Category</label>
                  <select id="category" className="bg-variantwhite/80  border border-gray/30 text-black text-sm rounded-lg focus:ring-primary focus:border-primary focus:outline-none block w-full p-2.5">
                      <option selected="">Select category</option>
                      <option value="Flood">Flood</option>
                      <option value="Earthquake">Earthquake</option>
                      <option value="Vehicular Accident">Vehicular Accident</option>
                      <option value="Fire">Fire</option>
                  </select>
              </div>
          </div>
          <div className="">
                  <label for="description" className="block mb-2 text-sm font-semibold text-black ">Description</label>
                  <textarea id="description" rows="8" className="block p-2.5 w-full text-sm text-black bg-variantwhite/80  rounded-lg border border-gray/30 focus:ring-primary focus:outline-none focus:border-primary" ></textarea>
              </div>
          {/* <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-semibold text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary focus:outline-none hover:bg-primarydark">
              Post
          </button> */}
          <button
                        type="button"
                        className="text-white text-center mt-5 bg-[#3b5998] hover:bg-[#3b5998]/80 focus:ring-2 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center mb-2"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 8 19"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Facebook
                      </button>
      </form>
  </div>
        </div>
        </section>
  </>
  )
}

export default CreateAnnouncement