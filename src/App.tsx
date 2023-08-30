import { useState } from 'react'
import './styles/GeneralStyles.css'
const INIT_TOE: object[][] = [
  [{ field: 'A-1', value: '', disabled: false }, { field: 'A-2', value: '', disabled: false }, { field: 'A-3', value: '', disabled: false }],
  [{ field: 'B-1', value: '', disabled: false }, { field: 'B-2', value: '', disabled: false }, { field: 'B-3', value: '', disabled: false }],
  [{ field: 'C-1', value: '', disabled: false }, { field: 'C-2', value: '', disabled: false }, { field: 'C-3', value: '', disabled: false }],
]

const INIT_MOVEMENTS:string[][] = [[],[]];

function App() {
  const [counter, setCounter] = useState(0)
  const [toe, setToe] = useState(INIT_TOE)
  const [movementsPlayers, setMovementsPlayers] = useState(INIT_MOVEMENTS)

  function setMovePlayer(item: object, indexFather: number, indexChild: number) {

    item = { ...item, value: counter % 2 === 0 ? 'X' : 'O', disabled: true }
    toe[indexFather][indexChild] = item

    if (counter % 2 === 0) {
      movementsPlayers[0].push(item.value)
    } else {
      movementsPlayers[1].push(item.value)
      
    }
    setMovementsPlayers(movementsPlayers)
    setCounter(counter + 1)
    setToe(toe)
  }

  function getWinner() {
    
  }

  function clearMatch() {
    const initToe: object[][] = [
      [{ field: 'A-1', value: '', disabled: false }, { field: 'A-2', value: '', disabled: false }, { field: 'A-3', value: '', disabled: false }],
      [{ field: 'B-1', value: '', disabled: false }, { field: 'B-2', value: '', disabled: false }, { field: 'B-3', value: '', disabled: false }],
      [{ field: 'C-1', value: '', disabled: false }, { field: 'C-2', value: '', disabled: false }, { field: 'C-3', value: '', disabled: false }],
    ]    
    setToe(initToe)
    setCounter(0)
    setMovementsPlayers([[],[]])
  }

  return (
    <div className='principalContainer'>
      <h3 className="text">¿ Listo para jugar ?</h3>
      <div className='boxContainer'>
        {toe.map((item, indexFather) => (
          <div key={indexFather} >
            {item.map((i, indexChild) => (
              <button key={`field-${indexChild}`} className='box' onClick={() => setMovePlayer(i, indexFather, indexChild)} disabled={i.disabled}>
                <h4>{i.value}</h4>
              </button>
            ))}
          </div>
        ))}
      </div>
      <button onClick={clearMatch}>Reiniciar partida</button>
    </div>
  )
}

export default App
