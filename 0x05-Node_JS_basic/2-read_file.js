const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
    if (err) throw new Error('Cannot load the database');
    const lines = data.split('\n');
    const fieldIdx = lines[0].split(',').findIndex((o) => o === 'field');
    const studentsByField = {};
    let n = 0;
    for (let i = 1; i < lines.length; i += 1) {
      const student = lines[i].split(',');
      const field = student[fieldIdx];
      if (field) {
        if (!studentsByField[field]) studentsByField[field] = [];
        studentsByField[field].push(student[0]);
        n += 1;
      }
    }
    console.log(`Number of students: ${n}`);
    for (const field in studentsByField) {
      if (studentsByField[field]) {
        const list = studentsByField[field];
        console.log(`Number of students in ${field}: 6. List: ${list.join(', ')}`);
      }
    }
  });
}
module.exports = countStudents;
