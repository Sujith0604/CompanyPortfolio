import Marquee from "react-fast-marquee";
export default function Tools() {
  return (
    <section className=" border text-xl  mb-10 rounded-full flex items-center justify-center p-5 gap-5">
      <p className=" text-xl sm:text-2xl">Tools:</p>
      <Marquee autoFill pauseOnClick>
        <div className=" flex items-center justify-center bg-blue-100 mx-3 p-3 rounded-full">
          HTML & CSS
        </div>
        <div className=" flex items-center justify-center bg-blue-100 mx-3 p-3 rounded-full">
          JavaScript
        </div>
        <div className=" flex items-center justify-center bg-blue-100 mx-3 p-3 rounded-full">
          ReactJs
        </div>
        <div className=" flex items-center justify-center bg-blue-100 mx-3 p-3 rounded-full">
          SCSS
        </div>
        <div className=" flex items-center justify-center bg-blue-100 mx-3 p-3 rounded-full">
          Tailwind
        </div>
        <div className=" flex items-center justify-center bg-blue-100 mx-3 p-3 rounded-full">
          Styled Components
        </div>
        <div className=" flex items-center justify-center bg-blue-100 mx-3 p-3 rounded-full">
          Material UI
        </div>
        <div className=" flex items-center justify-center bg-blue-100 mx-3 p-3 rounded-full">
          Bootstrap
        </div>
        <div className=" flex items-center justify-center bg-blue-400 mx-3 p-3 rounded-full">
          NodeJs
        </div>
        <div className=" flex items-center justify-center bg-blue-400 mx-3 p-3 rounded-full">
          Supabase
        </div>
        <div className=" flex items-center justify-center bg-blue-400 mx-3 p-3 rounded-full">
          MongoDB
        </div>
      </Marquee>
    </section>
  );
}
