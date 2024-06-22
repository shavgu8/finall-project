import classname from './style.module.scss'
import cash from '../../../public/assets/checkout/icon-cash-on-delivery.svg'
import order from '../../../public/assets/checkout/icon-order-confirmation.svg'
import xx59 from '../../../public/assets/summary/xx59.png'
import yx1 from '../../../public/assets/summary/yx1.png'

import xx99 from '../../../public/assets/summary/xx99.png'
import { Button2, } from '../../components/button/button'

const CheckOut = () => {
    return (
        <main>
            <div className={classname['checkout']}>
                <div className={classname['checkout-container']}>
                    <div className={classname['title']}>
                        <h1>checkout</h1>
                    </div>
                    <div className={classname['firts-div']}>
                        <h3>Billing Details</h3>
                        <div className={classname['inner-firts-div']}>
                            <form>
                            <div className={classname['three-div']}>
                                <div className={classname['two-div']}>
                                    <div className={classname['zip']}>
                                        <label htmlFor="w">Name</label>
                                        <input placeholder='Alexei Ward' type="text" />
                                    </div>
                                      <div className={classname['city']}>
                                      <label htmlFor=""> Email Address</label>
                                      <input placeholder='alexei@mail.com' type="email" />
                                      </div>
                                </div>
                                <div className={classname['one-div']}>
                                <label htmlFor=""> Phone Number</label>
                                <input placeholder='+1 202-555-0136' type="number" />
                                </div>
                            </div>
                            </form>
                        </div>

                    </div>
                    <div className={classname['shipping']}>
                        <h3>shipping info</h3>
                        <form>
                            <div className={classname['adress']}>
                                <label className={classname['frist-label']} htmlFor="">Address</label>
                                <label className={classname['second-label']}
                                 htmlFor="">Your Address</label>
                                <input  placeholder='1137 Williams Avenue' type="text" />
                            </div>
                            <div className={classname['three-div']}>
                                <div className={classname['two-div']}>
                                    <div className={classname['zip']}>
                                        <label htmlFor="w">ZIP Code</label>
                                        <input placeholder='10001' type="text" />
                                    </div>
                                      <div className={classname['city']}>
                                      <label htmlFor=""> City</label>
                                      <input placeholder='New York' type="text" />
                                      </div>
                                </div>
                                <div className={classname['one-div']}>
                                <label htmlFor=""> Country</label>
                                <input placeholder='United States' type="text" />
                                </div>
                            </div>

                        </form>



                    </div>
                    <div className={classname['payment']}>
                        <h3>payment details</h3>
                        <form>
                            <div className={classname['first-payment']}>
                                <div className={classname['left-first-payment']}>
                                    <h5>Payment Method</h5>
                                </div>
                                <div className={classname['right-first-payment']}>
                                    <div className={classname['zip']}>
                                        <input type="text" />
                                    </div>
                                    <div className={classname['country']}>
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>
                            <div className={classname['second-payment']}>
                                <div >
                                    <label htmlFor="">e-Money Number</label>
                                    <input placeholder='238521993' type="number" />

                                </div>
                                <div >
                                    <label htmlFor="">e-Money PIN</label>
                                    <input placeholder='6891' type="number" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* checkout-conteiner */}

                {/* summary */}
            </div>
            <div className={classname['summary-container']}>
                <div className={classname['summary']}>
                    <h2>summary</h2>
                </div>
                <div className={classname['incart']}>
                    <div className={classname['fr-div']}>
                        <div className={classname['image']}>
                            <div className={classname['image-div']}>
                                <img src={xx99} alt="" />
                            </div>
                            <div className={classname['item-title']}>
                                <h4>XX99 MK II</h4>
                                <p>$ 2,999</p>
                            </div>

                        </div>
                        <div className={classname['times']}>
                            <p>x1</p>
                        </div>

                    </div>


                </div>
                <div className={classname['incart']}>
                    <div className={classname['fr-div']}>
                        <div className={classname['image']}>
                            <div className={classname['image-div']}>
                                <img src={xx59} alt="" />
                            </div>
                            <div className={classname['item-title']}>
                                <h4>XX59</h4>
                                <p>$ 899</p>
                            </div>

                        </div>
                        <div className={classname['times']}>
                            <p>x2</p>
                        </div>

                    </div>


                </div>
                <div className={classname['incart']}>
                    <div className={classname['fr-div']}>
                        <div className={classname['image']}>
                            <div className={classname['image-div']}>
                                <img src={yx1} alt="" />
                            </div>
                            <div className={classname['item-title']}>
                                <h4>YX1</h4>
                                <p>$ 599</p>
                            </div>

                        </div>
                        <div className={classname['times']}>
                            <p>x1</p>
                        </div>

                    </div>


                </div>
                <div className={classname['info']}>
                    <div className={classname['inner-info']}>
                        <div>
                            <h4>total</h4>
                            <p>$ 5,396</p>
                        </div>
                        <div>
                            <h4>SHIPPING</h4>
                            <p>$ 50</p>
                        </div>
                        <div>
                            <h4>VAT (INCLUDED)</h4>
                            <p>$ 1,079</p>
                        </div>
                    </div>
                    <div className={classname['grand-total']}>
                        <h4>GRAND TOTAL</h4>
                        <p>$ 5,446</p>
                    </div>
                    <div className={classname['b-div']}>
                        <button>CONTINUE & PAY</button>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default CheckOut