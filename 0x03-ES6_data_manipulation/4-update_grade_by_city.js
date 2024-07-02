export default function getStudentsByLocation(students, city, newGrades) {
  if (!Array.isArray(students)) return [];
  const cityStudents = students.filter((student) => student.location === city);
  return cityStudents.map((one) => {
    const student = newGrades.find(({ studentId }) => studentId === one.id);
    const grade = student ? student.grade : 'N/A';
    return { ...one, grade };
  });
}
