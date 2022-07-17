import { useAppState } from '../StateProvider'

const Input = () => {
  const state = useAppState()

  return (
    <div className='text-orange-400 text-sm' id='equation'>
      {state.input}
    </div>
  )
}

export default Input