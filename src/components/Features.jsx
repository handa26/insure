import { featuresText } from "../constants";

const Features = () => {
  return (
    <div className="h-[100%] container mx-auto pt-[50px] px-4 text-center md:text-left md:pt-[350px] md:h-[100vh]">
      <hr className="w-[118px] border-neutral-veryDarkViolet mx-auto md:mx-0" />
      <h2 className="text-[42px] font-dmSerifDisplay text-primary-darkViolet mt-[12px] mb-[50px] md:mt-[72px] md:text-[64px] md:mb-[100px]">
        We're different
      </h2>

      <div className="flex flex-col justify-start gap-[20px] md:flex-row md:gap-[30px]">
        {featuresText.map(({ title, icon, desc }) => (
          <div key={title}>
            <img src={icon} alt={title} className="mx-auto md:mx-0" />
            <h3 className="text-neutral-veryDarkViolet text-[28px] font-dmSerifDisplay mt-[30px] mb-[12px] md:text-[30px] md:mb-[20px]">{title}</h3>
            <p className="text-neutral-darkGrayishViolet text-[16px] md:text-[18px]">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
