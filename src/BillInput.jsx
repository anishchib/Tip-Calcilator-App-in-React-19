import React from 'react'

const BillInput = ({billAmount, handleSetBillAmount}) => {

  
const handleSetAmount11=(e)=>{
    return handleSetBillAmount(Number(e.target.value)); 
}
  return (
   <div className='bill-box'> 
                <label htmlFor="">Enter Bill Amount:- </label>
                <input type="text" placeholder='Enter bill..'  value = {billAmount} onChange={handleSetAmount11}/>
    </div>
  )
}

export default BillInput
