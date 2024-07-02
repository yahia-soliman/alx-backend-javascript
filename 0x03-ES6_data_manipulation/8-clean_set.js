export default function cleanSet(set, startString) {
  if (!startString) return '';
  const res = [];
  set.forEach((s) => {
    if (s.startsWith(startString)) {
      res.push(s.slice(startString.length));
    }
  });
  return res.join('-');
}
