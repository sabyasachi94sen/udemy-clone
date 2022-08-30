import { expect, test } from 'vitest'

import { render, screen, within } from '@/tests/utils/test-utils'
import { Test } from './TestComp'

test('home test 1', () => {
  render(<Test />)
  expect(screen.getByRole('heading', { level: 1, name: /Test/i })).toBeDefined()
})


// vitest test to check 1 is equal to 1
test('home test 2', () => {
  expect(1).toBe(1);
})
