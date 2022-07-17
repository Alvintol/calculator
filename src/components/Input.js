import { useAppState } from '../StateProvider'

const Input = () => {
  const state = useAppState()
  const operators = /[/*-+]/

  return (
    <div className='text-orange-400 text-sm' id='equation'>
      {state.input}{!state.currentNumber.match(operators) ? state.currentNumber : null}
    </div>
  )
}

export default Input