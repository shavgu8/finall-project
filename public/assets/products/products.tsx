import { useParams } from "react-router-dom"
import { useAppDispach,useAppSelector } from "../../store"
import { useState } from "react"
import { products } from "../../type/type"
import SpeakersSecondPage from "../../pages/speakers/speakersSecondPage/speakersSecondPage"

const Products1 = ()=>{
    const {productsname} = useParams()
    const {data,error,status} = useAppSelector((state)=> state.products)
    data

      console.log(productsname)
    return(
        <div>
             {data.filter(item => item.category === productsname).map((item)=>{
                return(
                    <div key={item.id}>
             {item.description}
                    </div>
                )
             })}
           
        </div>
    )
}
export default Products1