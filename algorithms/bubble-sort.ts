// Task 1: Implement bubble sort

function swap(arr: number[], i: number, j: number) {
  let tmp: number = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

export function bubbleSort(list: number[]) {
  for (let j = list.length; j > 0; j--) {
    let i = 0
    while (i < j) {
      if (list[i] > list[i + 1]) {
        swap(list, i, i + 1)
      }
      i++
    }
  }
  return list
}
