import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [serviceError, setServiceError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [success, setSuccess] = useState("");
  const form = useRef();

  const validateEmail = (email) => {
    // Regular expression pattern for email validation
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Reset the error messages
    setNameError("");
    setEmailError("");
    setServiceError("");
    setMessageError("");

    // Validate the name field
    if (name.trim() === "") {
      setNameError("Please enter your name.");
      window.scrollTo(0, 0);
      return;
    }

    // Validate the email field
    if (email.trim() === "") {
      setEmailError("Please enter your email address.");
      window.scrollTo(0, 0);
      return;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      window.scrollTo(0, 0);
      return;
    }

    // Validate the service field
    if (service.trim() === "") {
      setServiceError("Please enter the service you need help with.");
      window.scrollTo(0, 0);
      return;
    }

    // Validate the message field
    if (message.trim() === "") {
      setMessageError("Please enter your message.");
      window.scrollTo(0, 0);
      return;
    }

    emailjs
      .sendForm(
        "service_enfi15m",
        "template_8vr6mb9",
        form.current,
        "sdUH7SNu2KnjDZ7j6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess("Success! Your message is successfully sent.");
          setTimeout(() => {
            setSuccess("");
          }, 3000);
          setName("");
          setEmail("");
          setService("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {/* <div style={{ background: "rgba(0, 0, 0, 0.93)" }}>
        <Navbar />
      </div> */}

      <div
        className="flex flex-col overflow-x-hidden bg-[#1c1b20]"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        <div
          className="flex justify-center items-center mx-auto mt-[2rem] sm:mt-[3rem]"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="w-[80vw]"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1
              className="text-3xl ss:text-4xl font-bold font-poppins sm:text-5xl"
              style={{ color: "#fff" }}
            >
              Let's start a
            </h1>{" "}
            <h1
              className="text-3xl ss:text-4xl font-bold font-poppins sm:mt-2 sm:text-5xl"
              style={{ color: "#fff" }}
            >
              Conversation{" "}
              <strong className="bold-text-30 text-[#F4CE14]">.</strong>
            </h1>
            <form
              ref={form}
              className="mt-[2.5rem]"
              action="/"
              onSubmit={sendEmail}
              style={{ width: "100%" }}
            >
              <label htmlFor="name">
                <div
                  className="text-[1.25rem] sm:text-[1.5rem] sm:text-[1.5rem] sm:font-semibold mb-5"
                  style={{ color: "#fff" }}
                >
                  hey, my name is
                </div>
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                variant="unstyled"
                placeholder="Jhon Doe*"
                fontSize={"xl"}
                color={"#e9efea"}
                onChange={(e) => setName(e.target.value)}
                value={name}
                autoComplete="off"
                className="bg-[#1c1b20] outline-none"
                style={{ color: "#e9efea" }}
              />{" "}
              {nameError && <div className="text-red-500">{nameError}</div>}
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "rgba(255, 255, 255, 0.16)",
                  marginBottom: "3rem",
                }}
              ></div>
              <label htmlFor="email">
                <div
                  className="text-[1.25rem] sm:text-[1.5rem] sm:text-[1.5rem] sm:font-semibold mb-5"
                  style={{ color: "#fff" }}
                >
                  my email address is
                </div>
              </label>
              <input
                type="text"
                name="user_email"
                id="email"
                variant="unstyled"
                placeholder="Jhon@example.com*"
                fontSize={"xl"}
                color={"#e9efea"}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                autoComplete="off"
                className="bg-[#1c1b20] outline-none"
                style={{ color: "#e9efea" }}
              />{" "}
              {emailError && <div className="text-red-500">{emailError}</div>}
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "rgba(255, 255, 255, 0.16)",
                  marginBottom: "3rem",
                }}
              ></div>
              <label htmlFor="service">
                <div
                  className="text-[1.25rem] sm:text-[1.5rem] sm:text-[1.5rem] sm:font-semibold mb-5"
                  style={{ color: "#fff" }}
                >
                  i'm looking for help with
                </div>
              </label>
              <input
                type="text"
                name="service"
                id="service"
                variant="unstyled"
                placeholder="marketting*"
                fontSize={"xl"}
                color={"#e9efea"}
                onChange={(e) => setService(e.target.value)}
                value={service}
                autoComplete="off"
                className="bg-[#1c1b20] outline-none"
                style={{ color: "#e9efea" }}
              />{" "}
              {serviceError && (
                <div className="text-red-500">{serviceError}</div>
              )}
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "rgba(255, 255, 255, 0.16)",
                  marginBottom: "3rem",
                }}
              ></div>
              <label htmlFor="message" style={{ color: "#fff" }}>
                <div className="text-[1.25rem] sm:text-[1.5rem] sm:text-[1.5rem] sm:font-semibold mb-5">
                  my message
                </div>
              </label>
              <textarea
                className="w-[50rem] h-32 resize bg-[#1c1b20] pl-2 outline-none"
                type="text"
                name="message"
                id="message"
                variant="unstyled"
                placeholder="Your message here*"
                fontSize={"xl"}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                autoComplete="off"
                style={{ color: "#e9efea" }}
              />{" "}
              {messageError && (
                <div className="text-red-500">{messageError}</div>
              )}
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "rgba(255, 255, 255, 0.16)",
                  marginBottom: "3rem",
                }}
              ></div>
              {success && (
                <div className="bg-green-400 text-white p-4 rounded">
                  {success}
                </div>
              )}
              <motion.button
                type="submit"
                value="send"
                className={`py-3 px-[5rem] font-poppins font-medium text-[18px] text-[#1c1b20] bg-[#F4CE14] rounded-[10px] outline-none my-10 ${styles}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                Send
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
