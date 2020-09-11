import { TaxRate } from './types'

export const buildTax = (input: number): TaxRate => {
  const taxInclusive = Number((input / 11).toFixed(2))
  const taxExclusive = Number((input * 0.1).toFixed(2))

  return {
    exclusive: {
      price: input,
      tax: taxExclusive,
      total: input + taxExclusive,
    },
    inclusive: {
      price: input - taxInclusive,
      tax: taxInclusive,
      total: input,
    },
  }
}
