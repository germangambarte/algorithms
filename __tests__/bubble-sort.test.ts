import { expect, test } from 'bun:test'
import { bubbleSort } from '@algorithms/bubble-sort.ts'

test('bubble-sort', () => {
  expect(bubbleSort([5, 2, 9, 1])).toStrictEqual([1, 2, 5, 9])
})
