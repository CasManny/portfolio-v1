import { projects } from "@/data/constant";

const Projects = () => {
  return (
    <div className="">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r bg-clip-text text-transparent from-emerald-300 to-sky-400">
            Real-world results
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6">Featured projects</h2>
        <p className="text-center text-white/60 mt-4">See how i transform concepts into engaging digital experiences</p>
        <div className="flex flex-col mt-10">
          {projects.map((project, index) => (
            <div className="bg-gray-800 rounded-3xl relative after:content-[''] after:absolute after:inset-0 after:bg-red-500" key={index}>
              <div className="">
                <span>{project.company}</span>
                <span>{project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <hr />
              <ul>
                {project.results.map((result, i) => (
                  <li key={i}>{result.title}</li>
                ))}
              </ul>
              <button>view live site</button>
              <img src={project.image} alt="project image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
