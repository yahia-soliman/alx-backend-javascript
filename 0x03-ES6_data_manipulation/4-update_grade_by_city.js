export default function getStudentsByLocation(students, city, newGrades) {
  if (!Array.isArray(students)) return [];
  const cityStudents = students.filter((student) => student.location === city);
  return cityStudents.map((one) => {
    const { grade } = newGrades.find(({ studentId }) => studentId === one.id);
    return { ...one, grade: grade || 'N/A' };
  });
}
