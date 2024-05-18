import axios from "axios";
import { customFetch } from "../util";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import {formatDate} from '../util/index'
const url = 'https://jobportalapi-5pen.onrender.com';
import { IoLocationSharp } from "react-icons/io5";

const singleJobQuery = (id) =>{
    return {
        queryKey:['singleJob',id],
        queryFn:()=> customFetch(`/api/v1/job/${id}`)
    }
}
export const loader = (queryClient) => async ({ params }) => {
    const { id } = params;
    const res= await queryClient.ensureQueryData(singleJobQuery(params.id))
    const job = res.data.job;
    return {job}
  
};

const SingleJob = () => {
    const { job } = useLoaderData();
    const { company, location, description, position, jobType, createdAt, salary } = job;
    const id =job._id

    return (
        <div className="min-h-screen col bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="align-element max-w-7xl mx-auto">
                <div className="mb-8">
                    <Link to="/jobs" className="text-blue-700 hover:underline">← Back to Jobs</Link>
                </div>
                <div className="bg-slate-200 shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">{position}</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-700">{company}</p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 sm:gap-y-8 sm:gap-x-6">
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Location</dt>
                            
                                <dd className="mt-1 text-sm text-gray-900">{location.city}</dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Job Type</dt>
                                <dd className="mt-1 text-sm text-gray-900">{jobType}</dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Posted On</dt>
                                <dd className="mt-1 text-sm text-gray-900">{formatDate(createdAt)}</dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Salary</dt>
                                <dd className="mt-1 text-sm text-gray-900">{salary}</dd>
                            </div>
                        </dl>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Job Description</h3>
                        <div className="mt-2 text-sm text-gray-900">
                            <p>{description}</p>
                        </div>
                    </div>
                     <div className="px-4 py-3 bg-gray-200 text-right sm:px-6">
                        <Link to={`/jobs/apply/${id}`} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Apply Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleJob;
