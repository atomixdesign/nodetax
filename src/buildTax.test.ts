import { buildTax } from './buildTax'

test('it can build tax rates', () => {
  expect(buildTax(100)).toStrictEqual({
    exclusive: { price: 100, tax: 10, total: 110 },
    inclusive: { price: 90.91, tax: 9.09, total: 100 },
  })
})

