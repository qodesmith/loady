import { calculateAverage } from '../../src/utils/helpers'

const makeArr = (num, val) => [...Array(num)].map(() => ({ value: val }))

// Array of objects => { value: 0.24, time: '6:49:28 PM' }

describe('Calculating Average Load', () => {
  it('should correctly average an array of loads', () => {
    const arr = makeArr(12, 3)
    const arr2 = makeArr(6, 3)
    const arr3 = makeArr()

    expect(calculateAverage(arr)).to.eq(3)
    expect(calculateAverage(arr2)).to.eq(1.5)
    expect(calculateAverage([])).to.eq(0)
  })

  it('should only use the last 6 loads if we slow the frequency by 2x', () => {
    const arr1 = makeArr(12, 3)
    const arr2 = makeArr(6, 3)
    const arr3 = makeArr(5, 3)
    const arr4 = makeArr(2, 1).concat(makeArr(2, 2)).concat(makeArr(2, 3))
    const arr5 = makeArr(22, 23476923).concat(arr4)

    expect(calculateAverage(arr1, 20000)).to.eq(3)
    expect(calculateAverage(arr2, 20000)).to.eq(3)
    expect(calculateAverage(arr3, 20000)).to.be.lt(3)
    expect(calculateAverage(arr4, 20000)).to.eq(2)
    expect(calculateAverage(arr5, 20000)).to.eq(2)
  })

  it('should use twice as many loads (24) if we speed the frequency by 2x', () => {
    const arr1 = makeArr(24, 3)

    expect(calculateAverage(arr1, 5000)).to.eq(3)
    expect(calculateAverage(arr1.slice(1), 5000)).to.be.lt(3)
    expect(calculateAverage(arr1.slice(12), 5000)).to.eq(1.5)
  })

  it('should only check the last 6 loads when specifying 1 minute', () => {
    const arr1 = makeArr(6, 3)
    const arr2 = arr1.concat(makeArr(6, .75))

    expect(calculateAverage(arr1, undefined, 1)).to.eq(3)
    expect(calculateAverage(arr1.concat(arr1), undefined, 1)).to.eq(3)
    expect(calculateAverage(arr1.slice(2), undefined, 1)).to.be.lt(3)
    expect(calculateAverage(arr2, undefined, 1)).to.eq(.75)
  })
})
