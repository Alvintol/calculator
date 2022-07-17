import appState from './state';
import { createContext, useContext, useState } from 'react';

const StateContext  = createContext(appState)
export const useAppState = () => useContext(StateContext)

export const StateProvider = ({ children }) => {

  const [state, setState] = useState(appState)

  return (
    <StateContext.Provider value={state}>
      {children}
    </StateContext.Provider>
  )
}