const state = {
  display: '0',
  input: '',
  buttons: {
    clear: {
      type: 'reset',
      label: 'AC'
    },
    divide: {
      type: 'symbol',
      label: '/'
    },
    times: {
      type: 'symbol',
      label: 'x'
    },
    7: {
      type: 'number',
      label: 7
    },
    8: {
      type: 'number',
      label: 8
    },
    9: {
      type: 'number',
      label: 9
    },
    minus: {
      type: 'symbol',
      label: '-'
    },
    4: {
      type: 'number',
      label: 4
    },
    5: {
      type: 'number',
      label: 5
    },
    6: {
      type: 'number',
      label: 6
    },
    plus: {
      type: 'symbol',
      label: '+'
    },
    1: {
      type: 'number',
      label: 1
    },
    2: {
      type: 'number',
      label: 2
    },
    3: {
      type: 'number',
      label: 3
    },
    equal: {
      type: 'equal',
      label: '='
    },
    0: {
      type: 'number',
      label: 0
    },
    dot: {
      type: 'symbol',
      label: '.'
    }
  }
}

export default state;