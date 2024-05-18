import { FaBriefcase, FaRocket, FaHandsHelping } from 'react-icons/fa';

const services = [
  {
    id: 1,
    title: "Provide Vacancies",
    description: "We offer a wide range of job vacancies to help you find the perfect job that matches your skills and preferences.",
    icon: <FaBriefcase />,
  },
  {
    id: 2,
    title: "Easy Application Process",
    description: "Our platform makes it easy to apply for jobs with a single click, saving you time and effort.",
    icon: <FaRocket />,
  },
  {
    id: 3,
    title: "Support and Guidance",
    description: "We provide support and guidance throughout your job search journey to ensure you have the best chance of success.",
    icon: <FaHandsHelping />,
  },
];

const Services = () => {
  return (
    <section className="bg-gray-100 col py-8 ">
      <div className="align-element container mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 hover:opacity-80 "
            >
              <div className="text-4xl mb-4 text-teal-600 transition-transform duration-300 transform hover:rotate-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700 tracking-wider text-pretty">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
