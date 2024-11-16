import { expect, test } from 'bun:test'
import { mergeSort } from '@algorithms/merge-sort.ts'

test('merge-sort', () => {
  expect(mergeSort([5, 2, 9, 1])).toStrictEqual([1, 2, 5, 9])
})
