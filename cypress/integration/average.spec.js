import { calculateAverage } from '../src/utils/middleware/alertWatch'

// { value: 0.24, time: '6:49:28 PM' }
const avg3 = Array(20).map(() => ({ value: 3 }))

describe('Calculating Average Load', () => {
  it('should correctly average an array of loads', () => {
    expect(calculateAverage(avg3)).to.eq(3)
  })
})
