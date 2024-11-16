// Task 1: Implement linear search

export function linearSearch(list: number[], item: number): number {
  let index: number = -1
  list.forEach((value, i) => (value === item ? (index = i) : null))
  return index
}
