# Coin and Coins

A `Coin` represents a single coin, which is a pair consisting of a denomination and amount. `Coins` represents a collection of `Coin` objects, that many operators

```ts
import { Coin, Coins } from '@terra-money/terra.js';

const c = new Coin('uluna', 1500000); // 1.5 LUNA
const c2 = new Coin('uluna', 3000000); // 3 LUNA
c.add(c2); // 4.5 LUNA

const cs = new Coins([c, c2]);
const cs2 = new Coins({ uluna: 12002, ukrw: 12399 });
cs2.map(x => console.log(`${x.denom}: ${x.amount}`));
```

Coin / Coins input with decimal input will automatically be converted to a decimal Coin.

```ts
const c = new Coin('uluna', 123.3); // a DecCoin
const d = new Coin('uluna', '123.3'); // a DecCoin
```

Although it is convenient to represent the numbers through JavaScript's native `Number` format, you should refrain from doing so.
