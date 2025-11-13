import React from 'react'

const PercentInput = ({ tipPercent,handleSetTipPercent , children}) => {

    const handleTipPercent=(e)=>{
        return handleSetTipPercent(Number(e.target.value));
    }

  return (
     <div className='bill-box'> 
                <label htmlFor="">{children}</label>

                <select value={tipPercent} onChange={handleTipPercent} >
                  <option value="0">Poor  0%</option>
                  <option value="5">Satisfactory   5%</option>
                  <option value="10">Good   10%</option>
                  <option value="15">Best   15%</option>
                  <option value="20">Star   20%</option>
                  <option value="25">2-Star 25%</option>
                </select>
                {/* <input type="text" placeholder='Enter something...' /> */}
    </div>
  )
}

export default PercentInput
