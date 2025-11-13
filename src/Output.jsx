import React from 'react'

const Output = ({tipAmount,billAmount,totalAmount}) => {
    const b = billAmount.toFixed(2);
    const t = tipAmount.toFixed(2);
    const total = totalAmount.toFixed(2);
  return (
    <div className='output-box'>
            <h3> Total Amount to be paid = ₹{total} { `Tip Amount  ₹${t} and Total Amount ₹${b}`}  </h3>
           
                    
            
    </div>
  )
}

export default Output
