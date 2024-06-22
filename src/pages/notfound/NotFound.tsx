import { NavLink } from "react-router-dom"
import classname from './style.module.scss'
const NotFound = ()=>{
    return(
        <div className={classname['page']}>
           <h1>NOT FOUND</h1> 
           <h3>go to <NavLink className={classname['none']} to={'/'}> home page</NavLink></h3>
        </div>
    )
}
export default NotFound