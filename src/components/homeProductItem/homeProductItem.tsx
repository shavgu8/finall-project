import classname from  './HomeProductItem.module.scss'
import HeadPhone from '../../../public/assets/shared/goldenheadphone.png'
import earphones from  '../../../public/assets/shared/brownearphone.png'
import  speaker from '../../../public/assets/shared/whitespeaker.png'
import { NavLink } from 'react-router-dom'
const HomeProductItem = ()=>{
    return(
        <div className={classname['product-container']}>
          <div className={classname['inner-box']}>
            
            <div className={classname['inner-box-div']}>
              <img src={HeadPhone} alt="" />
               <h3>Headphones</h3>
              <NavLink style={{
                textDecoration:'none',
                color:"black"
              }} to={'/products/headphones'}> <p> shop<i className={classname['arrow']}></i></p></NavLink>
            </div>
          </div>
          <div className={classname['inner-box']}>
            
            <div className={classname['inner-box-div']}>
              <img src={speaker} alt="" />
               <h3>speakers</h3>
              <NavLink style={{
                textDecoration:'none',
                color:"black"
              }}  to={'/products/speakers'}> <p> shop<i className={classname['arrow']}></i></p></NavLink>
            </div>
          </div>
       
          <div className={classname['inner-box']}>
            
            <div className={classname['inner-box-div']}>
              <img src={earphones} alt="" />
               <h3>earphones</h3>
              <NavLink style={{
                textDecoration:'none',
                color:"black"
              }} to={'/products/earphones'}> <p> shop<i className={classname['arrow']}></i></p></NavLink>
            </div>
          </div>
       
       
          
        
        
    </div>
    )
}
export default HomeProductItem