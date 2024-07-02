export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const count = weakMap.get(endpoint) || 0;
  if (count > 3) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, count + 1);
}
