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
      id: 'times',
      type: 'operator',
      label: 'x',
      keyTrigger: 'NumpadMultiply'
    },
    {
      id: '7',
      type: 'number',
      label: 7,
      keyTrigger: 'Numpad7'
    },
    {
      id: '8',
      type: 'number',
      label: 8,
      keyTrigger: 'Numpad8'
    },
    {
      id: '9',
      type: 'number',
      label: 9,
      keyTrigger: 'Numpad9'
    },
    {
      id: 'minus',
      type: 'operator',
      label: '-',
      keyTrigger: 'NumpadSubtract'
    },
    {
      id: '4',
      type: 'number',
      label: 4,
      keyTrigger: 'Numpad4'
    },
    {
      id: '5',
      type: 'number',
      label: 5,
      keyTrigger: 'Numpad5'
    },
    {
      id: '6',
      type: 'number',
      label: 6,
      keyTrigger: 'Numpad6'
    },
    {
      id: 'plus',
      type: 'operator',
      label: '+',
      keyTrigger: 'NumpadAdd'
    },
    {
      id: '1',
      type: 'number',
      label: 1,
      keyTrigger: 'Numpad1'
    },
    {
      id: '2',
      type: 'number',
      label: 2,
      keyTrigger: 'Numpad2'
    },
    {
      id: '3',
      type: 'number',
      label: 3,
      keyTrigger: 'Numpad3'
    },
    {
      id: 'equal',
      type: 'equal',
      label: '=',
      keyTrigger: 'NumpadEnter'
    },
    {
      id: '0',
      type: 'number',
      label: 0,
      keyTrigger: 'Numpad0'
    },
    {
      id: '.',
      type: 'number',
      label: '.',
      keyTrigger: 'NumpadDecimal'
    }
  ]
}

export default appState;