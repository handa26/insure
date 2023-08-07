import hamburgerMenu from "../assets/icon-hamburger.svg";
import closeNav from "../assets/icon-close.svg";

const Navbar = ({ handleClick, mobileMenuVisible }) => {

  return (
    <nav className="container mx-auto px-4 py-[25px] flex justify-between items-center relative">
      <img src="./logo.svg" alt="Insure Logo" />

      <ul className="hidden font-karla uppercase font-bold text-neutral-darkGrayishViolet md:flex flex-row items-center gap-[28px]">
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
        <li className=" text-neutral-veryDarkViolet border-neutral-veryDarkViolet border-2 p-[8px] w-[142px] text-center hover:bg-neutral-veryDarkViolet hover:text-neutral-veryLightGray transition-all duration-500">
          <a href="#">View Plans</a>
        </li>
      </ul>
      <img
        src={mobileMenuVisible ? closeNav : hamburgerMenu}
        alt=""
        className="cursor-pointer block md:hidden"
        onClick={handleClick}
      />
    </nav>
  );
};

export default Navbar;
