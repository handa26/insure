import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

import bgPatternMobileNav from "./assets/bg-pattern-mobile-nav.svg";

const App = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileNavbar = () => {
    setMobileMenuVisible((prevState) => !prevState);
  };

  return (
    <>
      <Navbar
        handleClick={toggleMobileNavbar}
        mobileMenuVisible={mobileMenuVisible}
      />
      <div
        className={`w-[100%] h-[100vh] relative bg-neutral-veryDarkViolet ${
          mobileMenuVisible ? "block" : "hidden"
        } md:hidden`}
      >
        <ul className="flex flex-col gap-[20px] px-4 font-karla uppercase pt-[50px] text-neutral-veryLightGray mx-auto text-center text-[26px] font-light">
          <li>
            <a
              href="#"
              className="hover:text-primary-darkViolet transition-all duration-500"
            >
              How We Work
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-primary-darkViolet transition-all duration-500"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-primary-darkViolet transition-all duration-500"
            >
              Account
            </a>
          </li>
          <li className="text-neutral-veryLightGray border-neutral-veryLightGray mx-auto border-2 p-[8px] w-[100%] text-center hover:bg-neutral-veryLightGray hover:text-neutral-veryDarkViolet transition-all duration-500">
            <a href="#">View Plans</a>
          </li>
        </ul>

        <img src={bgPatternMobileNav} alt="" className="absolute bottom-0" />
      </div>
      <Hero />
      <Features />
      <Banner />
      <Footer />
    </>
  );
};

export default App;
