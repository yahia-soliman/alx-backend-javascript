const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
    if (err) throw new Error('Cannot load the database');
    const lines = data.split('\n');
    const fieldIdx = lines[0].split(',').findIndex((o) => o === 'field');
    const studentsByField = {};
    console.log(`Number of students: ${lines.length - 1}`);
    for (let i = 1; i < lines.length; i += 1) {
      const student = lines[i].split(',');
      const field = student[fieldIdx];
      if (!studentsByField[field]) studentsByField[field] = [];
      studentsByField[field].push(student[0]);
    }
    for (const field in studentsByField) {
      if (studentsByField[field]) {
        const list = studentsByField[field];
        console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      }
    }
  });
}
module.exports = countStudents;