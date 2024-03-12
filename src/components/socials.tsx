import { SOCIALS } from "../lib/constants"

function Socials() {
    return (
        <ul className="flex gap-4">

            {

                SOCIALS.map((item, index) => {
                    const { icon: Icon, link } = item
                    return (
                        <li key={index} className="p-4 bg-primary w-10 h-10 grid place-content-center rounded-full">
                            <a href={link.includes('@') ? `mailto:${link}` : link} target="_blank">
                                <Icon className="text-primary-foreground" />
                            </a>
                        </li>
                    )
                })
            }

        </ul>
    )
}

export default Socials
