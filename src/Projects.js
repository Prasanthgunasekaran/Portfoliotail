import webiteImag1 from './Images/ecommerce-websites.jpg';
import webiteImag2 from './Images/food-ecommerce.jpg';
import webiteImag3 from './Images/website-blog.jpg';



export default function Projects() {

    const config = {
        projects: [
            {
                image: webiteImag1,
                description: 'A E-Commerce website',
                link: 'https://google.com'
            },
            {
                image: webiteImag2,
                description: 'E-Commerce website like swiggy, zomato',
                link: 'https://facebook.com'

            },
            {
                image: webiteImag3,
                description: 'Basic Blog website.',
                link: 'https://github.com'

            },
        ]
    }

    return <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id='project'>
        <div className="w-full">
            <div className="flex  flex-col px-10 py-5">
                <h1 className='text-4xl border-b-4 border-[#2c328aa4] mb-5 w-[135px] font-bold'>Projects</h1>
                {/* <p>loriem</p> */}
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row  px-10 gap-5'>
                {config.projects.map((project) => (
                    <a href={project.link}>
                        <div className='relative'>
                            <img className='h-[200px] w-[500px]' src={project.image} />
                            <div className='project-desc'>
                                <p className='text-center px-5 py-5'>{project.description}</p>
                                <div className='flex justify-center'>
                                    <a className='btn' target='_blank' href={project.link}> View Project</a>
                                </div>
                            </div>

                        </div>
                    </a>
                ))}



            </div>
        </div>
    </section >
}