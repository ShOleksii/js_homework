// Напишіть програму яка буде приймати два значення, перше це одиниця вимірювання (кілометри, години та кілограми), друге значення це кількість, а потім переводити ці значення:

// Кілометри в метри
// години в хвилини
// Кілограми в грами
// Зробити вивід отриманої інформації у вигляді - 10 км це 10000 м. 1 г це 60хв. 1 кг. це 1000 грм.

// Умови виконання ДЗ

// В задачі не обовязково викорисутовувати prompt, просто запишіть значення в зміні
// Обовязково при написані завдання використовуйте switch
// Продумати варінат якщо буде введена якась інша одиниця виміру
// Мудрувати та створювати валідацію не потрібно
// Будь ласка, надайте наступні дані для перевірки вашої роботи:

// Додати ДЗ у гілкуjs_homework2
// Вислати вашу гілку



var prompt = require('prompt');

prompt.start();
prompt.get(["Введіть одиницю вимірювання, як в прикладі (км, год, кг):", "Значення"], function (err, result) {
   
    var type = result["Введіть одиницю вимірювання, як в прикладі (км, год, кг):"];
    var value = parseFloat(result["Значення"]);

    // Перевірка, щоб ввели норм данні
    if (isNaN(value) || value < 0 ) {
        console.log("Некоректні вхідні дані.");
    } else {
        
        switch (type) {
            case 'км':
                console.log(`${value} км це ${value * 1000} м.`);
                break;
            case 'год':
                console.log(`${value} год це ${value * 60} хв.`);
                break;
            case 'кг':
                console.log(`${value} кг це ${value * 1000} г.`);
                break;
            default:
                console.log("Невідома одиниця вимірювання.");
                break;
        }
    }
})
