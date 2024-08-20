const fs = require('fs');

function displayStudents(data) {
  const lines = data.split('\n');
  const fieldIdx = lines[0].split(',').findIndex((o) => o === 'field');
  const studentsByField = {};
  let content = '';
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
  if (n) content = `Number of students: ${n}\n`;
  for (const field in studentsByField) {
    if (studentsByField[field]) {
      const list = studentsByField[field];
      content += `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`;
    }
  }
  content = content.slice(0, content.length - 1);
  console.log(content);
  return content;
}

async function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' }, (err, data) => {
      if (err) reject(Error('Cannot load the database'));
      else resolve(displayStudents(data));
    });
  });
}

module.exports = countStudents;
