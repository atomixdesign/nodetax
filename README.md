# nodetax

Nodetax is a helper library for calculating the costs of tax associated with payments and orders in GST

## Usage

The default export will generate an output object with 4 keys: `subtotal`, `shipping`, `adjustments` and `total`.
Each of these keys will include the `price`, `tax`, and `total` for both tax inclusive, and tax exclusive rate.

There are 3 ways to use nodetax for order generation

### 1. Full

To calculate the taxes for a full order, you can specify all thes vaules and get the appropriate tax results back:

```ts
import generate from '@atomixdesign/nodetax'

const totals = generate({ subtotal: 100, shipping: 10, adjustments: 15, total: 125 })

// {
//   subtotal: {
//     exclusive: { price: 100, tax: 10, total: 110 },
//     inclusive: { price: 90.91, tax: 9.09, total: 100 },
//   },
//   shipping: {
//     exclusive: { price: 10, tax: 1, total: 11 },
//     inclusive: { price: 9.09, tax: 0.91, total: 10 },
//   },
//   adjustments: {
//     exclusive: { price: 15, tax: 1.5, total: 16.5 },
//     inclusive: { price: 13.64, tax: 1.36, total: 15 },
//   },
//   total: {
//     exclusive: { price: 125, tax: 12.5, total: 137.5 },
//     inclusive: { price: 113.64, tax: 11.36, total: 125 },
//   },
// }
```

### 2. Partial

Alternatively, you can omit the total and any number of the inputs and get a calculated result (including the total):

```ts
import generate from '@atomixdesign/nodetax'

const totals = generate({ subtotal: 100, shipping: 25 })

// {
//   subtotal: {
//     exclusive: { price: 100, tax: 10, total: 110 },
//     inclusive: { price: 90.91, tax: 9.09, total: 100 },
//   },
//   shipping: {
//     exclusive: { price: 25, tax: 2.5, total: 27.5 },
//     inclusive: { price: 22.73, tax: 2.27, total: 25 },
//   },
//   adjustments: {
//     exclusive: { price: 0, tax: 0, total: 0 },
//     inclusive: { price: 0, tax: 0, total: 0 },
//   },
//   total: {
//     exclusive: { price: 125, tax: 12.5, total: 137.5 },
//     inclusive: { price: 113.64, tax: 11.36, total: 125 },
//   },
// }
```

### 3. Short

Finally, you can simply input a number and it will generate an output as if you'd entered a partial input of: `{ subtotal: N, shipping: 0, adjustments: 0 }`:

```ts
import generate from '@atomixdesign/nodetax'

const totals = generate(100)

// {
//   subtotal: {
//     exclusive: { price: 100, tax: 10, total: 110 },
//     inclusive: { price: 90.91, tax: 9.09, total: 100 },
//   },
//   shipping: {
//     exclusive: { price: 0, tax: 0, total: 0 },
//     inclusive: { price: 0, tax: 0, total: 0 },
//   },
//   adjustments: {
//     exclusive: { price: 0, tax: 0, total: 0 },
//     inclusive: { price: 0, tax: 0, total: 0 },
//   },
//   total: {
//     exclusive: { price: 100, tax: 10, total: 110 },
//     inclusive: { price: 90.91, tax: 9.09, total: 100 },
//   },
// }
```

## Alternate usage

If you simply wish to calculate the amount of tax for a single value, you may instead use the exported `buildTax` function:

```ts
import { buildTax } from '@atomixdesign/nodetax'

const tax = buildTax(100)

// {
//   exclusive: { price: 100, tax: 10, total: 110 },
//   inclusive: { price: 90.91, tax: 9.09, total: 100 },
// }
```
