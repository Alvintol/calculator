const appState = {
  currentNumber: '0',
  input: '',
  lastOperator: '+',
  product: 0,
  numbers: [0],
  buttons: [
    {
      id: 'clear',
      type: 'reset',
      label: 'AC',
      keyTrigger: 'Escape'
    },
    {
      id: 'divide',
      type: 'operator',
      label: '/',
      keyTrigger: 'NumpadDivide'
    },
    {
      id: 'multiply',
      type: 'operator',
      label: 'x',
      keyTrigger: 'NumpadMultiply'
    },
    {
      id: 'seven',
      type: 'number',
      label: '7',
      keyTrigger: 'Numpad7'
    },
    {
      id: 'eight',
      type: 'number',
      label: '8',
      keyTrigger: 'Numpad8'
    },
    {
      id: 'nine',
      type: 'number',
      label: '9',
      keyTrigger: 'Numpad9'
    },
    {
      id: 'subtract',
      type: 'operator',
      label: '-',
      keyTrigger: 'NumpadSubtract'
    },
    {
      id: 'four',
      type: 'number',
      label: '4',
      keyTrigger: 'Numpad4'
    },
    {
      id: 'five',
      type: 'number',
      label: '5',
      keyTrigger: 'Numpad5'
    },
    {
      id: 'six',
      type: 'number',
      label: '6',
      keyTrigger: 'Numpad6'
    },
    {
      id: 'add',
      type: 'operator',
      label: '+',
      keyTrigger: 'NumpadAdd'
    },
    {
      id: 'one',
      type: 'number',
      label: '1',
      keyTrigger: 'Numpad1'
    },
    {
      id: 'two',
      type: 'number',
      label: '2',
      keyTrigger: 'Numpad2'
    },
    {
      id: 'three',
      type: 'number',
      label: '3',
      keyTrigger: 'Numpad3'
    },
    {
      id: 'equals',
      type: 'equals',
      label: '=',
      keyTrigger: 'NumpadEnter'
    },
    {
      id: 'zero',
      type: 'number',
      label: '0',
      keyTrigger: 'Numpad0'
    },
    {
      id: 'decimal',
      type: 'number',
      label: '.',
      keyTrigger: 'NumpadDecimal'
    }
  ]
}

export default appState;