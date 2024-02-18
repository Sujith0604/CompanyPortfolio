import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavHashLink } from "react-router-hash-link";

export default function Header() {
  const Links = [
    { name: "ABOUT", link: "#about" },
    { name: "SERVICES", link: "#service" },
    { name: "TOOLS", link: "#tool" },
    { name: "WORKS", link: "#work" },
    { name: "CONTACT", link: "#contact" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500  fixed top-0 left-0 z-10  bg-opacity-10 backdrop-blur-md">
      <header className=" h-[100px] text-xl font-thin flex items-center justify-between px-5">
        <h1>Sujith Karthikaiselvan</h1>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </div>

        <ul
          className={`md:flex   md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0  w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open
              ? "top-[100px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500  bg-opacity-30 backdrop-blur-md  "
              : "top-[-490px]  "
          }`}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7">
              <NavHashLink smooth to={link.link}>
                {link.name}
              </NavHashLink>
            </li>
          ))}
        </ul>
      </header>
      <hr />
    </div>
  );
}
