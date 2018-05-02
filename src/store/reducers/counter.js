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
  totalReward: 1000,
  rankList: [
    { id: (Math.random()*100000).toFixed(0), totalReward: 500, name: '颈椎病患者', avatar: '/images/user1.png', level: 'sliver' },
    { id: (Math.random()*100000).toFixed(0), totalReward: 400, name: '怎么能吃小兔兔', avatar: '/images/user3.png', level: 'copper' },
    { id: (Math.random()*100000).toFixed(0), totalReward: 300, name: '呱呱呱', avatar: '/images/user4.png' },
    { id: (Math.random()*100000).toFixed(0), totalReward: 200, name: '一起喊茄子', avatar: '/images/user5.png' },
    { id: (Math.random()*100000).toFixed(0), totalReward: 100, name: '我是萌妹', avatar: '/images/user6.png' }
  ]
})