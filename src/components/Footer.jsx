import { footerLinks } from "../constants";

import icFacebook from "../assets/icon-facebook.svg";
import icTwitter from "../assets/icon-twitter.svg";
import icPinterest from "../assets/icon-pinterest.svg";
import icInstagram from "../assets/icon-instagram.svg";
import bgPatternFooterDesktop from "../assets/bg-pattern-footer-desktop.svg";
import bgPatternFooterMobile from "../assets/bg-pattern-footer-mobile.svg";

const Footer = () => {
  return (
    <footer className="relative pb-[50px]">
      <img
        src={bgPatternFooterDesktop}
        alt=""
        className="absolute left-0 -z-50 hidden md:block"
      />
      <img
        src={bgPatternFooterMobile}
        alt=""
        className="absolute left-0 -z-50 block md:hidden"
      />
      <div className="container mx-auto px-4 pt-[50px]">
        <div className="flex flex-col justify-between gap-[30px] items-center md:flex-row md:gap-0">
          <img src="./logo.svg" alt="Insure Logo" />

          <div className="flex gap-5 cursor-pointer">
            <img src={icFacebook} alt="" />
            <img src={icTwitter} alt="" />
            <img src={icPinterest} alt="" />
            <img src={icInstagram} alt="" />
          </div>
        </div>
        <hr className="my-[50px] border-neutral-darkGrayishViolet" />
        <div className="flex flex-col justify-between text-center gap-[20px] md:text-left md:flex-row md:gap-0">
          {footerLinks.map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-[18px] font-karla text-neutral-darkGrayishViolet font-bold mb-[20px]">
                {title}
              </h4>

              <ul>
                {links.map((link) => (
                  <li key={link} className="mb-[10px]">
                    <a href="#" className="inline-block text-[18px] font-karla text-primary-darkViolet font-bold hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
