import appState from './state';
import { createContext, useContext, useState } from 'react';

const StateContext = createContext(appState)
const CurrentNumberUpdateContext = createContext()
export const useAppState = () => useContext(StateContext)
export const useCurrentNumberUpdate = () => useContext(CurrentNumberUpdateContext)

export const StateProvider = ({ children }) => {

  const [state, setState] = useState(appState)

  const updateCurrentNumber = (id) =>
    setState(prev =>
    ({
      ...prev,
      currentNumber: prev.currentNumber === '0' ?
        id : prev.currentNumber + id
    }))

  return (
    <StateContext.Provider value={state}>
      <CurrentNumberUpdateContext.Provider value={updateCurrentNumber}>
        {children}
      </CurrentNumberUpdateContext.Provider>
    </StateContext.Provider>
  )
}