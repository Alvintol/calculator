import classNames from 'classnames';

const Button = ({id, label, type}) => {
  
  const btnClass = classNames('flex flex-col justify-center text-center border border-slate-900 rounded-md', {
    'bg-red-400 col-start-1 col-end-3 font-bold': type === 'reset',
    'bg-yellow-100 font-bold': type === 'symbol',
    'bg-amber-500 row-start-6 col-start-1 col-end-3': type === 'number' && id === '0',
    'bg-amber-500': type === 'number',
    'bg-teal-500 row-span-2 font-bold': type === 'equal'
  })

return (
  <div className={btnClass} id={id}>
    {label}
  </div>
)
}

export default Button