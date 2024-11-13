// Task: Clean up your global scope by moving your cache inside your function
// protip: Use a closure to return a function that you can call later.

export const memoFactory = (m: number) => {
  const cache: Record<number, number> = {};
  return (n: number) => {
    if (n in cache) {
      return "cached";
    } else {
      cache[n] = n * m;
      return "calculated";
    }
  };
};
