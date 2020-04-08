import { h } from 'hyperapp'
import IdCard from '../IdCard'

export default (state) =>
  h('main', null, [
    IdCard({
      picture: 'https://example.com/image.jpg',
      listEntries: state.person
    })
  ])
