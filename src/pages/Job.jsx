import { PaginationContainer } from "../components";
import JobContainer from "../components/JobContainer";
import { customFetch } from "../util";
const url='https://jobportalapi-5pen.onrender.com/api/v1/job'
const allJobsQuery =(params)=>{
  const {page}=params;
  return {
    queryKey:['jobs',
      page??1
    ],
    queryFn:()=>customFetch(url,{params})
  }
}

// const url ='http://localhost:4000/api/v1/job'

export const loader = (queryClient) => async({request})=>{
    const params = Object.fromEntries([...new URL(request.url).searchParams.entries(),])
    // console.log(params);
    const res= await queryClient.ensureQueryData(allJobsQuery(params))

    const jobs = res.data.jobs;
    const meta = res.data.metadata

    return {jobs,meta,params}
    
   
}

const Job = () => {

  return (
    <>
    <section className="col">
    <JobContainer/>
    <PaginationContainer/>
    </section>
    </>
  )
}
export default Job