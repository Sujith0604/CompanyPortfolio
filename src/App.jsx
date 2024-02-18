import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Heading from "./pages/Heading";
import Tools from "./pages/Tools";
import About from "./pages/About";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import ToolPage from "./pages/ToolPage";
import Fullsection from "./pages/Fullsection";
import VideoProfile from "./pages/VideoProfile";

export default function App() {
  return (
    <main className="scroll-smooth px-2">
      <Header />

      <div className=" mt-[100px]">
        <Heading />

        <Tools />
        <VideoProfile />

        <About />

        <Services />
        <ToolPage />

        <Work />
        <Fullsection />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
