import { NavLink } from "react-router-dom";
import TourIcon from "@mui/icons-material/Tour";
import { motion } from "framer-motion";
export default function WorkCards(props) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      animate={{ rotate: 360 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className=" relative"
    >
      <img
        className=" rounded-[60px] h-[300px] md:h-[600px] md:w-[1400px] "
        src={props.ImageUrl1}
      />

      <div className=" flex flex-col md:flex-row gap-10 absolute left-0 top-0 opacity-0 hover:opacity-100 h-[300px] md:h-[600px] items-center justify-center bg-blue-200 rounded-[60px] ">
        <div className="hidden md:flex p-5">
          <img className=" rounded-[60px]" src={props.ImageUrl2} />
        </div>
        <div className=" flex flex-col gap-7 p-4">
          <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text text-[25px] text-[15px] sm:text-xl md:text-2xl font-bold">
            {props.Head}
          </h1>
          <p className=" text-[12px] sm:text-[17px] md:text-[14px] md:font-thin">
            {props.Text1}
          </p>
          <p className=" text-[12px] sm:text-[17px] md:text-[14px] md:font-thin">
            {" "}
            {props.Text2}
          </p>
          <NavLink to={props.to}>
            Visit Website
            <TourIcon />
          </NavLink>
        </div>
      </div>
    </motion.div>
  );
}
