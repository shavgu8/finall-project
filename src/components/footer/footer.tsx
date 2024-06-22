import classname from './footer.module.scss'
import FbBrand from '../../../public/assets/shared/desktop/icon-facebook.svg'
import InstBrand  from  '../../../public/assets/shared/desktop/icon-instagram.svg'

import { NavLink } from 'react-router-dom'
import twbrand from '../../../public/assets/shared/desktop/icon-twitter.svg'
const Footer = ()=>{

    return(
       

    <div className={classname['footer-container']}>
       <div className={classname['fr-footer']}>
                <div className={classname['up-footer']}>
                    <div className={classname['audiophile']}>
                        <h2>
                            audiophile
                        </h2>
                    </div>
                    <div className={classname['navigation-div']}>
                            <nav>
                                <ul >
                                <NavLink className={classname['navlink']} to={'/'}><li>home</li></NavLink>
                                <NavLink className={classname['navlink']} to={'/headphones'}><li>headphones</li></NavLink>
                                <NavLink className={classname['navlink']} to={'/speakers'}> <li>speakers</li></NavLink>
                                <NavLink className={classname['navlink']} to={'/earphones'}><li>earphones</li></NavLink>
                                </ul>
                            </nav>
                    </div>
                </div>
                <div className={classname['middle-footer']}>
                        <p>
                         Audiophile is an all in one stop to fulfill 
                        your audio needs. We're a small team of music
                         lovers and sound specialists who are devoted
                          to helping you get the most out of personal 
                          audio. Come and visit our demo facility - we’re
                           open 7 days a week.
                        </p>
                </div>
                <div className={classname['lower-footer']}>
                       <h4>Copyright 2021. All Rights Reserved</h4>
                </div>
              </div>
               <div className={classname['position-conteiner']}>
                                    <img src={FbBrand} alt="facebook-image" />
                                    <img src={twbrand} alt="twitter-image" />
                                    <img src={InstBrand} alt="insta-image" />
                            </div>
  </div>
    )
}
export default Footer