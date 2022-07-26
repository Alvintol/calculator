import classNames from 'classnames';
import { useKey } from '../eventListener';
import { useClearDisplay, useCurrentNumberUpdate, useOperator, useProduct } from '../StateProvider';

const Button = ({ id, label, type, keyTrigger }) => {

  const updateCurrentNumber = useCurrentNumberUpdate();
  const clearDisplay = useClearDisplay();
  const addOperator = useOperator();
  const displayProduct = useProduct()

  const btnClass = classNames('flex flex-col justify-center text-center border border-slate-900 rounded-md', {
    'bg-red-400 col-start-1 col-end-3 font-bold': type === 'reset',
    'bg-yellow-100 font-bold': type === 'operator',
    'bg-amber-500 row-start-6 col-start-1 col-end-3': type === 'number' && id === 'zero',
    'bg-amber-500': type === 'number',
    'bg-teal-500 row-span-2 font-bold': type === 'equals'
  })

  const btnClick = () => {

    switch (type) {
      case 'number':
        updateCurrentNumber(label)
        break;
      case 'operator':
        addOperator(type, label)
        break;
      case 'reset':
        clearDisplay();
        break;
      case 'equals':
        displayProduct();
        break
      default:
        break;
    }
  }

  useKey(`${keyTrigger}`, (e) => {
    if (e?.code === keyTrigger) {
      btnClick()
    }
  })

  return (
    <div
      className={btnClass}
      id={id}
      onClick={btnClick}
    >
      {label}
    </div>
  )
}

export default Button