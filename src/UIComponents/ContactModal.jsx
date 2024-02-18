import CloseIcon from "@mui/icons-material/Close";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
export default function ContactModal({ setContactModal, contactModal }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_KEY,
        import.meta.env.VITE_TEMPLATE_KEY,
        form.current,
        import.meta.env.VITE_USER_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className=" fixed md:leading-loose md:tracking-wider inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center  z-50 items-center">
      <div className=" p-6 rounded-3xl bg-white w-[400px] sm:w-[600px] md:w-[1000px] ">
        <div className=" flex items-center justify-between">
          <div>
            <h1 className=" font-bold text-xl sm:text-xl md:text-[17px]">
              CONTACT FORM
            </h1>
          </div>
          <button
            className=" bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500 p-4 rounded-full font-semibold"
            onClick={() => setContactModal(false)}
          >
            <CloseIcon />
          </button>
        </div>

        <div className=" p-5 flex  items-center flex-col md:gap-6 justify-center">
          <h1 className=" font-bold text-[15px] sm:text-xl md:text-[17px]">
            Email: sujithkarthikaiselvan@gmail.com
          </h1>
          <h1 className=" font-bold sm:text-xl md:text-[17px]">
            Mobile: +91 8838295978
          </h1>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="md:w-[50%] flex mt-4 flex-col items-center justify-center gap-5"
          >
            <div className=" flex items-center justify-center gap-3">
              <div className=" flex items-center justify-center  sm:flex sm:items-center sm:justify-center ">
                <label className="  text-xl sm:text-xl    md:font-semibold md:text-2xl md:flex md:items-center md:justify-center">
                  <p>Fullname</p>
                </label>
              </div>

              <div>
                <input
                  className=" text-black border px-4 py-4 rounded-full sm:text-2xl sm:text-black md:text-xl md:text-black"
                  type="name"
                  placeholder="Enter your name"
                  name="user_name"
                />
              </div>
            </div>
            <div className=" flex items-center justify-center gap-3">
              <div className=" flex items-center justify-centersm:flex sm:items-center sm:justify-center ">
                <label className=" text-xl sm:text-xl    md:font-semibold md:text-2xl md:flex md:items-center md:justify-center">
                  <p>Number</p>
                </label>
              </div>

              <div>
                <input
                  className=" text-black border px-4 py-4 rounded-full sm:text-2xl sm:text-black md:text-xl md:text-black"
                  type="number"
                  placeholder="Enter number"
                  name="number"
                />
              </div>
            </div>
            <div className=" flex items-center justify-center gap-3">
              <div className=" flex items-center justify-center sm:flex sm:items-center sm:justify-center ">
                <label className=" text-xl  sm:text-xl   md:font-semibold md:text-2xl md:flex md:items-center md:justify-center">
                  <p className=" sm:inline-flex">Email</p>
                </label>
              </div>

              <div>
                <input
                  className=" text-black border px-4 py-4 rounded-full sm:text-2xl sm:text-black md:text-xl md:text-black"
                  type="email"
                  name="user_email"
                  placeholder="Enter you email"
                />
              </div>
            </div>
            <div className=" flex items-center justify-center gap-3">
              <div className=" flex items-center justify-center sm:flex sm:items-center sm:justify-center ">
                <label className=" text-xl  sm:text-xl    md:font-semibold md:text-2xl md:flex md:items-center md:justify-center">
                  <p>Reason</p>
                </label>
              </div>

              <div>
                <textarea
                  className=" text-black border px-4 py-4 rounded-full sm:text-2xl sm:text-black md:text-xl md:text-black"
                  type="string"
                  name="message"
                  placeholder="Reason for contact"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500 md:text-xl font-semibold p-4 rounded-full  "
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
