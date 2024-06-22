import { Outlet } from "react-router-dom"
import NavBar from "../components/upperheader/upperheader"
import HomeProductItem from "../components/homeProductItem/homeProductItem"
import HumenImage from "../components/humenimage/humenimage"
import Footer from "../components/footer/footer"

const Layout3 = ()=>{
    return(
 <>
 <NavBar/>
 <Outlet/>
 {/* <HomeProductItem/>
 <HumenImage/>
 <Footer/> */}
 </>
    )
}
export default Layout3