import appState from './state';
import { createContext, useContext, useState } from 'react';

const StateContext = createContext(appState)
const CurrentNumberUpdateContext = createContext()
const ClearDisplayContext = createContext()
export const useAppState = () => useContext(StateContext)
export const useCurrentNumberUpdate = () => useContext(CurrentNumberUpdateContext)
export const useClearDisplayUpdate = () => useContext(ClearDisplayContext)

export const StateProvider = ({ children }) => {

  const [state, setState] = useState(appState)

  const updateCurrentNumber = (id) =>
    setState(prev =>
    ({
      ...prev,
      currentNumber: prev.currentNumber === '0' ?
        id : prev.currentNumber + id
    }))

  const clearDisplay = () => setState(prev => ({ ...prev, currentNumber: 0 }))

  return (
    <StateContext.Provider value={state}>
      <CurrentNumberUpdateContext.Provider value={updateCurrentNumber}>
        <ClearDisplayContext.Provider value={clearDisplay}>

          {children}
        </ClearDisplayContext.Provider>
      </CurrentNumberUpdateContext.Provider>
    </StateContext.Provider>
  )
}