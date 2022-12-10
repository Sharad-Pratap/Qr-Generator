import React, { useEffect,useState } from 'react'
import './App.css'


const App = () =>{
  const [Inputvalue,setInputValue] = useState("")
  const [isActive,setisActive] = useState(false)
  const [word,setWord] = useState("")
  const [qrCode, setQrCode] = useState("")

  useEffect(()=>{
    setQrCode(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${word}`)
  },[word])

  let handleClick = () =>{
    if(Inputvalue !== "")
    {
      setisActive(true)
      setWord(Inputvalue)
    }
  }
  return(
     <div className='container' style={{height:isActive ?  "450px" : ""}}>
      <h3 className='title'><i class="fa-sharp fa-solid fa-qrcode"></i> Qr Code Generator</h3>
      <div className='qr-code-box' style={{visibility:isActive ? "visible": ""}}>
        <div className='qr-code'>
          <img src={qrCode} alt=''/>
        </div>
      </div>
      <input type='text' className='userInput' placeholder='Enter text or URL' onChange=
      {(e)=>setInputValue(e.target.value)} style={{top:isActive ? "88px" : ""}}/>
      <button className='generate-btn' onClick={handleClick}>Generate</button>
     </div>
     )

}
export default App;