import { expect, test } from 'bun:test'
import { memoFactory } from '@algorithms/generic-memoization.ts'

test('generic-memoization', () => {
  const memoClosure = memoFactory((n: number) => n * 10)
  expect(memoClosure(9)).toBe('calculated')
  expect(memoClosure(9)).toBe('cached')
})
