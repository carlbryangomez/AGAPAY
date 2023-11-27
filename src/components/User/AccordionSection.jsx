import React, {useState} from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline';
const AccordionSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className="max-w-2xl mx-auto p-5 py-28 ">
          <h2 className="text-4xl font-medium mb-4 text-center font-poppins">Frequently Asked Questions</h2>
          <div className="shadow-md">
            {faqData.map((item, index) => (
              <div key={index}>
               <button
                    className={`w-full p-4 border-b border-gray/20   flex justify-between rounded-sm text-left  focus:outline-none ${
                        activeIndex === index ? 'text-primary' : 'hover:bg-subtlegray hover:text-primary'
                    }`}
                    onClick={() => toggleAccordion(index)}
                    >
                    <span className='font-inter font-semibold'>{item.question}</span>
                    <ChevronDownIcon className={`w-5 h-5 inline-block transition-transform transform ${
                        activeIndex === index ? 'rotate-180' : ''
                    }`} />
                    </button>

                {activeIndex === index && (
                  <div className="p-4 bg-gray/5">
                    <p className="font-poppins leading-loose tracking-wide">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    const faqData = [
      {
        question: 'Question 1',
        answer: 'Mahal ko si joko',
      },
      {
        question: 'Question 2',
        answer: 'ily joko',
      },
      {
        question: 'Question 3',
        answer: 'ako nalang please',
      },
    ];
export default AccordionSection