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
  const operators = /[x\-/+]/;

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

    if ((id === 'decimal' && state.currentNumber.includes('.')) ||
      (id === 'zero' && state.numbers.slice(-1)[0] === 0 &&
        !state.currentNumber.match(/^[0-9][.\d]*(,\d+)?$/))) {
      return
    }
    if (id === 'decimal' && state.currentNumber === '0') {
      return setState(prev => ({ ...prev, currentNumber: '0.' }))
    }

    setState(prev =>
    ({
      ...prev,
      currentNumber: prev.currentNumber === '0' || !state.currentNumber.match(/^[0-9][.\d]*(,\d+)?$/)
        ?
        id : `${prev.currentNumber}${id}`,
      product: !state.currentNumber.match(operators) ?
        getProduct([prev.numbers.slice(-1)[0], +`${prev.currentNumber}${id}`], prev.lastOperator) :
        getProduct([prev.numbers.slice(-1)[0], +id], prev.lastOperator),
      numbers: prev.numbers.splice(-1, !state.currentNumber.match(/^[0-9][.\d]*(,\d+)?$/)
        ?
        +id : +`${prev.currentNumber}${id}`)
    }))
  }

  const clearDisplay = () => setState(prev => ({
    ...prev,
    currentNumber: '0',
    input: '',
    lastOperator: '+',
    product: 0,
    numbers: [0]
  }))

  const addOperator = (type, label) => {

    if (type === 'operator' &&
      state.currentNumber === '0') { return }
    if (state.currentNumber.match(operators)) {
      setState(prev =>
      ({
        ...prev,
        currentNumber: label,
        input: prev.input.slice(0, -1) + label,
        product: !prev.currentNumber.match(operators) ?
          getProduct([prev.product, +prev.currentNumber], prev.lastOperator) : +prev.product,
        lastOperator: label
      }))
    }
    else {
      setState(prev =>
      ({
        ...prev,
        input: prev.input + prev.currentNumber + label,
        currentNumber: label,
        product: state.numbers.length > 1
          ?
          getProduct([prev.numbers.slice(-1)[0], +prev.currentNumber], prev.lastOperator) : prev.product,
        lastOperator: label,
        numbers: [prev.product]
      }))
    }
  }

  const displayProduct = () => {
    state.input === '' ?
      setState(prev => ({
        ...prev,
        currentNumber: getProduct([prev.product, prev.product], prev.lastOperator).toString(),
        product: getProduct([prev.product, prev.product], prev.lastOperator),
        numbers: [getProduct([prev.product, prev.product], prev.lastOperator)]
      })) :
      setState(prev => ({
        ...prev,
        currentNumber: prev.product.toString(),
        input: '',
        product: prev.product,
        lastOperator: prev.lastOperator,
        numbers: [prev.product]
      }))
  }
  console.log('state:', state)

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