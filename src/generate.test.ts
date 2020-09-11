import { generate } from './generate'

describe('generate input types', () => {
  test('it can generate from a short input', () => {
    expect(generate(100)).toStrictEqual({
      subtotal: {
        exclusive: { price: 100, tax: 10, total: 110 },
        inclusive: { price: 90.91, tax: 9.09, total: 100 },
      },
      total: {
        exclusive: { price: 100, tax: 10, total: 110 },
        inclusive: { price: 90.91, tax: 9.09, total: 100 },
      },
      shipping: {
        exclusive: { price: 0, tax: 0, total: 0 },
        inclusive: { price: 0, tax: 0, total: 0 },
      },
      adjustments: {
        exclusive: { price: 0, tax: 0, total: 0 },
        inclusive: { price: 0, tax: 0, total: 0 },
      },
    })
  })

  test('it can generate from a partial input', () => {
    expect(generate({
      subtotal: 100,
      shipping: 10,
      adjustments: 15,
    })).toStrictEqual({
      subtotal: {
        exclusive: { price: 100, tax: 10, total: 110 },
        inclusive: { price: 90.91, tax: 9.09, total: 100 },
      },
      total: {
        exclusive: { price: 125, tax: 12.5, total: 137.5 },
        inclusive: { price: 113.64, tax: 11.36, total: 125 },
      },
      shipping: {
        exclusive: { price: 10, tax: 1, total: 11 },
        inclusive: { price: 9.09, tax: 0.91, total: 10 },
      },
      adjustments: {
        exclusive: { price: 15, tax: 1.5, total: 16.5 },
        inclusive: { price: 13.64, tax: 1.36, total: 15 },
      },
    })
  })

  test('it can generate from a full input', () => {
    expect(generate({
      subtotal: 100,
      shipping: 10,
      adjustments: 15,
      total: 125,
    })).toStrictEqual({
      subtotal: {
        exclusive: { price: 100, tax: 10, total: 110 },
        inclusive: { price: 90.91, tax: 9.09, total: 100 },
      },
      total: {
        exclusive: { price: 125, tax: 12.5, total: 137.5 },
        inclusive: { price: 113.64, tax: 11.36, total: 125 },
      },
      shipping: {
        exclusive: { price: 10, tax: 1, total: 11 },
        inclusive: { price: 9.09, tax: 0.91, total: 10 },
      },
      adjustments: {
        exclusive: { price: 15, tax: 1.5, total: 16.5 },
        inclusive: { price: 13.64, tax: 1.36, total: 15 },
      },
    })
  })
})
