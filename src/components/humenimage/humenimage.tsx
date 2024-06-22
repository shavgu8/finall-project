import classname from './style.module.scss'
import bitcamp from '../../../public/assets/home/desktop/Bitmap2@.png'
import hume from '../../../public/assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg'

const HumenImage = ()=>{
    return(
                <div className={classname['humen-img-conteiner']}>
            <div className={classname['left-div']}>
                  <div className={classname['left-div-h1']}>
                    <h1>
                    Bringing you the <span style={{
                        color:'#D87D4A'
                    }}>best</span> audio gear
                    </h1>
                  </div>
                  <div  className={classname['left-div-p']}>
                    <p>
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                    </p>
                  </div>
            </div>
            <div className={classname['right-div']}>
            <img src={hume} alt="image" className={classname['first-image']} /> 
           <img src={bitcamp} alt="image" className={classname['second-image']}  />
            </div>
       </div> 
    )
}
export default HumenImage