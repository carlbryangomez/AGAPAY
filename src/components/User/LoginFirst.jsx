import React, {useState} from 'react'
import { ExclamationCircleIcon,XMarkIcon } from '@heroicons/react/24/outline';
import Login from './Login';

const LoginFirst = ({ onClose }) => {
//   const [isLoginWarningVisible, setIsLoginWarningVisible] = useState(true)
// const handleWarningVisibility = () => {
//   setIsLoginWarningVisible(!isLoginWarningVisible)
// }

  const [isLoginVisible, setIsLoginVisible] = useState(false)
  const handleLoginVisibility = () => {
    // handleWarningVisibility();
    setIsLoginVisible (!isLoginVisible);
  }
  return isLoginVisible ? <Login onClose={onClose} /> : (
    <>
        <div
          tabIndex="-1"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 overflow-x-hidden   bg-gray bg-opacity-50 overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full"
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow ">
              <button
                type="button"
                onClick={onClose}
                className="absolute top-3 right-2.5 text-gray bg-transparent hover:bg-gray/20 hover:text-gray rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center "
              >
                <XMarkIcon className="w-5 h-5" />
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                <ExclamationCircleIcon className="h-12 w-12 mb-5 mx-auto text-primary" />
                <h3 className="mb-5 text-lg font-normal text-gray font-inter ">
                To access this feature, please login.
                </h3>
                
                <button
                  type="button"
                  onClick={handleLoginVisibility}
                  className="text-white bg-primary hover:bg-primarydark font-inter   focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Login Here
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="text-[#c94c05] border border-[#c94c05] font-inter bg-none hover:bg-[#fff8ec] focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* {isLoginVisible && <Login />} */}
      </>
  )
}

export default LoginFirst