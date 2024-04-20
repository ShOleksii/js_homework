// ДЗ1

// Напишіть регулярний вираз, який допоможе знайти принаймні шість символів і не містити літери А (великої або малої)

// ^(?!.*[Aa]).{6,}$ 


// Дз2

// У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.
// За допомогою регулярного виразу створіть масив з адресами, гідними довіри. Постарайтеся також зробити просту валідацію до @
// - одне, або два слова які можуть містити (латинські букви, цифри) яке може бути розділене крапкою.

let arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

let validEmailRegex = /^[a-zA-Z0-9.-_]+@(gmail\.com|yahoo\.com)$/;

let trustedEmails = arr.filter(function(obj) {
  return validEmailRegex.test(obj.email);
});
console.log("Email-адреси:");
for (let item of trustedEmails) {
    console.log(item.email);
}











































