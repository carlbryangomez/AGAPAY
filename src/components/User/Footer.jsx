import React, { useEffect, useState } from "react";
import { logo } from "../../assets";
import { Link } from "react-router-dom";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleDownloadClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <footer className="bg-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <img src={logo} className="mr-3 h-28 sm:h-36" alt="Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
            </div>

            <p className="font-semibold font-poppins text-black/50 ">
              We are dedicated to fortifying communities, <br /> offering timely
              aid, and fostering resilience.{" "}
            </p>
            <div className="mt-3">
              {deferredPrompt ? (
                <button
                  onClick={handleDownloadClick}
                  className="text-md font-poppins inline-block transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 font-semibold text-primary mr-3 rounded-lg"
                >
                  Download App
                  <ArrowDownCircleIcon className="w-6 h-6 inline-block ml-1" />
                </button>
              ) : (
                <Link
                  className="text-md font-poppins inline-block transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 font-semibold text-primary mr-3 rounded-lg"
                  to=""
                >
                  Download App
                  <ArrowDownCircleIcon className="w-6 h-6 inline-block ml-1" />
                </Link>
              )}
            </div>
          </div>
          <div>
              <h2 className="mb-6 text-md font-semibold text-primary  font-inter uppercase  ">
                Resources
              </h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <a
                    href=""
                    className="hover:underline text-sm text-secondary font-poppins"
                  >
                    PAGASA
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href=""
                    className="hover:underline text-sm text-secondary font-poppins"
                  >
                    DRRMO
                  </a>
                </li>

              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-md font-semibold text-primary  font-inter uppercase">
                Follow us
              </h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <a
                    href=""
                    className="hover:underline font-poppins text-secondary text-sm"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="hover:underline font-poppins text-secondary text-sm"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-md font-semibold text-primary  font-inter uppercase">
                Legal
              </h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:underline font-poppins text-secondary text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:underline font-poppins text-secondary text-sm"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <Link
                    className="hover:underline font-poppins text-secondary text-sm"
                    to="/contact-us"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
        </div>
        <hr className="my-6  sm:mx-auto  lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm  sm:text-center font-inter">
            © 2023 Agapay. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
