import React from 'react'
import classname from './style.module.scss'
import { useAppSelector } from '../../store'
import { useParams } from 'react-router-dom'
import { useAppDispach } from '../../store'
import fetchingProducts from '../../store/products/async'
import { useEffect } from 'react'
import Loader from '../../loader/loader'
const Categoryname = () => {
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
<div className={classname['main-thing']} >
    <p>prod name</p>
   {/* {status === 'loaded' && (
    data.filter((item)=>item.category === productsname).map((item)=>{
        return(
            <li key={item.id}>
                {item.category[0]}
            </li>
        )
    })
   )} */}
</div>
  )
}

export default Categoryname
