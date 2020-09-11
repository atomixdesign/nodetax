import { FullGenerateInput, GenerateInput, PartialGenerateInput, Prices, ShortGenerateInput } from './types'
import { buildTax } from './buildTax'

export const generate = (input: GenerateInput): Prices => {
  if (typeof input === 'number') {
    return generateFromShortInput(input)
  }

  if ('total' in input) {
    return generateFromFullInput(input)
  }

  return generateFromPartialInput(input)
}

export default generate

export const generateFromShortInput = (input: ShortGenerateInput): Prices => {
  return {
    subtotal: buildTax(input),
    shipping: buildTax(0),
    adjustments: buildTax(0),
    total: buildTax(input),
  }
}

export const generateFromPartialInput = (input: PartialGenerateInput): Prices => {
  const partialInput: Omit<FullGenerateInput, 'total'> = {
    subtotal: input.subtotal || 0,
    shipping: input.shipping || 0,
    adjustments: input.adjustments || 0,
  }

  const fullInput: FullGenerateInput = {
    ...partialInput,
    total: partialInput.subtotal + partialInput.adjustments + partialInput.shipping
  }

  return generateFromFullInput(fullInput)
}

export const generateFromFullInput = (input: FullGenerateInput): Prices => {
  return {
    subtotal: buildTax(input.subtotal),
    shipping: buildTax(input.shipping),
    adjustments: buildTax(input.adjustments),
    total: buildTax(input.total),
  }
}
