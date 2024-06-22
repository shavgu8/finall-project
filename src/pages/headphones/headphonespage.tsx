import classname from '../style/products.module.scss'
import whitespeaker from '../../assets/product-xx59-headphones/desktop/whiteheadphone.png'
import goldenheadphone from '../../assets/product-xx59-headphones/desktop/goldheadphone.png'
import headphone from '../../assets/product-xx59-headphones/desktop/image-removebg-preview(47).png'
import HomeProductItem from '../../components/homeProductItem/homeProductItem'
import { Button2 } from '../../components/button/button'
import HumenImage from '../../components/humenimage/humenimage'

const HeadPhonesPage = () => {



  return (
<>

  <div className={classname['headphone-page']}>
  <header>
    
    <h2>headphones</h2>
  </header>
  <main>

    <div className={classname['first-div']}>
      <div className={classname['left-div'
        
      ]}>
        <img src={headphone} alt="" />
      </div>
      <div className={classname['right-div']}>
   
        <h3>new product</h3>
        <h1><span>XX99 Mark II</span>
          <span>Headphones</span></h1>
        <p>
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
        </p>
        <Button2 />
       
        
      </div>
    </div>
    <div id={classname['id']} className={classname['first-div']}>
      <div className={classname['left-div']}>
        <img src={goldenheadphone} alt="" />
      </div>
      <div className={classname['right-div']}>

        
        <h1><span>XX99 Mark II</span>
          <span>Headphones</span></h1>
        <p>
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
        </p>
        <  Button2 />

      </div>
    </div>
    <div className={classname['first-div']}>
      <div className={classname['left-div']}>
        <img src={whitespeaker} alt="" />
      </div>
      <div className={classname['right-div']}>

        
        <h1><span>XX99 Mark II</span>
          <span>Headphones</span></h1>
        <p>
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
        </p>
      <Button2 />

      </div>
    </div>
    <HomeProductItem />
    <HumenImage/>
  </main>

</div>
</>

  )
}
export default HeadPhonesPage
