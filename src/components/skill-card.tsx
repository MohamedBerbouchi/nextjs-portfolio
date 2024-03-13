import { BadgeCheck } from "lucide-react"
import { TSkillItem } from "../lib/constants"
function SkillCard({ skills, title }: { skills: TSkillItem[], title: String }) {
    return (
        <div className="border p-5 space-y-10   max-w-[400px] rounded-lg">
            <h2 className="text-main font-bold  text-xl text-center">{title}</h2>
            <div className=" grid grid-cols-2 place-content-center gap-3">
                {skills.map((s, i) => (
                    <div key={i} className="flex gap-3">
                        <BadgeCheck className="text-main" />
                        <div className="flex flex-col gap-0">
                            <h3>{s.label}</h3>
                            <h4 className="text-[10px] text-muted-foreground">{s.level}</h4>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillCard
