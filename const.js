// ************data
// const date = new Date();

// console.log(date);
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.log(date.toString());
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// const date = new Date(2030, 2, 16, 14, 25, 0, 0);
// console.log(date);

// const date = new Date();
// console.log("Date: ", date);

// // Возвращает день месяца от 1 до 31
// console.log("getDate(): ", date.getDate());

// // Возвращает день недели от 0 до 6
// console.log("getDay(): ", date.getDay());

// // Возвращает месяц от 0 до 11
// console.log("getMonth(): ", date.getMonth());

// // Возвращает год из 4 цифр
// console.log("getFullYear(): ", date.getFullYear());

// // Возвращает часы
// console.log("getHours(): ", date.getHours());

// // Возвращает минуты
// console.log("getMinutes(): ", date.getMinutes());

// // Возвращает секунды
// console.log("getSeconds(): ", date.getSeconds());

// // Возвращает миллисекунды
// console.log("getMilliseconds(): ", date.getMilliseconds());


// const date = new Date();
// console.log("Date: ", date);

// // Возвращает день месяца от 1 до 31
// console.log("getUTCDate():", date.getUTCDate());

// // Возвращает день недели от 0 до 6
// console.log("getUTCDay():", date.getUTCDay());

// // Возвращает месяц от 0 до 11
// console.log("getUTCMonth():", date.getUTCMonth());

// // Возвращает год из 4 цифр
// console.log("getUTCFullYear():", date.getUTCFullYear());

// // Возвращает часы
// console.log("getUTCHours():", date.getUTCHours());

// // Возвращает минуты
// console.log("getUTCMinutes():", date.getUTCMinutes());

// // Возвращает секунды
// console.log("getUTCSeconds(): ", date.getUTCSeconds());

// // Возвращает миллисекунды
// console.log("getUTCMilliseconds(): ", date.getUTCMilliseconds());


// ********колбекфункции 
// function greet(name) {
//     return `Добро пожаловать ${name}.`;
//   }
  
//   // Вызываем функцию greet и выводим результат в консоль
//   console.log(greet("Манго")); // Добро пожаловать в Манго.
  
//   // Выводим функцию greet в консоль, не вызывая ее
//   console.log(greet); // ƒ greet() { return `Добро пожаловать ${name}.`; }


// function processCall(recipient) {
//     //Имитируем доступность абонента случайным числом
//     const isRecipientAvailable = Math.random() > 0.5;
  
//     if (!isRecipientAvailable) {
//       console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//       // Логика активации автоответчика
//     } else {
//       console.log(`Соединяем с ${recipient}, ожидайте...`);
//       // Логика принятия звонка
//     }
//   }
  
//   processCall("Манго");

// function processCall(recipient, onAvailable, onNotAvailable) {
//     //Имитируем доступность абонента случайным числом
//     const isRecipientAvailable = Math.random() > 0.5;
  
//     if (!isRecipientAvailable) {
//       onNotAvailable(recipient);
//       return;
//     }
  
//     onAvailable(recipient);
//   }
  
//   function takeCall(name) {
//     console.log(`Соединяем с ${name}, ожидайте...`);
//     // Логика принятия звонка
//   }
  
//   function activateAnsweringMachine(name) {
//     console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
//   }
  
//   function leaveHoloMessage(name) {
//     console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//     // Логика записи голограммы
//   }
  
//   processCall("Манго", takeCall, activateAnsweringMachine);
//   processCall("Поли", takeCall, leaveHoloMessage);


function repeatLog(n) {
    for (let i = 0; i < n; i += 1) {
      console.log(i);
    }
  }
  
  repeatLog(5);