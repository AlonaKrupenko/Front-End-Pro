function bindSelf(fn, that, ...args) {
  return function (...oterArgs) {
    return fn.apply(that, [...args, ...oterArgs]);
  };
}
