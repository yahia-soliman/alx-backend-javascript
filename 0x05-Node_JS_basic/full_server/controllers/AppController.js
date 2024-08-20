export default class AppController {
  static getHomepage(_, response) {
    response.send('Hello Holberton School!');
  }
}
