import { expect, test } from 'bun:test'
import { makeChange } from '@algorithms/greedy-algorithm.ts'

test('greedy-algorithm', () => {
  expect(makeChange([5, 25, 10], 40)).toStrictEqual(3)
  expect(makeChange([5, 25, 10], 50)).toStrictEqual(2)
  expect(makeChange([5, 25, 10], 65)).toStrictEqual(4)
  expect(makeChange([5, 25, 10], 35)).toStrictEqual(2)
  expect(makeChange([1, 6, 10], 12)).toStrictEqual(3)
})
