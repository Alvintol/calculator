import './css/main.css'

const App = () => {
  return (
    <div className="app h-screen flex flex-col items-center justify-center">
      <div className='w-1/2 h-1/2 border border-slate-300 grid grid-rows-6 grid-col-5 gap-1' id='main'>
        <div className='flex flex-col justify-end text-end border border-slate-300 col-start-1 col-end-5' id='display'>
          Screen
        </div>
        <div className='flex flex-col justify-center text-center border border-slate-300 col-start-1 col-end-3' id='clear'>
          AC
        </div>
        <div className='flex flex-col justify-center text-center border border-slate-300 col-start-3' id='divide'>
          /
        </div>
        <div className='flex flex-col justify-center text-center border border-slate-300 col-start-4' id='times'>
          x
        </div>
        <div className='flex flex-col justify-center text-center border border-slate-300 col-start-1' id='7'>
          7
        </div>
        <div className='flex flex-col justify-center text-center border border-slate-300 col-start-2' id='8'>
          8
        </div>
        <div className='flex flex-col justify-center text-center border border-slate-300' id='9'>
          9
        </div>
        <div className='flex flex-col justify-center text-center border border-slate-300' id='minus'>
          -
        </div>
        <div className='flex flex-col justify-center text-center border border-slate-300' id='4'>
          4
        </div>
        <div className='flex flex-col justify-center text-center border border-slate-300' id='5'>
          5
        </div>
        <div className='flex flex-col justify-center text-center border border-slate-300' id='6'>
          6
        </div>
        <div className='flex flex-col justify-center text-center border border-slate-300' id='plus'>
          +
        </div>
        <div className='flex flex-col justify-center text-center border border-slate-300' id='1'>
          1
        </div>
        <div className='flex flex-col justify-center text-center border border-slate-300' id='2'>
          2
        </div>
        <div className='flex flex-col justify-center text-center border border-slate-300' id='3'>
          3
        </div>
        <div className='flex flex-col justify-center text-center border border-slate-300 row-span-2' id='equal'>
          =
        </div>
        <div className='flex flex-col justify-center text-center border border-slate-300 row-start-6 col-start-1 col-end-3' id='0'>
          0
        </div>
        <div className='flex flex-col justify-center text-center border border-slate-300' id='dot'>
          .
        </div>
      </div>
    </div>
  );
}

export default App;
