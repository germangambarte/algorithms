// Task: Make your memo function generic and accept the times10 function
// as a callback rather than defininf the n * 10 logic inside the if/else or
// pulling it in from the global scope.
// protip: Take adventage of the fact that paramenters are saved in the closure
// as well, just like the cache from the previous example

export const memoFactory = (operation: (n: number) => number) => {
  const cache: Record<number, number> = {};
  return (n: number) => {
    if (n in cache) {
      return "cached";
    } else {
      cache[n] = operation(n);
      return "calculated";
    }
  };
};
