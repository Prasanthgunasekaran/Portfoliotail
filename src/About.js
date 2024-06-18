import AboutImg from './Images/about.png';

export default function About() {

    const config = {
        aboutImg: AboutImg,
        title: 'About Me',
        line1: 'Passionate front-end developer skilled Enthusiastic front-end developer with expertise in HTML, CSS, and JavaScript. Proven track record of creating visually stunning and intuitive user interfaces.',
        line2: 'Adept at responsive design principles, ensuring seamless experiences across devices. Detail-oriented, I prioritize clean, efficient code for optimal performance. Experienced in collaborating with cross-functional teams and passionate about staying updated on the latest industry trends.',
        line3: 'Committed to delivering exceptional user experiences through a combination of creativity and technical proficiency. Ready to contribute dynamic front-end solutions to innovative projects. HTML, CSS, and JavaScript. Proven track record of creating responsive, visually appealing websites. Dedicated to clean code and enhancing user experiences. Excited about transforming design concepts into seamless, functional interfaces.',

    }

    return <section className='flex flex-col md:flex-row   px-5 py-32 bg-secondary ' id='about'>
        <div className='py-6 md:w-1/2'>
            <img src={config.aboutImg}></img>
        </div>
        <div className='md:w-1/2 flex justify-center  text-white'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl border-b-4 border-[#7e19fa] mb-5 w-[171px] font-bold'>{config.title}</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>

            </div>
        </div>
    </section>
}