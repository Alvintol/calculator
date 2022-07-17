import appState from './state';
import { createContext, useContext, useRef, useState } from 'react';

const StateContext = createContext(appState)
const CurrentNumberUpdateContext = createContext()
const ClearDisplayContext = createContext()
const OperatorContext = createContext()
export const useAppState = () => useContext(StateContext)
export const useCurrentNumberUpdate = () => useContext(CurrentNumberUpdateContext)
export const useClearDisplay = () => useContext(ClearDisplayContext)
export const useOperator = () => useContext(OperatorContext)

export const StateProvider = ({ children }) => {

  const [state, setState] = useState(appState)

  const updateCurrentNumber = (id) => {
    const operators = /[/*-+]/;

    if (id === '.' && state.currentNumber.includes('.'))
      return null;

    setState(prev =>
    ({
      ...prev,
      currentNumber: prev.currentNumber === '0' || prev.currentNumber.match(operators) ?
        id : prev.currentNumber + id
    }))
  }

  const clearDisplay = () => setState(prev => ({
    ...prev,
    currentNumber: '0',
    input: ''
  }))

  const addOperator = (type, label) => {
    const operators = /[//x/-/+]/;
    if (state.currentNumber.match(operators)) {
      setState(prev =>
      ({
        ...prev,
        input: prev.input.slice(0, -1) + label
      }))
    } else if (type === 'operator' &&
      state.currentNumber === '0'
    ) {
      return null
    }
    else {
      setState(prev =>
      ({
        ...prev,
        input: prev.input + prev.currentNumber + label,
        currentNumber: label
      }))
    }
  }

  return (
    <StateContext.Provider value={state}>
      <CurrentNumberUpdateContext.Provider value={updateCurrentNumber}>
        <ClearDisplayContext.Provider value={clearDisplay}>
          <OperatorContext.Provider value={addOperator}>
            {children}
          </OperatorContext.Provider>
        </ClearDisplayContext.Provider>
      </CurrentNumberUpdateContext.Provider>
    </StateContext.Provider>
  )
}