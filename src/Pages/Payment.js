import React from 'react'
import '../pagecss/Payments.css'
import { SiPaytm } from "react-icons/si";
import Gpay from '../Images/Gpay.png'
import Paypal  from '../Images/Paypal.png' 
import Coin from '../Images/Coin.png'
import PhonePay from '../Images/PhonePay.png'
import Buybtn from '../components/Buybtn';
const Payment = () => {
  return (
    <div className='main-paument'>
            <h1>Billing Details</h1>
        <div className="billing-forms">
            <div className="three-input">
                <label>Parent's Name :  </label>
                <input type='text' placeholder='Please Enter Your Name' />
                <label>Email : </label>
                <input type='text' placeholder='Please Enter Your Email' />
                <label>Parent's Name :  </label>
                <input type='text' placeholder='Please Enter Your Phone Number' />

            </div>
            <div className="two-forms">
            <label>Child's  Name :  </label>
                <input type='text' placeholder='Please Enter Your Name' />
                <label>Child's age : </label>
                <input type='text' placeholder='Please Enter Your Email' />
            
                <label>Book Name : </label>
                <input type='text' placeholder='Please Enter Your Book Name' />
            
            </div>
            <button><Buybtn /></button>
        </div>
        <div className="buttom-line">
        </div>
        <div className="payment-method">
            <h1>Payment Method</h1>
            <div className="upi-method">
                <div className='pay-display'>
                    <input type='radio' />
                    <img src={Gpay} alt="" />
                </div>
                <div className='pay-display'>
                    <input type='radio' />
                    <SiPaytm className='paytm' />
                </div>
                <div className='pay-display'>
                    <input type='radio' />
                    <img src={PhonePay} alt="" />

                </div>
                <div className='pay-display'>
                    <input type='radio' />
                    <img src={Paypal} alt="" />
                </div>

            </div>
            <div className="payment-main">
                <div className="payment-Require">
                    <h3>Required : Save this payment method for future purchases ? </h3>
                    <div className="yes-no">
                    <div className='pay-display'>
                    <input type='radio' />
                   <span>Yes</span>
                </div>
                <div className='pay-display'>
                    <input type='radio' />
                   <span>No</span>
                </div>
                    </div>
                    <p>You will be directed to the selected UPI apply to authorize your payment <br></br>
                    method, then you will be returned  to this page to complete This purchase.
                    </p>
                </div>
                    <div className="side-line">

                    </div>
                    <div className="reward-points">
                        <h2>
                            Reward Points  :
                        </h2>

                        <p> <img src={Coin} width={30} alt="" />Mentoons Rewards :   Rs 0</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Payment