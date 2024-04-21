// ДЗ1
// Створіть об'єкт з щонайменше трьома властивостями (намагайтесь виявити фантазію). Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар 
// "ключ: значення". Зверніть увагу: метод повинен працювати навіть після додавання нових властивостей до об'єкта. 
// Наприклад так:
// obj.getInfo(); // Правильна інформація про об'єкт
// obj.newProperty = 'Нова властивість!'; // Додали властивість до об'єкта
// obj.getInfo(); // Виводить всі властивості, включаючи щойно додану.
// Умови виконання ДЗ
// Не використовувати функції або інші матеріали які ми не вивчали
// Не використовувати методи keys, values, entries

const car = {
    brand: "ЗАЗ",
    model: "Lanos",
    year: 2024,
    getInfo: function() 
    {
      for (let text in this) 
      {
        if (typeof this[text] !== "function") 
        {
          console.log(`${text}: ${this[text]}`);
        }
      }
    }
            };
  
car.color = 'red'

  car.getInfo();
  
  
  
  

// ДЗ2 Сума вартості послуг
//  Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість:
// var services = {
// 	"виготовлення дрону": "1000 грн",
// 	"закупівля деталей": "8723 грн",
// 	"обліт": "500 грн"
// };
// "Послуги" можуть додаватися по ходу роботи:
// services['пролетіти 100км'] = "50000 грн";
// Умови виконання ДЗ
// створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
// створити метод minPrice() - який повертає мінімальний price
// створити метод maxPrice() - який повертає максимальний price

let services = 
{
  "виготовлення фпв дрону": 1000,
  "закупівля деталей": 8723,
  "обліт": 500
};
services['100% знищення ворога'] = 50000;

// Метод price
services.price = function() 
{
  let total = 0;
  for (let name in this) 
  {
      if (typeof this[name] === 'number') 
      {
          total += this[name];
      }
  }
  return total;
};

// Метод minPrice
services.minPrice = function() 
{
  let min = Infinity;
  for (let name in this)
   {
      if (typeof this[name] === 'number' && this[name] < min) 
      {
          min = this[name];
      }
  }
  return min;
};

// Метод  maxPrice
services.maxPrice = function() 
{
  let max = -Infinity;
  for (let name in this) 
  {
      if (typeof this[name] === 'number' && this[name] > max) 
      {
          max = this[name];
      }
  }
  return max;
};

console.log("всі послуги послуг:", services.price());
console.log("Мінімальна послуга:", services.minPrice());
console.log("Максимальна  послуга:", services.maxPrice());