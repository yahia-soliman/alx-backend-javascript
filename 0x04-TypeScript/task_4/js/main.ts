interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Ali',
  lastName: 'Alocka',
  age: 22,
  location: 'Attaba',
};

const student2: Student = {
  firstName: 'Ashraf',
  lastName: 'Kohka',
  age: 20,
  location: 'Mahalla',
};

const studentsList: Student[] = [student1, student2];

console.table(studentsList, ['firstName', 'location']);
