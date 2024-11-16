// Task 1: Implement merge sort
// pro-tip: Split the array into halves and merge them recursively
// pro-tip: return once we hit an array with a single item. That
// is a sorted array of size 1
// pro-tip: compare the arrays item by item and return the
// concatenated result

// function merge(lSide: number[], rSide: number[]): number[] {
//   let result: number[] = []
//   let i = 0
//   let j = 0
//   while (i < lSide.length && j < rSide.length) {
//     if (lSide[i] < rSide[j]) {
//       result.push(lSide[i])
//       i++;
//     } else {
//       result.push(rSide[j])
//       j++;
//     }
//   }
//   return result.concat(lSide.slice(i)).concat(rSide.slice(j));
// }
//
// export function mergeSort(list: number[]) {
//   if (list.length < 2) {
//     return list
//   }
//   let mid = Math.floor(list.length / 2)
//   const lSide = list.slice(0, mid)
//   const rSide = list.slice(mid)
//   const lSideSorted: number[] = mergeSort(lSide)
//   const rSideSorted: number[] = mergeSort(rSide)
//   return merge(lSideSorted, rSideSorted)
// }

function merge(leftSide: number[], rightSide: number[]) {
  const result: number[] = []

  let i = 0
  let j = 0
  while (i < leftSide.length && j < rightSide.length) {
    if (leftSide[i] < rightSide[j]) {
      result.push(leftSide[i])
      i++
    } else {
      result.push(rightSide[j])
      j++
    }
  }

  return result.concat(leftSide.slice(i)).concat(rightSide.slice(j))
}

export function mergeSort(arr: number[]): number[] {
  if (arr.length === 1) {
    return arr
  }
  const middle = Math.floor(arr.length / 2)
  const leftSide = arr.slice(0, middle)
  const rightSide = arr.slice(middle)
  const sortedLeftSide = mergeSort(leftSide)
  const sortedRightSide = mergeSort(rightSide)
  return merge(sortedLeftSide, sortedRightSide)
}

mergeSort([2, 1, 9, 5])
