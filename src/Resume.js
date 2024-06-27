import resumeImg from './Images/resume.jpg';
// import resumedoc from './Images/Prasanth-resume.docx';

export default function Resume() {

    const config = {
        resumeimg: resumeImg,
        resumeTitle: 'Resume',
        resumetext: 'You Can view My Resume',
        resumedownload: 'Download',
        resumelink:"https://flowcv.com/resume/5wekoapqf7"
    }

    return <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary' id='resume'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            {/* <a href='#resume'></a> */}
            <img className='w-[400px] h-[400px]' src={config.resumeimg}></img>
        </div>
        <div className='md:w-1/2 flex justify-center  text-white'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl border-b-4 border-[#7e19fa] mb-5 w-[140px] font-bold'>{config.resumeTitle} </h1>
                <p className='pb-5'>{config.resumetext} <a className='btn' href={config.resumelink}>{config.resumedownload}</a></p>


            </div>
        </div>
    </section>
}