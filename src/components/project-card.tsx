import { Github, Link } from 'lucide-react'
import Image from 'next/image'
import { TProjectProps } from '../lib/types'


function ProjectCard({ project }: { project: TProjectProps }) {
    return (
        <div className='rounded-lg bg-[#201F22]   shadow-2xl   border-t-2 border-cyan-300'>
            <Image className='rounded-t-lg object-cover w-full h-[200px]' src={project.image} alt={`project ${project.title}`} width={400} height={200} />
            <div className='space-y-1 p-3 pt-4 '>
                <h2 className='font-bold text-lg text-white'>{project.title}</h2>
                <p className='text-sm text-muted-foreground'>{project.desc}</p>
                <div className='flex gap-3'>
                    <li className="p-4  border  w-8 h-8 grid place-content-center rounded-full  mt-2 hover:bg-primary ">
                        <a href={project.github_link} target="_blank">
                            <Github size={16} className="text-white hover:text-primary-foreground" />
                        </a>
                    </li>
                    <li className="p-4  border  w-8 h-8 grid place-content-center rounded-full  mt-2 hover:bg-primary ">
                        <a href={project.demo_link} target="_blank">
                            <Link size={14} className="text-white hover:text-primary-foreground" />
                        </a>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
