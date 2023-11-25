import React from 'react'
import "./index.css"

const OrderHeader = () => {
  return (
    <div className='OrderHeaderMain'>
    <div className="OrderHeaderDetails">
        <p>Orders</p>
        <p>&gt;</p>
        <p className="paraUnderline">Order 32457ABC</p>
    </div>
    <div className='orderHeaderLowerSection'>
        <h1 className='orderHeaderHeading'>Order 32457ABC </h1>
        <div>
        <button  className="backButton" type='button'>Back</button>
        <button className="approvalButton" type='button'>Approve order</button>
        </div>
    </div>
    </div>
  )
}

export default OrderHeader