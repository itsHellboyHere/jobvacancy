import { FaEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { SectionTitle } from '../components';

const Contact = () => {
  return (
    <section className='col w-screen'>

   
    <div className="  align-element h-screen  p-8">
      {/* <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
       */}
      <SectionTitle text='Contact Us'/> 
      <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Email Contact */}
        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-2xl text-slate-900" />
          <div>
            <h3 className="text-xl font-semibold text-black">Email</h3>
            <a href="mailto:rohitkumarsingh337@gmail.com" className="text-lg text-white hover:underline">
              rohitkumarsingh337@gmail.com
            </a>
          </div>
        </div>

        {/* WhatsApp Contact */}
        <div className="flex items-center space-x-4">
          <FaWhatsapp className="text-2xl text-emerald-800" />
          <div>
            <h3 className="text-xl font-semibold text-black">WhatsApp</h3>
            <a href="https://wa.me/918409544595" target="_blank" rel="noopener noreferrer" className="text-lg text-white hover:underline">
              +91 840 954 4595
            </a>
          </div>
        </div>

        {/* Phone Contact */}
        <div className="flex items-center space-x-4">
          <FaPhone className="text-2xl text-slate-800" />
          <div>
            <h3 className="text-xl font-semibold text-black">Phone</h3>
            <a href="tel:+918409544595" className="text-lg text-white hover:underline">
              +91 840 954 4595
            </a>
          </div>
        </div>

       
        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-2xl text-teal-600" />
          <div>
            <h3 className="text-xl font-semibold text-black">Address</h3>
            <p className="text-lg text-white">
              Byepass more Near Mahavir Mandir <br />
              Baraihya, Lakhisarai, Bihar-811302
            </p>
          </div>
        </div>
      </div>
    </div>
     </section>
  );
};

export default Contact;
