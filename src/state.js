const appState = {
  currentNumber: '0',
  input: '',
  buttons: [
    {
      id: 'clear',
      type: 'reset',
      label: 'AC'
    },
    {
      id: 'divide',
      type: 'operator',
      label: '/'
    },
    {
      id: 'times',
      type: 'operator',
      label: 'x'
    },
    {
      id: '7',
      type: 'number',
      label: 7
    },
    {
      id: '8',
      type: 'number',
      label: 8
    },
    {
      id: '9',
      type: 'number',
      label: 9
    },
    {
      id: 'minus',
      type: 'operator',
      label: '-'
    },
    {
      id: '4',
      type: 'number',
      label: 4
    },
    {
      id: '5',
      type: 'number',
      label: 5
    },
    {
      id: '6',
      type: 'number',
      label: 6
    },
    {
      id: 'plus',
      type: 'operator',
      label: '+'
    },
    {
      id: '1',
      type: 'number',
      label: 1
    },
    {
      id: '2',
      type: 'number',
      label: 2
    },
    {
      id: '3',
      type: 'number',
      label: 3
    },
    {
      id: 'equal',
      type: 'equal',
      label: '='
    },
    {
      id: '0',
      type: 'number',
      label: 0
    },
    {
      id: '.',
      type: 'number',
      label: '.'
    }
  ]
}

export default appState;