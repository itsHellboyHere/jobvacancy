import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import HomeLayout from './pages/HomeLayout';
import { Contact, Job, Landing ,Error, SingleJob, ApplyJob} from './pages';
import {loader as jobLoader} from './pages/Job'
import {loader as singleJobLoader} from './pages/SingleJob'
import {QueryClient , QueryClientProvider} from '@tanstack/react-query'
// import {action as applyJobAction} from './pages/ApplyJob'
const queryClient = new QueryClient({
  defaultOptions: {
    queries :{
      staleTime:1000 * 60 *5,
    }
  }
})

const router = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Landing/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/jobs',
        element:<Job/>,
        loader:jobLoader(queryClient)
      },
      {
        path:'jobs/:id',
        element:<SingleJob/>,
        loader:singleJobLoader(queryClient),
      },
      {
    path:'jobs/apply/:id',
    element:<ApplyJob/>,
    // action:applyJobAction,
  }
      
    ]
    
  },
  
])

const App = () => {
  return (
    <QueryClientProvider client={queryClient} >
    <RouterProvider router={router} />
    {/* <ReactQueryDevtools initialIsOpen={false}/> */}
    </QueryClientProvider>
  )
}
export default  App