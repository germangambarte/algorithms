import { expect, test } from 'bun:test'
import { joinElements } from '@algorithms/recursive-to-loop.ts'

test('recursive-to-loop', () => {
  expect(joinElements(['s', 'cr', 't cod'], 'e')).toBe('secret code')
  expect(joinElements(['n', 'r', 'nj'], 'a')).toBe('naranja')
})
