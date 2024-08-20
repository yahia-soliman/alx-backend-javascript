import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(_, response) {
    readDatabase(process.argv[2] || '').then((school) => {
      response.write('This is the list of our students');
      for (const major of school) {
        response.write(`\nNumber of students in ${major}: ${school[major].length}. List: ${school[major].join(', ')}`);
      }
      response.end();
    }).catch(() => response.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const allowed = ['CS', 'SWE'];

    if (!allowed.includes(major)) response.status(500).send('Major parameter must be CS or SWE');

    readDatabase(process.argv[2] || '').then((school) => {
      response.send(`List: ${school[major].join(', ')}`);
    }).catch(() => response.status(500).send('Cannot load the database'));
  }
}
