const express = require('express');
const fs = require('fs');

const app = express();

function displayStudents(data, res) {
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
  if (n) res.write(`\nNumber of students: ${n}`);
  for (const field in studentsByField) {
    if (studentsByField[field]) {
      const list = studentsByField[field];
      res.write(`\nNumber of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
    }
  }
}

async function writeStudents(dbpath, res) {
  res.write('This is the list of our students');
  return new Promise((resolve) => {
    fs.readFile(dbpath, { encoding: 'utf8' }, (err, data) => {
      if (err) resolve();
      else resolve(displayStudents(data, res));
    });
  });
}

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', async (_, res) => {
  await writeStudents(process.argv[2] || '', res);
  res.end();
});

app.listen(1245);

module.exports = app;
