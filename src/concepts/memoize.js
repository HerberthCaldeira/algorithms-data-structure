const memorize = (fn) => {
  const cache = {}; //lexical scope
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log(cache);
      console.log("cache hit");
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
};

//First class function && Higher order function
let addone = memoize((x) => 1 + x);

console.log(addone(15));
console.log(addone(15));
