import { motion } from "framer-motion";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import ContactModal from "../UIComponents/ContactModal";
import { NavLink } from "react-router-dom";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Heading() {
  const [contactModal, setContactModal] = useState(false);
  return (
    <div className=" flex flex-col gap-10 rounded-[60px] bg-white mb-10 items-center justify-center px-5 h-[600px]  md:h-[600px] md:gap-[70px] leading-loose tracking-wider">
      <motion.h1
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text text-[25px] p-4 sm:text-5xl sm:text-[50px] md:text-[100px]  font-bold    "
      >
        Responsive Designs
      </motion.h1>
      <motion.p
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="  md:text-2xl sm:text-[20px] text-[15px]  font-semibold "
      >
        Optimistic web designs for performance-driven and Responsive Designs for
        companies
      </motion.p>
      <div className=" flex items-center md:flex-row flex-col justify-center gap-5">
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          onClick={() => setContactModal(true)}
          className="bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500 md:text-xl sm:text-2xl font-semibold p-4 rounded-full  "
        >
          <span>Start your own website</span>
          <ArrowForwardIosIcon />
        </motion.button>

        <a
          href="images/SujithResume.pdf"
          download
          className="bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500 md:text-xl sm:text-2xl font-semibold p-4 rounded-full  "
        >
          Download CV
        </a>
      </div>

      {contactModal && (
        <ContactModal
          setContactModal={setContactModal}
          contactModal={contactModal}
        />
      )}

      <div className=" flex items-center justify-center h-[100px] gap-3 text-xs">
        <NavLink to="https://www.linkedin.com/in/sujith-karthikaiselvan-182450208/">
          <LinkedInIcon />
        </NavLink>
        <a href="mailto:sujithkarthikaiselvan@gmail.com">
          <EmailIcon />
        </a>
      </div>
    </div>
  );
}
