// Подключаем модуль readline для работы с вводом/выводом
const readline = require('readline');

// Создаем интерфейс для чтения из стандартного ввода и записи в стандартный вывод
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Функция для вычисления параметров прямоугольника
function calculateRectangleParameters(length, width) {
  const perimeter = 2 * (length + width);
  const area = length * width;
  // Вычисляем длину диагонали по теореме Пифагора
  const diagonal = Math.sqrt(length ** 2 + width ** 2);
  return { perimeter, area, diagonal };
}


rl.question('Введите длину прямоугольника: ', (length) => {
  rl.question('Введите ширину прямоугольника: ', (width) => {
    // Вычисляем параметры прямоугольника, преобразуя введенные значения в числа с помощью parseFloat
    const rectangle = calculateRectangleParameters(parseFloat(length), parseFloat(width));
    console.log(`Периметр прямоугольника: ${rectangle.perimeter}`);
    console.log(`Площадь прямоугольника: ${rectangle.area}`);
    console.log(`Длина диагонали прямоугольника: ${rectangle.diagonal}`);
    // Закрываем интерфейс ввода-вывода
    rl.close();
  });
});
