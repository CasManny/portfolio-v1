import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import bookImage from "../../public/assets/images/book-cover.png";
import { hobbies, toolboxItems } from "@/data/constant";
import mapimage from "../../public/assets/images/map.png";
import smile from "../../public/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxsItems from "@/components/ToolboxsItems";

const About = () => {
  return (
    <div className="pb-16 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse into my world"
          desc="Learn more about who i am, what i do and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] col-span-2  lg:col-span-1">
              <CardHeader
                title="My Reads"
                desc="Explore the books shaping my perspective"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <img src={bookImage} alt="book cover" />
              </div>
            </Card>
            <Card className="h-[320px] p-0 col-span-3 lg:col-span-2">
              <CardHeader
                className=""
                title="My Toolbox"
                desc="Explore the technologies and tools i use to craft digital
                experiences"
              />

              <ToolboxsItems items={toolboxItems} className="" />
              <ToolboxsItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col col-span-3 lg:col-span-2">
              <CardHeader
                className=""
                title="Beyound the code"
                desc="Explore my interest and hobbies beyound the digital realm"
              />
              <div className="relative flex-1">
                {hobbies.map((hobby, index) => (
                  <div
                    key={index}
                    className="inline-flex absolute items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-300 rounded-full py-1.5"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px]  p-0 relative col-span-2 lg:col-span-1">
              <img
                src={mapimage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-300 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:rounded-full after:-outline-offset-2 after:outline-gray-950/50">
                <img src={smile} alt="map" className="size-20 max-h-full" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
