// HomeWork4
/*Необхідно написати програму яка буде виводити інформацію за умовами при яких число виводитиметься з правильним словом:
"рік", "роки" або "років". Тобто. "29 років" чи "4 роки".

Умови виконання ДЗ

Рік отримувати через prompt()
Зробити перевірку що користувачь ввів число та це число не є відємним
Не використовувати функції або інші матеріали які ми не вивчали
Намагайтесь робити ДЗ самостійно та не дивитися будьякі підказки.
Будь ласка, надайте наступні дані для перевірки вашої роботи:

Створіть гілку js_homework2.
Додати туди ваше домашне завдання
Вислати вашу гілку*/



var prompt = require('prompt');
prompt.start();
prompt.get(['age'], function (err, result){
// Отримання року від користувача
// замість promt можна було б виокристати наприклад readline https://www.npmjs.com/package/readline

// Перевірка, що введене значення є числом та не є від'ємним
if (!isNaN(result.age) && result.age >= 0) {
   //!isNaN - має перевірити чи вік не відємний, і число  можна було зробити перевірку так !isNaN(year) && year > 0
    var res;
    if (result.age === 1) {
      res = "рік";
      // провіряється чи 1, якщо ні, ідем далі
    } else if (result.age > 1 && result.age < 5) {
      res = "роки";
      //провіряємо, щоб більше одного і менше п'яти, якщо ні ідемо далі
    } else {
      res = "років";
      // все інше має бути років
    }
    console.log(`Ваш вік: ${result.age} ${res}`);
    //тут  виводити змінні які поппадають в перевірку
} else {
    console.log("Будь ласка, введіть число і не від'ємне.");
}}
);



замість promt можна було б виокристати наприклад readline

https://www.npmjs.com/package/readline