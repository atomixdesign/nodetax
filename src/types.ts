export type TaxRate = {
  exclusive: {
    total: number,
    tax: number,
    price: number,
  },
  inclusive: {
    total: number,
    tax: number,
    price: number,
  },
}

export type Prices = {
  total: TaxRate
  subtotal: TaxRate
  shipping: TaxRate
  adjustments: TaxRate
}

export type FullGenerateInput = {
  total: number
  subtotal: number
  shipping: number
  adjustments: number
}

export type ShortGenerateInput = number

export type PartialGenerateInput = Omit<Partial<FullGenerateInput>, 'total'>

export type GenerateInput = FullGenerateInput | ShortGenerateInput | PartialGenerateInput
