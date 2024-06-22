import { useEffect } from "react"
import { useAppDispach, useAppSelector } from "./store"
import fetchingProducts from "./store/products/async"
import { useParams } from "react-router-dom"
import classname from './pages/style/products.module.scss'
import { Button2 } from "./components/button/button"

import Loader from "./loader/loader"
const Product = () => {
  const { productsname } = useParams()
  console.log(productsname)
  const { data, error, status } = useAppSelector((state) => state.products)
  console.log(status)
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
        data.filter((item) => item.category === productsname).map((item, index) => {
          return (

            <div key={item.id}>
             <div className={classname['headphone-page']}>
             
                <main>

                  <div className={classname['first-div']}>
                    <div className={classname['left-div']}>
                      <img width={500} src={`/${item.image.desktop}`} alt="" />
                      
                    </div>
                    <div className={classname['right-div']}>

                      <h3>new product</h3>
                      <h1><span style={{}} >{item.name}</span></h1>
                      <p>
                       {item.description}
                      </p>
                      <Button2 />

                    </div>
                  </div>
                </main>

              </div>
            </div>
          )

        })

      )}
    </div>
  )
}
export default Product
