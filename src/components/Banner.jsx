import bgPatterHowWeWorkDesktop from "../assets/bg-pattern-how-we-work-desktop.svg";
import bgPatternHowWeWorkMobile from "../assets/bg-pattern-how-we-work-mobile.svg";

const Banner = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="h-[344px] bg-primary-darkViolet my-[100px] relative md:h-[250px]">
        <div className="flex flex-col justify-between items-center mx-auto p-[10px] md:flex-row md:px-[90px] md:pt-[30px]">
          <h3 className="text-neutral-veryLightGray text-center text-[38px] mt-[55px] font-dmSerifDisplay leading-[35px] md:text-[54px] md:text-left md:mt-0 md:leading-normal">
            Find out more <br className="hidden md:block" />
            about how we <br className="block md:hidden" /> work
          </h3>
          <a
            href="#"
            className="text-neutral-veryLightGray font-bold border-neutral-veryLightGray border-2 p-[8px] w-[159px] text-center hover:bg-neutral-veryLightGray hover:text-neutral-veryDarkViolet transition-all duration-500 mt-[30px] inline-block uppercase z-50"
          >
            How We Work
          </a>
        </div>
        <img
          src={bgPatterHowWeWorkDesktop}
          alt=""
          className="absolute right-0 top-0 hidden md:block"
        />
        <img
          src={bgPatternHowWeWorkMobile}
          alt=""
          className="absolute right-0 top-0 block md:hidden"
        />
      </div>
    </div>
  );
};

export default Banner;
