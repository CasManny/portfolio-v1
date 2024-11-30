import grainImage from "../../public/assets/images/grain.jpg";

const Contact = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300  overflow-hidden z-0 to-sky-300 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative">
          <div
            className="absolute inset-0 -z-10 opacity-5"
            style={{ backgroundImage: `url(${grainImage})` }}
          />
          <div className="flex flex-col gap-8 md:gap-16 md:flex-row items-center">
            <div className="">
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's create something amazing together
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Ready to bring your next project to life? Let's connect adn
                discuss how i can help you achieve your goal.
              </p>
            </div>
            <div className="">
              <button className="text-white gap-2 mt-8 w-max bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl border border-gray-950">
                <span className="font-semibold">contact me</span>
                <span className="text-2xl">&gt;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
