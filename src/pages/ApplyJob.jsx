import { useState } from "react";
import { customFetch } from "../util";
import { useParams, useNavigate, Link } from "react-router-dom";
import { SectionTitle } from "../components";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const url = 'https://jobportalapi-5pen.onrender.com';

const ApplyJob = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        resume: null,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            resume: e.target.files[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const { name, email, message, phone, resume } = formData;

        const formDataToSend = new FormData();
        formDataToSend.append("name", name);
        formDataToSend.append("email", email);
        formDataToSend.append("phone", phone);
        formDataToSend.append("message", message);
        formDataToSend.append("resume", resume);

        try {
            const res = await customFetch.post(`${url}/api/v1/job/apply/${id}`, formDataToSend);
            toast.success('Thanks for applying! Redirecting...', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(() => {
                navigate('/jobs');
            }, 3000);
            setFormData({
                name: "",
                email: "",
                message: "",
                phone: "",
                resume: null
            });
        } catch (error) {
            toast.error('Error submitting the form. Please try again.', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            console.error("Error submitting the form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="col w-screen">
            <div className="mb-8 align-element ">
                    <Link to={`/jobs/${id}`} className="text-blue-700 hover:underline">← Back to Job</Link>
                </div>
            <div className="mx-auto h-screen py-2 max-w-7xl px-8 text-black">
                <SectionTitle text='Apply' className='text-2xl font-bold mb-2'></SectionTitle>
                
                <form onSubmit={handleSubmit} className="align-element mt-4">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Name:</label>
                        <input
                            className="mt-1 p-2 w-full border rounded-md text-black"
                            type="text"
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Email:</label>
                        <input
                            type="email"
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email address"
                            className="mt-1 p-2 w-full border rounded-md text-black"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Phone:</label>
                        <input
                            type="number"
                            className="mt-1 p-2 w-full border rounded-md text-black"
                            name='phone'
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your Phone Number"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Message:</label>
                        <textarea
                            className="mt-1 p-2 w-full border rounded-md text-black"
                            name="message"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Please write about Yourself"
                            required
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-gray-700">Resume:</label>
                        <input
                            type="file"
                            name="resume"
                            onChange={handleFileChange}
                            className="form-input mt-1 w-full"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className={`bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isSubmitting}
                        style={{ marginTop: '0.5rem' }}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
                <ToastContainer />
                <hr className="mt-4"></hr>
                <p className="mt-16 text-sm text-slate-900">
                    Thank you for applying for jobs! We look forward to contacting you soon. If you have any questions, feel free to reach out to us.
                </p>
               
            </div>
        </section>
    );
};

export default ApplyJob;
