import React, { useState } from "react";
import {
  volcano,
  tsunami,
  landslide,
  stormsurge,
  cyclone,
  flood,
} from "../../assets";
import { ArrowTrendingDownIcon, FireIcon } from "@heroicons/react/24/outline";
const Guidelines = () => {
  const [activeTab, setActiveTab] = useState("fire");
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleQuestionClick = (questionIndex) => {
    setActiveQuestion(questionIndex);
  };
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setActiveQuestion(null);
  };
  return (
    <>
      <section className=" body-font bg-subtlegray py-10">
        <div className="mb-10 text-center">
          <h1 className="sm:text-3xl text-2xl font-semibold text-primary mb-2 font-inter">
            Disaster Preparedness Guidelines
          </h1>
          <p className="font-poppins  text-gray text-lg">
            Protecting Your Home, Family, and Community
          </p>
        </div>
        <div className="container px-5 mx-auto flex flex-wrap flex-col ">
          <div className="flex mx-auto flex-wrap mb-10">
            {[
              "fire",
              "earthquake",
              "tsunami",
              "landslide",
              "flood",
              "tropicalCyclone",
              "volcanicEruption",
              "stormSurge",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 font-inter font-medium inline-flex items-center leading-none tracking-wider ${
                  activeTab === tab
                    ? "bg-graybg  border-primary text-primary rounded-t "
                    : "border-bordergray text-gray hover:text-black"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}{" "}
                {/* Capitalize the tab name */}
              </button>
            ))}
          </div>

          {/* Content for Fire tab */}
          {activeTab === "fire" && (
            <div className="flex sm:flex-row flex-col  w-full max-w-full   sm:max-w-7xl mx-auto border  border-gray/30 shadow-lg bg-white p-5 rounded-xl ">
              <div className=" w-auto  border-gray/20 border-r-2">
                <div className="h-full flex flex-col  rounded">
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(1)}
                  >
                    What are the common causes of fires?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(2)}
                  >
                    What is the importance of proper storage and disposal of
                    flammable materials?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(3)}
                  >
                    What should people do in case of a fire emergency?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(4)}
                  >
                    How should people exit buildings during a fire?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(5)}
                  >
                    What support is provided to fire-affected individuals and
                    families?
                  </button>
                </div>
              </div>
              <div className="p-4 w-full">
                <div className="h-full  rounded">
                  <div className={!activeQuestion ? "Info" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <FireIcon className="w-6 h-6" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        Fire
                      </h2>
                    </div>

                    <p className="leading-relaxed  font-poppins">
                      Fire is a natural phenomenon that occurs when a
                      combustible material reacts with an oxidizing agent,
                      usually oxygen, in the presence of heat. It releases
                      energy in the form of light and heat. Fires can occur in
                      various environments and are essential for human survival
                      as they provide warmth, light, and a means for cooking.
                      However, uncontrolled fires can be extremely dangerous,
                      leading to widespread destruction and loss of life.
                    </p>
                  </div>
                  <div className={activeQuestion === 1 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-16 sm:w-10 h-10  items-center justify-center rounded-full bg-primary/20 text-primary mr-4 hidden sm:inline-flex">
                        <FireIcon className="w-6 h-6" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2 ">
                        {" "}
                        What are the common causes of fires?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Electrical Faults.
                        <span className="text-black">
                          {" "}
                          Malfunctioning electrical systems and appliances can
                          lead to short circuits and fires.
                        </span>
                      </li>
                      <li>
                        Open Flames.
                        <span className="text-black">
                          {" "}
                          Unattended candles, matches, or lit gas stoves can
                          easily ignite nearby materials.
                        </span>
                      </li>
                      <li>
                        Smoking.
                        <span className="text-black">
                          {" "}
                          Improperly discarded cigarettes or careless smoking
                          can cause fires, especially in dry conditions.
                        </span>
                      </li>
                      <li>
                        Faulty Appliances.
                        <span className="text-black">
                          {" "}
                          Defective or poorly maintained household appliances
                          pose a fire hazard.
                        </span>
                      </li>
                      <li>
                        Human Negligence.
                        <span className="text-black">
                          {" "}
                          Inattentive cooking, leaving flammable materials near
                          heat sources, or improper use of fire-related items.
                        </span>
                      </li>
                      <li>
                        Weather Conditions.
                        <span className="text-black">
                          {" "}
                          Dry and hot weather can create a conducive environment
                          for wildfires, leading to their rapid spread.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 2 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-16 sm:w-10 h-10 hidden sm:inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <FireIcon className="w-6 h-6" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2 ">
                        Why store and dispose of flammable materials properly?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Fire Safety.
                        <span className="text-black">
                          {" "}
                          Flammable materials can easily catch fire and
                          contribute to the rapid spread of flames. Proper
                          storage ensures that these materials are kept in
                          designated areas away from potential ignition sources,
                          reducing the risk of fires.
                        </span>
                      </li>
                      <li>
                        Preventing Accidents.
                        <span className="text-black">
                          {" "}
                          Accidental spills or leaks of flammable materials can
                          lead to slips, trips, and falls. Proper storage
                          methods, such as using appropriate containers and
                          spill containment systems, can prevent such accidents.
                        </span>
                      </li>
                      <li>
                        Protecting Workers.
                        <span className="text-black">
                          {" "}
                          Workers handling flammable materials need to be aware
                          of the hazards and trained on safe handling
                          procedures. Adequate storage, labeling, and handling
                          practices protect employees from exposure and
                          accidents.
                        </span>
                      </li>
                      <li>
                        Preventing Explosions.
                        <span className="text-black">
                          {" "}
                          In addition to fire hazards, some flammable materials
                          can also create explosive atmospheres under certain
                          conditions. Proper storage and handling prevent the
                          buildup of explosive mixtures.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 3 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-16 sm:w-10 h-10 hidden sm:inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <FireIcon className="w-6 h-6" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2 ">
                        What should people do in case of a fire emergency?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        <span className="text-black">
                          {" "}
                          Stay calm and evacuate immediately.{" "}
                        </span>
                      </li>
                      <li>
                        <span className="text-black">
                          {" "}
                          Sound the fire alarm and call 888-25664, 160 / 911 for
                          assistance.{" "}
                        </span>
                      </li>
                      <li>
                        <span className="text-black">
                          {" "}
                          If you're in a building, use the stairs and do not use
                          elevators.
                        </span>
                      </li>
                      <li>
                        <span className="text-black">
                          {" "}
                          If there is smoke, get down low and cover your mouth
                          and nose with damp cloth.{" "}
                        </span>
                      </li>
                      <li>
                        <span className="text-black">
                          {" "}
                          If your clothes catch fire, STOP running, DROP to the
                          floor,and ROLL to put out the flames.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 4 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-16 sm:w-10 h-10 hidden sm:inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <FireIcon className="w-6 h-6" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2 ">
                        How should people exit buildings during a fire?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Alert Others.
                        <span className="text-black">
                          {" "}
                          If you discover a fire, immediately alert others by
                          shouting "Fire!" or activating the building's fire
                          alarm system, if available.
                        </span>
                      </li>
                      <li>
                        Check Doors.
                        <span className="text-black">
                          {" "}
                          Before opening a door, use the back of your hand to
                          touch it, its doorknob, and the space between the door
                          and the frame. If it's hot, don't open it. Heat is an
                          indicator of fire on the other side.
                        </span>
                      </li>
                      <li>
                        Crawl Low.
                        <span className="text-black">
                          {" "}
                          In areas filled with smoke, smoke rises, and cleaner
                          air is closer to the floor. Crawl low to avoid
                          inhaling smoke.
                        </span>
                      </li>
                      <li>
                        Do Not Use Elevators.
                        <span className="text-black">
                          {" "}
                          Elevators can become inoperable during a fire. Always
                          use the stairs.
                        </span>
                      </li>
                      <li>
                        Don't Re-enter.
                        <span className="text-black">
                          {" "}
                          Once you have safely exited, do not re-enter the
                          building for any reason. Wait for emergency responders
                          to arrive.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 5 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-16 sm:w-10 h-10 hidden sm:inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <FireIcon className="w-6 h-6" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2 ">
                        What support is provided to fire-affected individuals
                        and families?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        <span className="text-black">
                          {" "}
                          Emergency shelters for temporary housing
                        </span>
                      </li>
                      <li>
                        <span className="text-black">
                          {" "}
                          Financial assistance and aid programs
                        </span>
                      </li>
                      <li>
                        <span className="text-black">
                          {" "}
                          Counseling services for emotional support
                        </span>
                      </li>
                      <li>
                        <span className="text-black">
                          {" "}
                          Access to medical aid and healthcare services
                        </span>
                      </li>
                      <li>
                        <span className="text-black">
                          {" "}
                          Collaborative efforts involving NGOs, government
                          agencies, and community organizations to facilitate
                          support and recovery initiatives.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Content for Earthquake tab */}
          {activeTab === "earthquake" && (
            <div className="flex sm:flex-row flex-col  w-full max-w-full   sm:max-w-7xl mx-auto border  border-gray/30 shadow-lg bg-white p-5 rounded-xl ">
           <div className=" w-auto  border-gray/20 border-r-2">
                <div className="h-full flex flex-col rounded">
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(1)}
                  >
                    What are the immediate actions to take when an earthquake
                    strikes?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(2)}
                  >
                    Where are the safest locations in buildings during shaking?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(3)}
                  >
                    What safety measures to take for gas, water, and electrical
                    utilities?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(4)}
                  >
                    What precautions should be taken for people with
                    disabilities or special needs?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(5)}
                  >
                    What to do after the shaking stops?
                  </button>
                </div>
              </div>
              <div className="p-4 w-full">
                <div className="h-full rounded">
                  <div className={!activeQuestion ? "Info" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <ArrowTrendingDownIcon className="w-6 h-6" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-brown mb-2">
                        Earthquake
                      </h2>
                    </div>

                    <p className="leading-relaxed  font-poppins">
                      An earthquake is a natural geological phenomenon
                      characterized by the sudden release of energy in the
                      Earth's crust, resulting in seismic waves. This release of
                      energy is typically caused by the movement of tectonic
                      plates beneath the Earth's surface. When these plates
                      collide, pull apart, or slide against each other, stress
                      builds up in the Earth's crust. When this stress is
                      suddenly released, it generates seismic waves that cause
                      the ground to shake. Earthquakes can vary in magnitude,
                      from imperceptible tremors to devastating events capable
                      of causing widespread destruction, landslides, tsunamis,
                      and loss of life.
                    </p>
                  </div>
                  <div className={activeQuestion === 1 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-10 hidden sm:inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <ArrowTrendingDownIcon className="w-6 h-6" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        {" "}
                        What are the immediate actions to take when an
                        earthquake strikes?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Stay Indoors.
                        <span className="text-black">
                          {" "}
                          If you are indoors, stay inside. Do not run outside
                          during the shaking, as you might be injured by falling
                          debris or glass.
                        </span>
                      </li>
                      <li>
                        Stay Away from Windows.
                        <span className="text-black">
                          {" "}
                          Move away from windows, mirrors, glass, and other
                          items that could shatter during the earthquake.
                        </span>
                      </li>
                      <li>
                        If You Are Outdoors.
                        <span className="text-black">
                          {" "}
                          Move to an open area away from buildings,
                          streetlights, utility wires, and trees. These
                          structures can collapse during the quake.
                        </span>
                      </li>
                      <li>
                        If You Are Driving.
                        <span className="text-black">
                          {" "}
                          Pull over to a safe area away from buildings, bridges,
                          and overpasses. Stay inside the vehicle until the
                          shaking stops.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 2 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 hidden sm:inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <ArrowTrendingDownIcon className="w-6 h-6" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        Where are the safest locations in buildings during
                        shaking?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Under Sturdy Furniture.
                        <span className="text-black">
                          {" "}
                          Take cover under a sturdy piece of furniture such as a
                          table, desk, or workbench. Hold on to it to shield
                          yourself from falling objects and debris.
                        </span>
                      </li>
                      <li>
                        Against Interior Walls.
                        <span className="text-black">
                          {" "}
                          If there is no furniture to take cover under, move
                          against an interior wall away from windows, mirrors,
                          glass, and heavy objects that could fall. Protect your
                          head and neck with your arms.
                        </span>
                      </li>
                      <li>
                        In Corners of Rooms.
                        <span className="text-black">
                          {" "}
                          If there are no interior walls, take cover in corners
                          of rooms. Cover your head and neck with your arms and
                          be aware of potential falling objects.
                        </span>
                      </li>
                      <li>
                        If You Are Driving.
                        <span className="text-black">
                          {" "}
                          Pull over to a safe area away from buildings, bridges,
                          and overpasses. Stay inside the vehicle until the
                          shaking stops.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 3 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 hidden sm:inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <ArrowTrendingDownIcon className="w-6 h-6" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        What safety measures to take for gas, water, and
                        electrical utilities?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Shut Off Gas Supply.
                        <span className="text-black">
                          {" "}
                          If you smell gas or suspect a leak, turn off the gas
                          supply at the main valve. Familiarize yourself with
                          the location of the gas shutoff valve in advance.
                        </span>
                      </li>
                      <li>
                        Avoid Using Open Flames.
                        <span className="text-black">
                          {" "}
                          Do not use matches, lighters, or any open flames if
                          you suspect a gas leak, as gas is highly flammable.
                        </span>
                      </li>
                      <li>
                        Beware of Contamination.
                        <span className="text-black">
                          {" "}
                          Be cautious of possible water contamination due to
                          damaged sewage or water lines. Boil water before using
                          it for drinking or cooking until authorities declare
                          it safe.
                        </span>
                      </li>
                      <li>
                        Turn Off Electricity.
                        <span className="text-black">
                          {" "}
                          If you notice sparks, damaged wiring, or smell
                          burning, turn off the electricity at the main circuit
                          breaker or fuse box.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 4 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 hidden sm:inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <ArrowTrendingDownIcon className="w-6 h-6" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        {" "}
                        What precautions should be taken for people with
                        disabilities or special needs?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Communication.
                        <span className="text-black">
                          {" "}
                          Ensure that individuals with hearing impairments have
                          access to emergency alerts through visual or vibrating
                          alerts. For those with speech impairments, establish
                          clear communication methods such as text messaging or
                          using communication boards.
                        </span>
                      </li>
                      <li>
                        Mobility Assistance.
                        <span className="text-black">
                          {" "}
                          Have a mobility aid readily available, such as a
                          wheelchair, walker, cane, or crutches. Practice
                          evacuation techniques regularly to ensure a quick and
                          safe exit during emergencies.
                        </span>
                      </li>
                      <li>
                        Assistive Animals.
                        <span className="text-black">
                          {" "}
                          If the individual relies on a service animal, ensure
                          the animal's safety and include pet supplies in the
                          emergency kit, such as food, water, and a leash.
                        </span>
                      </li>
                      <li>
                        Emergency Contacts.
                        <span className="text-black">
                          {" "}
                          Keep a list of emergency contacts, including family
                          members, caregivers, neighbors, and medical
                          professionals, in a waterproof container in the
                          emergency kit.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 5 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 hidden sm:inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <ArrowTrendingDownIcon className="w-6 h-6" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        What to do after the shaking stops?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Remain Calm.
                        <span className="text-black">
                          {" "}
                          Stay calm and reassure others, especially children and
                          elderly individuals. Take a moment to collect your
                          thoughts before taking action.
                        </span>
                      </li>
                      <li>
                        Check for Injuries.
                        <span className="text-black">
                          {" "}
                          Check yourself and others for injuries. Administer
                          first aid for minor injuries if you are trained to do
                          so. For serious injuries, call for emergency medical
                          assistance immediately.
                        </span>
                      </li>
                      <li>
                        Be Aware of Aftershocks.
                        <span className="text-black">
                          {" "}
                          Be prepared for aftershocks, which are smaller
                          earthquakes that can follow the main quake. Take cover
                          under a sturdy piece of furniture or against an
                          interior wall if shaking resumes.
                        </span>
                      </li>
                      <li>
                        Conserve Resources.
                        <span className="text-black">
                          {" "}
                          Conserve water, food, and other supplies, as you may
                          not know when regular services will be restored.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Tsunami */}
          {activeTab === "tsunami" && (
            <div className="flex sm:flex-row flex-col  w-full max-w-full   sm:max-w-7xl mx-auto border  border-gray/30 shadow-lg bg-white p-5 rounded-xl ">
          <div className=" w-auto  border-gray/20 border-r-2">
                <div className="h-full flex flex-col rounded">
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(1)}
                  >
                    What are the natural warning signs of an impending tsunami?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(2)}
                  >
                    What should residents do when they receive a tsunami
                    warning?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(3)}
                  >
                    How should residents prepare their homes for a possible
                    tsunami?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(4)}
                  >
                    What should residents include in their tsunami emergency
                    kit?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(5)}
                  >
                    How do local authorities communicate tsunami warnings to the
                    community?
                  </button>
                </div>
              </div>
              <div className="p-4 w-full">
                <div className="h-full rounded">
                  <div className={!activeQuestion ? "Info" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={tsunami} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        Tsunami
                      </h2>
                    </div>

                    <p className="leading-relaxed  font-poppins">
                      A tsunami is a series of large ocean waves, commonly
                      referred to as tidal waves, primarily caused by underwater
                      disturbances such as earthquakes, volcanic eruptions,
                      landslides, or meteorite impacts. These powerful waves can
                      travel across entire ocean basins, reaching speeds of up
                      to 700 kilometers per hour (500 miles per hour) in the
                      open ocean.
                    </p>
                  </div>
                  <div className={activeQuestion === 1 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={tsunami} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        {" "}
                        What are the natural warning signs of an impending
                        tsunami?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Earthquake.
                        <span className="text-black">
                          {" "}
                          A significant undersea earthquake, especially one with
                          a magnitude over 7.0, can generate a tsunami. If you
                          feel strong and prolonged ground shaking, it could be
                          a warning sign.
                        </span>
                      </li>
                      <li>
                        Unusual Sea Behavior.
                        <span className="text-black">
                          {" "}
                          Sudden and unusual changes in sea level, such as a
                          noticeable and rapid rise or fall of coastal waters,
                          may indicate an approaching tsunami.
                        </span>
                      </li>
                      <li>
                        Receding Water.
                        <span className="text-black">
                          {" "}
                          The sudden withdrawal of the ocean, exposing the
                          seafloor, is a strong indicator of an imminent
                          tsunami. If you see the water receding unusually far
                          and fast from the shoreline, it's a clear warning to
                          move to higher ground immediately.
                        </span>
                      </li>
                      <li>
                        Foamy Water.
                        <span className="text-black">
                          {" "}
                          Unusual foamy patches on the water surface, even when
                          the sea appears calm, can indicate turbulence caused
                          by an underwater disturbance, possibly leading to a
                          tsunami.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 2 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={tsunami} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        What should residents do when they receive a tsunami
                        warning?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Take the Warning Seriously.
                        <span className="text-black">
                          {" "}
                          Treat all tsunami warnings as real threats. Even if
                          the warning is a precaution, it's better to be on the
                          side of caution.
                        </span>
                      </li>
                      <li>
                        Stay Informed.
                        <span className="text-black">
                          {" "}
                          Listen to local news broadcasts, emergency radio
                          stations, or weather apps for updates and instructions
                          from local authorities. Official sources provide the
                          most accurate and timely information.
                        </span>
                      </li>
                      <li>
                        Follow Evacuation Orders.
                        <span className="text-black">
                          {" "}
                          If authorities issue an evacuation order, follow it
                          immediately. Evacuate to higher ground or inland as
                          directed. Use designated evacuation routes and avoid
                          shortcuts, which might be unsafe.
                        </span>
                      </li>
                      <li>
                        Avoid Low-Lying Areas.
                        <span className="text-black">
                          {" "}
                          Stay away from beaches, coastal areas, riverbanks, and
                          estuaries. Tsunamis can inundate these areas quickly
                          and with great force.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 3 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={tsunami} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        How should residents prepare their homes for a possible
                        tsunami?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Educate Family Members.
                        <span className="text-black">
                          {" "}
                          Ensure everyone in the household is aware of tsunami
                          risks, warning signs, evacuation routes, and emergency
                          procedures.
                        </span>
                      </li>
                      <li>
                        Secure Important Documents.
                        <span className="text-black">
                          {" "}
                          Keep important documents such as identification,
                          insurance papers, medical records, and deeds in a
                          waterproof and easily accessible container.
                        </span>
                      </li>
                      <li>
                        Know Safe Zones.
                        <span className="text-black">
                          {" "}
                          Identify safe zones within your home, such as upper
                          floors or reinforced rooms, where you can retreat if
                          you cannot evacuate in time.
                        </span>
                      </li>
                      <li>
                        Emergency Contacts.
                        <span className="text-black">
                          {" "}
                          Keep a list of emergency contacts, including local
                          authorities, utility companies, and family members, in
                          your emergency kit.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 4 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={tsunami} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        {" "}
                        What should residents include in their tsunami emergency
                        kit?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Water.
                        <span className="text-black">
                          {" "}
                          One gallon of water per person per day for at least
                          three days, for drinking and sanitation.
                        </span>
                      </li>
                      <li>
                        Non-Perishable Food.
                        <span className="text-black">
                          {" "}
                          A three-day supply of non-perishable food items such
                          as canned goods, granola bars, dried fruits, and nuts.
                          Don't forget a manual can opener.
                        </span>
                      </li>
                      <li>
                        First Aid Kit.
                        <span className="text-black">
                          {" "}
                          A basic first aid kit that includes bandages,
                          antiseptic wipes, adhesive tape, tweezers, scissors,
                          sterile gauze, instant cold packs, and any necessary
                          prescription medications.
                        </span>
                      </li>
                      <li>
                        Medications.
                        <span className="text-black">
                          {" "}
                          A supply of prescription medications for at least one
                          week, along with a list of prescriptions, dosages, and
                          allergies.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 5 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={tsunami} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        How do local authorities communicate tsunami warnings to
                        the community?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Mobile Alerts.
                        <span className="text-black">
                          {" "}
                          Cell broadcast systems and emergency alert apps
                          deliver text messages or push notifications directly
                          to mobile phones within the affected area. These
                          messages contain important information, including
                          evacuation instructions and safety guidelines.
                        </span>
                      </li>
                      <li>
                        Social Media and Websites.
                        <span className="text-black">
                          {" "}
                          Local government social media accounts, official
                          websites, and dedicated emergency management websites
                          provide real-time updates and instructions. Social
                          media platforms allow for rapid dissemination of
                          information to a broad audience.
                        </span>
                      </li>
                      <li>
                        Television and Radio Broadcasts.
                        <span className="text-black">
                          {" "}
                          Emergency information is broadcasted through
                          television and radio stations, including updates on
                          the situation, evacuation routes, and emergency
                          contacts.
                        </span>
                      </li>
                      <li>
                        Emergency Response Teams.
                        <span className="text-black">
                          {" "}
                          Emergency response personnel, such as police officers
                          and firefighters, may use loudspeakers to communicate
                          important information to residents in specific
                          neighborhoods.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* ... Earthquake contents ... */}
            </div>
          )}

          {/* Landslide */}
          {activeTab === "landslide" && (
            <div className="flex sm:flex-row flex-col  w-full max-w-full   sm:max-w-7xl mx-auto border  border-gray/30 shadow-lg bg-white p-5 rounded-xl ">
        <div className=" w-auto  border-gray/20 border-r-2">
                <div className="h-full flex flex-col rounded">
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(1)}
                  >
                    What Causes Landslides?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(2)}
                  >
                    How to Identify Potential Landslide Hazard Areas?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(3)}
                  >
                    What Precautionary Measures Can Individuals Take?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(4)}
                  >
                    What to Do During a Landslide Warning?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(5)}
                  >
                    What to Do After a Landslide Occurs?
                  </button>
                </div>
              </div>
              <div className="p-4 w-full">
                <div className="h-full rounded">
                  <div className={!activeQuestion ? "Info" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={landslide} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        Landslide
                      </h2>
                    </div>

                    <p className="leading-relaxed  font-poppins">
                      A landslide is a geological phenomenon involving the
                      movement of a mass of rock, earth, or debris down a slope.
                      This movement can be slow and gradual or sudden and rapid,
                      resulting in significant changes in the landscape.
                      Landslides occur when the force of gravity exceeds the
                      strength of the materials holding the slope together,
                      causing them to collapse and move downhill.
                    </p>
                  </div>
                  <div className={activeQuestion === 1 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 hidden sm:inline-flex  items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={landslide} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        {" "}
                        What Causes Landslides?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Heavy Rainfall.
                        <span className="text-black">
                          {" "}
                          Prolonged or intense rainfall can saturate the soil,
                          increasing its weight and reducing its cohesion. This
                          added weight can trigger landslides, especially on
                          steep slopes.
                        </span>
                      </li>
                      <li>
                        Steep Slopes.
                        <span className="text-black">
                          {" "}
                          Slopes with a steep incline are more susceptible to
                          landslides because the force of gravity is stronger,
                          making it easier for materials to slide downhill.
                        </span>
                      </li>
                      <li>
                        Soil Erosion.
                        <span className="text-black">
                          {" "}
                          Erosion, whether natural or human-induced, can remove
                          the protective layer of vegetation and soil cover,
                          exposing the underlying rock or weak soil, making it
                          susceptible to landslides.
                        </span>
                      </li>
                      <li>
                        Human Activities.
                        <span className="text-black">
                          {" "}
                          Human-induced factors such as deforestation, mining,
                          construction activities, excavation, and poor land-use
                          planning can disturb the natural balance of slopes.
                          Removing vegetation, altering drainage patterns, and
                          excavating hillsides can increase the likelihood of
                          landslides.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 2 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 hidden sm:inline-flex  items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={landslide} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        How to Identify Potential Landslide Hazard Areas?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Slope Inclination.
                        <span className="text-black">
                          {" "}
                          Steep slopes are more susceptible to landslides.
                          Identify areas with slopes greater than 15 degrees.
                        </span>
                      </li>
                      <li>
                        Healthy vs. Dying Vegetation.
                        <span className="text-black">
                          {" "}
                          Healthy, lush vegetation stabilizes slopes. Watch out
                          for bare slopes or dying trees and plants, suggesting
                          erosion and instability.
                        </span>
                      </li>
                      <li>
                        Look for Cracks and Surface Changes.
                        <span className="text-black">
                          {" "}
                          Large cracks on the ground or structures suggest
                          ground movement and potential landslides. Deposits of
                          sediment or debris at the base of slopes indicate past
                          landslide events.
                        </span>
                      </li>
                      <li>
                        Consult Experts.
                        <span className="text-black">
                          {" "}
                          Seek assistance from geologists, hydrologists, and
                          engineers experienced in landslide assessment. Experts
                          can conduct detailed surveys and analyses to identify
                          potential hazard areas accurately.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 3 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 hidden sm:inline-flex  items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={landslide} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        What Precautionary Measures Can Individuals Take?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Stay Informed.
                        <span className="text-black">
                          {" "}
                          Stay updated with weather forecasts and landslide
                          warnings from local authorities. Be aware of the signs
                          of landslides, such as ground cracks, tilting trees,
                          and unusual sounds.
                        </span>
                      </li>
                      <li>
                        Avoid High-Risk Areas.
                        <span className="text-black">
                          {" "}
                          Do not build or reside near steep slopes, cliffs, or
                          drainage channels. Avoid construction at the base of
                          hillsides or beneath overhangs.
                        </span>
                      </li>
                      <li>
                        Maintain Drainage Systems.
                        <span className="text-black">
                          {" "}
                          Ensure proper drainage around your property to direct
                          water away from slopes. Install and maintain gutters,
                          downspouts, and drainage pipes to prevent water
                          accumulation.
                        </span>
                      </li>
                      <li>
                        Proper Waste Disposal.
                        <span className="text-black">
                          {" "}
                          Do not dispose of waste or debris on slopes or cliffs.
                          Dispose of garbage and debris properly to prevent
                          accumulation on vulnerable terrain.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 4 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 hidden sm:inline-flex  items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={landslide} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        {" "}
                        What to Do During a Landslide Warning?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Stay Calm and Alert.
                        <span className="text-black">
                          {" "}
                          Remain calm and attentive to official alerts and
                          warnings broadcasted on radio, TV, or emergency
                          notification systems.
                        </span>
                      </li>
                      <li>
                        Evacuate if Necessary.
                        <span className="text-black">
                          {" "}
                          If authorities issue an evacuation order, follow it
                          promptly and move to higher ground or designated safe
                          locations. Avoid riverbanks, steep slopes, and
                          low-lying areas.
                        </span>
                      </li>
                      <li>
                        Listen to Authorities.
                        <span className="text-black">
                          {" "}
                          Follow the instructions of local emergency services
                          and law enforcement. Comply with evacuation orders and
                          travel routes provided by authorities.
                        </span>
                      </li>
                      <li>
                        Gather Emergency Supplies.
                        <span className="text-black">
                          {" "}
                          Grab your emergency kit, which should include water,
                          non-perishable food, first aid supplies, flashlight,
                          and essential documents. Take necessary medications
                          and important personal items.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 5 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 hidden sm:inline-flex  items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={landslide} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        {" "}
                        What to Do After a Landslide Occurs?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Ensure Safety.
                        <span className="text-black">
                          {" "}
                          Stay away from the slide area and unstable slopes to
                          avoid secondary landslides. Be cautious of additional
                          landslides, mudflows, or flooding, especially in the
                          aftermath of heavy rainfall.
                        </span>
                      </li>
                      <li>
                        Check for Injuries.
                        <span className="text-black">
                          {" "}
                          Assess yourself, family members, and neighbors for
                          injuries. Provide first aid if necessary and seek
                          medical help for serious injuries.
                        </span>
                      </li>
                      <li>
                        Secure Utilities.
                        <span className="text-black">
                          {" "}
                          Check for gas leaks, damaged electrical wiring, and
                          water line breaks. If you find any issues, shut off
                          the respective utilities and contact professionals for
                          repairs. Avoid using open flames, including candles or
                          lighters, until you are certain there are no gas
                          leaks.
                        </span>
                      </li>
                      <li>
                        Seek Support.
                        <span className="text-black">
                          {" "}
                          Reach out to local disaster relief organizations,
                          government agencies, or community groups for
                          assistance. Support neighbors and community members
                          who may need help in the recovery process.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* ... Earthquake contents ... */}
            </div>
          )}

          {/* flood */}
          {activeTab === "flood" && (
            <div className="flex sm:flex-row flex-col  w-full max-w-full   sm:max-w-7xl mx-auto border  border-gray/30 shadow-lg bg-white p-5 rounded-xl ">
            <div className=" w-auto  border-gray/20 border-r-2">
                <div className="h-full flex flex-col  rounded">
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(1)}
                  >
                    What Are the Common Causes of Floods?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(2)}
                  >
                    How Can Residents Prepare for an Incoming Flood Warning?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(3)}
                  >
                    What Are the Immediate Actions to Take After a Flood Occurs?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(4)}
                  >
                    How Can Communities Work Together to Mitigate Flood Risks?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(5)}
                  >
                    What Should Residents Include in Their Emergency Flood Kit?
                  </button>
                </div>
              </div>
              <div className="p-4 w-full">
                <div className="h-full rounded">
                  <div className={!activeQuestion ? "Info" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={flood} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        Flood
                      </h2>
                    </div>

                    <p className="leading-relaxed  font-poppins">
                      A flood is an overflow of water that submerges land that
                      is usually dry. Floods can occur due to various factors,
                      including heavy rainfall, snowmelt, storm surges, or the
                      failure of dams or levees. Floods can cause widespread
                      damage to infrastructure, homes, and agriculture. They
                      often lead to the displacement of people, loss of lives,
                      and disruption of communities. Floods can occur slowly
                      over time, such as riverine floods, or suddenly with
                      little or no warning, as in flash floods. Floods are a
                      natural part of the Earth's hydrological cycle, but their
                      impact can be mitigated through proper planning,
                      infrastructure, and disaster preparedness measures.
                    </p>
                  </div>
                  <div className={activeQuestion === 1 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 hidden sm:inline-flex  items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={flood} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        {" "}
                        What Are the Common Causes of Floods?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Heavy Rainfall.
                        <span className="text-black">
                          {" "}
                          Intense or prolonged rainfall can lead to saturation
                          of the soil and overflowing rivers or streams.
                        </span>
                      </li>
                      <li>
                        Dam or Levee Failures.
                        <span className="text-black">
                          {" "}
                          Failure or breach of dams, levees, or other water
                          control structures can result in rapid and extensive
                          flooding downstream.
                        </span>
                      </li>
                      <li>
                        Urbanization.
                        <span className="text-black">
                          {" "}
                          Urban development can reduce natural drainage systems,
                          leading to increased surface runoff and localized
                          flooding.
                        </span>
                      </li>
                      <li>
                        Deforestation.
                        <span className="text-black">
                          {" "}
                          Removal of trees and vegetation reduces soil stability
                          and absorption, increasing the likelihood of runoff
                          and flooding.
                        </span>
                      </li>
                      <li>
                        River Overflow.
                        <span className="text-black">
                          {" "}
                          Rivers can overflow their banks due to excessive
                          rainfall or snowmelt, flooding nearby areas.
                        </span>
                      </li>
                      <li>
                        Ground Saturation.
                        <span className="text-black">
                          {" "}
                          Already saturated ground due to previous rainfall can
                          quickly lead to runoff during subsequent rain, causing
                          flooding.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 2 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 hidden sm:inline-flex  items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={flood} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        How Can Residents Prepare for an Incoming Flood Warning?{" "}
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Develop an Evacuation Plan.
                        <span className="text-black">
                          {" "}
                          Plan evacuation routes to higher ground and identify
                          multiple ways to reach safe locations. Establish a
                          communication plan with family members, ensuring
                          everyone knows where to go and how to contact each
                          other.
                        </span>
                      </li>
                      <li>
                        Secure Important Documents.
                        <span className="text-black">
                          {" "}
                          Store important documents like insurance policies,
                          identification, and medical records in a waterproof
                          and easily accessible container.
                        </span>
                      </li>
                      <li>
                        Protect Your Home.
                        <span className="text-black">
                          {" "}
                          Clear gutters, drains, and downspouts to allow water
                          to flow away from your home. Use sandbags to create
                          barriers and divert water away from your property.
                          Elevate electrical appliances and utilities above
                          potential flood levels.
                        </span>
                      </li>
                      <li>
                        Emergency Contacts.
                        <span className="text-black">
                          {" "}
                          Keep a list of emergency contact numbers, including
                          local authorities, utilities, and insurance providers.
                        </span>
                      </li>
                      <li>
                        Community Involvement.
                        <span className="text-black">
                          {" "}
                          Participate in community drills and preparedness
                          programs to stay informed and aware of local
                          resources. Support neighbors, especially those who may
                          need assistance, such as the elderly or individuals
                          with disabilities.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 3 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 hidden sm:inline-flex  items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={flood} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        {" "}
                        What Are the Immediate Actions to Take After a Flood
                        Occurs?{" "}
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Begin Cleanup Safely.
                        <span className="text-black">
                          {" "}
                          Wear appropriate protective gear such as gloves,
                          masks, and boots before entering your home. Remove
                          water and mud from your home to prevent further
                          damage. Use pumps, wet vacs, and dehumidifiers to dry
                          out the affected area. Dispose of contaminated items
                          that cannot be cleaned and disinfected.
                        </span>
                      </li>
                      <li>
                        Prevent Mold Growth.
                        <span className="text-black">
                          {" "}
                          Mold can develop quickly in damp environments.
                          Thoroughly dry out your home and belongings to prevent
                          mold growth. Clean and disinfect everything that got
                          wet to inhibit mold growth.
                        </span>
                      </li>
                      <li>
                        Be Cautious with Food and Water.
                        <span className="text-black">
                          {" "}
                          Discard all food and water that came into contact with
                          floodwaters, including canned goods and sealed
                          containers. Use only bottled or boiled water until
                          your water supply is declared safe.
                        </span>
                      </li>
                      <li>
                        Seek Assistance.
                        <span className="text-black">
                          {" "}
                          Reach out to local authorities, disaster relief
                          organizations, or community groups for assistance with
                          cleanup and recovery efforts.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 4 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 hidden sm:inline-flex  items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={flood} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        How Can Communities Work Together to Mitigate Flood
                        Risks?{" "}
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Floodplain Management
                        <span className="text-black">
                          {" "}
                          Develop and enforce land use regulations that restrict
                          construction in flood-prone areas. Preserve and
                          restore natural floodplains, wetlands, and green
                          spaces, which act as natural buffers against flooding.
                        </span>
                      </li>
                      <li>
                        Early Warning Systems.
                        <span className="text-black">
                          {" "}
                          Establish and maintain early warning systems to alert
                          residents about impending floods. Utilize sirens, text
                          alerts, social media, and other communication channels
                          to disseminate timely information.
                        </span>
                      </li>
                      <li>
                        Community Education
                        <span className="text-black">
                          {" "}
                          Conduct public awareness campaigns to educate
                          residents about flood risks, preparedness, and
                          evacuation plans. Provide resources like brochures and
                          workshops to inform residents about flood insurance
                          and safety measures.
                        </span>
                      </li>
                      <li>
                        Ecosystem Restoration.
                        <span className="text-black">
                          {" "}
                          Invest in ecosystem restoration projects, including
                          reforestation and wetland restoration. Healthy
                          ecosystems absorb rainwater, reduce erosion, and
                          mitigate flooding.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 5 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 hidden sm:inline-flex  items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={flood} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        What Should Residents Include in Their Emergency Flood
                        Kit?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Medications.
                        <span className="text-black">
                          {" "}
                          A seven-day supply of prescription medications and any
                          necessary medical supplies.
                        </span>
                      </li>
                      <li>
                        Personal Hygiene Items.
                        <span className="text-black">
                          {" "}
                          Soap, hand sanitizer, toothbrush, toothpaste, feminine
                          hygiene products, and moist towelettes.
                        </span>
                      </li>
                      <li>
                        Flashlights and Batteries.
                        <span className="text-black">
                          {" "}
                          Flashlights with extra batteries to provide
                          illumination during power outages.
                        </span>
                      </li>
                      <li>
                        Water.
                        <span className="text-black">
                          {" "}
                          One gallon of water per person per day for at least
                          three days, for drinking and sanitation.
                        </span>
                      </li>
                      <li>
                        Food.
                        <span className="text-black">
                          {" "}
                          A three-day supply of non-perishable food items such
                          as canned goods, granola bars, dried fruits, and nuts.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* ... Earthquake contents ... */}
            </div>
          )}

          {/* Tropical Cyclone */}
          {activeTab === "tropicalCyclone" && (
            <div className="flex sm:flex-row flex-col  w-full max-w-full   sm:max-w-7xl mx-auto border  border-gray/30 shadow-lg bg-white p-5 rounded-xl ">
         <div className=" w-auto  border-gray/20 border-r-2">
                <div className="h-full flex flex-col rounded">
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(1)}
                  >
                    What are the signs of an approaching tropical cyclone?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(2)}
                  >
                    How can individuals and communities prepare for a tropical
                    cyclone?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(3)}
                  >
                    What safety measures should be taken during a tropical
                    cyclone?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(4)}
                  >
                    What are the specific precautions for boaters and fishermen
                    during tropical cyclones?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(5)}
                  >
                    What are the common post-cyclone hazards, and how can they
                    be mitigated?
                  </button>
                </div>
              </div>
              <div className="p-4 w-full">
                <div className="h-full rounded">
                  <div className={!activeQuestion ? "Info" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={cyclone} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        Tropical Cyclone
                      </h2>
                    </div>

                    <p className="leading-relaxed  font-poppins">
                      A tropical cyclone is a powerful and organized system of
                      clouds and thunderstorms with a defined circulation
                      pattern that forms over warm tropical and subtropical
                      oceans. This weather phenomenon is characterized by low
                      atmospheric pressure at its center, which is surrounded by
                      strong winds and heavy rainfall. Tropical cyclones can
                      cause significant damage due to their strong winds, storm
                      surges, and heavy rainfall, leading to flooding,
                      landslides, and coastal erosion.
                    </p>
                  </div>
                  <div className={activeQuestion === 1 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 hidden sm:inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={cyclone} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        {" "}
                        What are the signs of an approaching tropical cyclone?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Changes in Sky and Cloud Patterns.
                        <span className="text-black">
                          {" "}
                          Unusual cloud formations, including the presence of
                          dark, towering clouds. A sudden increase in the number
                          of clouds and their thickness, leading to overcast
                          skies.
                        </span>
                      </li>
                      <li>
                        Changes in Wind Patterns.
                        <span className="text-black">
                          {" "}
                          A noticeable increase in wind speed, which may become
                          gusty. Changes in wind direction, especially if winds
                          begin to blow consistently from a single direction.
                        </span>
                      </li>
                      <li>
                        Changes in Sea Conditions.
                        <span className="text-black">
                          {" "}
                          Unusually high waves near the shore. Unusually rough
                          seas, with waves becoming choppy and disorganized.
                          Rapid increase in wave heights and intensity of wave
                          action.
                        </span>
                      </li>
                      <li>
                        Changes in Weather Conditions.
                        <span className="text-black">
                          {" "}
                          Persistent heavy rainfall, often with thunder and
                          lightning. Rapid drop in barometric pressure,
                          indicating a developing low-pressure system. Drastic
                          changes in humidity levels, often leading to muggy or
                          oppressive conditions.
                        </span>
                      </li>
                      <li>
                        Weather Warnings and Advisories.
                        <span className="text-black">
                          {" "}
                          Official weather advisories and warnings issued by
                          meteorological agencies indicating the potential
                          formation of a tropical cyclone.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 2 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 hidden sm:inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={cyclone} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        {" "}
                        How can individuals and communities prepare for a
                        tropical cyclone?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Stay Calm and Reassure Others.
                        <span className="text-black">
                          {" "}
                          Remain calm and reassure others, especially children
                          and elderly family members. Be ready to help neighbors
                          who may require assistance.
                        </span>
                      </li>
                      <li>
                        Safety for Boats and Vehicles.
                        <span className="text-black">
                          {" "}
                          If you own a boat, move it to a safe harbor or secure
                          it with strong moorings. Do not drive through flooded
                          areas, as water depth and currents can be deceiving.
                        </span>
                      </li>
                      <li>
                        Protect Important Documents.
                        <span className="text-black">
                          {" "}
                          Store important documents (such as passports,
                          insurance policies, and medical records) in a
                          waterproof container or digitally back them up.
                        </span>
                      </li>
                      <li>
                        Develop an Evacuation Plan.
                        <span className="text-black">
                          {" "}
                          Know the evacuation routes and shelters in your area.
                          Plan how you will evacuate if required, and establish
                          a communication plan with family members. Arrange
                          transportation if you do not have a vehicle.
                        </span>
                      </li>
                      <li>
                        Create an Emergency Kit.
                        <span className="text-black">
                          {" "}
                          Prepare an emergency kit with essential supplies,
                          including water, non-perishable food, medications,
                          first aid items, flashlights, batteries, and important
                          documents. Include items for hygiene, such as
                          sanitizers, masks, and personal hygiene products.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 3 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 hidden sm:inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={cyclone} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        {" "}
                        What safety measures should be taken during a tropical
                        cyclone?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Stay Indoors.
                        <span className="text-black">
                          {" "}
                          Remain inside a sturdy building, away from windows and
                          glass doors. Seek shelter in a small, windowless
                          interior room on the lowest floor, such as a bathroom
                          or closet.
                        </span>
                      </li>
                      <li>
                        Avoid Flooded Areas.
                        <span className="text-black">
                          {" "}
                          Stay away from floodwaters. Avoid walking or driving
                          through flooded streets, as the water may be deeper
                          and swifter than it appears.
                        </span>
                      </li>
                      <li>
                        Be Cautious of Power Lines.
                        <span className="text-black">
                          {" "}
                          Avoid contact with downed power lines, as they may
                          still be live and extremely dangerous. Do not use
                          electrical appliances or landline phones during the
                          storm to prevent electric shock.
                        </span>
                      </li>
                      <li>
                        Postpone Travel.
                        <span className="text-black">
                          {" "}
                          Avoid traveling during the storm. Roads may be
                          flooded, blocked, or damaged.
                        </span>
                      </li>
                      <li>
                        Avoid Candles.
                        <span className="text-black">
                          {" "}
                          Use flashlights instead of candles to prevent fire
                          hazards
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 4 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-10 hidden sm:inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={cyclone} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        {" "}
                        What are the specific precautions for boaters and
                        fishermen during tropical cyclones?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Secure Your Boat.
                        <span className="text-black">
                          {" "}
                          Move your boat to a safe harbor well in advance of the
                          storm's arrival. If hauling out the boat is not
                          possible, double up mooring lines and add chafe
                          protection to prevent lines from breaking. Remove all
                          non-essential items from the boat to reduce windage.
                        </span>
                      </li>
                      <li>
                        Avoid Going to Sea.
                        <span className="text-black">
                          {" "}
                          Do not venture out to sea if a tropical cyclone is
                          approaching, even if the water appears calm. Storm
                          conditions can change rapidly.
                        </span>
                      </li>
                      <li>
                        Evacuate Coastal Areas.
                        <span className="text-black">
                          {" "}
                          If you live on a boat, consider evacuating to a safer
                          location well before the storm arrives. Coastal
                          marinas and docks are vulnerable to storm surge and
                          high waves. Plan accordingly.
                        </span>
                      </li>
                      <li>
                        Stay on Land During Recovery.
                        <span className="text-black">
                          {" "}
                          After the storm has passed, avoid using your boat
                          until the Coast Guard or local marine authorities
                          declare it safe to do so. Be cautious of debris and
                          submerged objects, which might pose risks to
                          navigation.
                        </span>
                      </li>
                      <li>
                        Practice Caution and Patience.
                        <span className="text-black">
                          {" "}
                          Exercise caution and patience when returning to
                          marinas or boat ramps after the storm. Be prepared for
                          delays and follow instructions from authorities and
                          emergency personnel.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 5 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-10 hidden sm:inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={cyclone} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        What are the common post-tropical cyclone hazards, and
                        how can they be mitigated?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Flooding.
                        <span className="text-black">
                          {" "}
                          Avoid flood-prone areas. Elevate electrical appliances
                          and utilities above potential flood levels. Install
                          flood barriers or sandbags around vulnerable entry
                          points.
                        </span>
                      </li>
                      <li>
                        Wind Damage.
                        <span className="text-black">
                          {" "}
                          Regularly maintain trees and remove dead branches.
                          Install hurricane straps to secure roofs. Reinforce
                          garage doors, windows, and entry doors.
                        </span>
                      </li>
                      <li>
                        Power Outages.
                        <span className="text-black">
                          {" "}
                          Use surge protectors to safeguard electronic devices.
                          Consider installing a backup generator. Keep
                          flashlights, batteries, and portable chargers in an
                          easily accessible place.
                        </span>
                      </li>
                      <li>
                        Water Contamination.
                        <span className="text-black">
                          {" "}
                          Boil water before consumption if the water supply
                          might be contaminated. Store clean water in sanitized
                          containers for emergencies.
                        </span>
                      </li>
                      <li>
                        Communication Breakdown
                        <span className="text-black">
                          {" "}
                          Keep a battery-powered radio to receive emergency
                          updates. Have a designated meeting place for family
                          members. Use text messages, which can sometimes get
                          through when phone calls cannot.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* ... Earthquake contents ... */}
            </div>
          )}

          {/* Volcanic Eruption */}
          {activeTab === "volcanicEruption" && (
            <div className="flex sm:flex-row flex-col  w-full max-w-full   sm:max-w-7xl mx-auto border  border-gray/30 shadow-lg bg-white p-5 rounded-xl ">
        <div className=" w-auto  border-gray/20 border-r-2">
                <div className="h-full flex flex-col  rounded">
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(1)}
                  >
                    What Are the Early Warning Signs of a Volcanic Eruption?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(2)}
                  >
                    What Should Residents Do When They Receive a Volcanic
                    Eruption Warning?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(3)}
                  >
                    How Can Communities Prepare for Potential Ashfall?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(4)}
                  >
                    What Precautions Should Be Taken for Livestock and Pets
                    During a Volcanic Eruption?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(5)}
                  >
                    What Are the Health Risks Posed by Volcanic Ash, and How Can
                    They Be Minimized?
                  </button>
                </div>
              </div>
              <div className="p-4 w-full">
                <div className="h-full  rounded">
                  <div className={!activeQuestion ? "Info" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={volcano} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        Volcanic Eruption
                      </h2>
                    </div>

                    <p className="leading-relaxed  font-poppins">
                      {" "}
                      A volcanic eruption is a natural disaster that occurs when
                      there is a sudden release of magma, ash, gases, and other
                      materials from a volcano. This release can be explosive,
                      leading to the ejection of rocks, ash clouds, and lava
                      flows. Volcanic eruptions can cause widespread damage to
                      the surrounding environment, including destruction of
                      landscapes, buildings, and infrastructure. They may also
                      result in secondary hazards such as ashfall, pyroclastic
                      flows, tsunamis (if the volcano is located near a body of
                      water), and lahars (mudflows). Volcanic eruptions are a
                      result of the Earth's geological activity, where molten
                      rock beneath the Earth's surface rises and erupts, often
                      triggered by tectonic movements or pressure buildup within
                      the volcano.
                    </p>
                  </div>
                  <div className={activeQuestion === 1 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 hidden sm:inline-flex  items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={volcano} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        {" "}
                        What Are the Early Warning Signs of a Volcanic Eruption?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Increased Seismic Activity.
                        <span className="text-black">
                          {" "}
                          Seismic tremors, swarms of small earthquakes, or
                          volcanic tremors often precede an eruption. Monitoring
                          these seismic signals can provide valuable insights
                          into volcanic activity.
                        </span>
                      </li>
                      <li>
                        Ground Deformation.
                        <span className="text-black">
                          {" "}
                          Changes in the shape of the volcano, detected through
                          GPS measurements or ground surveys, can indicate the
                          movement of magma beneath the surface.
                        </span>
                      </li>
                      <li>
                        Gas Emissions.
                        <span className="text-black">
                          {" "}
                          An increase in the emission of gases, such as sulfur
                          dioxide (SO2) and carbon dioxide (CO2), from the
                          volcano's vent can suggest rising magma and potential
                          eruption.
                        </span>
                      </li>
                      <li>
                        Volcanic Tremor.
                        <span className="text-black">
                          {" "}
                          Continuous seismic vibrations, known as volcanic
                          tremor, can occur due to the movement of magma and
                          gases within the volcano.
                        </span>
                      </li>
                      <li>
                        Temperature Changes.
                        <span className="text-black">
                          {" "}
                          Unexplained increases in ground or surface
                          temperatures in and around the volcano might signify
                          volcanic activity.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 2 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-10 hidden sm:inline-flex  items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={volcano} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        {" "}
                        What Should Residents Do When They Receive a Volcanic
                        Eruption Warning?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Protect Yourself Indoors.
                        <span className="text-black">
                          {" "}
                          Close all windows, doors, and vents to prevent ash
                          from entering your home. Seal gaps around windows and
                          doors with damp towels or tape to minimize ash
                          infiltration. Use masks (N95 or P100 respirators) to
                          protect against inhaling ash particles.
                        </span>
                      </li>
                      <li>
                        Avoid Driving.
                        <span className="text-black">
                          {" "}
                          Avoid driving unless absolutely necessary, as roads
                          may be slippery due to ashfall or blocked by debris.
                          If you must drive, do so cautiously and use
                          headlights.
                        </span>
                      </li>
                      <li>
                        Stay Indoors if Possible.
                        <span className="text-black">
                          {" "}
                          Stay indoors to avoid exposure to falling ash, which
                          can be harmful to respiratory health. Keep pets
                          indoors and ensure they have access to food and water.
                        </span>
                      </li>
                      <li>
                        If Outdoors, Seek Shelter.
                        <span className="text-black">
                          {" "}
                          Seek shelter in a sturdy building if you are caught
                          outside during ashfall. If there is no shelter nearby,
                          cover your nose and mouth with a cloth and try to find
                          a safe indoor location as quickly as possible.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 3 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-10 hidden sm:inline-flex  items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={volcano} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        {" "}
                        How Can Communities Prepare for Potential Ashfall?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Educate Residents.
                        <span className="text-black">
                          {" "}
                          Raise awareness about the risks associated with
                          ashfall and educate residents on how to protect
                          themselves and their property.
                        </span>
                      </li>
                      <li>
                        Emergency Supplies.
                        <span className="text-black">
                          {" "}
                          Encourage residents to maintain emergency kits
                          containing essential supplies such as masks (N95 or
                          P100 respirators), goggles, non-perishable food,
                          water, medications, and first aid items.
                        </span>
                      </li>
                      <li>
                        Home Protection.
                        <span className="text-black">
                          {" "}
                          Advise residents to seal doors, windows, and vents
                          with plastic sheeting and tape to prevent ash from
                          entering buildings. Install weather stripping and door
                          sweeps to minimize ash infiltration.
                        </span>
                      </li>
                      <li>
                        Water Supply.
                        <span className="text-black">
                          {" "}
                          Cover water sources such as wells and reservoirs to
                          prevent contamination from ash. Advise residents to
                          store sufficient clean water for drinking, cooking,
                          and basic hygiene.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 4 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-10 hidden sm:inline-flex  items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={volcano} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        {" "}
                        What Precautions Should Be Taken for Livestock and Pets
                        During a Volcanic Eruption?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Shelter.
                        <span className="text-black">
                          {" "}
                          Move livestock to enclosed shelters or barns to
                          protect them from falling ash. If possible, provide
                          adequate ventilation without letting ash inside.
                        </span>
                      </li>
                      <li>
                        Evacuation Plan.
                        <span className="text-black">
                          {" "}
                          Include pets in your family's evacuation plan.
                          Identify pet-friendly shelters and accommodations
                          along your evacuation route.
                        </span>
                      </li>
                      <li>
                        Water and Feed.
                        <span className="text-black">
                          {" "}
                          Ensure animals have access to clean water and
                          uncontaminated feed. Stock up on enough feed to last
                          for an extended period, as pastures might be affected.
                        </span>
                      </li>
                      <li>
                        Respiratory Protection.
                        <span className="text-black">
                          {" "}
                          Monitor animals for respiratory distress. If
                          necessary, consult a veterinarian about using masks or
                          other methods to protect their respiratory systems.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 5 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-10 hidden sm:inline-flex  items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={volcano} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        {" "}
                        What Are the Health Risks Posed by Volcanic Ash, and How
                        Can They Be Minimized?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Respiratory Issues.
                        <span className="text-black">
                          {" "}
                          Inhaling volcanic ash can cause respiratory problems,
                          especially for individuals with pre-existing
                          conditions like asthma or bronchitis. Fine ash
                          particles can penetrate deep into the lungs.
                        </span>
                      </li>
                      <li>
                        Eye Irritation.
                        <span className="text-black">
                          {" "}
                          Ash particles can irritate the eyes, causing redness,
                          discomfort, and potential damage.
                        </span>
                      </li>
                      <li>
                        Skin Irritation.
                        <span className="text-black">
                          {" "}
                          Ash can irritate the skin, causing dryness and
                          discomfort, particularly for people with sensitive
                          skin.
                        </span>
                      </li>
                      <li>
                        Stay Indoors.
                        <span className="text-black">
                          {" "}
                          If possible, stay indoors and keep windows and doors
                          closed to prevent ash from entering your home.
                        </span>
                      </li>
                      <li>
                        Masks.
                        <span className="text-black">
                          {" "}
                          Wear N95 or P100 respirator masks to reduce inhalation
                          of ash particles. Regular cloth masks are not
                          effective against fine ash.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* ... Earthquake contents ... */}
            </div>
          )}

          {activeTab === "stormSurge" && (
            <div className="flex sm:flex-row flex-col  w-full max-w-full   sm:max-w-7xl mx-auto border  border-gray/30 shadow-lg bg-white p-5 rounded-xl ">
           <div className=" w-auto  border-gray/20 border-r-2">
                <div className="h-full flex flex-col  rounded">
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(1)}
                  >
                    What are the primary dangers associated with storm surges
                    for coastal communities?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(2)}
                  >
                    What are the early warning signs of an impending storm
                    surge, and how should people respond to these signs?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(3)}
                  >
                    What precautions should boaters and mariners take when a
                    storm surge is anticipated in coastal waters?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(4)}
                  >
                    How can residents determine if they are in a storm surge
                    evacuation zone?
                  </button>
                  <button
                    className="leading-relaxed text-start mb-6 text-md font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-100 duration-300 font-semibold text-primary mr-3 hover:bg-primary hover:text-white px-2 py-2 rounded-lg inline-block"
                    onClick={() => handleQuestionClick(5)}
                  >
                    How can individuals and families prepare their homes to
                    minimize storm surge impact?
                  </button>
                </div>
              </div>
              <div className="p-4 w-full">
                <div className="h-full  rounded">
                  <div className={!activeQuestion ? "Info" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 inline-flex  items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={stormsurge} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        Storm Surge
                      </h2>
                    </div>

                    <p className="leading-relaxed  font-poppins">
                      A storm surge is a rapid and significant rise in sea level
                      generated by a powerful storm, typically a tropical
                      cyclone or hurricane, as it moves over an ocean or a large
                      body of water. Storm surges can cause severe coastal
                      flooding and are one of the most dangerous aspects of a
                      tropical storm, often resulting in extensive damage to
                      coastal areas.
                    </p>
                  </div>
                  <div className={activeQuestion === 1 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-10 sm:inline-flex hidden  items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={stormsurge} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        {" "}
                        What are the primary dangers associated with storm
                        surges for coastal communities?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Inundation.
                        <span className="text-black">
                          {" "}
                          Storm surges can inundate coastal areas, flooding
                          homes, businesses, and infrastructure. Rapid and deep
                          flooding can trap people inside buildings and
                          vehicles, making evacuation and rescue difficult.
                        </span>
                      </li>
                      <li>
                        Strong Currents.
                        <span className="text-black">
                          {" "}
                          Storm surges create strong and fast-moving currents.
                          These currents pose a significant risk to anyone
                          caught in the water, making swimming or even standing
                          hazardous.
                        </span>
                      </li>
                      <li>
                        Debris Impact.
                        <span className="text-black">
                          {" "}
                          Surging waters carry debris, including tree branches,
                          metal, and other sharp objects, which can cause
                          injuries to people and animals. The impact of debris
                          can also damage property and infrastructure.
                        </span>
                      </li>
                      <li>
                        Loss of Life.
                        <span className="text-black">
                          {" "}
                          Storm surges can lead to loss of life, particularly if
                          residents do not evacuate in time or if evacuation
                          routes are impassable. The combination of flooding,
                          strong currents, and debris increases the risk of
                          fatalities.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 2 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-20 h-10 sm:inline-flex hidden  items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={stormsurge} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        {" "}
                        What are the early warning signs of an impending storm
                        surge, and how should people respond to these signs?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Meteorological Alerts.
                        <span className="text-black">
                          {" "}
                          Monitoring weather forecasts and alerts from
                          meteorological agencies can provide advance notice of
                          an approaching storm surge. Pay attention to storm
                          warnings, especially if they indicate a risk of
                          coastal flooding.
                        </span>
                      </li>
                      <li>
                        Tidal Patterns.
                        <span className="text-black">
                          {" "}
                          Unusual changes in tidal patterns, such as rapidly
                          rising water levels, can indicate a potential storm
                          surge. This might include high tides occurring at
                          unexpected times.
                        </span>
                      </li>
                      <li>
                        Winds.
                        <span className="text-black">
                          {" "}
                          Increasing wind speeds, particularly those pushing
                          water toward the shore, can indicate an imminent storm
                          surge. Be alert to strong onshore winds that can pile
                          up water along the coast.
                        </span>
                      </li>
                      <li>
                        Evacuate if Advised.
                        <span className="text-black">
                          {" "}
                          If evacuation orders are issued, residents should
                          follow designated evacuation routes and move to higher
                          ground. Evacuation plans should be familiarized in
                          advance.
                        </span>
                      </li>
                      <li>
                        Stay Away from the Shoreline.
                        <span className="text-black">
                          {" "}
                          Avoid coastal areas, beaches, and docks. Stay away
                          from the shoreline to prevent being swept away by
                          strong currents.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 3 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-20 h-10 sm:inline-flex hidden  items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={stormsurge} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        {" "}
                        What precautions should boaters and mariners take when a
                        storm surge is anticipated in coastal waters?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Have Adequate Safety Equipment.
                        <span className="text-black">
                          {" "}
                          Ensure your vessel is equipped with all necessary
                          safety equipment, including life jackets, life rafts,
                          flares, emergency signaling devices, fire
                          extinguishers, and a first aid kit.
                        </span>
                      </li>
                      <li>
                        Stay on Land.
                        <span className="text-black">
                          {" "}
                          Avoid going out to sea or entering coastal waters
                          during a storm surge or a tropical cyclone warning. It
                          is safest to stay on land until the threat has passed
                          entirely.
                        </span>
                      </li>
                      <li>
                        Winds.
                        <span className="text-black">
                          {" "}
                          Increasing wind speeds, particularly those pushing
                          water toward the shore, can indicate an imminent storm
                          surge. Be alert to strong onshore winds that can pile
                          up water along the coast.
                        </span>
                      </li>
                      <li>
                        Listen to Coast Guard and Local Authorities.
                        <span className="text-black">
                          {" "}
                          Follow the instructions of the U.S. Coast Guard and
                          local marine authorities. They provide essential
                          information and advisories regarding safe boating
                          practices and restrictions during severe weather
                          events.
                        </span>
                      </li>
                      <li>
                        Stay Informed.
                        <span className="text-black">
                          {" "}
                          Monitor weather forecasts and marine warnings
                          regularly. Stay updated on the storm's progress,
                          including its intensity, expected path, and the
                          anticipated arrival of the storm surge.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 4 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-10 sm:inline-flex hidden  items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={stormsurge} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        {" "}
                        How can residents determine if they are in a storm surge
                        evacuation zone?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Emergency Hotlines.
                        <span className="text-black">
                          {" "}
                          Local emergency management agencies often have
                          hotlines that residents can call to inquire about
                          evacuation zones and procedures. These hotlines are
                          staffed with knowledgeable personnel who can provide
                          detailed information.
                        </span>
                      </li>
                      <li>
                        Evacuation Route Signage.
                        <span className="text-black">
                          {" "}
                          In some areas, there are signs indicating evacuation
                          routes and zones. These signs are typically placed
                          along major roads and highways and can guide residents
                          to safety.
                        </span>
                      </li>
                      <li>
                        Community Outreach Programs.
                        <span className="text-black">
                          {" "}
                          Local governments and community organizations conduct
                          outreach programs to educate residents about
                          evacuation zones. These programs may include
                          workshops, informational sessions, and distribution of
                          materials indicating evacuation zones.
                        </span>
                      </li>
                      <li>
                        Social Media.
                        <span className="text-black">
                          {" "}
                          Follow local government and emergency management
                          social media accounts. Officials often post updates
                          and crucial information, including evacuation zones,
                          on platforms like Twitter and Facebook.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className={activeQuestion === 5 ? "" : "hidden"}>
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-10 sm:inline-flex hidden  items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
                        <img src={stormsurge} alt="" />
                      </div>
                      <h2 className="text-xl  font-semibold font-inter text-primary mb-2">
                        How can individuals and families prepare their homes to
                        minimize storm surge impact?
                      </h2>
                    </div>
                    <ul className="w-full space-y-1 font-poppins list-disc list-inside text-primary leading-relaxed  ">
                      <li className="text-dark">
                        Elevate Important Items.
                        <span className="text-black">
                          {" "}
                          Raise electrical appliances, sockets, wiring, and
                          valuable items above potential water levels. This can
                          prevent damage from minor flooding.
                        </span>
                      </li>
                      <li>
                        Seal Vulnerable Points.
                        <span className="text-black">
                          {" "}
                          Seal cracks in the foundation, walls, and around
                          windows and doors. Use waterproof sealant to prevent
                          water intrusion.
                        </span>
                      </li>
                      <li>
                        Emergency Kit.
                        <span className="text-black">
                          {" "}
                          Prepare an emergency kit containing essential
                          supplies, important documents, medications, and first
                          aid supplies. Store this kit in an easily accessible,
                          elevated location.
                        </span>
                      </li>
                      <li>
                        Create a Family Emergency Plan.
                        <span className="text-black">
                          {" "}
                          Develop and practice a family emergency plan that
                          includes evacuation routes, meeting points, and
                          communication strategies.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Add similar conditional blocks for other tabs */}
        </div>
      </section>
    </>
  );
};

export default Guidelines;
