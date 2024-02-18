import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "../UIComponents/Modal";
export default function About() {
  const [openModal, setOpenModal] = useState(false);

  if (openModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <section
      id="about"
      className=" rounded-[60px] bg-white md:leading-loose md:tracking-wider md:h-[600px] p-3 h-[700px] sm:h-[800px] m-3 border mb-10 rounded-[60px]  flex md:flex-row flex-col items-center justify-between"
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        animate={{ rotate: 360 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="  md:w-[50%] flex items-center justify-center mx-5"
      >
        <img
          className="h-[300px] sm:h-[400px] md:h-[500px] rounded-[60px]"
          src="images/IMG_5859.jpg"
        />
      </motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        animate={{ rotate: 360 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className=" md:w-[50%] flex flex-col mx-5 gap-5 p-5 items-center justify-center"
      >
        <h1 className=" bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text text-[25px]md:leading-loose md:tracking-wider text-2xl md:text-4xl font-bold mt-10">
          ABOUT ME
        </h1>
        <p className=" text-[13px] sm:text-[18px]  md:text-[15px] md:font-thin">
          A skilled and motivated junior Web Application Developer and
          experience in developing innovative web applications using ReactJs,
          HTML, CSS, and Javascript. Excels at working within a fast-paced
          environment to produce high-quality web applications and websites for
          an enviable client list. Strong self-motivation and ability to thrive
          under pressure while working remotely.
        </p>
        <button
          className=" sm:text-2xl sm:font-semibold bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500 md:text-[15px] font-thin p-4 rounded-full  "
          onClick={() => setOpenModal(true)}
        >
          <span>KNOW MORE</span>
          <ArrowForwardIosIcon />
        </button>
      </motion.div>

      {openModal && <Modal setOpenModal={setOpenModal} openModal={openModal} />}
    </section>
  );
}
