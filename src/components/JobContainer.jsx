import { useLoaderData } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import JobsGrid from "./JobsGrid";
import { useEffect, useState } from "react";

const JobContainer = () => {
    const { meta } = useLoaderData();
    const totalJobs = meta.total;
    
    // State to show/hide the button
    const [showButton, setShowButton] = useState(false);

    // Function to handle scroll to top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Show button when page is scrolled down
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <section className="col  w-screen">
                <div className="flex justify-items-center justify-center">
                    {/* <h4 className="tracking-tighter font-bold text-xl">Jobs</h4> */}
                </div>
                <div className="align-element flex justify-between items-center mt-8 border-b border-base-300 pb-5">
                    <h4 className="font-medium text-md">
                        {totalJobs} jobs
                    </h4>
                </div>
                <div>
                    {totalJobs === 0 ? (
                        <h5 className="align-element text-2xl mt-16">Sorry no Jobs found...</h5>
                    ) : (
                        <JobsGrid />
                    )}
                </div>
            </section>
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg"
                >
                    Back to Top
                </button>
            )}
        </>
    );
};

export default JobContainer;
