import { projects } from "@/data/constant";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const Projects = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world results"
          title="Featured projects"
          desc="See how i transform concepts into engaging digital experiences"
        />

        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="px-8 pt-8 md:pt-12 md:px-10 pb-0 lg:pt-16 lg:px-20"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r gap-2 from-emerald-300 to-sky-400 bg-clip-text text-transparent inline-flex font-bold uppercase tracking-widest text-sm">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <span className="bg-gradient-to-r gap-2 from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                          {i + 1}
                        </span>
                        {result.title}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold mt-8 md:w-auto px-6">
                    Visit live site
                  </button>
                </div>
                <div className="relative">
                  <img
                    src={project.image}
                    alt="project image"
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
