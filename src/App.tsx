import { useState } from 'react'
import './styles/GeneralStyles.css'
const CATALOG_TOE: string[][] = [['A-1', 'A-2', 'A-3'], ['B-1', 'B-2', 'B-3'], ['C-1', 'C-2', 'C-3']]
function App() {
  // const [toe, setToe] = useState()
  return (
    <div className='principalContainer'>
      <h3 className="text">Listo para jugar ?</h3>
      <div className='boxContainer'>
        {CATALOG_TOE.map((item, index) => (
          <div key={index}>
            {item.map(() => (
              <p className='box'></p>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
