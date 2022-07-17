import './css/main.css'
import Display from './components/Display';
import { StateProvider } from './StateProvider'

const App = () => {
  return (
    <StateProvider>
      <div className="app h-screen flex flex-col items-center justify-center">
        <div className='w-1/2 h-1/2 border border-slate-900 rounded-sm grid grid-rows-6 grid-col-5 gap-1 text-2xl p-1 bg-neutral-500' id='main'>
          <Display />
          <div className='bg-red-400 flex flex-col justify-center text-center border border-slate-900 rounded-md col-start-1 col-end-3 font-bold' id='clear'>
            AC
          </div>
          <div className='bg-yellow-100 flex flex-col justify-center text-center border border-slate-900 rounded-md col-start-3 font-bold' id='divide'>
            /
          </div>
          <div className='bg-yellow-100 flex flex-col justify-center text-center border border-slate-900 rounded-md col-start-4 font-bold' id='times'>
            x
          </div>
          <div className='bg-amber-500 flex flex-col justify-center text-center border border-slate-900 rounded-md' id='7'>
            7
          </div>
          <div className='bg-amber-500 flex flex-col justify-center text-center border border-slate-900 rounded-md' id='8'>
            8
          </div>
          <div className='bg-amber-500 flex flex-col justify-center text-center border border-slate-900 rounded-md' id='9'>
            9
          </div>
          <div className='bg-yellow-100 flex flex-col justify-center text-center border border-slate-900 rounded-md font-bold' id='minus'>
            -
          </div>
          <div className='bg-amber-500 flex flex-col justify-center text-center border border-slate-900 rounded-md' id='4'>
            4
          </div>
          <div className='bg-amber-500 flex flex-col justify-center text-center border border-slate-900 rounded-md' id='5'>
            5
          </div>
          <div className='bg-amber-500 flex flex-col justify-center text-center border border-slate-900 rounded-md' id='6'>
            6
          </div>
          <div className='bg-yellow-100 flex flex-col justify-center text-center border border-slate-900 rounded-md font-bold' id='plus'>
            +
          </div>
          <div className='bg-amber-500 flex flex-col justify-center text-center border border-slate-900 rounded-md' id='1'>
            1
          </div>
          <div className='bg-amber-500 flex flex-col justify-center text-center border border-slate-900 rounded-md' id='2'>
            2
          </div>
          <div className='bg-amber-500 flex flex-col justify-center text-center border border-slate-900 rounded-md' id='3'>
            3
          </div>
          <div className='bg-teal-500 flex flex-col justify-center text-center border border-slate-900 rounded-md row-span-2 font-bold' id='equal'>
            =
          </div>
          <div className='bg-amber-500 flex flex-col justify-center text-center border border-slate-900 rounded-md row-start-6 col-start-1 col-end-3' id='0'>
            0
          </div>
          <div className='bg-yellow-100 flex flex-col justify-center text-center border border-slate-900 rounded-md font-bold' id='dot'>
            .
          </div>
        </div>
      </div>
    </StateProvider>
  );
}

export default App;
