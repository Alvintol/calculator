import { useAppState } from '../StateProvider'

const Input = () => {
  const state = useAppState()

  console.log('STATE:CURRENTNUM:', state.currentNumber)
  console.log('STATE:CURRENTNUM:', typeof state.currentNumber)
  console.log('STATEPRODUCT:', state.product)
  console.log('STATEPRODUCTMATCH:', state.currentNumber.match(/\d+/))

  return (
    <div className='text-orange-400 text-sm' id='equation'>
      {state.input}{state.currentNumber.match(/\d+/) ? state.currentNumber : ''}
    </div>
  )
}

export default Input