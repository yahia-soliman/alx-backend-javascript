export default function createIteratorObject(report) {
  const result = [];
  for (const arr of Object.values(report.allEmployees)) {
    result.push(...arr);
  }
  return result;
}
