import { useAppState } from '../StateProvider';
import Input from './Input';

const Display = () => {

  const state = useAppState();

  return (
    <div className='flex flex-col justify-end text-end col-start-1 col-end-5 px-2 text-4xl' id='display'>
          <Input />
          {state.display}
        </div>
  )
}

export default Display;