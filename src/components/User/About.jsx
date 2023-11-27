import React, { useEffect } from "react";
import { logo, weather, alerts, yellowbg1 } from "../../assets";
import Team from "./Team";
import {
  ArrowDownCircleIcon,
  ChevronDoubleDownIcon,
  ShieldCheckIcon,
  BellAlertIcon,
  BookmarkSquareIcon,
} from "@heroicons/react/24/outline";
import Footer from "./Footer";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <section className="bg-subtlegray">
           <div
  className=" bg-cover bg-center bg-no-repeat sm:py-40 pt-32 pb-10  p-5" // Add any additional classes you need and adjust height as necessary
  style={{ backgroundImage: `url(${yellowbg1})` }}
><div className='mt-20'>
<h2 className="sm:text-6xl text-4xl  font-semibold mb-2 text-primary font-inter text-center">
        About Us
        </h2>
        <p className="font-poppins text-lg font-normal text-center">
        Meet the Visionaries Behind Our Innovation
        </p>
        </div>
</div>
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="lg:w-10/12 w-full">
                <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold  font-inter lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2 text-primary">Where Innovation Meets Passion</h2>
                <p className="font-normal sm:text-lg text-base leading-6 text-gray-600 mt-6 font-inter">Our innovative solutions are crafted with a deep passion for technology, ensuring that every project we undertake is infused with enthusiasm, expertise, and a commitment to excellence.</p>
            </div>

            <div className="lg:mt-14 sm:mt-10 mt-12">
                <img className="lg:block hidden w-full" src="https://i.ibb.co/GvwJnvn/Group-736.png" alt="Group of people Chilling" />
                <img className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/5sZTmHq/Rectangle-116.png" alt="Group of people Chilling" />
                <img className="sm:hidden block w-full" src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png" alt="Group of people Chilling" />
            </div>

            <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row items-center justify-between flex-col lg:gap-8 gap-12">
                <div className="w-full xl:w-5/12 lg:w-6/12">
                    <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 font-inter text-primary">Our Story</h2>
                    <p className="font-normal  leading-6 font-inter mt-4 sm:text-lg text-base">We are a team of ambitious fourth-year college students who embarked on a transformative journey, crafting this project as our capstone endeavor. This project represents not only our academic pursuit but also our collective dedication to pushing boundaries and exploring the limitless possibilities of technology.</p>
                </div>
                <div className="lg:flex items-center w-full lg:w-1/2 ">
                    <img className="lg:block hidden w-full" src="https://i.ibb.co/2kxWpNm/Group-740.png" alt="people discussing on board" />
                    <img className="lg:hidden sm:block hidden w-full h-3/4" src="https://i.ibb.co/ZLgK3NQ/Group-788.png" alt="people discussing on board" />
                    <img className="sm:hidden block w-full" src="https://i.ibb.co/9g2R7Xr/Group-803.png" alt="people discussing on board" />
                </div>
            </div>
            <div className="flex lg:flex-row flex-col items-center md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
                <div className="w-full lg:w-6/12">
                    <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 font-inter text-primary">Our Mission</h2>
                    <p className="font-normal leading-6  mt-6 w-full lg:w-10/12 xl:w-9/12 font-inter sm:text-lg text-base">With a shared vision for safety and community welfare, we embarked on the journey to create a Disaster and Risk Reduction Management System. Our goal is not only to enhance safety and aid those in need but also to educate and empower individuals in the face of disasters.</p>
                </div>
                <div className="w-full lg:w-6/12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
                        {/* <!-- Team Card --> */}
                        <div className="flex p-4 rounded-lg shadow-md border  border-gray/10 transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 items-center">
                            <div className="mr-6">
                               <ShieldCheckIcon className="w-10 h-10 sm:block hidden text-primarydark" />
                            </div>
                            <div className="">
                                <p className="font-semibold lg:text-xl text-xl lg:leading-6 leading-5 font-inter text-primary">Disaster Preparedness and Assistance</p>
                                <p className="mt-2 font-normal text-base leading-6 font-poppins ">Our system ensures safety with real-time alerts, enhanced preparedness, and immediate access to emergency response guidelines.</p>
                            </div>
                        </div>

                        {/* <!-- Board Card --> */}
                        <div className="flex rounded-lg p-4 shadow-md border  border-gray/10 transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 items-center">
                            <div className="mr-6">
                                <BellAlertIcon className="w-10 h-10 sm:block hidden text-primarydark"/>
                            </div>
                            <div className="">
                                <p className="font-semibold lg:text-xl text-xl lg:leading-6 leading-5 font-inter text-primary">Prompt and Reliable Assistance</p>
                                <p className="mt-2 font-normal text-base leading-6 font-poppins ">Our platform connects people with swift assistance, emergency services, vital information, and community support networks.</p>
                            </div>
                        </div>

                        {/* <!-- Press Card --> */}
                        <div className="flex p-4 rounded-lg shadow-md border  border-gray/10 transition ease-in-out  hover:-translate-y-1 hover:scale-100 duration-300 items-center">
                            <div className="mr-6">
                            <BookmarkSquareIcon className="w-10 h-10 sm:block hidden text-primarydark"/>
                            </div>
                            <div className="">
                                <p className="font-semibold lg:text-xl text-xl lg:leading-6 leading-5 font-inter text-primary">Knowledge and Education</p>
                                <p className="mt-2 font-normal text-base leading-6 font-poppins ">Explore our educational modules for a safer tomorrow through awareness and understanding.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
  
       <Team />


       </section>
      <Footer />
    </>
  );
};

export default About;
