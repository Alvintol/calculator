import './css/main.css'
import Display from './components/Display';
import Button from './components/Button';
import { StateProvider, useAppState } from './StateProvider'

const App = () => {

  const state = useAppState();

  const classes = {
    main: 'app h-screen flex flex-col items-center justify-center',
    container: 'w-1/2 h-1/2 border border-slate-900 rounded-sm grid grid-rows-6 grid-col-5 gap-1 text-2xl p-1 bg-neutral-500'
  }

  const buttons = state.buttons.map(btn => {
    const { id, type, label } = btn;

    return (
      <Button
        key={id}
        id={id}
        type={type}
        label={label}
      />
    )
  })

  return (
    <StateProvider>
      <div className={classes.main} id='main'>
        <div className={classes.container} id='container'>
          <Display />
          {buttons}
        </div>
      </div>
    </StateProvider >
  );
}

export default App;
