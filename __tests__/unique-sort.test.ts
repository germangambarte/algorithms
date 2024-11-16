import { expect, test } from 'bun:test'
import { uniqueSort } from '@algorithms/unique-sort.ts'

test('unique-sort', () => {
  expect(uniqueSort([1, 5, 2, 1])).toStrictEqual([1, 2, 5])
  expect(uniqueSort([4, 2, 2, 3, 2, 2, 2])).toStrictEqual([2, 3, 4])
})
