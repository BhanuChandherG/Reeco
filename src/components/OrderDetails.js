import React from 'react'
import "./index.css"

const OrderDetails = () => {
    const currentDate = new Date();
  
    const dayOfWeek = currentDate.toLocaleString('en-US', { weekday: 'short' });
    const month = currentDate.toLocaleString('en-US', { month: 'short' });
    const dayOfMonth = currentDate.getDate();
  return (
    <div className='orderdetailsContainer'>
    <div>
        <p className='orderDetailsPara'>Supplier</p>
        <h3 className='orderDetailsHeading'>East coast fruits <br/> 
        & vegetables</h3>
    </div>

    <div>
        <p className='orderDetailsPara'>Shipping date</p>
        <h3 className='orderDetailsHeading'>{dayOfWeek}, {month} {dayOfMonth}</h3>
    </div>

    <div>
        <p className='orderDetailsPara'>Total</p>
        <h3 className='orderDetailsHeading'>$ 15,028.3</h3>
    </div>

    <div>
        <p className='orderDetailsPara'>Category</p>
        <h3 className='orderDetailsHeading'>.</h3>
    </div>

    <div>
        <p className='orderDetailsPara'>Department</p>
        <h3 className='orderDetailsHeading'>300-44-678</h3>
    </div>

    <div>
        <p className='orderDetailsPara'>Status</p>
        <h3 className='orderDetailsHeading'>Awaiting your approvel</h3>
    </div>
    </div>
  )
}

export default OrderDetails