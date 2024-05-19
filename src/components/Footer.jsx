import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">Email: <a href="mailto:rohitkumarsingh337@gmail.com" className="text-blue-400 hover:underline">rohitkumarsingh337@gmail.com</a></p>
            <p className="mb-2">Phone: <a href="tel:+918409544595" className="text-blue-400 hover:underline">+91 840 954 4595 </a></p>
            <p className="mb-2">WhatsApp: <a href="https://wa.me/+918409544595" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">+91 840 954 4595</a></p>
            <p>Address:  Byepass more Near Mahavir Mandir <br />
              Baraihya, Lakhisarai, Bihar-811302</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="/" className="text-blue-400 hover:underline">Home</a></li>
              <li className="mb-2"><a href="/jobs" className="text-blue-400 hover:underline">Jobs</a></li>
              {/* <li className="mb-2"><a href="/about" className="text-blue-400 hover:underline">About</a></li> */}
              <li className="mb-2"><a href="/contact" className="text-blue-400 hover:underline">Contact</a></li>
            </ul>
          </div>
          
          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500"><FaFacebook size={24} /></a> */}
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500"><FaTwitter size={24} /></a> */}
              <a href="https://www.instagram.com/sse.337?igsh=c29vNGkxdGxjcm56" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500"><FaInstagram size={24} /></a>
              {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500"><FaLinkedin size={24} /></a> */}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; 2024 SSEJobVacancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
