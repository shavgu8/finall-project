import classname from '../style/products.module.scss'
import earphone from '../../assets/product-yx1-earphones/desktop/image-removebg-preview(42).png'
import HomeProductItem from '../../components/homeProductItem/homeProductItem'
import { Button2 } from '../../components/button/button'
import HumenImage from '../../components/humenimage/humenimage'
import { NavLink } from 'react-router-dom'
const HeadPhonesPage = () => {

  return (
    <div className={classname['headphone-page']}>
      <header>
        <h2>earphones</h2>
      </header>
      <main>

        <div className={classname['first-div']}>
          <div className={classname['left-div']}>
            <img src={earphone} alt="" />
          </div>
          <div className={classname['right-div']}>

            <h3>new product</h3>
           

            <h1><span> YX1 WIRELESS</span>
              <span>EARPHONES</span></h1>
            <p>
            Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.            </p>
            <Button2 />

          </div>
        </div>
        
          
        <HomeProductItem />
        <HumenImage/>
      </main>

    </div>
  )
}
export default HeadPhonesPage
