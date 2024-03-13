import { SKILLS } from "../lib/constants"

import SkillCard from "./skill-card"

function Skills() {

    return (
        <section id='skills' className="space-y-20">
            <div className="text-center">
                <h3 className="text-[12px] text-muted-foreground">What Skills I Have</h3>
                <h2 className="font-bold text-3xl">My Experience</h2>
            </div>
            <div className="grid gap-5 place-content-center md:grid-cols-2">

                <SkillCard skills={SKILLS.front_end} title='Frontend Development' />
                <SkillCard skills={SKILLS.back_end} title='Backend Development' />
            </div>

        </section>
    )
}

export default Skills
