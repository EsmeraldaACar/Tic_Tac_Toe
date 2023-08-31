import { useState } from 'react'
import './styles/GeneralStyles.css'
const INIT_TOE: object[][] = [
  [{ field: 'A-1', value: '', disabled: false }, { field: 'A-2', value: '', disabled: false }, { field: 'A-3', value: '', disabled: false }],
  [{ field: 'B-1', value: '', disabled: false }, { field: 'B-2', value: '', disabled: false }, { field: 'B-3', value: '', disabled: false }],
  [{ field: 'C-1', value: '', disabled: false }, { field: 'C-2', value: '', disabled: false }, { field: 'C-3', value: '', disabled: false }],
]

const INIT_MOVEMENTS: string[][] = [[], []];

function App() {
  const [counter, setCounter] = useState(0)
  const [toe, setToe] = useState(INIT_TOE)
  const [movementsPlayers, setMovementsPlayers] = useState(INIT_MOVEMENTS)
  const [winner, setWinner] = useState('')

  function setMovePlayer(item: object, indexFather: number, indexChild: number) {

    item = { ...item, value: counter % 2 === 0 ? 'X' : 'O', disabled: true }
    toe[indexFather][indexChild] = item

    if (counter % 2 === 0) {
      movementsPlayers[0].push(item.field)
    } else {
      movementsPlayers[1].push(item.field)

    }
    setMovementsPlayers(movementsPlayers)
    setCounter(counter + 1)
    setToe(toe)
    getWinner()
  }

  function getWinner() {
    if (counter > 3) {

      const movPlayerOne = movementsPlayers[0].sort()


      const movPlayerTwo = movementsPlayers[1].sort()

      movPlayerOne.reduce((accumulatorLettters, element) => {
        const letter = element.charAt(0);

        accumulatorLettters[letter] = (accumulatorLettters[letter] || 0) + 1;
        if (accumulatorLettters[letter] === 3) {
          setWinner('Player One')
        }

        return accumulatorLettters;
      }, {});

      movPlayerOne.reduce((accumulatorNumbers, element) => {
        const number = element.charAt(2);
        accumulatorNumbers[number] = (accumulatorNumbers[number] || 0) + 1;
        if (accumulatorNumbers[number] === 3) {
          setWinner('Player One')
        }

        return accumulatorNumbers;
      }, {});

      let tic_tac_toe_diagonal = searchValues(movPlayerOne).every((value) => value === true)
      if(tic_tac_toe_diagonal) { setWinner('Player One') }
      
      

      movPlayerTwo.reduce((accumulatorLettters, element) => {
        const letter = element.charAt(0);

        accumulatorLettters[letter] = (accumulatorLettters[letter] || 0) + 1;
        if (accumulatorLettters[letter] === 3) {
          setWinner('Player Two')
        }

        return accumulatorLettters;
      }, {});

      movPlayerTwo.reduce((accumulatorNumbers, element) => {
        const number = element.charAt(2);
        accumulatorNumbers[number] = (accumulatorNumbers[number] || 0) + 1;
        if (accumulatorNumbers[number] === 3) {
          setWinner('Player Two')
        }

        return accumulatorNumbers;
      }, {});

      tic_tac_toe_diagonal = searchValues(movPlayerTwo).every((value) => value === true)
      if(tic_tac_toe_diagonal) { setWinner('Player One') }
    }
  }

  function searchValues(array: string | string[]) {
    return ['A-1', 'B-2', 'C-3'].map((value) => array.includes(value));
  }


  function clearMatch() {
    const initToe: object[][] = [
      [{ field: 'A-1', value: '', disabled: false }, { field: 'A-2', value: '', disabled: false }, { field: 'A-3', value: '', disabled: false }],
      [{ field: 'B-1', value: '', disabled: false }, { field: 'B-2', value: '', disabled: false }, { field: 'B-3', value: '', disabled: false }],
      [{ field: 'C-1', value: '', disabled: false }, { field: 'C-2', value: '', disabled: false }, { field: 'C-3', value: '', disabled: false }],
    ]
    setToe(initToe)
    setCounter(0)
    setMovementsPlayers([[], []])
    setWinner('')
  }

  return (
    <div className='principalContainer'>
      <h3 className="text">¿ Listo para jugar ?</h3>
      {winner && (<p className="text"> {winner} ganó!</p>)}
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
