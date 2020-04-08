import { h } from 'hyperapp'

export default (state, actions) =>
  h('main', null, [
    h('p', null, ['><' + '='.repeat(state.fishSize) + '°>']),
    h('button', { onclick: () => actions.decreaseFishSize() }, ['-']),
    h('button', { onclick: () => actions.increaseFishSize() }, ['+'])
  ])
