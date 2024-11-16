// Write a function, makeChange, that returns an integer that represents
// the least number of coins that add up to an amount where the amount
// is always divisible by 5
// coin values: 25, 10, 5
// input amount: 40 => 3 coins (1 of 25, 1 of 10 and 1 of 5)

export function makeChange(coins: number[], amount: number) {
  coins.sort((a: number, b: number) => b - a)
  let totalCoins: number = 0
  let i: number = 0
  while (amount !== 0) {
    if (coins[i] <= amount) {
      totalCoins++
      amount -= coins[i]
    } else {
      i++
    }
  }
  return totalCoins
}
