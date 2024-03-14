import { PROJECTS } from "../lib/constants"
import ProjectCard from "./project-card"

function Projects() {
    return (
        <section id="projects" className="pt-36">
            <div className="text-center">
                <h3 className="text-[12px] text-muted-foreground">What projects I Done</h3>
                <h2 className="font-bold text-3xl">My Projects</h2>
            </div>
            <div className=" grid md:grid-cols-2 lg:grid-cols-2 gap-5 mt-20">
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Projects
