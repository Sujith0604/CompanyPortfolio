import { useState } from "react";
import WorkCards from "../UIComponents/WorkCards";

export default function Work() {
  const [open, setOpen] = useState(false);
  return (
    <section
      id="work"
      className="gap-10 flex flex-col items-center justify-center  mt-10 p-10 mb-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500  rounded-[60px]"
    >
      <div className=" flex flex-col items-center justify-center gap-10">
        <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text text-[25px] md:leading-loose md:tracking-wider text-2xl md:text-4xl font-bold mt-10">
          SOME WORKS
        </h1>
      </div>
      <div className=" flex items-center justify-center flex-wrap gap-5">
        <WorkCards
          Head="PORTFOLIO WEBSITE"
          Text1="This Portfolio website was created with the basic HTML and
    Javascript. It is a responsive website consist of mail facility for
    the client and also has downloadable resume for others to view."
          Text2="This website explains the clients capability in a detailed manner."
          ImageUrl1="images/portfolio.PNG"
          ImageUrl2="images/Portfolio2.PNG"
          to="https://sujithportfolio1999.netlify.app/"
        />

        {!open ? (
          <button
            className=" bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500 p-4 rounded-full font-semibold"
            onClick={() => setOpen(true)}
          >
            SEE WORKS
          </button>
        ) : (
          ""
        )}

        {open && (
          <>
            <WorkCards
              Head="AUTHOR WEBSITE"
              Text1="This website was build for author to show case his work and his publication to other. As a wbsite it speaks about the books written by the author and also tells about him."
              Text2="This website was build in ReactJs. And we used Framer motion for the animation of the website"
              ImageUrl1="images/author1.PNG"
              ImageUrl2="images/author2.PNG"
              to="https://jocular-malasada-dd5d09.netlify.app/"
            />
            <WorkCards
              Head="RESTAURANT WEBSITE TEMPLATE"
              Text1="This Portfolio website was created with the basic HTML and
    Javascript. It is a responsive website consist of mail facility for
    the client and also has downloadable resume for others to view."
              Text2="This website explains the clients capability in a detailed manner."
              ImageUrl1="images/restaurant-wordpress-1.PNG"
              ImageUrl2="images/restaurant-wordpress-2.PNG"
              to="https://heroic-medovik-c18bd4.netlify.app/"
            />

            <button
              className=" bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500 p-4 rounded-full font-semibold"
              onClick={() => setOpen(false)}
            >
              SHOW LESS
            </button>
          </>
        )}
      </div>
    </section>
  );
}
