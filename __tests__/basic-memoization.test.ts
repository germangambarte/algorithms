import { expect, test } from 'bun:test'
import { memo } from '@algorithms/basic-memoization.ts'

test('basic-memoization', () => {
  expect(memo(9)).toBe('calculated')
  expect(memo(9)).toBe('cached')
})
