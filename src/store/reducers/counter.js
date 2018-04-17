import { handleActions } from 'redux-actions'
import { INCREMENT, RANDOM_INCREMENT } from '../types/counter'

export default handleActions({
  [INCREMENT] (state) {
    const strftime = require('strftime')
    const transactionAmount = parseFloat((Math.random()* 100).toFixed(2))
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
  [RANDOM_INCREMENT] (state) {
    const strftime = require('strftime')
    const transactionAmount = parseFloat((Math.random() * 100).toFixed(2))
    const reward = parseFloat((transactionAmount * (Math.random() * 0.1 + 0.01)).toFixed(2))
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
  records: [
    {id: (Math.random() * 100000).toFixed(0), reward: 3.00, created_at: require('strftime')('%m月%d日 %R', new Date(Date.now())),  transactionAmount: parseFloat((Math.random()* 100).toFixed(2))},
    {id: (Math.random() * 100000).toFixed(0), reward: 3.00, created_at: require('strftime')('%m月%d日 %R', new Date(Date.now())),  transactionAmount: parseFloat((Math.random()* 100).toFixed(2))},
    {id: (Math.random() * 100000).toFixed(0), reward: 4.00, created_at: require('strftime')('%m月%d日 %R', new Date(Date.now())),  transactionAmount: parseFloat((Math.random()* 100).toFixed(2))}
  ],
  totalReward: 10
})