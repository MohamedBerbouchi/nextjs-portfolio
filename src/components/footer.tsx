import Socials from './socials'

function Footer() {
    const CurrentYear = new Date().getFullYear()
    return (
        <div className='py-10 mt-20 pb-20 items-center flex flex-col gap-5 md:flex-row justify-between'>
            <p>All rights reserved  &copy;{CurrentYear} </p>
            <Socials />
        </div>
    )
}

export default Footer
