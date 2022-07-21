import appState from './state';
import { createContext, useContext, useState } from 'react';

const StateContext = createContext(appState);
const CurrentNumberUpdateContext = createContext();
const ClearDisplayContext = createContext();
const OperatorContext = createContext();
const ProductContext = createContext();
export const useAppState = () => useContext(StateContext);
export const useCurrentNumberUpdate = () => useContext(CurrentNumberUpdateContext);
export const useClearDisplay = () => useContext(ClearDisplayContext);
export const useOperator = () => useContext(OperatorContext);
export const useProduct = () => useContext(ProductContext);

export const StateProvider = ({ children }) => {

  const [state, setState] = useState(appState)

  const getProduct = (productArr, operator) => {

    return productArr.reduce((a, b) => {
      switch (operator) {
        case '/': return a / b;
        case 'x': return a * b;
        case '-': return a - b;
        case '+': return a + b;
        default: return null
      }
    })
  }

  const updateCurrentNumber = (id) => {

    if (id === '.' && state.currentNumber.includes('.'))
      return null;
    console.log('STATE:',state)
    console.log('ID:',id)
    setState(prev =>
    ({
      ...prev,
      currentNumber: prev.currentNumber === '0' ||
        !prev.currentNumber.match(/^[0-9][.\d]*(,\d+)?$/)
        ?
        id : `${prev.currentNumber}${id}`,
        product: prev.currentNumber.match(/^[0-9][.\d]*(,\d+)?$/) ? 
        getProduct([+prev.product, +id], prev.lastOperator) : +prev.product
    }))
    console.log('STATE:', state)
  }

  const clearDisplay = () => setState(prev => ({
    ...prev,
    currentNumber: '0',
    input: '',
    lastOperator: '+',
    product: 0
  }))

  const addOperator = (type, label) => {
    const operators = /[x\-/+]/;
    console.log('STATE:CURRENTNUMBER:', state.currentNumber)
    if (state.currentNumber.match(operators)) {
      console.log('*********************************TEST1*********************************')
      setState(prev =>
      ({
        ...prev,
        currentNumber: label,
        input: prev.input.slice(0, -1) + label,
        product: !prev.currentNumber.match(operators) ?
          getProduct([prev.product, +prev.currentNumber], prev.lastOperator) : prev.product,
        lastOperator: label
      }))
    } else if (type === 'operator' &&
      state.currentNumber === '0'
    ) {
      return null
    }
    else {
      console.log('*********************************TEST2*********************************')
      setState(prev =>
      ({
        ...prev,
        input: prev.input + prev.currentNumber + label,
        currentNumber: label,
        product: prev.input.length > 0 
        // ||
        //   !prev.currentNumber.match(operators) 
          ?
          getProduct([prev.product, +prev.currentNumber], prev.lastOperator) : prev.product,
        lastOperator: label
      }))
      console.log('STATE', state)
    }
  }

  const displayProduct = () => {
    setState(prev => ({
      ...prev,
      currentNumber: getProduct([+prev.product, +prev.currentNumber], prev.lastOperator).toString(),
      input: '',
      product: getProduct([+prev.product, +prev.currentNumber], prev.lastOperator),
      lastOperator: prev.lastOperator
    }))
    console.log('DISPALYPRODUCT STATE:', state)
  }

  return (
    <StateContext.Provider value={state}>
      <CurrentNumberUpdateContext.Provider value={updateCurrentNumber}>
        <ClearDisplayContext.Provider value={clearDisplay}>
          <OperatorContext.Provider value={addOperator}>
            <ProductContext.Provider value={displayProduct}>
              {children}
            </ProductContext.Provider>
          </OperatorContext.Provider>
        </ClearDisplayContext.Provider>
      </CurrentNumberUpdateContext.Provider>
    </StateContext.Provider>
  )
}