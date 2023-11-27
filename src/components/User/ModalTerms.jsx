import React from "react";
import {
  XMarkIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
const ModalTerms = ({closeModalTerms}) => {
  return (
    <>
      {/* For pranks*/}
      <div  tabIndex="-1" className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 flex justify-center items-center  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full">
    <div className="relative w-full max-w-3xl max-h-full">
        <div className="relative bg-white rounded-lg shadow ">
            <div className="flex items-center justify-between p-4 md:p-5 border-b border-gray/30 rounded-t ">
                <h3 className="text-xl font-medium font-inter text-primary">
                    Terms and Conditions
                </h3>
                <button type="button" onClick={closeModalTerms} className="bg-transparent hover:bg-gray hover:text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " >
                   <XMarkIcon className="w-5 h-5" />
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="p-4 md:p-5 space-y-4 overflow-y-scroll max-h-96 ">
                  <h1 className=" leading-relaxed text-black text-3xl font-inter font-bold ">
                      Acceptance of Terms
                </h1>
                <p className="font-poppins font-base">
                By using this website (Website URL), you agree to abide by these Terms and Conditions, as well as any applicable laws and regulations. Please read these terms carefully. If you do not agree with any part of these terms, please refrain from using our website. 
                </p>
                <h1 className=" leading-relaxed text-black text-3xl font-inter font-bold ">
               	Changes to Terms 
                </h1>
                <p className="font-poppins font-base">
                AGAPAY+ reserves the right to modify, amend, or update these Terms and Conditions at any time without prior notice. Any changes will be effective immediately upon posting on this website. Your continued use of the website after any such changes constitutes your acceptance of the new Terms and Conditions. 
                </p>
                <h1 className=" leading-relaxed text-black text-3xl font-inter font-bold ">
             	Privacy 
                </h1>
                <p className="font-poppins font-base">
                At AGAPAY+, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and protect your data. By using our website, you agree to the practices described in this policy. 
                </p>
                <div className="sm:px-5 px-2 space-y-2">
                    <h5 className="font-inter font-semibold text-lg">1. Information We Collect</h5>
                    <ul className="list-disc sm:px-10 px-5">
                        <li className="font-poppins">Personal Information: This includes but is not limited to your name, email address, and phone number. We collect this information when you provide it to us, such as when you register for an account.</li>
                    </ul>
                    <h5 className="font-inter font-semibold text-lg">2.	How We Use Your Information </h5>
                    <ul className="list-disc sm:px-10 px-5">
                        <li className="font-poppins">Improving our Website: To enhance and personalize your experience, understand user preferences, and make improvements to our website. </li>
                        <li className="font-poppins">Communications: To communicate with you regarding your account and other relevant information. </li>
                    </ul>
                    <h5 className="font-inter font-semibold text-lg">3.	Data Security  </h5>
                    <ul className="list-disc sm:px-10 px-5">
                        <li className="font-poppins">We take data security seriously and employ reasonable and appropriate measures to protect your information from unauthorized access, disclosure, alteration, and destruction.  </li>
                       
                    </ul>
                    <h5 className="font-inter font-semibold text-lg">4.	Sharing Your Information  </h5>
                    <ul className="list-disc sm:px-10 px-5">
                        <li className="font-poppins">Service Providers: We may share information with third-party service providers who assist us in maintaining our website or conducting business operations.   </li>
                        <li className="font-poppins">Legal Requirements: We may disclose your information if required by law or in response to a valid legal request. </li>
                    </ul>
                    <h5 className="font-inter font-semibold text-lg">5.	Your Choices  </h5>
                    <ul className="list-disc sm:px-10 px-5">
                        <li className="font-poppins">Access and Update Information: You can access and update your personal information through your account settings. </li>
                        <li className="font-poppins">Opt-Out: You can opt out of marketing communications by following the instructions in our emails or contacting us. </li>
                    </ul>
                    <h5 className="font-inter font-semibold text-lg">6.	Links to Other Websites  </h5>
                    <ul className="list-disc sm:px-10 px-5">
                        <li className="font-poppins">Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. Please review their respective privacy policies. </li>
                    </ul>
                    <h5 className="font-inter font-semibold text-lg">7.	Changes to this Privacy Policy  </h5>
                    <ul className="list-disc sm:px-10 px-5">
                        <li className="font-poppins">We reserve the right to update and change this Privacy Policy. Any changes will be posted on this page.  </li>
                    </ul>
                    <h5 className="font-inter font-semibold text-lg">8.	Contact Information  </h5>
                    <ul className="list-disc sm:px-10 px-5">
                        <li className="font-poppins">If you have any questions or concerns about our Privacy Policy, please contact us at: 
(888 – 25664 or email us at  NDRRMO.Caloocan@gmail.com  ). 
</li>
                    </ul>
                </div>
                <h1 className=" leading-relaxed text-black text-3xl font-inter font-bold ">
             	User Conduct 
                </h1>
                <p className="font-poppins font-base">
                As a user of AGAPAY+ (Website URL), you are expected to adhere to the following guidelines for responsible and respectful use of our website. By using our website, you agree to the following user conduct: 
                </p>
                <div className="sm:px-5 px-2 space-y-2">
                    <h5 className="font-inter font-semibold text-lg">1.	Lawful and Ethical Use </h5>
                    <ul className="list-disc sm:px-10 px-5">
                        <li className="font-poppins">You agree to use our website only for lawful and ethical purposes. You shall not engage in any activities that violate applicable laws, regulations, or the rights of others. </li>
                    </ul>
                    <h5 className="font-inter font-semibold text-lg">2.	Prohibited Activities  </h5>
                    <ul className="list-disc sm:px-10 px-5">
                        <li className="font-poppins">	Use our website to engage in spam, phishing, or other malicious activities.  </li>
                        <li className="font-poppins">	Attempt to gain unauthorized access to other users' accounts or any part of our website.  </li>
                        <li className="font-poppins">	Impersonate or misrepresent yourself as another person or entity.  </li>
                    </ul>
                    <h5 className="font-inter font-semibold text-lg">3.	User-Generated Content   </h5>
                    <ul className="list-disc sm:px-10 px-5">
                        <li className="font-poppins">If our website allows users to submit content, including comments, reviews, or other user-generated content, you are solely responsible for the content you submit. We reserve the right to remove or moderate content that violates these terms or our policies.   </li>
                    </ul>
                </div>
                <h1 className=" leading-relaxed text-black text-3xl font-inter font-bold ">
              	Intellectual Property 
                </h1>
                <p className="font-poppins font-base">
                All content on AGAPAY+, such as text, graphics, logos, and software, is owned by AGAPAY+ and is protected by copyright and other intellectual property laws. 
                </p>
                <div className="sm:px-5 px-2 space-y-2">
                    <ul className="list-disc sm:px-10 px-5">
                        <li className="font-poppins">	Usage: You may use our content for personal, non-commercial purposes. Commercial use, modification, or distribution requires our written consent. </li>
                    </ul>
                    <ul className="list-disc sm:px-10 px-5">
                        <li className="font-poppins">		Trademarks: Our trademarks and logos are our property. You cannot use them without our prior written permission.   </li>
                        <li className="font-poppins">	Attempt to gain unauthorized access to other users' accounts or any part of our website.  </li>
                        <li className="font-poppins">		User-Generated Content: By submitting content to our website, you grant us a license to use and display it. You must have the necessary rights to grant us this license.   </li>
                        <li className="font-poppins">			Reporting Infringements: Contact us if you believe your intellectual property rights are violated on our site.    </li>
                    </ul>
                </div>
                <h1 className=" leading-relaxed text-black text-3xl font-inter font-bold ">
                	Limitation of Liability 
                </h1>
                <p className="font-poppins font-base">
                At AGAPAY+, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and protect your data. By using our website, you agree to the practices described in this policy. 
                </p>
                 <div className="sm:px-5 px-2 space-y-2">
                    <ul className="list-disc sm:px-10 px-5">
                        <li className="font-poppins">	Usage: You may use our content for personal, non-commercial purposes. Commercial use, modification, or distribution requires our written consent. </li>
                    </ul>
                    <ul className="list-disc sm:px-10 px-5">
                        <li className="font-poppins">			Third-Party Links: We're not responsible for third-party websites linked on our site. Your use of external links is your choice and responsibility.    </li>
                        <li className="font-poppins">				Limitation of Liability: To the fullest extent permitted by law, AGAPAY+ and its affiliates are not liable for any direct, indirect, or incidental damages resulting from your use of our website.    </li>
                    </ul>
                </div>
                <h1 className=" leading-relaxed text-black text-3xl font-inter font-bold ">
          	Indemnification 
                </h1>
                <p className="font-poppins font-base">
                You agree to indemnify and hold AGAPAY+ harmless from any claims, losses, or damages, including legal fees, resulting from your violation of these Terms and Conditions or your use of the website. 
                </p>
                <h1 className=" leading-relaxed text-black text-3xl font-inter font-bold ">
           	Governing Law 
                </h1>
                <p className="font-poppins font-base">
                The laws of the Republic of the Philippines govern and are construed in accordance with these Terms and Conditions. Any issues arising from your use of AGAPAY+ will be resolved exclusively by the courts of the Philippines. The laws of the "Data Privacy Act of 2012," also known as Republic Act No. 10173, govern and are construed in line with these Terms and Conditions. This legislation specifies people' personal data rights as well as the obligations of organizations that collect, process, and retain personal data. 
                </p>
                <p className="font-poppins font-base">By using our website, you expressly agree to submit to the personal jurisdiction and venue of the courts in the Philippines for any disputes related to these terms and your use of the website. </p>
                <h1 className=" leading-relaxed text-black text-3xl font-inter font-bold ">
                	Contact Information 
                </h1>
                <p className="font-poppins font-base">
                For any questions, concerns, or communications related to these Terms and Conditions or your use of AGAPAY+ (Web URL), you can reach us at the following contact information: 
                </p>
                <div className="sm:px-5 px-2 space-y-2">
                    <ul className="list-disc sm:px-10 px-5">
                        <li className="font-poppins">	Address: 8th Ave, Grace Park East, Caloocan, Metro Manila </li>
                        <li className="font-poppins">	Email: NDRRMO.Caloocan@gmail.com  </li>
                        <li className="font-poppins">	Phone: 888 – 25664   </li>
                    </ul>
                    
                </div>
                <p className="font-poppins font-base">
                Please feel free to contact us with any inquiries or issues. We will make our best effort to respond to your communications promptly and address any concerns in accordance with applicable Philippine laws and regulations. 
                </p>
            </div>
            
            <div className="flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse border-t border-gray/30 rounded-b ">
                <button onClick={closeModalTerms} type="button"  className="text-[#c94c05] border border-[#c94c05] font-inter bg-none hover:bg-[#fff8ec] focus:outline-none   font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">Close</button>
            </div>
        </div>
    </div>
</div>
    </>
  );
};

export default ModalTerms;
