import { handleActions } from 'redux-actions'
import { INCREMENT, RANDOM_INCREMENT } from '../types/counter'

export default handleActions({
  [INCREMENT] (state, action) {
    const strftime = require('strftime')
    const transactionAmount = action.payload[0].toFixed(2)
    const reward = parseFloat((transactionAmount * 0.05).toFixed(2))
    return {
      ...state,
      reward: reward,
      totalReward: state.totalReward + reward,
      records: [
        ...state.records,
        { id: (Math.random()*100000).toFixed(0), reward: reward, created_at: strftime('%m月%d日 %R', new Date(Date.now())),  transactionAmount: transactionAmount}
      ]
    }
  },
  [RANDOM_INCREMENT] (state, action) {
    const strftime = require('strftime')
    const transactionAmount = action.payload[0].toFixed(2)
    const reward = parseFloat((transactionAmount * (Math.random() * 3 + 0.01)).toFixed(2))
    return {
      ...state,
      reward: reward,
      totalReward: state.totalReward + reward,
      records: [
        ...state.records,
        { id: (Math.random()*100000).toFixed(0), reward: reward, created_at: strftime('%m月%d日 %R', new Date(Date.now())),  transactionAmount: transactionAmount}
      ]
    }
  }
}, {
  reward: 0,
  records: [],
  totalReward: 10
})