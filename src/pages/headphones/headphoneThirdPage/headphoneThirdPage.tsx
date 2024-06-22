import classname from './style.module.scss'
import Footer from '../../../components/footer/footer'
import HomeProductItem from '../../../components/homeProductItem/homeProductItem'
import headphone from '../../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg'
import headphone2 from '../../../assets/product-xx59-headphones/desktop/image-gallery-1.jpg'
import headpone1 from '../../../assets/product-xx59-headphones/desktop/image-gallery-2.jpg'
import headpone3 from '../../../assets/product-xx59-headphones/desktop/image-gallery-3.jpg'
import goldheadphone from '../../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'
import HumenImage from '../../../components/humenimage/humenimage'
import speaker from '../../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg'
import {  Button2, Button3 } from '../../../components/button/button'
import hdphone from '../../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'
import { NavLink } from 'react-router-dom'
const HeadponeThirdPage = () => {
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
                        <span className={classname['span-div']}>XX59</span>
                        <span>Headphones</span>
                        
                    </h1>
            </div>
            <div className={classname['p-div']}>
                    <p>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
            </div>
            <div className={classname['price']}>
                <h5>$ 899</h5>
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
                            <p>These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.</p>
                            <p>More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.</p>
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
                        <img src={headphone2} alt="" />
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
                                        <img src={goldheadphone} alt="" />
                            </div>
                            <div className={classname['text-container']}>
                                     <h2>XX99 MARK I</h2>
                                        <NavLink to={'/headphone2'}><Button2/></NavLink>
                            </div>
                     </div>
                     <div  className={classname['inner-item-div1']}>
                            <div className={classname['image-container']}>
                                        <img src={speaker} alt="" />
                            </div>
                            <div className={classname['text-container']}>
                                        <h2>ZX9 SPEAKER</h2>
                                     <NavLink to={'/speakers1'}>   <Button2/></NavLink>
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
export default HeadponeThirdPage