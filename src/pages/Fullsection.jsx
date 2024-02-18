import { motion } from "framer-motion";
export default function Fullsection() {
  return (
    <div className="md:leading-loose md:tracking-wider rounded-[60px] p-5 flex flex-col items-center justify-center mt-5  mb-5 gap-5">
      <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text text-[25px]   text-2xl md:text-4xl font-bold mt-10">
        Your ultimate Website Partner
      </h1>

      <div className=" flex  flex-col  md:flex-row p-5 gap-5">
        <div className=" md:w-[50%] flex flex-wrap gap-2 items-center justify-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            animate={{ rotate: 360 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500  border  h-[110px] w-[140px] sm:h-[200px] sm:w-[275px]  md:h-[200px] md:w-[300px] flex flex-col items-center justify-center rounded-3xl"
          >
            <p className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text text-[25px]   text-2xl sm:text-[30px] md:text-2xl font-bold ">
              10 +{" "}
            </p>
            <p className=" text-[13px] sm:text-xl md:text-[15px] md:font-thin">
              successfull projects
            </p>
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
            className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500  border  h-[110px] w-[140px] sm:h-[200px] sm:w-[275px]  md:h-[200px] md:w-[300px] flex flex-col items-center justify-center rounded-3xl"
          >
            <p className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text text-[25px]   text-2xl md:text-2xl sm:text-[30px] font-bold ">
              1 year
            </p>
            <p className=" text-[13px] sm:text-xl md:text-[15px] md:font-thin">
              experiance
            </p>
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
            className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500  border  h-[110px] w-[140px] sm:h-[200px] sm:w-[275px]   md:h-[200px] md:w-[300px] flex flex-col items-center justify-center rounded-3xl"
          >
            <p className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text text-[25px]  text-2xl md:text-2xl sm:text-[30px] font-bold ">
              Different
            </p>
            <p className=" text-[13px] sm:text-xl md:text-[15px] md:font-thin">
              design
            </p>
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
            className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500  border h-[110px] w-[140px] sm:h-[200px] sm:w-[275px]   md:h-[200px] md:w-[300px] flex flex-col items-center justify-center rounded-3xl"
          >
            <p className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text text-[25px] text-2xl md:text-2xl sm:text-[30px] font-bold ">
              100%
            </p>
            <p className=" text-[13px] sm:text-xl md:text-[15px] md:font-thin">
              passion
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          animate={{ rotate: 360 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500  border md:w-[50%]  flex flex-col justify-center rounded-3xl p-7 gap-7"
        >
          <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text text-[25px] sm:text-[25px]  text-2xl md:text-2xl font-bold ">
            Working at the intersection of design and code.
          </h1>
          <p className="sm:text-xl text-[13px] md:text-[15px] md:font-thin">
            With years of experience in web design, I live and breathe good
            design and value the details that matter. Say goodbye to the
            stressful back and forth with developers who don’t have an eye for
            design and rely on someone who has the skills, experience, and
            enthusiasm to bring your visions to life the way they were intended.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        animate={{ rotate: 360 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500  border  rounded-[60px] flex flex-col md:flex-row h-[500px] "
      >
        <div className=" h-[50%] md:h-[100%] md:w-[50%] flex flex-col justify-center gap-5 px-5">
          <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text text-[25px]   text-2xl sm:text-[35px] md:text-4xl font-bold mt-10">
            Stunning animations.
          </h1>
          <p className="sm:text-xl text-[13px] md:text-[15px] md:font-thin">
            From subtle micro-interactions to complex "WOW" animations. I
            transform ideas into delightful experiences.
          </p>
        </div>
        <div className="h-[50%] md:h-[100%] md:w-[50%] flex items-center justify-center px-5">
          <img className=" rounded-[60px]" src="images/Animation.png" />
        </div>
      </motion.div>

      <div className="  flex flex-col justify-center md:flex-row gap-4 md:h-[500px]">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          animate={{ rotate: 360 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500  md:w-[50%] border  rounded-[60px] flex flex-col md:flex-row p-5 md:p-0 justify-center gap-2 items-center"
        >
          <div className=" md:w-[50%]  flex flex-col gap-2 px-4">
            <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text text-[25px] sm:text-[35px]  text-2xl md:text-2xl font-bold ">
              Responsive development.
            </h1>
            <p className="sm:text-xl text-[13px] md:text-[15px] md:font-thin">
              Should be standard nowadays, yet often not treated with care.
            </p>
          </div>
          <div className=" md:w-[50%]">
            <img
              className=" rounded-xl"
              src="images/63a41c740bd706757b878af3_responsive-development.webp"
            />
          </div>
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
          className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500  md:w-[50%] border p-5 md:p-0  rounded-[60px] flex flex-col md:flex-row justify-center items-center"
        >
          <div className=" md:w-[50%]">
            <img
              className=" rounded-xl"
              src="images/63a41ca1670952765a415e02_fast-loading-times.webp"
            />
          </div>
          <div className=" md:w-[50%] flex flex-col gap-2 px-4">
            <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text text-[25px]  sm:text-[35px] text-2xl md:text-2xl font-bold mt-10">
              Lightning-fast loading times.
            </h1>
            <p className=" sm:text-xl text-[13px] md:text-[15px] md:font-thin">
              All my builds put extra emphasis on performance and efficiency.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
