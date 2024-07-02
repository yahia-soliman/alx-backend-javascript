export default function getListStudentIds(students) {
  if (!Array.isArray(students)) return [];
  return students.reduce((prev, id) => id + prev, 0);
}
