const log = console.log()

// ****************************ЗАДАЧКИ С КОДВОРСА*********************************

// Определить число является четным или не четным
// function evenOrOdd(number) {
//     if (number % 2 === 0) { 
//         return "Even"}
//         return "Odd"
//     }
  
//     console.log(evenOrOdd(3));


// const division = (a , b) => a / b

// console.log(division (81,9));

// const boolToWord = (bool) => bool = true ? 'Yes' : 'No'
// console.log(boolToWord(true));

// В массиве целых чисел, найти наименьшее целое число.
// 1. Создать функцию, которая принимает на вход массив чисел
// 2. в этой функции инициализировать первое число в массиве - создадим переменную, которой присвоим значение первой цифры из массива [0]
// 3. Пройдем по массиву форычом перебирая каждое число
// 4. в форыче создаем функцию, которая будет сравнивать каждое последующее число с первым (пункт2)
// 5. Если то что находится в массиве меньше, записывается в переменную minimum

// function minNumber (arr){
//     let minimum = arr[0]
//     arr.forEach(function(number){
//         if (number <= minimum){
//             minimum = number
//         }
//     })
//     return minimum
//     }
//     console.log(minNumber([8,5,6,1]));

// тоже самое с спредом
// function minNumber (arr){
// return Math.min(...arr)
//     }
// console.log(minNumber([8,5,6,1]));

// Напишите функцию, которая принимает массив слов, объединяет их в предложение и возвращает это предложение. 
// следует добавлять пробелы между каждым словом. 
// ни в начале, ни в конце предложения не должно быть пробела!

// function wordsArr (arr){
//     return arr.join(' ')
// }
// console.log(wordsArr(['hello', 'world', 'this', 'is', 'great']));

// создать функцию ( maxи min, или maximumи и minimumт. д., в зависимости от языка), 
// которые получают на вход список целых чисел и возвращают наибольшее и наименьшее число в этом списке соответственно.

// function minMax(arr) {
//     const min = Math.min(...arr)
//     const max = Math.max(...arr)
//     return `max = ${max}, min = ${min}`
// }

// console.log(minMax ([4,6,2,1,9,63,-134,566]));

// Умножение заданного числа на восемь, если оно четное, и на девять в противном случае.
// function simpleMultiplication(number) {
//     if (number % 2 === 0)
//     return number * 8
//     else
//     return number * 9
// }
// console.log(simpleMultiplication(3));

// Вернуть из числа строку
// const numberToString = (num) => num.ToString

// console.log(numberToString(3));

// const hello = (n) => `Hello, ${n} how are you doing today?`
// console.log(hello('vova'));


// Суммируйте все числа данного массива ( cq. list ), 
// кроме самого высокого и самого низкого элемента (по значению, а не по индексу!).

// function sumArray(array) {
// const minNumber = Math.min(...array)
// const maxNumber = Math.max(...array)
// const sumAll = array.reduce ((accumulator, current) =>
//     accumulator + current, 0)
// return sumAll - (maxNumber + minNumber)
// }
//  console.log(sumArray([1, 1, 11, 11, 2, 3]));

// Возьмите массив и удалите из него каждый второй элемент. 
// Всегда сохраняйте первый элемент и начинайте удаление со следующего элемента.

// function removeEveryOther(arr){
//    //  return arr.filter 
// arr.forEach(function(item, index){
// if (index > 0 && index % 2 === 0){
   
// }
// })
// }
//   console.log (removeEveryOther(["Keep", "Remove", "Keep", "Remove"]))
// const age = 20

// function isPensioner(age)  {
// return age >= 75
// }

// // console.log(isPensioner());
// const stroke = 'Mister'
// function isMister(str){
//     return str === 'Mister'
// }
// console.log(isMister(stroke));

// Реализуйте функцию, которая проверяет формат указанного телефона. Если телефон начинается с +, значит это международный формат.

// const number = '235'
// function isInternationalPhone (phoneNumber){
// return phoneNumber[0] === '+'
// }
// console.log(isInternationalPhone('+123'));