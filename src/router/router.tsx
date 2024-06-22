import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/home/hompage"
import NotFound from "../pages/notfound/NotFound"
import Product from "../first"
import Products from "../second"
import LauOut from "../layout/layout"
import Loader from "../loader/loader"
import CheckOut from "../pages/checkout/checkout"
import Layout2 from "../layout/layout2"
import Categoryname from "../components/prname/productname"
import Layout3 from "../layout/Layout3"
const Router = () => {

    return (
        <Routes>
            <Route path="/a" element={<Categoryname />} />
            <Route element={<Layout2 />}>
                <Route path="/products/:productsname" element={<Product />} />
            </Route>
            <Route element={<Layout3 />}>
                <Route path="/products/:productsname/:productsId" element={<Products />} />
            </Route>
            <Route element={<LauOut />}>
                <Route path="/" element={<HomePage />} />


                <Route path="/checkout" element={<CheckOut />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
export default Router