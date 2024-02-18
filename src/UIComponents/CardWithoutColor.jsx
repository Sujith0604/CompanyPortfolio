import { motion } from "framer-motion";

export default function CardWithoutColor(props) {
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
      className=" md:leading-loose md:tracking-wider flex justify-between items-center flex-col gap-10  h-[500px] md:h-[500px] border p-10 rounded-[60px] m-5 md:w-[600px] "
    >
      <div className=" h-[200px] flex items-center ">
        <img
          className=" md:h-[150px] sm:h-[250px] rounded-full "
          src={props.ImageUrl}
        />
      </div>
      <div className=" flex flex-col gap-5 items-center justify-center">
        <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text text-[25px]text-[17px] sm:text-2xl md:text-2xl font-bold">
          {props.Head}
        </h1>
        <p className=" text-[15px] sm:text-xl md:text-[14px] md:font-thin ">
          {props.Text}
        </p>
      </div>
    </motion.div>
  );
}
