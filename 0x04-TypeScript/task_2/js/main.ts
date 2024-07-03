interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string { return 'Working from home'; }
  getCoffeeBreak(): string { return 'Getting a coffee break'; }
  getToWork(): string { return 'Getting a coffee break'; }
  workDirectorTasks(): string { return 'Getting to director tasks'; }
}

class Teacher implements TeacherInterface {
  workFromHome(): string { return 'Cannot work from home'; }
  getCoffeeBreak(): string { return 'Cannot have a break'; }
  workTeacherTasks(): string { return 'Getting to work'; }
}

export function createEmployee(salary: number | string): Teacher | Director {
  return salary < 500 ? new Teacher() : new Director();
}

export function isDirector(employee: Director | Teacher): boolean {
  return employee instanceof Director;
}

export function executeWork(employee: Director | Teacher): string {
  if (employee instanceof Director) return employee.workDirectorTasks();
  if (employee instanceof Teacher) return employee.workTeacherTasks();
}

type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects): string {
  return `Teaching ${todayClass}`;
}
