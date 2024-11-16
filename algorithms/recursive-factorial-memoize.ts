// Task 1: Without peeking, write your own recursive factorial method
// Task 2: Use your memo function from the previous exercise to memoize your factorial method

const memoize = (fn: (int: number) => number) => {
  const cache: Record<number, number> = {}
  return (num: number) => {
    if (cache[num]) {
      return cache[num]
    } else {
      cache[num] = fn(num)
      return cache[num]
    }
  }
}

export const factorial = memoize((num: number): number => {
  if (num === 0) {
    return 1
  } else {
    return num * factorial(num - 1)
  }
})
