const { add, multiply, subtract, divide } = require('./calculator.js')

// test away!

test('should add two numbers', () => {
  // setup - Arrange
  const expected = 4
  // execute code under test - Act
  const actual = add(2, 2)
  // assert result - Assert
  expect(actual).toBe(expected)
})

test('should add two numbers', () => {
  expect(add(1, 1)).toEqual(2)
  expect(add(2, 3)).toEqual(5)
})

// --------
describe('addition', () => {
  it('should add two numbers using it()', () => {
    // setup
    const expected = 4
    // execute code under test
    const actual = add(2, 2)
    // assert result
    expect(actual).toBe(expected)
  })

  it('should concat two strings', () => {
    const expected = 'catdog'
    const actual = add('cat', 'dog')

    expect(actual).toBe(expected)
  })

  // it('should error passing only one value', () => {
  //   // error with matchers
  //   expect(() => {
  //     add(1)
  //   }).toThrow()
  // })

  it('add a collection of values', () => {
    const expected = 500
    const actual = add(400, 50, 25, 25)

    expect(actual).toBe(expected)
  })

  it('return 0 when called with no values', () => {
    expect(add()).toBe(0)
  })
})

describe('multiplication', () => {
  it('should multiply 2 * 10 to get 20', () => {
    const expected = 20
    const actual = multiply(2, 10)

    expect(actual).toBe(expected)
  })
})

describe('subtraction', () => {
  it('should subtract 2 - 10 to get -8', () => {
    const expected = -8
    const actual = subtract(2, 10)

    expect(actual).toBe(expected)
  })
})

describe('division', () => {
  it('should divide 10 / 2 to get 5', () => {
    const expected = 5
    const actual = divide(10, 2)

    expect(actual).toBe(expected)
  })
})
