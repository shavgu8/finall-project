
import { ReactNode } from "react"
import Footer from "../components/footer/footer"
import NavBar from "../components/upperheader/upperheader"
import Router from "../router/router"

import { Outlet } from "react-router-dom"
import HumenImage from "../components/humenimage/humenimage"
type props = {children:ReactNode}
// {children}
const LauOut = () => {
    return (
        <>

            <NavBar />
            <Outlet/>
            <Footer />
        </>
    )
}
export default LauOut