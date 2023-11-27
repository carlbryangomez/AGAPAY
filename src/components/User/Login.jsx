import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loginbg } from "../../assets";
import { EyeSlashIcon, EyeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import AlertEmpty from "./AlertEmpty";
import AlertSpecialCharacters from "./AlertSpecialCharacters";
import AlertInvalidEmail from "./AlertInvalidEmail";
import AlertStep2Required from "./AlertStep2Required";
import AlertCity from "./AlertCity";
import AlertPostalCode from "./AlertPostalCode";
import AlertPhone from "./AlertPhone";
import AlertUsername from "./AlertUSername";
import AlertUsernameAlphaNumeric from "./AlertUsernameAlphaNumeric";
import AlertPasswordShort from "./AlertPasswordShort";
import AlertPasswordPattern from "./AlertPasswordPattern";
import AlertPasswordMatch from "./AlertPasswordMatch";
import AlertTerms from "./AlertTerms";
import ModalTerms from "./ModalTerms";
const Login = ({ onClose, isLoggedInSession }) => {
  const [errors, setErrors] = useState({
    regFirstName: "",
    regLastName: "",
    regEmail: "",
    regCity: "",
    regStreetBrgy: "",
    // regPostalCode: "",
    regContactNum: "",
    regUsername: "",
    regPassword1: "",
    regPassword2: "",
    termsCheckbox: "",
  });
  const [showAlertTerms, setShowAlertTerms] = useState(false);
  const openAlertTerms = () => {
    setShowAlertTerms(true);

    // Set a timeout to automatically close the modal after 5 seconds (adjust the time as needed)
    setTimeout(() => {
      closeAlertTerms();
    }, 5000); // 5000 milliseconds = 5 seconds
  };
  const closeAlertTerms = () => {
    setShowAlertTerms(false);
  };

  const [showAlertPasswordMatch, setShowAlertPasswordMatch] = useState(false);
  const openAlertPasswordMatch = () => {
    setShowAlertPasswordMatch(true);

    // Set a timeout to automatically close the modal after 5 seconds (adjust the time as needed)
    setTimeout(() => {
      closeAlertPasswordMatch();
    }, 5000); // 5000 milliseconds = 5 seconds
  };
  const closeAlertPasswordMatch = () => {
    setShowAlertPasswordMatch(false);
  };

  const [showAlertPasswordPattern, setShowAlertPasswordPattern] =
    useState(false);
  const openAlertPasswordPattern = () => {
    setShowAlertPasswordPattern(true);

    // Set a timeout to automatically close the modal after 5 seconds (adjust the time as needed)
    setTimeout(() => {
      closeAlertPasswordPattern();
    }, 5000); // 5000 milliseconds = 5 seconds
  };
  const closeAlertPasswordPattern = () => {
    setShowAlertPasswordPattern(false);
  };

  const [showAlertPasswordShort, setShowAlertPasswordShort] = useState(false);
  const openAlertPasswordShort = () => {
    setShowAlertPasswordShort(true);

    // Set a timeout to automatically close the modal after 5 seconds (adjust the time as needed)
    setTimeout(() => {
      closeAlertPasswordShort();
    }, 5000); // 5000 milliseconds = 5 seconds
  };
  const closeAlertPasswordShort = () => {
    setShowAlertPasswordShort(false);
  };

  const [showAlertUsernameAlphaNumeric, setShowAlertUsernameAlphaNumeric] =
    useState(false);
  const openAlertUsernameAlphaNumeric = () => {
    setShowAlertUsernameAlphaNumeric(true);

    // Set a timeout to automatically close the modal after 5 seconds (adjust the time as needed)
    setTimeout(() => {
      closeAlertUsername();
    }, 5000); // 5000 milliseconds = 5 seconds
  };

  const closeAlertUsernameAlphaNumeric = () => {
    setShowAlertUsernameAlphaNumeric(false);
  };

  const [showAlertUsername, setShowAlertUsername] = useState(false);
  const openAlertUsername = () => {
    setShowAlertUsername(true);

    // Set a timeout to automatically close the modal after 5 seconds (adjust the time as needed)
    setTimeout(() => {
      closeAlertUsername();
    }, 5000); // 5000 milliseconds = 5 seconds
  };

  const closeAlertUsername = () => {
    setShowAlertUsername(false);
  };

  const [showAlertPhone, setShowAlertPhone] = useState(false);
  const openAlertPhone = () => {
    setShowAlertPhone(true);

    // Set a timeout to automatically close the modal after 5 seconds (adjust the time as needed)
    setTimeout(() => {
      closeAlertPhone();
    }, 5000); // 5000 milliseconds = 5 seconds
  };

  const closeAlertPhone = () => {
    setShowAlertPhone(false);
  };

  const [showAlertPostalCode, setShowAlertPostalCode] = useState(false);
  const openAlertPostalCode = () => {
    setShowAlertPostalCode(true);

    // Set a timeout to automatically close the modal after 5 seconds (adjust the time as needed)
    setTimeout(() => {
      closeAlertPostalCode();
    }, 5000); // 5000 milliseconds = 5 seconds
  };

  const closeAlertPostalCode = () => {
    setShowAlertPostalCode(false);
  };

  const [showModalTerms, setShowModalTerms] = useState(false);
  const openModalTerms= () => {
    setShowModalTerms(true);
  };

  const closeModalTerms = () => {
    setShowModalTerms(false);
  };


  const [showAlertCity, setShowAlertCity] = useState(false);
  const openAlertCity = () => {
    setShowAlertCity(true);

    // Set a timeout to automatically close the modal after 5 seconds (adjust the time as needed)
    setTimeout(() => {
      closeAlertCity();
    }, 5000); // 5000 milliseconds = 5 seconds
  };

  const closeAlertCity = () => {
    setShowAlertCity(false);
  };

  const [showAlertStep2Required, setShowAlertStep2Required] = useState(false);
  const openAlertStep2Required = () => {
    setShowAlertStep2Required(true);

    // Set a timeout to automatically close the modal after 5 seconds (adjust the time as needed)
    setTimeout(() => {
      closeAlertStep2Required();
    }, 5000); // 5000 milliseconds = 5 seconds
  };

  const closeAlertStep2Required = () => {
    setShowAlertStep2Required(false);
  };

  const [showAlertInvalidEmail, setShowAlertInvalidEmail] = useState(false);
  const openAlertInvalidEmail = () => {
    setShowAlertInvalidEmail(true);

    // Set a timeout to automatically close the modal after 5 seconds (adjust the time as needed)
    setTimeout(() => {
      closeAlertInvalidEmail();
    }, 5000); // 5000 milliseconds = 5 seconds
  };

  const closeAlertInvalidEmail = () => {
    setShowAlertInvalidEmail(false);
  };

  const [showAlertSpecialCharacters, setShowAlertSpecialCharacters] =
    useState(false);
  const openAlertSpecialCharacters = () => {
    setShowAlertSpecialCharacters(true);

    // Set a timeout to automatically close the modal after 5 seconds (adjust the time as needed)
    setTimeout(() => {
      closeAlertSpecialCharacters();
    }, 5000); // 5000 milliseconds = 5 seconds
  };

  const closeAlertSpecialCharacters = () => {
    setShowAlertSpecialCharacters(false);
  };

  const [showAlertEmpty, setShowAlertEmpty] = useState(false);
  const openAlertEmpty = () => {
    setShowAlertEmpty(true);

    // Set a timeout to automatically close the modal after 5 seconds (adjust the time as needed)
    setTimeout(() => {
      closeAlertEmpty();
    }, 5000); // 5000 milliseconds = 5 seconds
  };

  const closeAlertEmpty = () => {
    setShowAlertEmpty(false);
  };
  // alert(asd(true))
  // const [loggedIn, setLoggedIn] = useState(false);

  const [formData, setFormData] = useState({
    regFirstName: "",
    regLastName: "",
    regEmail: "",
    regContactNum: "",
    // regCity:'',
    // regStreetBrgy:'',
    // regPostalCode:'',
    loginUsername: "",
    loginPass: "",
    termsCheckbox: false,
  });
  const hasNumbers = /\d/.test(formData.regCity);
  const alphanumericRegex = /^[a-zA-Z0-9 ]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   useEffect(() => {
  //     if (loggedIn) {
  //       asd(true);
  //     } else {
  //       asd(false);
  //     }
  // }, [loggedIn, asd]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    validateField(name, value);
  };

  const signIn = () => {
    // setSad(true);
    // const asd = setSad;
    // alert(asd(sad));
    console.log(formData);
    // alert(asd(false));
    const formDataToSend = new URLSearchParams();
    formDataToSend.append("fileSelector", "Login");
    formDataToSend.append("loginUsername", formData.loginUsername);
    formDataToSend.append("loginPass", formData.loginPass);
    const formDataToObject = {};
    formDataToSend.forEach(function (value, key) {
      formDataToObject[key] = value;
    });
    console.log(formDataToObject);
    axios
      .post("http://localhost/Backend/Controller.php", formDataToObject, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        // Handle the response from the API
        // setLoggedIn(true);
        // alert(loggedIn);
        if (response.data === "You are logged in") {
          // alert("You are Logged In");
          isLoggedInSession(true);
          onClose();
          // window.location.reload();
          // .then(data => {
          //   // Handle the response data if needed
          //   console.log('Received data:', data);
          // })
          // .catch(error => {
          //   // Handle errors if needed
          //   console.error('Error occurred:', error);
          // });
        } else return alert(response.data);
        // loggedIn(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      signIn();
    }
  };
  const submitRegBtn = () => {
    // Validations

    if (
      formData.regUsername === "" ||
      formData.regPassword1 === "" ||
      formData.regPassword2 === ""
    ) {
      openAlertEmpty();
      return;
    }

    if (formData.regUsername.length < 4) {
      openAlertUsername();
      return;
    }

    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!usernameRegex.test(formData.regUsername)) {
      openAlertUsernameAlphaNumeric();
      return;
    }

    if (formData.regPassword1.length < 8) {
      openAlertPasswordShort();
      return;
    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    if (!passwordRegex.test(formData.regPassword1)) {
      openAlertPasswordPattern();
      return;
    }

    if (formData.regPassword1 !== formData.regPassword2) {
      openAlertPasswordMatch();
      return;
    }

    if (formData.regPassword2 !== formData.regPassword1) {
      openAlertPasswordMatch();
      return;
    }

    if (!document.getElementById("termsCheckbox").checked) {
      openAlertTerms();
      return;
    }
    console.log(formData);
    const formDataToSend = new URLSearchParams();
    formDataToSend.append("fileSelector", "Register");
    formDataToSend.append("regFirstName", formData.regFirstName);
    formDataToSend.append("regLastName", formData.regLastName);
    formDataToSend.append("regEmail", formData.regEmail);
    formDataToSend.append("regStreetBrgy", formData.regStreetBrgy);
    formDataToSend.append("regCity", formData.regCity);
    formDataToSend.append("regPostalCode", formData.regPostalCode);
    formDataToSend.append("regContactNum", formData.regContactNum);
    formDataToSend.append("regVerificationCode", formData.regVerificationCode);
    formDataToSend.append("regUsername", formData.regUsername);
    formDataToSend.append("regPassword1", formData.regPassword1);
    formDataToSend.append("regPassword2", formData.regPassword2);
    // ... append other form fields
    const formDataToObject = {};
    formDataToSend.forEach(function (value, key) {
      formDataToObject[key] = value;
    });

    console.log(formDataToObject); // Check if form data is correctly formatted
    axios
      .post("http://localhost/Backend/Controller.php", formDataToObject, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        // Handle the response from the API
        if (response.data === "Registration successful!") {
          alert("Successfully Registered!");
          showLoginModal();
        } else alert(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordVisible1, setIsPasswordVisible1] = useState(false);
  const [isPasswordVisible2, setIsPasswordVisible2] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [inputType1, setInputType1] = useState("password");
  const [inputType2, setInputType2] = useState("password");
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
    setInputType(isPasswordVisible ? "password" : "text");
  };
  const togglePasswordVisibility1 = () => {
    setIsPasswordVisible1(!isPasswordVisible1);
    setInputType1(isPasswordVisible1 ? "password" : "text");
  };
  const togglePasswordVisibility2 = () => {
    setIsPasswordVisible2(!isPasswordVisible2);
    setInputType2(isPasswordVisible2 ? "password" : "text");
  };
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    switch (currentStep) {
      case 1:
        // step 1!
        if (formData.regFirstName === "") {
          openAlertEmpty();
        } else if (!alphanumericRegex.test(formData.regFirstName)) {
          openAlertSpecialCharacters();
        } else if (formData.regLastName === "") {
          openAlertEmpty();
        } else if (!alphanumericRegex.test(formData.regLastName)) {
          openAlertSpecialCharacters();
        } else if (formData.regEmail === "") {
          openAlertEmpty();
        } else if (!emailRegex.test(formData.regEmail)) {
          openAlertInvalidEmail();
        } else {
          setCurrentStep(currentStep + 1);
        }
        break;

      case 2:
        // step 2!
        const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(
          formData.regCity
        );
        const isValidPostalCode = /^[0-9]{4}$/.test(formData.regPostalCode);
        if (formData.regCity === "") {
          openAlertStep2Required();
        } else if (hasNumbers || hasSpecialCharacter) {
          openAlertCity();
        } else if (formData.regStreetBrgy === "") {
          openAlertStep2Required();
        } else if (formData.regPostalCode === "") {
          openAlertStep2Required();
        } else if (!isValidPostalCode) {
          openAlertPostalCode();
        } else {
          setCurrentStep(currentStep + 1);
        }
        break;

      case 3:
        const isValidContactNum = /^9[0-9]*$/.test(formData.regContactNum);

        if (formData.regContactNum === "") {
          openAlertEmpty();
        } else if (!isValidContactNum) {
          openAlertPhone();
        } else {
          setCurrentStep(currentStep + 1);
        }
        break;
      // Add more cases for additional steps if needed

      default:
      // Handle default case or any other logic
    }
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const [isLoginModalVisible, setLoginModalVisible] = useState(true);
  const [isRegisterModalVisible, setRegisterModalVisible] = useState(false);
  const [isForgotPasswordModalVisible, setForgotPasswordModalVisible] =
    useState(false);
    useEffect(() => {
      
      if (isLoginModalVisible || isRegisterModalVisible || isForgotPasswordModalVisible) {
        document.body.style.overflow = 'hidden';  
      } else {
        document.body.style.overflow = 'auto';  
      }
  
      
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [isLoginModalVisible, isRegisterModalVisible, isForgotPasswordModalVisible]);
  const showLoginModal = () => {
    setLoginModalVisible(true);
    setRegisterModalVisible(false);
    setForgotPasswordModalVisible(false);
  };

  const showRegisterModal = () => {
    setLoginModalVisible(false);
    setRegisterModalVisible(true);
    setForgotPasswordModalVisible(false);
  };
  const showForgotPasswordModal = () => {
    setLoginModalVisible(false);
    setRegisterModalVisible(false);
    setForgotPasswordModalVisible(true);
  };
  useEffect(() => {
    // const status = document.querySelector(".registrationAddress");
    const success = (position) => {
      // console.log(position)
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      // console.log(latitude +  '' + longitude)

      const geoApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDzzi_VBcf2Oef6LTViLU767UPNHlnIze4`;
      fetch(geoApiUrl)
        .then((res) => res.json())
        .then((data) => {
          console.log("baba neto");
          console.log(data);
          // Get PostalCode
          const regPostalCode =
            data.results[3].address_components.find((component) =>
              component.types.includes("postal_code")
            ) != null
              ? data.results[0].address_components.find((component) =>
                  component.types.includes("postal_code")
                )
              : "";
          console.log("baba neto");
          console.log(regPostalCode);

          document.querySelector("#regPostalCode").value = regPostalCode;
          console.log(regPostalCode);
          // end to Get PostalCode

          const address = data.results[0].formatted_address;
          const addressArray = address.split(", ");
          console.log(data.results[0].formatted_address);
          const selectedStreetBrgy = [];
          for (let i = addressArray.length - 4; i >= 0; i--) {
            selectedStreetBrgy.push(addressArray[i]);
          }
          console.log(selectedStreetBrgy);
          console.log(addressArray);
          document.querySelector("#regStreetBrgy").value =
            selectedStreetBrgy.join(", ");
          document.querySelector("#regCity").value =
            addressArray[addressArray.length - 3];
          // status.textContent = data.results[0].formatted_address;
        });
    };
    const error = () => {
      status.textContent = "Unable to retrieve your location";
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);
  // console.log(document.querySelector(".registrationAddress"));
  useEffect(() => {
    // Validation for matching passwords
    if (
      formData.regPassword2 && formData.regPassword2.trim() !== "" &&
      formData.regPassword1 !== formData.regPassword2
    ) {
      setErrors({
        ...errors,
        regPassword2: "Passwords do not match.",
      });
    } else {
      setErrors({
        ...errors,
        regPassword2: "", // Clear the error if the passwords match or regPassword2 is empty
      });
    }
  }, [formData.regPassword1, formData.regPassword2]);
  const validateField = (name, value) => {
    // Add your validation logic here
    if (name === "regFirstName") {
      if (value.trim() === "") {
        setErrors({
          ...errors,
          regFirstName: "First Name is required.",
        });
      } else if (!alphanumericRegex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          regFirstName: "First Name cannot contain special characters.",
        }));
      } else {
        setErrors({
          ...errors,
          regFirstName: "", // Clear the error if the field is valid
        });
      }
    } else if (name === "regLastName") {
      if (value.trim() === "") {
        setErrors({
          ...errors,
          regLastName: "Last Name is required.",
        });
      } else if (!alphanumericRegex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          regLastName: "Last Name cannot contain special characters.",
        }));
      } else {
        setErrors({
          ...errors,
          regLastName: "", // Clear the error if the field is valid
        });
      }
    } else if (name === "regEmail") {
      if (value.trim() === "") {
        setErrors({
          ...errors,
          regEmail: "Email is required.",
        });
      } else if (!emailRegex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          regEmail: "Enter a valid email address.",
        }));
      } else {
        setErrors({
          ...errors,
          regEmail: "", // Clear the error if the field is valid
        });
      }
    } else if (name === "regCity") {
      const hasNumbers = /\d/.test(value);
      const hasSpecialCharacters = /[!@#$%^&*(),.?":{}|<>]/.test(value);

      if (value.trim() === "") {
        setErrors({
          ...errors,
          regCity: "City is required.",
        });
      } else if (hasNumbers) {
        setErrors({
          ...errors,
          regCity: "No numbers are allowed in the city field.",
        });
      } else if (hasSpecialCharacters) {
        setErrors({
          ...errors,
          regCity: "No special characters are allowed in the city field.",
        });
      } else {
        setErrors({
          ...errors,
          regCity: "", // Clear the error if the field is valid
        });
      }
    } else if (name === "regStreetBrgy") {
      if (value.trim() === "") {
        setErrors({
          ...errors,
          regStreetBrgy: "Street and Barangay is required.",
        });
      } else {
        setErrors({
          ...errors,
          regStreetBrgy: "", // Clear the error if the field is valid
        });
      }
    } else if (name === "regPostalCode") {
      const isValidPostalCode = /^[0-9]{4}$/.test(value);

      if (value.trim() === "") {
        setErrors({
          ...errors,
          regPostalCode: "Postal Code is required.",
        });
      } else if (!isValidPostalCode) {
        setErrors({
          ...errors,
          regPostalCode:
            "Please enter a 4-digit postal code with only numbers.",
        });
      } else {
        setErrors({
          ...errors,
          regPostalCode: "", // Clear the error if the field is valid
        });
      }
    } else if (name === "regContactNum") {
      const isValidContactNum = /^9[0-9]*$/.test(value);

      if (value === "") {
        setErrors({
          ...errors,
          regContactNum: "Contact number is required.",
        });
      } else if (!isValidContactNum) {
        setErrors({
          ...errors,
          regContactNum:
            "Please enter a valid contact number starting with 9 and consisting of only numbers.",
        });
      } else {
        setErrors({
          ...errors,
          regContactNum: "", // Clear the error if the field is valid
        });
      }
    } else if (name === "regUsername") {
      // Validation for non-empty username
      if (value.trim() === "") {
        setErrors({
          ...errors,
          regUsername: "Username is required.",
        });
      } else {
        // Validation for username length
        if (value.length < 4) {
          setErrors({
            ...errors,
            regUsername: "Username must be at least 4 characters long.",
          });
        } else {
          // Validation for alphanumeric username without spaces
          const usernameRegex = /^[a-zA-Z0-9]+$/;
          if (!usernameRegex.test(value)) {
            setErrors({
              ...errors,
              regUsername:
                "Username can only contain alphanumeric characters without spaces.",
            });
          } else {
            setErrors({
              ...errors,
              regUsername: "", // Clear the error if the field is valid
            });
          }
        }
      }
    } else if (name === "regPassword1") {
      // Validation for non-empty password
      if (value.trim() === "") {
        setErrors({
          ...errors,
          regPassword1: "Password is required.",
        });
      } else {
        // Validation for password length
        if (value.length < 8) {
          setErrors({
            ...errors,
            regPassword1: "Password must be at least 8 characters long.",
          });
        } else {
          // Validation for password complexity
          const passwordRegex =
            /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
          if (!passwordRegex.test(value)) {
            setErrors({
              ...errors,
              regPassword1:
                "Password must contain at least one capital letter, one number, and one special character.",
            });
          } else {
            setErrors({
              ...errors,
              regPassword1: "", // Clear the error if the field is valid
            });
          }
        }
      }
    } else if (name === "regPassword2") {
      // Validation for non-empty password confirmation
      if (value.trim() === "") {
        setErrors({
          ...errors,
          regPassword2: "Password confirmation is required.",
        });
      } else {
        // Validation for matching passwords
        // if (value !== formData.regPassword1) {
        //   setErrors({
        //     ...errors,
        //     regPassword2: 'Passwords do not match.',
        //   });
        // } else {
        //   setErrors({
        //     ...errors,
        //     regPassword2: '', // Clear the error if the field is valid
        //   });
        // }
      }
    } else if (name === "termsCheckbox") {
      // Validation for the terms and conditions checkbox
      setErrors({
        ...errors,
        termsCheckbox: value ? "" : "Please agree to the terms and conditions.",
      });
    }

    // }else {
    //   setErrors({
    //     ...errors,
    //     regFirstName: '', // Clear the error if the field is valid
    //   });
    // }
  };

  return (
    <>
      {/* {loggedIn ? asd(true) : asd(false)} */}
      <div className={`LoginModal ${isLoginModalVisible ? "" : "hidden"}`}>
        <div
          tabIndex="-1"
          className="fixed top-0 left-0 right-0  flex justify-center z-50 bg-black bg-opacity-50 items-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%)]    max-h-full "
        >
          <div className="flex sm:flex-row flex-col items-center w-full max-w-4xl  lg:max-h-[85%] md:max-h-[90%] sm:max-h-[85%]  h-full ">
            <div className="w-full h-full p-4   sm:rounded-l-lg rounded-tl-lg rounded-tr-lg sm:rounded-tr-none    bg-white ">
              <div className="flex flex-col h-full align-center  justify-center">
                <h2 className="text-center md:text-4xl text-2xl font-semibold text-primary  font-inter leading-9 mb-2 tracking-tight mt-5  ">
                  Welcome to Agapay
                </h2>
                <p className="text-center font-poppins mb-3 text-black font-normal text-base">
                  Log in to access services and contribute to disaster reporting
                  and travel assistance.
                </p>

                <div className="space-y-6 p-4 ">
                  <div>
                    <div className="relative">
                      <input
                        type="text"
                        id="loginUsername"
                        name="loginUsername"
                        value={formData.loginUsername}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        className="block px-2.5 font-poppins border-gray/30  pt-4 w-full text-sm bg-transparent rounded-lg border-1 appearance-none  focus:outline-primary focus:ring-0 border  peer"
                        placeholder=""
                      />
                      <label
                        htmlFor="loginUsername"
                        className="absolute text-sm text-black    font-poppins cursor-text  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 outline-secondary"
                      >
                        Username
                      </label>
                    </div>
                  </div>
                  <div>
                    <div className="relative mt-2">
                      <input
                        type={inputType}
                        id="loginPass"
                        name="loginPass"
                        value={formData.loginPass}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        className="block px-2.5 font-poppins border-gray/30  pt-4 w-full text-sm bg-transparent rounded-lg border-1 appearance-none focus:outline-primary focus:ring-0 border  peer"
                        placeholder=""
                      />
                      <label
                        htmlFor="loginPass"
                        className="absolute text-sm  border-gray/30 text-black  font-poppins cursor-text  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 outline-secondary"
                      >
                        Password
                      </label>
                      <i
                        className="bi bi-eye-slash eye-icon absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                        onClick={togglePasswordVisibility}
                      >
                        {isPasswordVisible ? (
                          <EyeIcon className="w-6 h-6" />
                        ) : (
                          <EyeSlashIcon className="w-6 h-6" />
                        )}
                      </i>
                    </div>
                    <div className="mb-3 mt-7">
                      <button
                        type="submit"
                        onClick={signIn}
                        className="flex transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300 w-full justify-center font-poppins  bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primarydark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-full mb-3"
                      >
                        Sign in
                      </button>
                    </div>
                    <div className="flex items-center justify-center font-poppins mt-3">
                      <a
                        onClick={showForgotPasswordModal}
                        className="text-sm font-medium text-primary hover:underline cursor-pointer"
                      >
                        Forgot password?
                      </a>
                    </div>

                    <div className="mb-3 text-center font-poppins mt-3">
                      <p className="text-sm text-gray">
                        Not yet a user?{" "}
                        <span
                          className="text-primary hover:underline cursor-pointer font-semibold"
                          onClick={showRegisterModal}
                        >
                          Sign Up here
                        </span>
                      </p>
                    </div>
                    <div className="mb-3 flex items-center">
                      <hr className="flex-grow border-t border-lightgray  mr-2" />
                      <span>or</span>
                      <hr className="flex-grow border-t border-lightgray  ml-2" />
                    </div>
                    <div className="mb-3 flex sm:flex-row  font-poppins gap-3 justify-center  items-center">
                      <button
                        type="button"
                        className="text-white text-center bg-[#3b5998] hover:bg-[#3b5998]/80 focus:ring-2 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center mb-2"
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
                      <button
                        type="button"
                        className="text-white text-center bg-[#4285F4] hover:bg-[#4285F4]/80 focus:ring-2 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center mb-2"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 19"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Google
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="w-full h-full sm:rounded-r-lg  p-5 flex flex-col align-center justify-center bg-cover relative"
              style={{ backgroundImage: `url(${loginbg})` }}
            >
              <button
                type="button"
                className="hover:bg-black/20 bg-black/30 rounded-full  text-white font-extrabold   text-sm w-8 h-8 md:w-10 md:h-10 absolute top-4 right-4  sm:flex hidden items-center justify-center z-10"
                onClick={onClose}
              >
                <XMarkIcon className="w-7 h-7 font-bold  rounded-full" />
                <span className="sr-only">Close modal</span>
              </button>

              <h2 className="text-center text-2xl font-bold font-inter leading-9 mb-5 tracking-tight mt-5  ">
                Learn About Our Features
              </h2>
              <ul className="mb-6 text-left font-poppins font-medium">
                <li className="mb-2">
                  <span className="">&#8226;</span> Receive real-time disaster
                  alerts tailored to your location.
                </li>
                <li className="mb-2">
                  <span className="">&#8226;</span> Access accurate and
                  up-to-date information during emergencies.
                </li>
                <li>
                  <span className="">&#8226;</span> Collaborate with local
                  communities for effective disaster response.
                </li>
              </ul>
              <p className="mb-6 font-poppins font-medium">
                Agapay is your partner in building resilient communities. Join
                us in making a difference today.
                <Link
                  className="font-semibold text-white hover:underline  font-poppins"
                  to="/about"
                  onClick={onClose}
                >
                  Learn More
                </Link>
              </p>
            </div>
            <button
              type="button"
              className="bg-transparent  rounded-full text-sm w-8 h-8 absolute top-4 right-4 sm:hidden flex items-center justify-center"
              onClick={onClose}
            >
              <XMarkIcon className="w-7 h-7 font-bold   rounded-full" />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`RegisterModal ${isRegisterModalVisible ? "" : "hidden"}`}
      >
        <div
          tabIndex="-1"
          className="fixed top-0 left-0 right-0 z-50 flex justify-center bg-black bg-opacity-50 items-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%)]   max-h-full "
        >
          <div className="flex sm:flex-row flex-col-reverse items-center w-full max-w-4xl overflow-y-auto  lg:max-h-[85%] md:max-h-[90%] sm:max-h-[85%]  h-full ">
            <div
              className="w-full h-full sm:rounded-l-lg rounded-bl-lg rounded-br-lg sm:rounded-br-none  bg-gray p-5 flex flex-col items-center justify-center bg-cover"
              style={{ backgroundImage: `url(${loginbg})` }}
            >
              <h2 className="text-center text-4xl font-bold text-black font-inter leading-9 mb-5 tracking-tight mt-5  ">
                Existing User?
              </h2>
              <p className=" mb-2 text-center font-poppins font-medium">
                Your login is essential to access our services and contribute to
                disaster reporting and travel assistance requests.
              </p>
              <button
                type="button"
                onClick={showLoginModal}
                className="flex w-full justify-center font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300    bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primaryhover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-full mb-3"
              >
                Go back to Log In
              </button>
            </div>

            <div className="relative w-full h-full p-4 sm:rounded-r-lg rounded-tl-lg rounded-tr-lg sm:rounded-tl-none bg-white">
            <button
                type="button"
                className=" hover:bg-black/10 bg-black/5  rounded-full text-sm w-8 h-8 md:w-10 md:h-10 absolute top-4 right-4 sm:flex  hidden items-center justify-center z-10"
                onClick={onClose}
              >
                <XMarkIcon className="w-7 h-7 font-bold  rounded-full" />
                <span className="sr-only">Close modal</span>
              </button>
              <div
                className="flex flex-col h-full justify-center"
                id="step-1"
                style={{ display: currentStep === 1 ? "flex" : "none" }}
              >
                <h2  className="text-center md:text-4xl text-2xl font-semibold text-primary  font-inter leading-9 mb-2 tracking-tight mt-5  ">
                  Personal Information
                </h2>
                <div
                  className={`p-4 ${
                    errors.regFirstName || errors.regLastName || errors.regEmail
                      ? "space-y-3"
                      : "space-y-5"
                  }`}
                >
                  <div className="relative">
                    <input
                      type="text"
                      id="regFirstName"
                      name="regFirstName"
                      value={formData.regFirstName}
                      onChange={handleInputChange}
                      className={`block px-2.5 font-poppins pt-4 w-full text-sm bg-transparent rounded-lg border-1 appearance-none focus:outline-primary focus:ring-0 border peer ${
                        errors.regFirstName ? "border-red" : ""
                      }`}
                      placeholder=""
                    />
                    <label
                      htmlFor="regFirstName"
                      className="absolute text-sm  font-poppins  cursor-text  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 outline-secondary"
                    >
                      First Name
                    </label>
                  </div>
                  <div>
                    {errors.regFirstName && (
                      <p className="text-red font-inter text-sm py-0 font-semibold">
                        {errors.regFirstName}
                      </p>
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      id="regLastName"
                      name="regLastName"
                      value={formData.regLastName}
                      onChange={handleInputChange}
                      className={`block px-2.5 font-poppins pt-4 w-full text-sm bg-transparent rounded-lg border-1 appearance-none focus:outline-primary focus:ring-0 border peer ${
                        errors.regLastName ? "border-red" : ""
                      }`}
                      placeholder=""
                    />
                    <label
                      htmlFor="regLastName"
                      className="absolute text-sm  font-poppins cursor-text  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 outline-secondary"
                    >
                      Last Name
                    </label>
                  </div>
                  {errors.regLastName && (
                    <p className="text-red font-inter text-sm py-0 font-semibold">
                      {errors.regLastName}
                    </p>
                  )}
                  <div className="relative">
                    <input
                      type="text"
                      id="regEmail"
                      name="regEmail"
                      value={formData.regEmail}
                      onChange={handleInputChange}
                      className={`block px-2.5 font-poppins pt-4 w-full text-sm bg-transparent rounded-lg border-1 appearance-none focus:outline-primary focus:ring-0 border peer ${
                        errors.regEmail ? "border-red" : ""
                      }`}
                      placeholder=""
                    />
                    <label
                      htmlFor="regEmail"
                      className="absolute text-sm  font-poppins  cursor-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 outline-secondary"
                    >
                      Email
                    </label>
                  </div>

                  {/* <div>
                    <label
                      className="block mb-2 text-sm font-medium font-poppins "
                      htmlFor="large_size"
                    >
                      Please Attach Your ID
                    </label>
                    <input
                      className="block w-full text-md  border border-black cursor-pointer  font-poppins"
                      id="large_size"
                      type="file"
                    />
                  </div> */}

                  <div>
                    {errors.regEmail && (
                      <p className="text-red font-inter text-sm py-0 font-semibold">
                        {errors.regEmail}
                      </p>
                    )}
                    <div className="mb-3 mt-5">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="flex w-full justify-center font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300   bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primarydark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-full mb-3"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col h-full justify-center "
                id="step-2"
                style={{ display: currentStep === 2 ? "flex" : "none" }}
              >
                <h2 className="text-center text-xl sm:text-4xl font-semibold text-primary  font-inter leading-9 mb-2 tracking-tight   ">
                  Address Verification
                </h2>
                <div
                  className={`p-4 ${
                    errors.regCity ||
                    errors.regStreetBrgy ||
                    errors.regPostalCode
                      ? "space-y-3"
                      : "space-y-5"
                  }`}
                >
                  <div className="relative">
                    <input
                      type="text"
                      id="regStreetBrgy"
                      name="regStreetBrgy"
                      value={formData.regStreetBrgy}
                      onChange={handleInputChange}
                      className={`block px-2.5 font-poppins pt-4 w-full text-sm bg-transparent rounded-lg border-1 appearance-none focus:outline-primary focus:ring-0 border peer ${
                        errors.regStreetBrgy ? "border-red" : ""
                      }`}
                      placeholder=""
                    />
                    <label
                      htmlFor="regStreetBrgy"
                      className="absolute text-xs sm:text-sm whitespace-nowrap  font-poppins  cursor-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 outline-secondary"
                    >
                      House Number, Street Name, Barangay
                    </label>
                  </div>
                  {errors.regStreetBrgy && (
                    <p className="text-red font-inter text-sm py-0 font-semibold">
                      {errors.regStreetBrgy}
                    </p>
                  )}
                  <div className="relative">
                    <input
                      type="text"
                      id="regCity"
                      name="regCity"
                      value={formData.regCity}
                      onChange={handleInputChange}
                      className={`block px-2.5 font-poppins pt-4 w-full text-sm bg-transparent rounded-lg border-1 appearance-none focus:outline-primary focus:ring-0 border peer ${
                        errors.regCity ? "border-red" : ""
                      }`}
                      placeholder=""
                    />
                    <label
                      htmlFor="regCity"
                      className="absolute text-sm  font-poppins  cursor-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 outline-secondary"
                    >
                      City
                    </label>
                  </div>
                  {errors.regCity && (
                    <p className="text-red font-inter text-sm py-0 font-semibold">
                      {errors.regCity}
                    </p>
                  )}
          
                  <div className="relative">
                    <input
                      type="text"
                      id="regPostalCode"
                      name="regPostalCode"
                      minLength="4"
                      maxLength="4"
                      value={formData.regPostalCode}
                      onChange={handleInputChange}
                      className={`block px-2.5 font-poppins pt-4 w-full text-sm bg-transparent rounded-lg border-1 appearance-none focus:outline-primary focus:ring-0 border disabled peer ${
                        errors.regPostalCode ? "border-red" : ""
                      }`}
                      placeholder=""
                      // disabled // Add the disabled attribute here
                    />
                    <label
                      htmlFor="regPostalCode"
                      className="absolute text-sm  font-poppins cursor-not-allowed duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 outline-secondary"
                    >
                      Postal Code
                    </label>
                  </div>
                  {errors.regPostalCode && (
                    <p className="text-red font-inter text-sm py-0 font-semibold">
                      {errors.regPostalCode}
                    </p>
                  )}
                  <div>
                    <div className="mb-3 mt-5">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="flex w-full justify-center font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300   bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primarydark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-full mb-3"
                      >
                        Next
                      </button>
                      <button
                        type="button"
                        onClick={previousStep}
                        className="flex w-full justify-center font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300   bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primarydark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-full mb-3"
                      >
                        Previous
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col h-full justify-center "
                id="step-3"
                style={{ display: currentStep === 3 ? "flex" : "none" }}
              >
                <h2 className="text-center text-xl sm:text-4xl font-semibold text-primary  font-inter leading-9 mb-2 tracking-tight   ">
                  Contact Number Verification
                </h2>
                <div
                  className={`p-4 ${
                    errors.regContactNum ? "space-y-3" : "space-y-5"
                  }`}
                >
                  <div className="relative flex items-center mt-3">
                    <div
                      className={`flex-shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium  border  rounded-l-lg  focus:ring-primary focus:border-primary focus:outline-none  ${
                        errors.regContactNum ? "border-red" : "border-gray"
                      }`}
                    >
                      +63
                    </div>
                    <div className="relative w-full">
                      <input
                        type="tel"
                        id="regContactNum"
                        name="regContactNum"
                        minLength="10"
                        maxLength="10"
                        value={formData.regContactNum}
                        onChange={handleInputChange}
                        className={`block p-2.5 w-full z-20 text-sm bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-primary focus:border-primary focus:outline-none    peer ${
                          errors.regContactNum ? "border-red" : ""
                        }`}
                        placeholder=""
                        required
                      />
                      <label
                        htmlFor="regContactNum"
                        className="absolute text-sm  font-poppins cursor-text  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 outline-secondary"
                      >
                        Contact Number
                      </label>
                    </div>
                  </div>
                  {errors.regContactNum && (
                    <p className="text-red font-inter text-sm py-0 font-semibold">
                      {errors.regContactNum}
                    </p>
                  )}
                  <div className="relative">
                    <input
                      type="text"
                      id="regVerificationCode"
                      name="regVerificationCode"
                      value={formData.regVerificationCode}
                      onChange={handleInputChange}
                      className="block px-2.5 font-poppins  pt-4 w-full text-sm bg-transparent rounded-lg border-1 appearance-none  focus:outline-primary focus:ring-0 border  peer"
                      placeholder=""
                    />
                    <label
                      htmlFor="regVerificationCode"
                      className="absolute text-sm  font-poppins  cursor-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 outline-secondary"
                    >
                      Verification Code
                    </label>
                  </div>
                  <div className="flex justify-end gap-3 flex-col-2 sm:flex-row">
                    <button className="bg-primary hover:bg-primarydark font-poppins text-sm px-2 py-1.5 rounded-lg text-white ">
                      Send Verification Code
                    </button>
                    <button className="bg-secondary hover:bg-primaryhover font-poppins text-sm px-2 py-1.5 rounded-lg text-white ">
                      Verify
                    </button>
                  </div>

                  <div>
                    <div className="mb-3 mt-16">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="flex w-full justify-center font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300   bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primarydark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-full mb-3"
                      >
                        Next
                      </button>
                      <button
                        type="button"
                        onClick={previousStep}
                        className="flex w-full justify-center font-poppins transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300   bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primarydark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-full mb-3"
                      >
                        Previous
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col h-full justify-center "
                id="step-4"
                style={{ display: currentStep === 4 ? "flex" : "none" }}
              >
                <h2 className="text-center text-xl sm:text-4xl font-semibold text-primary  font-inter leading-9 mb-2 tracking-tight   ">
                  Account Information
                </h2>
                <div
                  className={`p-4 ${
                    errors.regUsername ||
                    errors.regPassword1 ||
                    errors.regPassword2
                      ? "space-y-3"
                      : "space-y-6"
                  }`}
                >
                  <div className="relative">
                    <input
                      type="text"
                      id="regUsername"
                      name="regUsername"
                      value={formData.regUsername}
                      onChange={handleInputChange}
                      className={`block px-2.5 font-poppins pt-4 w-full text-sm bg-transparent rounded-lg border-1 appearance-none focus:outline-primary focus:ring-0 border peer ${
                        errors.regUsername ? "border-red" : ""
                      }`}
                      placeholder=""
                    />
                    <label
                      htmlFor="regUsername"
                      className="absolute text-sm   font-poppins  cursor-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 outline-secondary"
                    >
                      Username
                    </label>
                  </div>
                  {errors.regUsername && (
                    <p className="text-red font-inter text-sm py-0 font-semibold">
                      {errors.regUsername}
                    </p>
                  )}
                  <div className="relative">
                    <input
                      type={inputType1}
                      id="regPassword1"
                      name="regPassword1"
                      value={formData.regPassword1}
                      onChange={handleInputChange}
                      className={`block px-2.5 font-poppins pt-4 w-full text-sm bg-transparent rounded-lg border-1 appearance-none focus:outline-primary focus:ring-0 border peer ${
                        errors.regPassword1 ? "border-red" : ""
                      }`}
                      placeholder=""
                    />
                    <label
                      htmlFor="regPassword1"
                      className="absolute text-sm  font-poppins  cursor-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 outline-secondary"
                    >
                      Password
                    </label>
                    <i
                      className="bi bi-eye-slash eye-icon absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                      onClick={togglePasswordVisibility1}
                    >
                      {isPasswordVisible1 ? (
                        <EyeIcon className="w-6 h-6" />
                      ) : (
                        <EyeSlashIcon className="w-6 h-6" />
                      )}
                    </i>
                  </div>
                  {errors.regPassword1 && (
                    <p className="text-red font-inter text-sm py-0 font-semibold">
                      {errors.regPassword1}
                    </p>
                  )}
                  <div className="relative">
                    <input
                      type={inputType2}
                      id="regPassword2"
                      name="regPassword2"
                      value={formData.regPassword2}
                      onChange={handleInputChange}
                      className={`block px-2.5 font-poppins pt-4 w-full text-sm bg-transparent rounded-lg border-1 appearance-none focus:outline-primary focus:ring-0 border peer ${
                        errors.regPassword2 ? "border-red" : ""
                      }`}
                      placeholder=""
                    />
                    <label
                      htmlFor="regPassword2"
                      className="absolute text-sm  font-poppins  cursor-text duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 outline-secondary"
                    >
                      Confirm Password
                    </label>
                    <i
                      className="bi bi-eye-slash eye-icon absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                      onClick={togglePasswordVisibility2}
                    >
                      {isPasswordVisible2 ? (
                        <EyeIcon className="w-6 h-6" />
                      ) : (
                        <EyeSlashIcon className="w-6 h-6" />
                      )}
                    </i>
                  </div>
                  {errors.regPassword2 && (
                    <p className="text-red font-inter text-sm py-0 font-semibold">
                      {errors.regPassword2}
                    </p>
                  )}
                  <div className="flex items-center">
                    <input
                      id="termsCheckbox"
                      name="termsCheckbox"
                      type="checkbox"
                      // defaultValue=""
                      className="w-4 h-4 text-primary checked:bg-primary   border-gray/30 rounded focus:ring-white focus:ring-2 "
                    />
                    <label
                      htmlFor="termsCheckbox"
                      className="ms-2 text-sm font-medium font-inter"
                    >
                      I agree with the{" "}
                      <a
                        onClick={openModalTerms}
                        className=" cursor-pointer text-primary  hover:underline"
                      >
                        terms and conditions
                      </a>
                      .
                    </label>
                  </div>
                  <div>
                    {errors.termsCheckbox && (
                      <p className="text-red font-inter text-sm py-0 font-semibold">
                        {errors.termsCheckbox}
                      </p>
                    )}
                    <div className="mb-3 mt-5">
                      <button
                        type="button"
                        onClick={submitRegBtn}
                        className="flex w-full justify-center font-poppins   bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primarydark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-full mb-3"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        onClick={previousStep}
                        className="flex w-full justify-center font-poppins   bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primarydark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-full mb-3"
                      >
                        Previous
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                          <button
                type="button"
                className="bg-transparent hover:bg-gray hover:text-white rounded-full text-sm w-8 h-8 md:w-10 md:h-10 absolute top-4 right-4 sm:hidden flex items-center justify-center z-10"
                onClick={onClose}
              >
                <XMarkIcon className="w-7 h-7 font-bold  rounded-full" />
                <span className="sr-only">Close modal</span>
              </button>
          </div>
        </div>
      </div>
      <div
        className={`ForgotPassword ${
          isForgotPasswordModalVisible ? "" : "hidden"
        }`}
      >
        <div
          tabIndex="-1"
          className="fixed top-0 left-0 right-0 z-50  flex justify-center bg-black bg-opacity-50 items-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%)]   max-h-full "
        >
          <div className="flex sm:flex-row flex-col items-center w-full max-w-4xl  lg:max-h-[85%] md:max-h-[90%] sm:max-h-[85%]  h-full ">
            <div className="w-full h-full p-4   sm:rounded-l-lg rounded-tl-lg rounded-tr-lg sm:rounded-tr-none   bg-white ">
              <div className="flex flex-col h-full align-center  justify-center">
                <h2 className="text-center md:text-4xl text-2xl font-semibold text-primary  font-inter leading-9 mb-2 tracking-tight mt-5  ">
                  Forgot Password?
                </h2>
                <p className="text-center font-poppins mb-3 text-black font-normal">
                  Please include a valid email address so we can get back to
                  you.
                </p>

                <div className="space-y-6 p-4 ">
                  <div className="mt-5">
                    <form>
                      <div className="grid gap-y-4">
                        <div>
                          <div className="relative">
                            <input
                              type="text"
                              // value=""
                              className="block px-2.5 font-poppins border-gray/30  pt-4 w-full text-sm bg-transparent rounded-lg border-1 appearance-none  focus:outline-primary focus:ring-0 border  peer"
                              placeholder=""
                            />
                            <label
                              htmlFor="loginUsername"
                              className="absolute text-sm text-black    font-poppins cursor-text  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-secondary  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 outline-secondary"
                            >
                              Email Address
                            </label>
                          </div>
                        </div>

                        <div className="mb-3 mt-7">
                          <button
                            type="submit"
                            className="flex transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300 w-full justify-center font-poppins  bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primarydark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-full mb-3"
                          >
                            Reset Password
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="w-full h-full sm:rounded-r-lg rounded-br-lg rounded-bl-lg  sm:rounded-bl-none  bg-primary p-5 flex flex-col align-center justify-center bg-cover relative"
              style={{ backgroundImage: `url(${loginbg})` }}
            >
              <button
                type="button"
                className="hover:bg-black/20 bg-black/30 rounded-full text-white font-extrabold   text-sm w-8 h-8 md:w-10 md:h-10 absolute top-4 right-4  sm:flex hidden items-center justify-center z-10"
                onClick={onClose}
              >
                <XMarkIcon className="w-7 h-7 font-bold  rounded-full" />
                <span className="sr-only">Close modal</span>
              </button>

              <h2 className="text-center text-2xl font-bold font-inter leading-9 mb-5 tracking-tight mt-5  ">
                Remembered your Password?
              </h2>

              <div className="mb-3 mt-7">
                <button
                  onClick={showLoginModal}
                  className="flex transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300 w-full justify-center font-poppins  bg-secondary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary rounded-full mb-3"
                >
                  Sign In Here
                </button>
              </div>
            </div>
            <button
              type="button"
              className="bg-transparent  rounded-full text-sm w-8 h-8 absolute top-4 right-4 sm:hidden flex items-center justify-center"
              onClick={onClose}
            >
              <XMarkIcon className="w-7 h-7 font-bold  rounded-full" />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
        </div>
      </div>
      {showAlertEmpty && <AlertEmpty closeAlertEmpty={closeAlertEmpty} />}
      {showAlertSpecialCharacters && (
        <AlertSpecialCharacters
          closeAlertSpecialCharacters={closeAlertSpecialCharacters}
        />
      )}
      {showAlertInvalidEmail && (
        <AlertInvalidEmail closeAlertInvalidEmail={closeAlertInvalidEmail} />
      )}
      {showAlertStep2Required && (
        <AlertStep2Required closeAlertStep2Required={closeAlertStep2Required} />
      )}
      {showAlertCity && <AlertCity closeAlertCity={closeAlertCity} />}
      {showAlertPostalCode && (
        <AlertPostalCode closeAlertPostalCode={closeAlertPostalCode} />
      )}
      {showAlertPhone && <AlertPhone closeAlertPhone={closeAlertPhone} />}
      {showAlertUsername && (
        <AlertUsername closeAlertUsername={closeAlertUsername} />
      )}
      {showAlertUsernameAlphaNumeric && (
        <AlertUsernameAlphaNumeric
          closeAlertUsernameAlphaNumeric={closeAlertUsernameAlphaNumeric}
        />
      )}
      {showAlertPasswordShort && (
        <AlertPasswordShort closeAlertPasswordShort={closeAlertPasswordShort} />
      )}
      {showAlertPasswordPattern && (
        <AlertPasswordPattern
          closeAlertPasswordPattern={closeAlertPasswordPattern}
        />
      )}
      {showAlertPasswordMatch && (
        <AlertPasswordMatch closeAlertPasswordMatch={closeAlertPasswordMatch} />
      )}
      {showAlertTerms && <AlertTerms closeAlertTerms={closeAlertTerms} />}
      {showModalTerms && <ModalTerms closeModalTerms={closeModalTerms} />}
    </>
  );
};

export default Login;
