import React from "react";

const Team = () => {
  const teamData = [
    {
      id:1,
      name: "John Patrick Yanson",
      position: "Software Engineer",
      motto: "Joko Buelva Gadingan forever",
      link:'',
    },
    {
      id:2,
      name: "Robin A. Reyes",
      position: "UI/UX Designer",
      motto: "Joko Buelva Gadingan Forever",
      link:'',
    },
    {
      id:3,
      name: "Mhel Christine Duenas",
      position: "Support Consultant",
      motto: "Joko Buelva Gadingan Forever",
      link:'',
    },
    {
      id:4,
      name: "Mark Hill Mirasol",
      position: "Director of Sales",
      motto: "Joko Buelva Gadingan Forever",
      link:'',
    },
    {
      id:5,
      name: "Gerald Ancheta",
      position: "Front-end Developer",
      motto: "Joko Buelva Gadingan Forever",
      link:'',
    },
    {
      id:6,
      name: "Kevin Serrano",
      position: "UI/UX Designer",
      motto: "Joko Buelva Gadingan Forever",
      link:'',
    },
    {
      id:7,
      name: "John Carl Aguibay",
      position: "Support Consultant",
      motto: "Joko Buelva Gadingan Forever",
      link:'',
    },
    {
      id:8,
      name: "Carl Bryan Gomez",
      position: "Project Manager",
      motto: "Joko Buelva Gadingan Forever",
      link:'',
    },
  ];
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl text-primary md:leading-tight  font-inter">
          Our Team
        </h2>
        <p className="mt-1 font-poppins text-gray ">
          Visionaries behind Innovation
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamData.map((team) => (
          <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray/20 shadow-md  " key={team.id}>
            <div className="flex items-center gap-x-4">
              <img
                className="rounded-full w-20 h-20"
                src=""
                alt="Image Description"
              />
              <div className="grow">
                <h3 className="font-medium text-black font-inter  ">
                  {team.name}
                </h3>
                <p className="text-sm font-poppins uppercase text-gray">
                  {team.position}
                </p>
              </div>
            </div>
            <p className="mt-3 text-black">{team.motto}</p>
            <div className="mt-3 space-x-1">
              <a
                className="inline-flex justify-center items-center text-gray border border-gray/20 shadow-md  w-8 h-8 rounded-md hover:text-black font-inter  hover:shadow-sm "
                href={team.link}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87 .87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92 .08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73 .54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15 .46 .55 .38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            </div>
          </div>
        ))}

        <a className="col-span-full lg:col-span-1 group flex flex-col justify-center text-center rounded-xl p-4 md:p-6 border border-dashed border-gray/20 shadow-md  hover:shadow-sm ">
          <h3 className="text-lg text-black font-inter  ">
            Contact us to Collaborate
          </h3>
          <div>
            <span className="inline-flex items-center gap-x-2 text-blue-600 group-hover:text-blue-700 ">
              Empowering Communities, Ensuring Resilience
              <svg
                className="w-2.5 h-2.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Team;
