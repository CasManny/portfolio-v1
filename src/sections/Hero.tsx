import HeroOrbit from "@/components/HeroOrbit";
import grainImage from "/assets/images/grain.jpg";

const Hero = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-30 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage})`,
          }}
        />
        <div className="hero-ring size-[620px]" />
        <div className="hero-ring size-[820px]" />
        <div className="hero-ring size-[1020px]" />
        <div className="hero-ring size-[1220px]" />
        <HeroOrbit size={800} rotation={-55} shouldOrbit orbitDuration="30s">
          <span>+</span>
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="32s">
          <span>+</span>
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="38s">
          <span>+</span>
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="50s">
          <span>*</span>
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="60s">
          <span>*</span>
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="48s">
          <span>*</span>
        </HeroOrbit>
        <HeroOrbit size={530} rotation={144} shouldOrbit orbitDuration="85s">
          <span>*</span>
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="100s">
          <span>*</span>
        </HeroOrbit>
        <HeroOrbit size={720} rotation={90} shouldOrbit orbitDuration="15s">
          <div className="size-3 bg-emerald-300/20  rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-42} shouldOrbit orbitDuration="25s">
          <div className="size-2 bg-emerald-300/20  rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="45s">
          <div className="size-2 bg-emerald-300/20  rounded-full"></div>
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="flex gap-4 items-center bg-gray-950 border border-gray-800 px-4 py-1.5 rounded-md">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="absolute inset-0 bg-green-500 animate-ping-large rounded-full" />
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif tracking-wide text-3xl text-center mt-8 md:text-5xl">
            Building Exceptional User experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            high-performing web applications. Let's Discuss your next project
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 items-center mt-8">
          <button className="btn">
            <span className="font-semibold">Explore my work</span>
          </button>
          <button className="btn bg-white text-gray-900 font-semibold">
            Let's connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
