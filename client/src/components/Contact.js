import React, { useState } from "react";
import styled from "styled-components";
import swal from "sweetalert";
import "../styles/sweetalert.css";
import axios from "axios";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

const StyledContainer = styled.div`
  min-width: 100vw;
  min-height: 60vh;
  height: 100%;
  background: #818cf8;
`;

const Contact = () => {
  const [emailInput, setEmailInput] = useState({
    subject: "",
    name: "",
    email: "",
    message: "",
  });

  const handleEmailInput = (e) => {
    const targetValue = e.target.value;
    const targetID = e.target.id;

    if (targetID === "subject") {
      setEmailInput({ ...emailInput, subject: targetValue });
    } else if (targetID === "name") {
      setEmailInput({ ...emailInput, name: targetValue });
    } else if (targetID === "email") {
      setEmailInput({ ...emailInput, email: targetValue });
    } else if (targetID === "message") {
      setEmailInput({ ...emailInput, message: targetValue });
    }
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();

    const emailData = {
      subject: emailInput.subject,
      name: emailInput.name,
      email: emailInput.email,
      message: emailInput.message,
    };

    await axios
      .post("https://prinsdev.herokuapp.com/sendEmail", emailData)
      .then((res) => {
        swal("Email Sent", "Thank you for contacting me.", "success");
        setEmailInput({ subject: "", name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log(error.response);
        swal(
          "Ooops!",
          "Something went wrong. Please try again later.",
          "error"
        );
      });
  };

  return (
    <StyledContainer
      id="contact"
      className="relative flex flex-col justify-center items-center pt-10"
    >
      <div className="bg-white rounded-lg mx-auto my-20 shadow-lg py-4 px-4 w-11/12 flex flex-col md:flex-row md:w-4/5 lg:w-3/5">
        <div className="mb-5 w-full">
          <h1 className="inline-block font-rubik font-bold text-2xl mb-4">
            Get in Touch
          </h1>
          <div className="w-full justify-around items-start">
            <div className="flex flex-row justify-start items-start py-4">
              <HiOutlineLocationMarker className="w-8 h-8 mr-5 text-indigo-400 " />
              <div className="flex flex-col justify-start items-start ">
                <h1 className="font-rubik font-bold text-base">Address</h1>
                <p className="text-gray-700 text-left font-karla text-base font-light md:text-center">
                  Bauan, Batangas, PH
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-start items-start py-4">
              <HiOutlineMail className="w-8 h-8 mr-5 text-indigo-400 " />
              <div className="flex flex-col justify-start items-start ">
                <h1 className="font-rubik font-bold text-base">Email</h1>
                <p className="text-gray-700 text-left font-karla text-base font-light	">
                  ocampo_prins@yahoo.com
                </p>
                <p className="text-gray-700 text-left font-karla text-base font-light	">
                  prinsocampo@gmail.com
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-start items-start py-4  ">
              <HiOutlinePhone className="w-8 h-8 mr-5 text-indigo-400" />
              <div className="flex flex-col justify-start items-start ">
                <h1 className="font-rubik font-bold text-base">Phone</h1>
                <p className="text-gray-700 text-left font-karla text-base font-light	">
                  09199214686
                </p>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSendEmail} className="w-full">
          <h1 className="inline-block font-rubik font-bold text-2xl mb-4">
            Send a Message
          </h1>
          <div>
            <div className="mb-2">
              <input
                placeholder="Subject"
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="subject"
                name="subject"
                type="text"
                autoComplete="on"
                value={emailInput.subject}
                onChange={handleEmailInput}
              />
            </div>
            <div className="mb-2">
              <input
                placeholder="Name"
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                autoComplete="on"
                value={emailInput.name}
                onChange={handleEmailInput}
              />
            </div>
            <div className="mb-2">
              <input
                placeholder="Email"
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                autoComplete="on"
                value={emailInput.email}
                onChange={handleEmailInput}
              />
            </div>
            <div className="mb-2">
              <textarea
                placeholder="Message"
                className="h-40 max-h-80 w-full px-3 py-2 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                type="text"
                value={emailInput.message}
                onChange={handleEmailInput}
              />
            </div>
          </div>
          <button
            type="submit"
            className="font-karla font-medium hover:--tw-scale-y: 1; transition duration-200 ease-in-out outline-none focus:outline-none text-white py-2 px-4 w-36 rounded-lg mt-2 shadow-lg bg-gradient-to-r from-indigo-400 to-blue-400  hover:from-white border border-transparent hover:to-white hover:border-blue-400 hover:text-blue-600 md:text-lg"
          >
            Send
          </button>
        </form>
      </div>
    </StyledContainer>
  );
};

export default Contact;
