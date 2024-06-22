import classname from './style.module.scss'
import Footer from '../../../components/footer/footer'
import HomeProductItem from '../../../components/homeProductItem/homeProductItem'
import headpone1 from '../../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg'
import headpone2 from '../../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg'
import headpone3 from '../../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg'
import headphone from '../../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg'
import whiteheadphone from '../../../assets/product-xx59-headphones/desktop/image-product.jpg'
import HumenImage from '../../../components/humenimage/humenimage'
import speaker from '../../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg'
import {  Button2, Button3 } from '../../../components/button/button'
import hdphone from '../../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'
import { NavLink } from 'react-router-dom'


const HeadponesSecondPage = () => {
    return (
        <div className={classname['headpone1-page']}>
            <header>
          {/* <UpperHeader/> */}
            </header>
            <main>
           <div className={classname['first-main']}>
           <div className={classname['main-first-div']}>
            <div className={classname['image-div']}>
               <div>
                 <img src={headphone} alt="" />
               </div>
            </div>
            <div  className={classname['text-div']}>
             <div className={classname['h3-div']}>
                <h3>NEW PRODUCT</h3>
            </div>
            <div  className={classname['h1-div']}>
                    <h1>
                        <span className={classname['span-div']}>XX99 Mark I</span>
                        <span>Headphones</span>
                        
                    </h1>
            </div>
            <div className={classname['p-div']}>
                <p>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
            </div>
            <div className={classname['price']}>
                <h5>$ 1,750</h5>
            </div>
            <div className={classname['button-div']}>
                <div  className={classname['inner-button-div']}>
                    <button>-</button> <li>1</li> <button>+</button>
                </div>
                <Button3/>
            </div>
            </div>
            </div>
            <div className={classname['main-second-div']}>
                <div  className={classname['features']}>
                        <div  className={classname['frfeatures']}>
                            <h1>features</h1>
                        </div>
                        <div  className={classname['scfeatures']}>
             
                                    <p>As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.</p>
                                    <p>From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.</p>
                        </div>
                       
                </div>
            <div className={classname['inbox']}>
               <div className={classname['frinbox']}>
                <h1>in the box</h1>
               </div>
               <div className={classname['scinbox']}>
               <nav>
               <ul  className={classname['fr-ul']}>
                    <li>1x</li>
                    <li>2x</li>
                    <li>1x</li>
                    <li>1x</li>
                    
                </ul>
                <ul  className={classname['sc-ul']}>
                    <li>Headphone Unit</li>
                    <li>Replacement Earcups</li>
                    <li>User Manual</li>
                    <li>3.5mm 5m Audio Cable</li>
                    
                </ul>
               </nav>
               </div>
            </div>
            </div>
            <div  className={classname['main-third-div']}>
                <div  className={classname['two-image']}>
                    <div>
                        <img src={headpone1} alt="" />
                    </div>
                    <div>
                        <img src={headpone2} alt="" />
                    </div>
                </div>
                <div  className={classname['one-image']}>
                          <div>
                          <img src={headpone3} alt="" />
                          </div>
                </div>
            </div>
           </div>
            <div className={classname['gap-item']}>
            <div className={classname['main-fourth-div']}>
                <div className={classname['may']}>
                   <h1>you may also like</h1>
                </div>
                
                <div className={classname['item-div']} >
                     <div  className={classname['inner-item-div1']}>
                            <div className={classname['image-container']}>
                                        <img src={hdphone} alt="" />
                            </div>
                            <div className={classname['text-container']}>
                                        <h2>XX99 MARK II</h2>
                                        <NavLink to={'/headphone1'}><Button2/></NavLink>
                            </div>
                     </div>
                     <div  className={classname['inner-item-div1']}>
                            <div className={classname['image-container']}>
                                        <img src={whiteheadphone} alt="" />
                            </div>
                            <div className={classname['text-container']}>
                                        <h2>XX59</h2>
                                        <NavLink to={'/headphone3'}><Button2/></NavLink>
                            </div>
                     </div>
                     <div  className={classname['inner-item-div1']}>
                            <div className={classname['image-container']}>
                                        <img src={speaker} alt="" />
                            </div>
                            <div className={classname['text-container']}>
                                        <h2>ZX9 SPEAKER</h2>
                                        <NavLink to={'/speakers1'}><Button2/></NavLink>
                            </div>
                     </div>
                 
                </div>
                </div>
            
          <HomeProductItem/>
          <HumenImage/>
            </div>
           
            </main>
            <footer>
            <Footer/>
            </footer>
        </div>
    )
}
export default HeadponesSecondPage