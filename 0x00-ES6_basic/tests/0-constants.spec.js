import { taskFirst, taskNext } from '../0-constants.js';

it('const and let', () => {
  const result = 'I prefer const when I can. But sometimes let is okay';
  expect(`${taskFirst()} ${taskNext()}`).toMatch(result);
});
