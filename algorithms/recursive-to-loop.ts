// Task: rewrite this function so that ir uses a loop rather than recursion

// function joinElements(arr: string[], joinString: string) {
//   function recurse(index: number, resultSoFar: string) {
//     resultSoFar += arr[index];
//     if (index === arr.length - 1) {
//       return resultSoFar;
//     } else {
//       return recurse(index + 1, resultSoFar + joinString);
//     }
//   }
// }

export function joinElements(arr: string[], joinString: string) {
  let resultSoFar = ''
  for (let i = 0; i < arr.length; i++) {
    resultSoFar += arr[i] + joinString
  }
  return resultSoFar
}
