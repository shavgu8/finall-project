import classname from  '../headphoneThirdPage/style.module.scss'
import { NavLink } from 'react-router-dom'
import Footer from '../../../components/footer/footer'
import HomeProductItem from '../../../components/homeProductItem/homeProductItem'
import humimage from '../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg'
import product from '../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg'
import HumenImage from '../../../components/humenimage/humenimage'
import headphone from '../../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'
import halfheadphone from '../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg'
import whiteheadphone from '../../../assets/product-xx59-headphones/desktop/image-product.jpg'
import goldheadphone from '../../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'
import speaker from '../../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg'
import {  Button2, Button3 } from '../../../components/button/button'
const HeadponeFirstPage = () => {
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
                        <span className={classname['span-div']}>XX99 Mark II</span>
                        <span>Headphones</span>
                        
                    </h1>
            </div>
            <div className={classname['p-div']}>
                <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
            </div>
            <div className={classname['price']}>
                <h5>$ 2,999</h5>
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
                            <p>Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.</p>
                            <p>The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.</p>
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
                    <li>1x</li>
                </ul>
                <ul  className={classname['sc-ul']}>
                    <li>Headphone Unit</li>
                    <li>Replacement Earcups</li>
                    <li>User Manual</li>
                    <li>3.5mm 5m Audio Cable</li>
                    <li>Travel Bag</li>
                </ul>
               </nav>
               </div>
            </div>
            </div>
            <div  className={classname['main-third-div']}>
                <div  className={classname['two-image']}>
                    <div>
                        <img src={humimage} alt="" />
                    </div>
                    <div>
                        <img src={product} alt="" />
                    </div>
                </div>
                <div  className={classname['one-image']}>
                          <div>
                          <img src={halfheadphone} alt="" />
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
                                        <img src={goldheadphone} alt="" />
                            </div>
                            <div className={classname['text-container']}>
                                        <h2>XX99 MARK I</h2>
                                        <NavLink to={'/headphone2'}><Button2/></NavLink>
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
export default HeadponeFirstPage