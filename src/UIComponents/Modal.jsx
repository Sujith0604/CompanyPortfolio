import CloseIcon from "@mui/icons-material/Close";
export default function Modal({ setOpenModal, openModal }) {
  return (
    <div className=" fixed md:leading-loose md:tracking-wider inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center  z-50 items-center">
      <div className=" p-6 rounded-3xl bg-white w-[400px] sm:w-[600px] md:w-[1000px] ">
        <div className=" flex items-center justify-between">
          <div>
            <h1 className=" font-bold sm:text-xl md:text-[17px]">BACKGROUND</h1>
          </div>
          <button
            className=" bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500 p-4 rounded-full font-semibold"
            onClick={() => setOpenModal(false)}
          >
            <CloseIcon />
          </button>
        </div>

        <div className=" flex flex-col gap-5 mt-5">
          <div>
            <h1 className="sm:text-xl font-bold md:text-[17px]">FRONTEND</h1>
            <p className=" mt-2 md:font-thin md:text-[15px] sm:font-semibold flex flex-wrap gap-2">
              <span>HTML & CSS</span>
              <span>JavaScript</span>
              <span>ReactJs</span>
              <span>Scss</span>
              <span>Tailwind</span>
              <span>Styled Components</span>
              <span>Bootstrap</span>
            </p>
          </div>
          <div>
            <h1 className="sm:text-xl font-bold md:text-[17px] ">BACKEND</h1>
            <p className="mt-2 md:font-thin md:text-[15px] sm:font-semibold flex gap-2">
              <span>NodeJs</span>
              <span>MongoDb</span>
              <span>Supabase</span>
              <span>Firebase</span>
            </p>
          </div>
          <div>
            <h1 className="sm:text-xl font-bold md:text-[17px] ">EDUCATION</h1>
            <div className=" mt-2 md:font-thin md:text-[15px] sm:font-semibold flex gap-2">
              {" "}
              <p>2021-2022</p>
              <p>Post Graduate - Robotics and Autonomous Systems</p>
              <p>University Of Lincoln – Lincoln – United Kingdom.</p>
            </div>
            <div className=" mt-2 md:font-thin md:text-[15px] sm:font-semibold flex gap-2">
              {" "}
              <p>2017-2021</p>
              <p>B.Tech - Electrical and Electronics Engineering</p>
              <p>Amrita School Of Engineering – Tamil Nadu - INDIA</p>
            </div>
          </div>
          <div>
            <h1 className="sm:text-xl font-bold md:text-[17px] ">EXPERIANCE</h1>
            <div className=" md:font-thin sm:font-semibold md:text-[15px] flex gap-2 mt-2">
              <p>2022 - Current</p>
              <p>JUNIOR WEB-APPLICATION DEVELOPER</p>
              <p>
                Accurate Softwares and Integrators Coimbatore, Tamil Nadu, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
