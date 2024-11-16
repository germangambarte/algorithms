import { expect, test } from 'bun:test'
import { linearSearch } from '@algorithms/linear-search.ts'

test('linear-search', () => {
  expect(linearSearch([2, 6, 7, 90, 120], 90)).toBe(3)
  expect(linearSearch([1, 5, 27, 54, 87], 15)).toBe(-1)
})
