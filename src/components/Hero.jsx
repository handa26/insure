import imageIntroDesktop from "../assets/image-intro-desktop.jpg";
import imageIntroMobile from "../assets/image-intro-mobile.jpg";
import bgPatternIntroRightDesktop from "../assets/bg-pattern-intro-right-desktop.svg";
import bgPatternIntroLeftDesktop from "../assets/bg-pattern-intro-left-desktop.svg";
import bgPatterIntroRightMobile from "../assets/bg-pattern-intro-right-mobile.svg";
import bgPatternIntroLeftMobile from "../assets/bg-pattern-intro-left-mobile.svg";

const Hero = () => {
  return (
    <section className="h-[100%] bg-primary-darkViolet relative md:h-[480px]">
      <img
        src={bgPatternIntroRightDesktop}
        alt=""
        className="absolute right-0 hidden md:block"
      />
      <div className="container mx-auto px-0 flex flex-col-reverse justify-between pt-0 md:flex-row md:px-4 md:pt-[84px]">
        {/* Hero Text */}
        <div className="text-neutral-veryLightGray relative px-[10px] w-[100%] md:w-[50%] py-[50px] md:py-0 md:px-0">
          <img
            src={bgPatternIntroLeftMobile}
            alt=""
            className="absolute top-0 left-0 block md:hidden"
          />
          <hr className="w-[118px] border-[white] hidden md:block" />
          <h1 className="text-[34px] font-dmSerifDisplay mt-0 text-center md:text-left md:leading-[60px] md:text-[68px] md:mt-[57px]">
            Humanizing <br className="hidden md:block" /> your{" "}
            <br className="block md:hidden" /> insurance.
          </h1>
          <p className="text-[14px] mt-[10px] text-center md:text-left md:w-[90%] md:text-base md:mt-[20px]">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that's right for
            you. Ensure you and your loved ones are protected.
          </p>
          <a
            href="#"
            className="text-neutral-veryLightGray font-bold border-neutral-veryLightGray border-2 p-[8px] w-[142px] text-center hover:bg-neutral-veryLightGray hover:text-neutral-veryDarkViolet transition-all duration-500 mt-[30px] block mx-auto md:mx-0"
          >
            View Plans
          </a>
          <img
            src={bgPatterIntroRightMobile}
            alt=""
            className="absolute bottom-[-210px] right-0 block md:hidden"
          />
        </div>

        {/* Hero Image */}
        <div className="w-100">
          <img
            src={imageIntroDesktop}
            alt=""
            className="w-[100%] object-contain hidden md:block"
          />
          <img
            src={imageIntroMobile}
            alt=""
            className="object-contain block md:hidden"
          />
        </div>
      </div>
      <img
        src={bgPatternIntroLeftDesktop}
        alt=""
        className="absolute left-0 top-[350px] hidden md:block"
      />
    </section>
  );
};

export default Hero;
