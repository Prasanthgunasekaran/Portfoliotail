import HeroImg from './Images/hero.png';
// import Resume from './Images/Prasanth-resume.docx';  {Resume}
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineMail } from "react-icons/ai";

export default function Hero() {
    const config = {
        title: 'I\'m a Front-End Devloper',
        gitHub: 'https://github.com',
        linkedIn: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'https://gmail.com',
        homeImg: HeroImg,

    }
    return <section className='flex md:flex-row flex-col px-5 py-32 bg-primary justify-center' id='hero'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi,<br /> I'm PRASANTH . G
                <p className='text-2xl'>{config.title}</p>
            </h1>
            <div className='flex py-6'>
                <a target='_blank' href={config.gitHub} className='pr-5 hover:text-white'><AiOutlineGithub size={30} /></a>
                <a target='_blank' href={config.linkedIn} className='pr-5  hover:text-white'><AiOutlineLinkedin size={30} /></a>
                <a target='_blank' href={config.twitter} className='pr-5  hover:text-white'><AiOutlineTwitter size={30} /></a>
                <a target='_blank' href={config.email} className='pr-5 hover:text-white' >< AiOutlineMail size={30} /></a>

            </div>
        </div>
        <img className='md:w-1/3' src={config.homeImg} />

    </section >
}