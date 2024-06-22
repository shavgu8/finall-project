import classname from './upheader.module.scss'
import { NavLink } from 'react-router-dom'
import CartIcon from '../../../public/assets/shared/desktop/icon-cart.svg'
import Modal from '../modal/secondmoda';
import React, { useState } from 'react';




const NavBar = ()=>{
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
      setShowModal(!showModal);
    };
  
    return(
        <div className={classname['header']}>
                    <div className={classname['navbar']}>
        <div className={classname['brand']}>
        <div className={classname['container']} >
                <div className={classname['bar1']}></div>
                <div className={classname['bar2']}></div>
                <div className={classname['bar3']}></div>
        </div>
            <h2>audiophile</h2>
        </div>
        {/*  */}
        <div className={classname['navigation']}>
            <nav>
                <ul>
                   <NavLink to={'/'}><li>home</li></NavLink> 
                   <NavLink  to={'/products/headphones'}> <li >headphones</li></NavLink>
                   <NavLink  to={'/products/speakers'}> <li >speakers</li></NavLink>
                   <NavLink  to={'/products/earphones'}> <li >earphones</li></NavLink>
                </ul>
            </nav>
        </div>
        {/*  */}
        <div className={classname['cart']}>
            <button style={{
                background:'transparent',
                border:'none'
            }}    onClick={toggleModal}><img src={CartIcon} alt="cart" /></button>
            <Modal  show={showModal} onClose={toggleModal}>
         <></>
        </Modal>
        </div>
        {/*  */}
       </div>
        </div>

    )
}
export default NavBar