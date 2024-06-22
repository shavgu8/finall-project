
import { ReactNode } from "react"
import Footer from "../components/footer/footer"
import NavBar from "../components/upperheader/upperheader"
import Router from "../router/router"

import { Outlet } from "react-router-dom"
import HumenImage from "../components/humenimage/humenimage"
import HomeProductItem from "../components/homeProductItem/homeProductItem"
import Both from "../components/both/both"
import classname from './layout.module.scss'
import Categoryname from "../components/prname/productname"
import Upper from "../components/upper/upper"
type props = {children:ReactNode}
// {children}
const Layout2 = () => {
    return (
        <div className={classname['main-div']}>
            
           <Upper/>
            <Outlet/>
           
             <Both/>
            <Footer />
        </div>
    )
}
export default Layout2