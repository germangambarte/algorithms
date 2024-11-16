import { expect, test } from 'bun:test'
import { memoFactory } from '@algorithms/basic-memoization-closure.ts'

test('basic-memoization-closure', () => {
  const memoClosure = memoFactory(10)
  expect(memoClosure(9)).toBe('calculated')
  expect(memoClosure(9)).toBe('cached')
})
