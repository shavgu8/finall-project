import { useEffect } from "react"
import { useAppDispach, useAppSelector } from "./store"
import fetchingProducts from "./store/products/async"
import { useParams } from "react-router-dom"
import classname from './pages/headphones/headphoneThirdPage/style.module.scss'
import { Button2, Button3 } from "./components/button/button"

import Loader from "./loader/loader"
const Products = () => {
  const { productsId } = useParams()
  console.log(productsId)
  const { data, error, status } = useAppSelector((state) => state.products)
  console.log(status,data)
  const dispach = useAppDispach()
  useEffect(() => {
    dispach(fetchingProducts())
  }, [dispach])
  if (status === 'failed') {
    <p>{error}</p>
  }


  return (
    <div className={classname['main-page']} >
   
      {status === 'loading' && (
       <Loader/>
      )}
      {status === 'loaded' && (
        data.filter((item) => item.category === productsId ).map((item, index) => {
          {console.log(item.category)}
          return (

            <div key={item.id}>
              <div className={classname['headpone1-page']}>
            <header>
          {/* <UpperHeader/> */}
            </header>
            <main>
           <div className={classname['first-main']}>
           <div className={classname['main-first-div']}>
            <div className={classname['image-div']}>
               <div>
                 <img src={`/${item.image.desktop}`} alt="" />
               </div>
            </div>
            <div  className={classname['text-div']}>
             <div className={classname['h3-div']}>
                <h3>{item.name}</h3>
            </div>
            <div  className={classname['h1-div']}>
                    <h1>
                        <span className={classname['span-div']}>XX59</span>
                        <span>{item.category}</span>
                      
                    </h1>
            </div>
            <div className={classname['p-div']}>
              {item.description}
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
                        {/* <img src={headpone1} alt="" /> */}
                    </div>
                    <div>
                        {/* <img src={headphone2} alt="" /> */}
                    </div>
                </div>
                <div  className={classname['one-image']}>
                          <div>
                          {/* <img src={headpone3} alt="" /> */}
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
                                        {/* <img src={hdphone} alt="" /> */}
                            </div>
                            <div className={classname['text-container']}>
                                        <h2>XX99 MARK II</h2>

                            </div>
                     </div>
                     <div  className={classname['inner-item-div1']}>
                            <div className={classname['image-container']}>
                                        {/* <img src={goldheadphone} alt="" /> */}
                            </div>
                            <div className={classname['text-container']}>
                                     <h2>XX99 MARK I</h2>

                            </div>
                     </div>
                     <div  className={classname['inner-item-div1']}>
                            <div className={classname['image-container']}>
                                        {/* <img src={speaker} alt="" /> */}
                            </div>
                            <div className={classname['text-container']}>
                                        <h2>ZX9 SPEAKER</h2>
                                     
                            </div>
                     </div>
                 
                </div>
                </div>
            
          {/* <HomeProductItem/>
          <HumenImage/> */}
            </div>
           
            </main>
            <footer>
            {/* <Footer/> */}
            </footer>
        </div>
            </div>
          )

        })

      )}
    </div>
  )
}
export default Products
