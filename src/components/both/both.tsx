import HomeProductItem from "../homeProductItem/homeProductItem"
import HumenImage from "../humenimage/humenimage"
import classname from './both.module.scss'
const Both  = ()=>{
    return(
        <div className={classname['both']}>
             <HomeProductItem/>
             <HumenImage/>
        </div>
    )
}
export default Both