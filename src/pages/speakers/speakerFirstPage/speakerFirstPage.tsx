import classname from './style.module.scss'
import Footer from '../../../components/footer/footer'
import HomeProductItem from '../../../components/homeProductItem/homeProductItem'
import speaker from '../../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg'
import speaker1 from '../../../assets/product-zx9-speaker/desktop/image-gallery-1.jpg'
import speaker2 from '../../../assets/product-zx9-speaker/desktop/image-gallery-2.jpg'
import speaker3 from '../../../assets/product-zx9-speaker/desktop/image-gallery-3.jpg'
import speaker4 from '../../../assets/product-zx7-speaker/desktop/image-product.jpg'
import whiteheadphone from '../../../assets/product-xx59-headphones/desktop/image-product.jpg'
import goldheadphone from '../../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'
import HumenImage from '../../../components/humenimage/humenimage'
// import speaker from '../../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg'
import {  Button2, Button3 } from '../../../components/button/button'
import { NavLink } from 'react-router-dom'

const SpeakerFirstPage = () => {
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
                 <img src={speaker} alt="" />
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
                <p>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
            </div>
            <div className={classname['price']}>
                <h5>$ 4,500</h5>
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
                            <p>Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).</p>
                            <p>Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.</p>
                        </div>
                       
                </div>
            <div className={classname['inbox']}>
               <div className={classname['frinbox']}>
                <h1>in the box</h1>
               </div>
               <div className={classname['scinbox']}>
               <nav>
               <ul  className={classname['fr-ul']}>
                    <li>2x</li>
                    <li>2x</li>
                    <li>1x</li>
                    <li>1x</li>
                    <li>1x</li>
                   
                </ul>
                <ul  className={classname['sc-ul']}>
                    <li>Speaker Unit</li>
                    <li>Speaker Cloth Panel</li>
                    <li>User Manual</li>
                    <li>3.5mm 10m Audio Cable</li>
                    <li>10m Optical Cable</li>
                   
                </ul>
               </nav>
               </div>
            </div>
            </div>
            <div  className={classname['main-third-div']}>
                <div  className={classname['two-image']}>
                    <div>
                        <img src={speaker1} alt="" />
                    </div>
                    <div>
                        <img src={speaker2} alt="" />
                    </div>
                </div>
                <div  className={classname['one-image']}>
                          <div>
                          <img src={speaker3} alt="" />
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
                                        <img src={speaker4} alt="" />
                            </div>
                            <div className={classname['text-container']}>
                                        <h2>ZX7 SPEAKER</h2>
                                        <NavLink to={'/speakers2'}><Button2/></NavLink>
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
                                        <img src={whiteheadphone} alt="" />
                            </div>
                            <div className={classname['text-container']}>
                                        <h2>XX59</h2>
                                        
                                        <NavLink to={'/headphone3'}><Button2/></NavLink>
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
export default SpeakerFirstPage