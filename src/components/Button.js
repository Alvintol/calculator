import classNames from 'classnames';
import { useAppState, useDisplayUpdate } from '../StateProvider';

const Button = ({ id, label, type }) => {

  const state = useAppState();
  const updateDisplay = useDisplayUpdate();

  const btnClass = classNames('flex flex-col justify-center text-center border border-slate-900 rounded-md', {
    'bg-red-400 col-start-1 col-end-3 font-bold': type === 'reset',
    'bg-yellow-100 font-bold': type === 'symbol',
    'bg-amber-500 row-start-6 col-start-1 col-end-3': type === 'number' && id === '0',
    'bg-amber-500': type === 'number',
    'bg-teal-500 row-span-2 font-bold': type === 'equal'
  })

  const click = () => {
    console.log(id)
    
  }

  return (
    <div
      className={btnClass}
      id={id}
      onClick={click}
    >
      {label}
    </div>
  )
}

export default Button