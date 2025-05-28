import { useState } from 'react'
import './Body.css'

function Body() {
  
  const[cont, setCont] = useState(0)
  const[inputValor, setInputValor] = useState('')
  const[inputN1, setInputN1] = useState('')
  const[inputN2, setInputN2] = useState('')

  function more(){
    setCont(cont + 1)
  }

  function less(){
    if(cont > 0){
    setCont(cont - 1)
  }
  }

  function alterar(){
    setCont(Number(inputValor))
  }

  return (
    <div className='Body'>
        <h2 className='titulo2'>NyanCats são fofos e legais</h2>
        
        <div className='cont'>
         <button onClick={more}>+</button>
         <p>Quantos gatinhos fofos e estupidamente coloridos irá alegrar seu dia de hoje: ^{cont}^</p>
         <button onClick={less}>-</button>
         </div>

         <div className='form'>
          <input type="number" 
          value={inputValor}
          onChange={(e) => setInputValor(e.target.value)}
          />
          <button onClick={alterar}>Alterar</button>
         </div>

         <div className='calculadora'>
          <input type="text" 
          value={inputN1}
          onChange={(e) => setInputN1(e.target.value)}
          />
            
          <button>+</button>
          <input type="text"
          value={inputN2}
          onChange={(e) => setInputN2(e.target)}
          /> {inputN2}
         </div>
    </div>
  )
}

export default Body