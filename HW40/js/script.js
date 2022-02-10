function addCacheAbility(func) {
  let cache = new Map();

  return function () {
    const argsKey = [...arguments].toString();

    if (cache.size === 10) {
      cache.delete(Array.from(cache.keys())[0]);
    }

    if (cache.has(argsKey)) {
      return cache.get(argsKey);
    } else {
      const result = func(...arguments);
      cache.set(argsKey, result);
      return result;
    }
  };
}
