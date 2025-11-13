import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import BillInput from './BillInput'
import PercentInput from './PercentInput'
import Output from './Output'
import Reset from './Reset'

function App() {
  const [billAmount, setBillAmount] = useState(0)
  const [tipPercent1, setTipPercent1] = useState(5)
  const [tipPercent2, setTipPercent2] = useState(5)

  const handleSetBillAmount=(value)=>{
      setBillAmount(value);
  }
  const handleSetTipPercent1=(value)=>{
      setTipPercent1(value);
  }
  const handleSetTipPercent2=(value)=>{
      setTipPercent2(value);
  }
  
  const avgPercent = (tipPercent1 + tipPercent2) / 2;
  const tipAmount = (billAmount * avgPercent) / 100;
  const totalAmount = billAmount + tipAmount;   
  const handleReset=()=>{
      setBillAmount(0);
      setTipPercent1(0);
      setTipPercent2(0);
  }
  return (
    <>
      <div className='main-div'>
         <h1>TIP-CALCULATOR</h1>
              <div className='input-div'>
                    
                  <BillInput billAmount = {billAmount} handleSetBillAmount={handleSetBillAmount}/>
                  <PercentInput tipPercent = {tipPercent1} handleSetTipPercent={handleSetTipPercent1} children="How Do You Like the Service"/>
                  <PercentInput tipPercent = {tipPercent2} handleSetTipPercent={handleSetTipPercent2} children="How Your Friend Like the Service"/>
                  
                  
                    {/* <div className='percent-box'> 
                    <label htmlFor="">Enter Bill Amount:- </label>
                    <input type="text" placeholder='Enter something...' />
                    </div> */}
              </div>
            
            <Output tipAmount={tipAmount} billAmount={billAmount} totalAmount = {totalAmount}/>
                      <Reset onHandleReset={handleReset}/>  
         
      </div>
     
      
    </>
  )
}

export default App
