export default function getListStudentIds(students) {
  return students.reduce((prev, { id }) => id + prev, 0);
}
