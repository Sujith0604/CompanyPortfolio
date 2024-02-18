import { useRef, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContactModal from "../UIComponents/ContactModal";

export default function Contact() {
  const [contactModal, setContactModal] = useState(false);

  if (contactModal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <section
      className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-blue-300 to-blue-500  rounded-[60px] border mb-5 "
      id="contact"
    >
      <div className=" flex flex-col gap-5 items-center justify-center">
        <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text text-[25px]md:leading-loose md:tracking-wider text-2xl md:text-4xl font-bold mt-10">
          CONTACT US
        </h1>
        <div className=" flex items-center justify-center border p-10 rounded-full m-2 bg-blue-100">
          <p className=" text-[15px] md:text-xl md:font-thin md:leading-loose md:tracking-wider">
            For information about website do contact us
          </p>
        </div>
        <div className=" mb-5">
          <button
            className=" bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500 p-4 rounded-full font-semibold"
            onClick={() => setContactModal(true)}
          >
            CONTACT US
          </button>
        </div>

        {contactModal && (
          <ContactModal
            setContactModal={setContactModal}
            contactModal={contactModal}
          />
        )}
      </div>
    </section>
  );
}
