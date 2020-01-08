export default (...funcs) => (component) => funcs.reduceRight((acc, fn) => fn(acc), component);
