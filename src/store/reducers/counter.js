import { handleActions } from 'redux-actions'
import { INCREMENT } from '../types/counter'

export default handleActions({
  [INCREMENT] (state) {
    return {
      ...state,
      reward: state.reward + parseFloat((Math.random(10)* 10).toFixed(2))
    }
  }
}, {
  reward: 0
})