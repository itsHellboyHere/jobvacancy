
import { Hero } from '../components';
import Footer from '../components/Footer';
import Services from '../components/Services';

const Landing = () => {
   return (
    <div className='col w-screen'>
    <Hero/>
    <Services/>
    <Footer/>
    </div>
  );
}
export default Landing