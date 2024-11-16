import { expect, test } from 'bun:test'
import { factorial } from '@algorithms/recursive-factorial-memoize.ts'

test('recursive-factorial-memoize', () => {
  expect(factorial(5)).toBe(120)
  expect(factorial(6)).toBe(720)
})
