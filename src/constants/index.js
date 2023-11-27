import { logo } from "../assets";
export const disasterCards = [
  {
    id: 1,
    logo: logo,
    title: 'Tropical Cyclone',
    description: 'a powerful and organized system of clouds and thunderstorms with a closed, low-level circulation.',
    longerdescription:'Also known as hurricanes or typhoons, are powerful weather systems characterized by strong winds, heavy rainfall, and low pressure. These storms typically form over warm tropical oceans and can cause widespread destruction when they make landfall.',
    duringtitle:'Stay Alert, Stay Tuned',
    beforetitle:'Monitor the News for Weather Updates',
    aftertitle:'Remain Alert and be Cautious',
    beforedescription1:'Monitor the News for weather updates, warnings and advisories',
    beforedescription2:'Know the early warning and evacuation plan of the community',
    beforedescription3:'Check the integrity of your house and repair weak parts',
    beforedescription4:'Put livestock and pets in a safe area or designated evacuation site for animals',
    beforedescription4:'When notified, immediately go to the designated evacuation center',
    beforedescription1:'Monitor the News for weather updates, warnings and advisories',
    duringdescription1:'Stay Calm. Stay indoors and tune in for the latest news and weather updates.',
    duringdescription2:'Turn off main electrical switch and water valve.',
    duringdescription3:'Use flashlight or emergency lamp. Be cautious in using candles and gas lamps.',
    duringdescription4:'Stay away from glass windows.',
    afterdescription1:'Wait for authorities to declare that it is safe to return home',
    afterdescription2:'Stay away from fallen trees, damaged structures and power lines',
    afterdescription3:'Do not go sightseeing as you may hinder the work of the emergency services',
    afterdescription4:'Be cautious in checking and reapairing the damaged parts of your house', 
  },
  {
    id: 2,
    logo: logo,
    title: 'Storm Surge',
    description: 'is a rapid and abnormal rise in sea level during a storm, particularly a tropical cyclone or a hurricane.',
  },
  {
    id: 3,
    logo: logo,
    title: 'Flood',
    description: 'overflow of water submerging land, often causing damage, and environmental disruption.'
  },
  {
    id: 4,
    logo: logo,
    title: 'Landslide',
    description: 'Rapid downhill movement of soil, rock, and debris, often triggered by heavy rain or earthquakes.'
  },
  {
    id: 5,
    logo: logo,
    title: 'Earthquake',
    description: 'sudden ground shaking due to tectonic movements, causing destruction and seismic waves.'
  },
  {
    id: 6,
    logo: logo,
    title: 'Tsunami',
    description: 'immense ocean waves triggered by undersea disturbances, causing catastrophic damages.'
  },
  {
    id: 7,
    logo: logo,
    title: 'Volcanic Eruption',
    description: 'explosive release of magma, ash, and gases from a volcano, often causing devastation and damages.'
  },
  {
    id: 8,
    logo: logo,
    title: 'Fire',
    description: 'rapid combustion of materials, releasing heat, light, and often causing destruction and emergencies.'
  }
];
export const emergencyResources = [
  
{
    id:1,
    name:"Click and Search",
    description:"Simply click the 'Find Nearby Services' button, and our integrated Google Maps API will pinpoint the nearby hospitals, police stations, and fire stations in your vicinity.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
  </svg>
  `
  
},
{
    id:2,
    name:"Real-Time Data",
    description:"Access up-to-date information, including contact details and addresses, ensuring you can quickly reach out to emergency services.",
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" stroke-width="1.5" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  `  
      
},
{
    id:3,
    name:"Emergency-Ready Details",
    description:"Get critical information about the nearby facilities,These insights empower you to make informed decisions swiftly during emergencies.",
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>

  `
},
{
  id:4,
  name:"User-Friendly Interface",
  description:"Our intuitive design ensures accessibility for everyone. you can quickly navigate the map and access essential details with just a few clicks.",
  icon: `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

`
}
];
export const questionData = [
  {
    question: "What are the common causes of fires?",
    answer: [
      "Electrical Faults: Malfunctioning electrical systems and appliances can lead to short circuits and fires.",
      "Open Flames: Unattended candles, matches, or lit gas stoves can easily ignite nearby materials.",
      "Smoking: Improperly discarded cigarettes or careless smoking can cause fires, especially in dry conditions.",
      "Faulty Appliances: Defective or poorly maintained household appliances pose a fire hazard.",
      "Human Negligence: Inattentive cooking, leaving flammable materials near heat sources, or improper use of fire-related items.",
      "Weather Conditions: Dry and hot weather can create a conducive environment for wildfires, leading to their rapid spread."
    
    ],
    logo: `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
  </svg>
    `,
  }
];
