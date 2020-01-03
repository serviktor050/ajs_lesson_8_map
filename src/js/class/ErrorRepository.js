export default class ErrorRepository {
  constructor() {
    this.error = new Map();
    this.error.set(1, 'Ошибка 1');
    this.error.set(2, 'Ошибка 2');
    this.error.set(3, 'ошибка 3');
  }

  translate(code) {
    if (!this.error.has(code)) {
      throw new Error('Unknown error');
    } else {
      return this.error.get(code);
    }
  }
}
