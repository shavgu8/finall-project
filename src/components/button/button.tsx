import classname from './button.module.scss'
export const Button1 = ()=>{
    return(
        <div className={classname['button1-div']}><button>see product</button></div>
    )
}
export const Button2 = ()=>{
    return(
        <div  className={classname['button2-div']}> <button>see product</button></div>
    )
}
export const Button3 = ()=>{
    return(
        <div  className={classname['button2-div']}> <button>add to cart</button></div>
    )
}
// export const Button4 = ()=>{
//     return(
//         <div className={classname['button2-div']}><button style={{
//             width:'208.4%',
           
//         }}>CONTINUE & PAY</button></div>
//     )
// }