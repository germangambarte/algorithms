// Task: Transform this simple sorting algorithm into a unique sort.
// It should not return any duplicate values in the sorted array.

export const uniqSort = function (arr: number[]) {
  const cache: Record<number, boolean> = {};
  const result: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (!cache[arr[i]]) {
      cache[arr[i]] = true;
      result[i] = arr[i];
    }
  }

  return result.sort((a, b) => a - b);
};
