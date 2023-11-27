import React from "react";
import { key1,key2,key3} from "../../assets";

const featureData = [
  {
    id: 1,
    image: key1,
    alt: "Emergency Guidelines Image Description",
    title: "Emergency Guidelines",
    description: "Learn Our Essential Protocols for Ensuring Your Safety During Emergencies"
  },
  {
    id: 2,
    image: key2,
    alt: "Safety Updates Image Description",
    title: "Safety Updates",
    description: "Provides real-time weather and disaster alerts for your safety."
  },
  {
    id: 3,
    image: key3,
    alt: "Immediate Assistance Image Description",
    title: "Immediate Assistance",
    description: "Agapay facilitates swift emergency alerts to authorities or contacts."
  }
];

const PersuadingUsers = () => {
  return (
    <section className="">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight font-inter text-primary">
            Discover Our Key Features
          </h2>
          <p className="mt-1 font-poppins">Explore how our services can benefit you.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureData.map((feature) => (
            <a
              key={feature.id}
              className="group flex flex-col h-full cursor-pointer border border-gray/20 shadow-md hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]"
            >
              <div className="aspect-w-16  aspect-h-11">
                <img className="w-full object-cover rounded-xl" src={feature.image} alt={feature.alt} />
              </div>
              <div className="my-6">
                <h3 className="text-xl font-semibold font-poppins text-primary">{feature.title}</h3>
                <p className="mt-5 font-inter">{feature.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersuadingUsers;
