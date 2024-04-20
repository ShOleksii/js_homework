// ДЗ 1

// Написати свою реалізацію функції isNaN. 

// Умови виконання ДЗ

// Не використовувати функції або інші матеріали які ми не вивчали
// Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки
// Не викорисутовувати isNaN/ Number.isNaN
// Будь ласка, надайте наступні дані для перевірки вашої роботи:

// Створіть гілку js_homework4.
// Додати туди ваше домашне завдання
// Вислати вашу гілку


// Метод isNaN (is Not-a-Number) в JavaScript використовується для перевірки, чи є передане значення нечисловим (NaN) типом.
// Цей метод повертає true, якщо значення є NaN, і false, якщо значення може бути конвертовано в число.

function myIsNaN(value) {
  return Number(value) !== Number(value);
}

console.log(myIsNaN(NaN)); // true
console.log(myIsNaN(undefined)); // true
console.log(myIsNaN({})); // true

console.log(myIsNaN(true)); // false
console.log(myIsNaN(null)); // false
console.log(myIsNaN(37)); // false

// Strings
console.log(myIsNaN("37")); // false
console.log(myIsNaN("37.37")); // false
console.log(myIsNaN("37,5")); // true
console.log(myIsNaN("123ABC")); // true
console.log(myIsNaN("")); // false
console.log(myIsNaN(" ")); // false

// Dates
console.log(myIsNaN(new Date())); // false
console.log(myIsNaN(new Date().toString())); // true

// Arrays
console.log(myIsNaN([])); // false
console.log(myIsNaN([1])); // false
console.log(myIsNaN([1, 2])); // true







// ДЗ 2

// Необхідно написати власну реалізацію функцій padEnd та padStart, але у вас повинна бути одна функція pad(‘qwerty’, ‘+’, true), яка приймає чотири аргументи:

// рядок, до якого буде додаватися символ.
// символ, який буде додаватися.
// Скільки додавати символів
// булеве значення, яке вказує, куди додавати символ. Якщо true, то до початку, якщо false, то в кінець.
// Останній аргумент повинен працювати як і в оригінальній функції, а саме якщо наш рядок з 5 символів, а ви вказуєте знаачення 6, то додаєте тільки один символ
// Умови виконання ДЗ

// Функція повина повертати новий рядок
// Не використовувати функції або інші матеріали які ми не вивчали
// Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки
// Будь ласка, надайте наступні дані для перевірки вашої роботи:

// Створіть гілку js_homework4.
// Додати туди ваше домашне завдання
// Вислати вашу гілку


// //наче так
function pad(string, symbolPlus, numSym, boolSym) {
  const symbol = symbolPlus.repeat(1);
  const diff = numSym - string.length;
  if (diff <= 0 || numSym <= string.length) {
      return string;
  }
  const repeatedSymbol = symbol.repeat(diff);
  if (boolSym) {
      return repeatedSymbol + string;
  } else {
      return string + repeatedSymbol;
  }
}

console.log(pad('qwerty', '+', 6, true));
console.log(pad('kek', '+', 8, false));





// ﻿ДЗ3

// Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні від 100 до 1000 включно. Порахувати кількість парних та непарних серед них. Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? Приклад функції checkProbabilityTheory(count). Парметр count буде вказувати скільки разів буде генеруватися випадкове число.

// Умови виконання ДЗ

// Функція виводить інформацію
// Кількість згенерованих чисел: кількість чисел
// Парних чисел: кількість парних чисел
// Не парних чисел: кількість не парних чисел
// Відсоток парних до не парних:


function checkProbabilityTheory(count) {
  let evenCount = 0;
  let oddCount = 0;

  for (let i = 0; i < count; i++) {
      const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
      if (randomNumber % 2 === 0) {
          evenCount++;
      } else {
          oddCount++;
      }
  }
  const percentageEven = (evenCount / count) * 100;
  const percentageOdd = (oddCount / count) * 100;

  console.log("Кількість згенерованих чисел:", count);
  console.log("Парних чисел:", evenCount);
  console.log("Непарних чисел:", oddCount);
  console.log("Відсоток парних до не парних:", percentageEven.toFixed(2) + "% : " + percentageOdd.toFixed(2) + "%");
}
checkProbabilityTheory(2);
