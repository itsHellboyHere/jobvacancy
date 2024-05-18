import { Outlet ,useNavigation } from "react-router-dom"
import {Loading, NavBar,Nav} from '../components'

const HomeLayout = () => {
  const  navigation = useNavigation()
  const isPageLoading =navigation.state ==='loading'
  return (
    <>
    <Nav/>
    {isPageLoading ?(<Loading/>):
    (<section>
      <Outlet />
    </section>)
    }

    
  </>
  )
  
}
export default HomeLayout