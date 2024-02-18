import { Link } from "@react-email/components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { NavLink } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <div className="h-[100px] ">
      <hr />
      <footer className=" flex items-center flex-col md:flex-row  justify-between bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500 ">
        <div className=" flex items-center justify-center h-[100px] gap-3 text-xs">
          <h1 className=" text-[15px] font-thin">Sujith Karthikaiselvan</h1>
        </div>

        <div className=" flex items-center justify-center h-[100px] gap-3 text-xs">
          <h1 className=" text-[15px] font-thin">
            &copy;2024, POWERED BY ACCURATE. All Rights are reserved.
          </h1>
        </div>

        <div className=" flex items-center justify-center h-[100px] gap-3 text-xs">
          <NavLink to="https://github.com/Sujith0604">
            <GitHubIcon />
          </NavLink>
          <NavLink to="https://www.linkedin.com/in/sujith-karthikaiselvan-182450208/">
            <LinkedInIcon />
          </NavLink>
          <a href="mailto:sujithkarthikaiselvan@gmail.com">
            <EmailIcon />
          </a>
        </div>
      </footer>
    </div>
  );
}
