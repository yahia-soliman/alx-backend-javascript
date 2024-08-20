import { readFile } from 'fs';

function parseData(data) {
  const lines = data.split('\n');
  const fieldIdx = lines[0].split(',').findIndex((o) => o === 'field');
  const studentsByField = {};
  for (let i = 1; i < lines.length; i += 1) {
    const student = lines[i].split(',');
    const field = student[fieldIdx];
    if (field) {
      if (!studentsByField[field]) studentsByField[field] = [];
      studentsByField[field].push(student[0]);
    }
  }
  return studentsByField;
}

export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    readFile(path, { encoding: 'utf8' }, (err, data) => {
      if (err) reject(err);
      else resolve(parseData(data));
    });
  });
}
