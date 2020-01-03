import ErrorRepository from '../js/class/ErrorRepository.js';

test('Успешно', () => {
  const received = new ErrorRepository();
  expect(received.translate(1)).toBe('Ошибка 1');
});

test('Неизвестная ошибка', () => {
  const received = new ErrorRepository();
  expect(() => received.translate(5)).toThrow('Unknown error');
});
