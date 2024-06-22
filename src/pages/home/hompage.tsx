
import { Button1, Button2 } from '../../components/button/button'
import classname from './home.module.scss'
import headset from '../../../public/assets/home/desktop/image-hero.jpg'
import HomeProductItem from '../../components/homeProductItem/homeProductItem'
import Footer from '../../components/footer/footer'
import speaker from '../../../public/assets/home/desktop/ojwdnd.png'
import tabletimage from '../../../public/assets/home/tablet/image-speaker-zx7.jpg'
import mobileimage from '../../../public/assets/home/mobile/image-speaker-zx7.jpg'
import HumenImage from '../../components/humenimage/humenimage'
import Speaker from '../../../public/assets/product-zx9-speaker/desktop/justspeaker.png'
import d from '../../../public/assets/home/desktop/image-removebg-preview(38).png'
import earphones from '../../../public/assets/home/desktop/image-earphones-yx1.jpg'



const HomePage = () => {
    return (
       
        <div className={classname['home-page']}>
    
           <div className={classname['header']}>
             <div className={classname['text-container']}>
                <h3>new product</h3>
                <h1>
                XX99 Mark II
                Headphones
                </h1>
                <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <Button2/>
             </div>
             <div className={classname['hero-container']}>
                   
             </div>
           </div>
           {/*  */}
            <div className={classname['main']}>
              <HomeProductItem/>

                <div className={classname['main-first-div']}>

                    <div className={classname['orange']}>
                        <img className={classname['firstspksrc']} src={Speaker} alt="" />
                        <img className={classname['secstspksrc']} src={d} alt="" />
                    </div>
                    <div className={classname['text']}>
                        <div className={classname['h1-div']}>
                            <h1>
                                ZX9
                            </h1>
                            <h1>

                                SPEAKER
                            </h1>
                        </div>
                        <div className={classname['p-div']}>
                            <p>
                                Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                            </p>
                        </div>
                        <div>
                            <Button1 />
                        </div>
                    </div>
                </div>
                <div className={classname['main-second-div']}>
                    <div className={classname['inner-main-second-div']}>
                        <div className={classname['image-main-second-div']}>
                            <source media='(max-width:1024px)' srcSet={tabletimage} />
                            <source media="(min-width:650px)" srcSet={mobileimage} />
                            <img className={classname['first-src']} src={speaker} alt="" />
                            <img className={classname['second-src']} src={mobileimage} alt="" />
                        </div>
                        <div className={classname['button-third-div']}>
                            <h3>ZX7 SPEAKER</h3>
                            <Button1 />
                        </div>

                    </div>

                </div>
                <div className={classname['main-fourth-div']}>
                      <div className={classname['first-inner']}>
                                <img src={earphones} alt="" /> 
                      </div>
                      <div className={classname['second-inner']}>
                             <div  className={classname['position-div']}>
                                <h2><span>X1 </span><span>EARPHONES</span></h2>
                                <Button1/>
                              </div>
                      </div>
                </div>
                <HumenImage />
             
            </div>
            {/*  */}
           
    

            {/*  */}
        </div>

    )
}
export default HomePage     