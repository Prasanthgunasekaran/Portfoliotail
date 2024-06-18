import Contacts from './Images/resume.jpg';

export default function Contact() {

    const config = {
        email: 'mailforprasanth27@gmail.com',
        contact: 9551890869,
    }

    return <section className='flex flex-col bg-primary px-5 py-32  text-white' id='contact'>
        <div className='flex flex-col items-center'>
            <h1 className='text-4xl border-b-4 border-[#7e19fa] mb-5 w-[140px] font-bold'>Contact </h1>
            <p className='pb-5'>If you want to discuss more in detail, Please contact me</p>
            <p className='py-2'><span className='font-bold'>Email : </span>{config.email}</p>
            <p className='py-2'><span className='font-bold'>Contact : </span>{config.contact}</p>

        </div>
    </section>
}