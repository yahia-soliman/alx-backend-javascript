export default function iterateThroughObject(reportWithIterator) {
  let repr = '';
  for (const item of reportWithIterator) {
    repr += `${item} | `;
  }
  return repr.slice(0, repr.length - 3);
}
