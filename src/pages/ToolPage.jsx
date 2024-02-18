import { useState } from "react";
import CardWithoutColor from "../UIComponents/CardWithoutColor";

export default function ToolPage() {
  const [open, setOpen] = useState(false);
  return (
    <section
      id="tool"
      className="gap-10 mt-5 flex flex-col items-center justify-center rounded-[60px]"
    >
      <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text text-[25px] md:leading-loose md:tracking-wider text-2xl md:text-4xl font-bold mt-10">
        TOOLS WE USE
      </h1>

      <div className="  flex items-center justify-center border p-10 rounded-full m-2">
        <p className=" text-[15px] sm:text-xl md:text-xl md:font-thin md:leading-loose md:tracking-wider">
          Our website and the animations for the website are created using the
          following tools
        </p>
      </div>

      {!open ? (
        <button
          className="sm:text-2xl sm:font-semibold bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500 p-4 rounded-full font-semibold"
          onClick={() => setOpen(true)}
        >
          SEE TOOLS
        </button>
      ) : (
        ""
      )}

      {open && (
        <>
          {" "}
          <div className=" border rounded-[60px] flex flex-wrap gap-10 items-center justify-center">
            <CardWithoutColor
              Head="TAILWIND"
              Text="Tailwind is a third-party library for styling web applications. This library helps the styling of the element easily as it is used inside the class of the element. This makes to understand which element has changed and also to provide styling to different components. "
              ImageUrl="images/tailwind.png"
            />
            <CardWithoutColor
              Head="REACTJS"
              Text="React is a third-party javascript library developed by Facebook for website development. Mostly it is used in single-page applications. We use React because it provides vast libraries for development and is also used in the design of reusable components. Our most of websites are created using the ReactJs.  "
              ImageUrl="images/React_Logo_SVG.svg.png"
            />
            <CardWithoutColor
              Head="SUPABASE"
              Text="We use Supabase and PostreSql for the backend. The superbase provides all the necessary API Calls for the CRUD operations and makes the backend easy for us. As it is Sql the data are well-organised and connected."
              ImageUrl="images/supabase.webp"
            />
            <CardWithoutColor
              Head="FRAMER MOTION"
              Text="Animations of the UI components are designed using Framer motions. Most of the websites in the browsers are not animated. Animating your website attracts more user interaction. Animation improves the UI more attractive and also viewable."
              ImageUrl="images/Animation.png"
            />
          </div>
          <button
            className="sm:text-2xl sm:font-semibold bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500 p-4 rounded-full font-semibold"
            onClick={() => setOpen(false)}
          >
            SHOW LESS
          </button>
        </>
      )}
    </section>
  );
}
