import appState from './state';
import { createContext, useContext, useState } from 'react';

const StateContext = createContext(appState)
const DisplayUpdateContext = createContext()
export const useAppState = () => useContext(StateContext)
export const useDisplayUpdate = () => useContext(DisplayUpdateContext)

export const StateProvider = ({ children }) => {

  const [state, setState] = useState(appState)

  const updateDisplay = (id) => setState(prev => ({ ...prev, display: id }))

  return (
    <StateContext.Provider value={state}>
      <DisplayUpdateContext.Provider value={updateDisplay}>
        {children}
      </DisplayUpdateContext.Provider>
    </StateContext.Provider>
  )
}