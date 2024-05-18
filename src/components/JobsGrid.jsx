import { Link, useLoaderData } from "react-router-dom"
import '../assets/jobsgrid.css'
import { formatDate } from "../util"
const JobsGrid = () => {

 

    const {jobs} = useLoaderData()
    // console.log(jobs);
  return (
    <div className="align-element py-12 pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {
            jobs.map((job)=>{
                const {company,jobType,location,position,createdAt}=job;
                const id =job._id
               
                
                const formattedDate = formatDate(createdAt);
               
                return <Link key ={id} to={`/jobs/${id}`}>
            <div className="card">
          <div className="main-content">
    <div className="header">
  <span>Posted on</span>
  <span>{formattedDate}</span>
</div>
<p className="heading">{company}</p>
<div className="categories">
  <span>{position}</span>
  <span>{jobType}</span>
</div>
  </div>
<div className="footer">
  {location.city}
</div>
</div>
             
                </Link>
            })
        }

    </div>
  )
}
export default JobsGrid