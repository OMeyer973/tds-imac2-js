import { h } from 'hyperapp'

export default (state) =>
  h('main', null, [
    h('h1', null, [state.name]),
    h('h2', null, [state.job]),
    h('h1', null, [state.gotLifeSentence ? 'yes' : 'no']),
  ])
