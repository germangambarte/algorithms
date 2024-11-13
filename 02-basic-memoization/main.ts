// Task 1: Write a function, times10, that takes an argument (n) and multiplies
// n * 10

const times10 = (n: number) => n * 10;

// Task 2: Use an object to cache the results of your times10 function.

// protip 1: Create a function that checks if the value for n has been
// calculated before

// protip 2: If the value for n has not been calculated, caculate and then save
// the result in the cache object
//
export const cache: Record<number, number> = {};

export const memo = (n: number) => {
  if (n in cache) {
    return "cached";
  } else {
    cache[n] = times10(n);
    return "calculated";
  }
};
