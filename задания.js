                                                                            //JS1
//задачи
// задача 2.1
//Создайте переменную year_of_foundation со значением 1841.

// let year_of_foundation = 1841;

// задача 3.1
// В программе заданы две переменные name и last_name, которые хранят имя и фамилию соответственно. 
// Посчитайте общую длину имени и фамилии и выведите ее в консоль. 
// Обратите внимание: в имени и фамилии по бокам могут быть пробельные символы — их считать не надо.
// Пример значений переменных:
// name = "Всеволод"
// last_name = "\nСтарозубов"
// Пример результата:
// 18

//console.log(name.trim().length + last_name.trim().length);

// задача 3.2
// В программе задана переменная word со строковым значением. Выведите в консоль первую букву значения в верхнем регистре.
// Пример значений переменных:
// word = "велосипед"
// Пример результата:
// "В"

// console.log(word[0].toUpperCase());

// задача 3.3

// В программе заданы две переменные со строковым значением: word_1 и word_2. 
// Воспользуйтесь конкатенацией и выведите строку со значениями word_1 и word_2, написанными через пробел.
// Пример значений переменных:
// word_1 = "велосипед"
// word_2 = "полезен"
// Пример результата:
// "велосипед полезен"

//console.log(word_1+" "+word_2);

// задача 3.4
// В программе задана переменная value, в которую записано дробное число. Выполните следующие операции:
// округлите значение переменной "вверх" до целого значения;
// округлите значение переменной "вниз" до целого значения;
// округлите значение переменной по правилам математики до целого значения;
// посчитайте сумму полученных выше значений и из результата возьмите корень квадратный;
// из результата возьмите целую часть числа и выведите в консоль.

// let summ = Math.sqrt(Math.ceil(value)+Math.floor(value)+Math.round(value));
// console.log(Math.trunc(summ));

// задача 3.5
// В программе задана переменная obj, в которую записан объект со свойствами name, last_name и age, 
// в которых хранятся имя, фамилия и возраст пользователя соответственно. 
// Сформируйте строку по примеру и выведите ее в консоль. 
// Обратите внимание, что имя и фамилию требуется заключить в различные виды кавычек.
// Пример значений переменных:
// name: "Анатолий", last_name: "Максимов", age: 32
// Пример результата:
// Имя: "Анатолий" Фамилия: 'Максимов' Возраст: 32

// console.log(`Имя: "${obj.name}" Фамилия: '${obj.last_name}' Возраст: ${obj.age}`)


// задача 3.6
// В программе заданы три переменные name, last_name, age, в которых хранятся имя, фамилия и возраст пользователя соответственно. 
// Сформируйте объект с ключами name, last_name, age и значениями из соответствующих переменных. Выведите этот объект в консоль.
// Пример значений переменных:
// name = "Анатолий"
// last_name = "Максимов"
// age = 32
// Пример результата:
// {name: "Анатолий", last_name: "Максимов", age: 32}

// let result={
//     'name':`${name}`,
//     'last_name':`${last_name}` ,
//     'age':age
//     };
//     console.log(result);


//задание 6.1
// В программе объявлена переменная price, в которую записано числовое значение. 
// Напишите функцию priceMessage(), которая выводит в консоль сообщение "Данный товар стоит X рублей", 
// где вместо X указано значение переменной price. Вызовите функцию после ее определения.
// Пример значений переменных:
// price = 80000
// Пример результата:
// "Данный товар стоит 80000 рублей"
// function priceMessage(price){
//     console.log(`Данный товар стоит ${price} рублей`)
// }

// priceMessage(price);

//задание 6.2
// В программе объявлены две переменные с числовым значением — num_1 и num_2. 
// Напишите функцию mult, которая принимает два аргумента и возвращает их произведение. 
// Вызовите функцию mult и передайте ей в качестве аргументов значения переменных num_1 и num_2, а результат выведите в консоль.
// Пример значений переменных:
// num_1 = 3
// num_2 = 6
// Пример результата:
// 18

// function multiPlication(num_1,num_2){
//     console.log(num_1*num_2);
// }
// multiPlication(num_1,num_2);

//задание 6.3
// В программе объявлена переменная num, в которую записано числовое значение. 
// Напишите функцию square(), которая возвращает квадрат этого числового значения. 
// Обратите внимание, что функция обращается к глобальной переменной, а не получает значение в качестве аргумента.
// Пример значений переменных:
// num = 9
// // Пример результата:
// // 81
// num = 9
// function square(){
//     return num*num;
//     }
    


//задание 6.4 
// В программе объявлена переменная num, в которой записано числовое значение. 
// Используя цикл, возведите значение переменной в квадрат три раза. 
// Каждый результат конкатенируйте через пробел и выведите в консоль.
// Пример значений переменных:
// num = 2
// Пример результата:
// "4 16 256"

// let result="";
// let numm=num;
// for(i=1;i<=3;i++){
// 		result +=numm**2+" ";
// 	numm=numm**2;
// }
// console.log(result.trim());


//задание 6.5

// В программе объявлена переменная data, в которой записано строковое значение. 
// Напишите функцию getNumber(data), которая преобразовывает строку в число по следующему правилу:
// если переменная data содержит не число, функция должна вернуть численное значение 0;
// если переменная data содержит число, например "123", то функция возвращает числовое значение 123.
// Вызовите эту функцию и выведите результат в консоль.
// Пример значений переменных:
// data = "привет"
// Пример результата:         i
// 0
// let data = "привет";
// function getNumber(data){
//     if (isNaN(parseFloat(data)) === true){
//     return 0;
// }
//     else {
//         return parseFloat(data);
//     }
// }
// console.log(getNumber(data));

//задание 6.6
// В программе объявлены две переменные — value и total, в которых записаны числовые значения. 
// Напишите функцию getPercent(value, total), которая возвращает процент числа value от значения total. 
// Вызовите эту функцию с value и total в качестве аргументов. Результат работы функции выведите в консоль.
// Пример значений переменных:
// value = 4
// total = 80
// Пример результата:
// 5
// value = 4;
// total = 80;   
// function getPercent(value, total){
//     return value/(total/100);
// }
// console.log(getPercent(value, total);); 


                                                                            //JS2

//задание 2.5
// values = ["Строка",true,"Числа","Объект","Не число", false, "Не объект"];
// let result;
// let start;
// let end;
// for(let i=0;i< values.length-1; i++ ){
// if(typeof values[i] != "string"){
// start=i;
// break;
//     }
// } 
// for(let j=values.length-1;j>=0; j-- ){
// if(typeof values[j] != "string"){
// end=j;
// break;
//     }
// } 
// console.log(start);
// console.log(end);
// result=values.slice(start,end+1);
// console.log(result);

// let start=values.findIndex(elem =>  elem === true || elem === false );
// let end=values.findLastIndex(elem =>  elem === true || elem === false );
// let result=values.slice(start,end+1);
// console.log(result);



//задание 2.6
// В программе задана переменная values, которая хранит в себе массив. 
// Элементы массива являются числами. Определите, находятся ли в заданном массиве элементы,
// которые содержат четырехзначные числа. 
// Результат выведите в консоль в виде булевого значения (true, если содержит, и false, если нет).
// Пример значений переменных:
// values = [10, 185, 11200, 980]
// Пример результата:
// false
// values = [10, 185, 11200, 980];
// неверное решение работает только если число в середине с запятыми
// let result;
// result=values.toString();
// if  (/\,\d{4}\,/.test(result) === true){
//     console.log(true);
// }
// else{console.log(false);
// }
// решение верно для всех случаев.
// let values = [10, 185, 11200, 980];
// const digit = (element) => String(element).length === 4;
// console.log(values.some(digit));

// задание 2.7.
// Необходимо доработать программу из задания 2.6
// В программе задана переменная values, которая хранит в себе массив. 
// Элементы массива являются числами. Определите, находятся ли в заданном массиве элементы, 
// которые содержат четырехзначные числа. Если такие значения встречаются,
//  выведите индекс первого в консоль. В противном случае выведите 
//  сообщение Искомый элемент не был найден.
// Пример значений переменных:
// values = [10, 185, 11200, 980]
// Пример результата:
// "Искомый элемент не был найден"


// неправильное решение
// let result;
// result=values.toString();
// for(let i=0; i<values.length-1;i++){
//    if(/\d{4}/.test(values[i].toString()) === true){
//    console.log(i);
//    break;	
//    }
// }
// if  (/\,\d{4}\,/.test(result) !== true){
//     console.log("Искомый элемент не был найден");}

// правильное решение через findIndex
// let indexOfvalue = values.findIndex((element) => String(element).length === 4)
// if(indexOfvalue === -1){
//     console.log("Искомый элемент не был найден");
// }
// else{
//     console.log(indexOfvalue);
// }

// Практическое задание 2.8.
// В программе задана переменная users, которая хранит в себе массив. 
// Элементы данного массива являются объектами. 
// Определите индекс элемента, значение свойства role которого содержит больше одного слова. 
// Результат выведите в консоль разработчика.
// Пример значений переменных:
// users = [
//     {login: "user1", role: "Admin"},
//     {login: "user2", role: "State user"},
//     {login: "user3", role: "Moderator"}
// ]
// Пример результата:
// 1
// users = [
//          {login: "user1", role: "Admin"},
//          {login: "user2", role: "State user"},
//          {login: "user3", role: "Moderator"}
//      ]
//      let result;
//      result=users.map(e=>e.role);
//      for(let i=0; i<result.length;i++){
//          if(/\s/.test(result[i]) === true){
//              console.log(i);
//          }
//      }

// Практическое задание 2.9
// В программе задана переменная randValues, которая хранит в себе массив. Его элементы могут являться как строковыми, так и числовыми значениями. Отсортируйте массив следующим образом:
// •	В начале массива должны быть все числовые значения по возрастанию
// •	В конце все строковые, упорядоченные по алфавиту
// Результат выведите в консоль.
// Пример значений переменных:
// randValues = ["Банан", 3, "Апельсин", 2, "Вишня"]
// Пример результата:
// [2, 3, "Апельсин", "Банан", "Вишня"]

// let result;
// result=randValues.sort((a,b)=>a-b);
// console.log(result);

//Практическое задание 2.10
// В программе задана переменная array, которая хранит в себе двумерный массив. 
// Его элементы — массивы, состоящие из чисел. Отсортируйте массив по количеству элементов вложенного массива по возрастанию. 
// Результат выведите в консоль.
// Пример значений переменных:
// array = [[1,2,3],[1,2],[1,2,3,4]]
// Пример результата:
// [[1,2],[1,2,3],[1,2,3,4]]

// let result;
// result=array.sort((a,b)=>a.length-b.length);
// console.log(result);

//Практическое задание 2.11
// В программе задана переменная words, которая хранит в себе массив строковых значений.
// Напишите скрипт, который считает количество палиндромов и непалиндромов в массиве words. 
// Результат должен представлять собой массив из двух элементов, 
// где первое значение — количество палиндромов, а второе — непалиндромов.
// Пример значений переменных:
// words = ["Заказ", "Такси", "Доход"];
// Пример результата:
// [2, 1]

// let result=[];
// let resultpal=0;
// let resultnepal=0;
// for(let i=0;i<words.length;i++){
//     let wordsrev="";
//    for(let j=words[i].length-1;j>=0;j--){
//         wordsrev += words[i][j];}
//         if(wordsrev.toUpperCase() === words[i].toUpperCase()){
//             resultpal++;}
//         else{
//             resultnepal++;}
//         }
//         //console.log(resultpal);       
//         //console.log(resultnepal);
// result.splice(0,0,resultpal,resultnepal);
// console.log(result);

//Практическое задание 2.12
// В программе задана переменная dates, которая хранит в себе строковое значение. 
// В данной строке хранятся значения дат в формате ДД:ММ:ГГГГ, 
// которые разделены пробелами. 
// На основе значения переменной dates сформируйте новый массив, 
// каждый элемент которого содержит одну дату переменной dates, 
// преобразованную в формат ДД/ММ/ГГГГ. Выведите содержимое сформированного массива в консоль.
// Пример значений переменных:
// dates = "23.04.1996 07.10.2002 15.08.1945"
// Пример результата:
// ["23/04/1996", "07/10/2002", "15/08/1945"];
// let result;
// let datestrans="";
// for(i=0;i<dates.length;i++){
//     if(dates[i] !== "."){
//         datestrans += dates[i];
//     }
//     else{
//         datestrans += "/";
//     }
// }
// console.log(datestrans);
// result=datestrans.split(" ");
// console.log(result);

//Практическое задание 2.13
// В программе задана переменная tickets, которая хранит в себе строковое значение. 
// В этой переменной указаны номера билетов на поезд (после слова Train) 
// и на самолет (после слова Airplane). 
// Необходимо написать скрипт, который на основе строки из переменной tickets формирует объект. 
// Он должен хранить в себе два ключа (train, airplane), 
// а в качестве значений — массивы с номерами билетов для поезда и самолета соответственно.
// Пример значений переменных:
// tickets = "Train: AV432, FS452, OE402. Airplane: DR578, JN1089, NDK140."
// // Пример результата:
// {
//     "train" : ["AV432", "FS452", "OE402"],
//     "airplane" : ["DR578", "JN1089", "NDK140"]
// }

// let result={};
// let tickets2=tickets.replace(/\s/g,"");
// let arrTA=tickets2.split(".",2);
// let arrT=arrTA[0].split(":");
// let arrA=arrTA[1].split(":");
// let valuearrT=arrT[1].split(",");
// let valuearrA=arrA[1].split(",");
// result[arrT[0].toLowerCase()]=valuearrT;
// result[arrA[0].toLowerCase()]=valuearrA;
// console.log(result);

//Практическое задание 2.14
// В программе задана переменная numbers, которая хранит массив из чисел. 
// Определите, какое максимальное количество элементов массива numbers (в порядке, который реализован в массиве) можно сложить, 
// чтобы их итоговая сумма не превышала 50. Результат выведите в консоль.
// Пример значений переменных:
// numbers = [10, 20, 33, 55, 100]
// Пример результата:
// 2
// let summ=0;
// for(i=0;i<numbers.length;i++){
//     summ +=numbers[i];
//     if(summ>50){
//         break;
//      }
// }
// console.log(i);

//Практическое задание 2.15
// В программе задана переменная values, которая хранит массив из строк. 
// Определите математическую сумму всех элементов, которые при преобразовании в число не вернут значение NaN. 
// Результат выведите в консоль.
// Пример значений переменных:
// values = ["100", "30", "Не число", "20", "Тоже не число"]
// Пример результата:
// 150
// let summ=0;
// for(i=0;i<values.length;i++){
//     if(isNaN(parseFloat(values[i])) !== true){
//         summ += parseFloat(values[i]);

//     }
// }
// console.log(summ);

//Практическое задание 2.16
// В программе заданы два массива array_1 и array_2, элементы которого являются числами. 
// Значения внутри одного массива уникальные. 
// Реализуйте функцию intersection, которая принимает в качестве аргументов два массива и возвращает новый массив. 
// Он должен содержать значения, которые встречаются в обоих массивах-аргументах, и быть отсортирован по убыванию.
// Пример значений переменных:
// array_1 = [2, 4, 7, 8, 1]
// array_2 = [2, 5, 11, 6, 1]
// Пример результата:
// [2, 1]
// let function intersection(array_1,array_2){
//     let res=[];
//     for(i=0;i<array_1.length;i++){
//         for(j=0;j<array_2.length;j++){
//             if(array_1[i] === array_2[j]){
//                 res.push(array_1[i]);
//                 break;
//             }
//         }
//     }
//     res.sort((a,b) => b-a );
//     return res;
//     }
//     intersection(array_1,array_2);


//Практическое задание 3.1

// В программе объявлена переменная car, которая хранит в себе объект, 
// у которого есть как минимум одно свойство — engine. 
// Удалите из объекта car свойство engine и результат выведите в консоль.
// Пример значений переменных:
// car  = {
//     model: "Audi", 
//     color: "white",
//     weight: 1850,
//     engine: "170 hp"
// }
// Пример результата:
// {
//     model: "Audi", 
//     color: "white",
//     weight: 1850
// }

// delete(car.engine);
// console.log(car);

//Практическое задание 3.2
// В программе объявлена переменная goods, которая хранит объект со свойствами, описывающими товар. 
// Сформируйте массив, который содержит в начале все названия свойств объекта, а потом все их значения. 
// Результат выведите в консоль.
// Пример значений переменных:
// goods = {
//     title: "Самокат", 
//     price: 6000,
//     good_id: 1
// }
// Пример результата:
// ["title, "price", "good_id", "Самокат", 6000, 1]

// let result=Object.keys(goods).concat(Object.values(goods));
// console.log(result);


//Практическое задание 3.3
// В программе заданы две переменные article и author, которые содержат объекты. 
// Объект article содержит информацию о статье, а author — об авторе. 
// Сформируйте новый объект, который содержит свойства объектов article и author. Результат выведите в консоль.
// Пример значений переменных:
// article = {
//     title: "Загадки дачного огурца", 
//     text: "Огурец не перестает удивлять своими выходками. Хозяйка в недоумении" 
// }
// author = {
//     name: "Ричард М.В.",
//     age: 43
// }
// Пример результата:
// article = {
//     title: "Загадки дачного огурца", 
//     text: "Огурец не перестает удивлять своими выходками. Хозяйка в недоумении",
//     name: "Ричард М.В.",
//     age: 43
// }

// let result=Object.assign(article,author);
// console.log(result);

//Практическое задание 3.4

// В программе задан массив array. Напишите функцию count(), 
// которая считает количество элементов массива array и выводит в консоль сообщение, как в примере.
// Пример значений переменных:
// array = [true, 4, "word", "10n"]
// Пример результата:
// Количество элементов в массиве: 4

// function count(){
//     let count=array.length;
//     console.log(`Количество элементов в массиве: ${count}`);
// }
// count();

//Практическое задание 3.5
// В программе задан двумерный массив employee. 
// Удалите у данного массива значение, у которого первый элемент hireDate,
// и добавьте новое значение ["jobName", "IT PROG"] в конец массива. 
// Результат выведите в консоль.
// Пример значений переменных:
// employee  = [
//     ["firstName", "Ivan"], 
//     ["lastName", "Ivanov"],
//     ["hireDate", "21.10.2015"]
// ]
// Пример результата:
// [
//     ["firstName", "Ivan"], 
//     ["lastName", "Ivanov"],
//     ["jobName", "IT PROG"]
// ]

// const res=new Map(employee);
// res.delete("hireDate");
// res.set("jobName", "IT PROG");
// console.log(Array.from(res));


//Практическое задание 3.6
// В программе задан двумерный массив array. 
// Создайте и вызовите функцию countString(), которая считает количество значений массива array, у которых второй элемент является строкой. 
// Функция countString() должна выводить в консоль сообщение, как в примере.
// Пример значений переменных:
// array = [
//         [ "boolean", true ], 
//         [ "number", 4 ],
//         [ "string", "word" ],
//         [ "object", {}]
//     ]
// Пример результата:
// Количество строковых элементов в именованном массиве: 1
// function countString(){
//     let counter=0;
//     for(i=0;i<array.length;i++){
//     if(typeof array[i][1] === "string"){
//         counter++;
//     }
// }
//     console.log(`Количество строковых элементов в именованном массиве: ${counter}`);
// }
// countString();

// Практическоезадание  4.1
// В программе объявлены объекты pet_1 и pet_2. Напишите функцию getName() и присвойте ее объектам pet_1 и pet_2 в качестве метода. При вызове метода getName() он должен вернуть имя и возраст питомца через пробел. Решить задачу необходимо с использованием this.
// Пример значений переменных:
// pet_1 = { 
// name: "Шарик", 
// age: 10 
// };
// pet_2 = { 
// name: "Жучка", 
// age: 5
// };

// functiongetName(){
// 	return `${this.name} ${this.age}`;	
// }
// pet_1.getName=getName;
// pet_2.getName=getName;


// Практическое задание 4.2
// В программе объявлен объект input и функция sayHi(), которая выводит в консоль сообщение из примера. Используя метод присвоения контекста, свяжите контекст объекта input с функцией sayHi() и вызовите функцию sayHi().
// Пример значений переменных:
// input = {
// id: 1,
// value: "Добрый вечер",
// firstName: "Григорий",
// lastName: "Стрельников" 
// }
// functionsayHi() {
//     console.log(`${this.value}, ${this.firstName} ${this.lastName}!`)
// }
// Пример результата:
// Добрый вечер, Григорий Стрельников!

// sayHi=sayHi.bind(input);
// sayHi();

// Практическое задание 4.3
// В программе объявлен объект pet со свойствами name и breed и функция getDescription(), которая выводит эту информацию, используя this. Привяжите к функции getDescription() контекст pet и присвойте получившуюся функцию переменной getDescription.
// Пример значений переменных:
// pet = { 
// name: "Диксон", 
// breed: "Немецкаяовчарка" 
// }
// functiongetDescription() { 
// console.log("Имяпитомца: " + this.name + ", Порода: " + this.breed) 
// }
// Пример результата:
// Имя питомца: Диксон, Порода: Немецкая овчарка

// pet.getDescription()=getDescription;
// getDescription();


// Практическое задание 4.4
// В программе объявлен объект props, у которого задан набор свойств. 
// Объявите функцию getValue(), которая выводит в консоль строку со всеми свойствами и их значениями (без методов). 
// Привяжите объект props в качестве контекста функции getValue() и присвойте получившуюся функцию переменной getValue.
// Пример значений переменных:
// props= { 
//     name: "Анатолий", 
//     age: 29,
//     sayHi: ()=>"привет"
// }
// Пример результата:
// Значения свойств объекта props (name: Анатолий, age: 29)

// function getValue(){
// let result=[];
// for (key in props) {
//     if(typeof props[key] !== "function"){
//         result.push(`${key}: ${props[key]}`); 
//     }  
// }
// result = result.join(", ");
// console.log(`Значения свойств объекта props (${result})`);
// }
// getValue=getValue.bind(props);
// getValue();

// Практическое задание 4.5
// В программе объявлен объект hero, свойства которого описывают информацию о герое. 
// В объекте в том числе определен метод getPosition, который возвращает позицию героя в игре. 
// Определите, почему вызов getPosition работает некорректно. Исправьте эту ошибку.
// Пример значений переменных:
// hero = { 
//     nick: "FirstHero", 
//     position: "Лагерь",
//     getPosition: ()=>console.log("Позиция героя: " + this.position)
// }
// Пример результата:
// Позиция героя: Лагерь
// hero = { 
//     nick: "FirstHero", 
//     position: "Лагерь",
//     getPosition(){
// 	console.log("Позиция героя: " + this.position);
// 	}
// }

// Практическое задание 5.1
// В программе объявлена переменная order, которая хранит объект. 
// Объявите переменную descriptor, которая должна содержать значения всех атрибутов ключа totalPrice объекта order в виде объекта.
//  Результат выведите в консоль.
// Пример значений переменных:
// order = {
//     productName: "Велосипед",
//     costomerName: "Саша",
//     salesName: "Петя",
//     totalPrice: 15000
// }
// Пример результата:
// {value: 15000, writable: true, enumerable: true, configurable: true}

// let descriptor=Object.getOwnPropertyDescriptor(order,"totalPrice");
// console.log(descriptor);

// Практическое задание 5.2
// В программе задан объект employees, который содержит ряд свойств и методов. 
// Сформируйте строку с именами всех свойств через запятую и пробел (, ) и выведите в консоль. 
// Имена методов добавляться не должны.
// Пример значений переменных:
// employees = {
//     firstName: "Петя",
//     lastName: "Иванов",
//     ratePerDay: 2500,
//     workingDays: 5,
//     getSalary() { console.log(employees.ratePerDay * employees.workingDays )} 
// }
// Пример результата:
// firstName, lastName, ratePerDay, workingDays

// let result=[];
// for(key in employees){
//     if(typeof employees[key] !== "function"){
//        result.push(key);
//     }
// }
// console.log(result.join(", "))

// Практическое задание 5.3
// В программе объявлены переменные firstName и lastName. 
// Создайте объект user со свойствами firstName и lastName и добавьте getter и setter fullName. 
// Сеттер fullName должен принимать имя и фамилию пользователя через пробел, разделять и присваивать свойствам firstName и lastName соответственно. 
// Геттер fullName должен формировать строку, состоящую из имени и фамилии через пробел.
// Пример значений переменных:
// firstName = "Александр"
// lastName = "Петров"
// Пример результата:
// user.fullName // "Александр Петров"
// user.fullName = "Всеволод Старозубов"
// user.firstName // "Всеволод"
// user.lastName // "Старозубов"

// let user={
//     firstName,
//     lastName,
//     get fullName(){
//         return (`${this.firstName} ${this.lastName}`)
//     }
//     }
//     console.log(user.fullName);


//  Практическое задание 5.4
// В программе объявлены переменные name и phone, которые хранят строки. 
// В name указано название заведения, а в phone — его номер телефона. 
// Создайте класс Delivery со свойствами name и phone. 
// Помимо описанных свойств, добавьте свойство validPhone, 
// которое проверяет значение свойства phone на вхождение знака + в начале строки. Если знак отсутствует, 
// свойство validPhone должно принять булевое значение false, в противном случае — true. 
// Создайте экземпляр класса Delivery и в качестве аргументов конструктора укажите значения переменных name и phone. 
// Получившийся экземпляр класса запишите в переменную deliveryName.
// Пример значений переменных:
// name = "Pizza"
// phone = "81234567890"
// Пример результата:
// false

// class Delivery {
//     constructor(name, phone) {
//       this.name = name;
//       this.phone = phone;
//     this.validPhone = /^\+/.test(phone);
//   }
//   }
//   let deliveryName = new Delivery(name, phone);

//  Практическое задание 5.5

// В программе создан класс Permissions, свойства которого описывают права пользователей на редактирование статей на сайте. 
// Создайте новый класс User, который наследуется от класса Permissions. 
// Дополнительно в классе User добавьте свойство name, 
// значение которого класс принимает в качестве аргумента конструктора.

// class Permissions {
//     constructor() {
//         this.create = false
//         this.read = true
//         this.update = false
//         this.remove = false
//     }
// }
// class User extends Permissions{
// constructor(name) {
//         super()
// 	this.name=name
//     }
// }

// Практическое задание 5.6

// В программе задан массив array, элементы которого имеют численное значение, 
// и переменная num, которая является числом. 
// Реализуйте функцию queue(num, ...array), которая принимает в качестве аргументов множество значений списка array 
// и значение переменной num. Функция должна найти минимальную сумму num элементов из значений массива array. 
// Ответ выведите в консоль.
// Пример значений переменных:
// array = [2, 4, 7, 8, 1]
// num = 2
// Пример результата:
// 3

// array = [2, 4, 7, 8, 1];
// num = 2;
// function queue(num,array){
//     let sum=0;
//     array.sort((a,b)=>a-b);//[1, 2, 4, 7, 8]
//     let result=array;
//     for(i=0;i<num;i++){
//         sum +=result[i];
//     }
//     console.log(sum);
//     }
//     queue(num,array);

//test

// class Person{

//     constructor(name){
//         this.name=name;
//          }
//         greeting(){
//             console.log(`${this.name}: Привет!`);
//         }
// }
// const p1=Person("Иван");//не хватает new не будет работать, если добавить new то будет норм работать
// p1.greeting();      // выведет Иван: Привет!


// class Pet {

//     constructor(name){
//         this.name=name[0].toUpperCase()+name.slice(1).toLowerCase();
//         }
//         get name;//?  что-то тут не так будет ошибка
//         }
// }
// const myCat=new Pet("пушок");
// console.log(myCat.name);


// class Pet {
// position=0;
// go = (steps) =>{
//     this.position += steps;
//     }
//  }
//  let cat=new Pet;
//  let go=cat.go;
//  go(5);
//  console.log(cat.position);//5

// function pow2(){
//     this.x *=this.x;
// }

// const a= {x:10};
// aPow2=pow2.bind(a);
// const b= {x:20};
// bPow2=aPow2.bind(b);
// aPow2();
// bPow2();
// console.log(a.x,b.x);//10000 20


    //Практическое задание 6.1 
//  В программе задана переменная ctx, которая содержит контекст canvas элемента. 
//  Отрисуйте в canvas прямоугольник fillRect с размерами 100 на 65.

//  <html>
// <head>
// </head>
// <body>
//     <canvas id="root" > </canvas>
//   <script>
//   let ctx = document.getElementById("root");
//     let context = ctx.getContext("2d");
//     context.fillRect(0,0,100,65);
    
//   </script>
// </body>
// </html>

// //Практическое задание 6.2
// В программе задана переменная ctx, которая содержит контекст canvas элемента. 
// Отрисуйте в canvas два горизонтальных отрезка длиной 100.
// Координаты первого отрезка: точка 1: x = 100, y = 100; точка 2: x = 200, y = 100.
// Координаты второго отрезка: точка 1: x = 100, y = 150; точка 2: x = 200, y = 150.

// <html>
// <head>
// </head>
// <body>
//     <canvas id='root'></canvas>
// <script>
// let ctx=document.getElementById('root');
// let context=ctx.getContext('2d');
// context.beginPath();
// context.moveTo(100,100);
// context.lineTo(200,100);
// context.moveTo(100,150);
// context.lineTo(200,150);
// context.stroke();
// </script>
// </body>

// </html>

//Практическое задание 6.3
// В программе задана переменная ctx, которая содержит контекст canvas элемента. 
// Отрисуйте в canvas три отрезка разных цветов. 
// Первый отрезок красного #e74c3c цвета, второй — зеленого #16a085 цвета, 
// а третий — синего #2980b9 цвета.

// let ctx=document.getElementById("root");
// 	let context=ctx.getContext("2d");
// 		context.beginPath();
// 	context.strokeStyle = "#e74c3c";
// 	context.moveTo(5,5);
// 	context.lineTo(50,5);
// 			context.beginPath();
// 	context.strokeStyle = "#16a085";
// 	context.moveTo(5,25);
// 	context.lineTo(50,25);
// 			context.beginPath();
// 	context.strokeStyle = "#2980b9";
// 	context.moveTo(5,45);
// 	context.lineTo(50,45);
// context.stroke();

//Практическое задание 6.4

// В программе задана переменная ctx, которая содержит контекст canvas элемента. 
// Отрисуйте в canvas четыре квадрата fillRect разных цветов с указанными на картинке размерами 
// и отступами.
// Значение цветов:
// •	Левый верхний квадрат: #ff3d00
// •	Правый верхний квадрат: #0bdd38
// •	Левый нижний квадрат: #2e77da
// •	Правый нижний квадрат: #ffd200

// let ctx = document.getElementById("root");
// 	let context = ctx.getContext("2d");
// 	context.fillStyle="#ff3d00";
// 	context.fillRect(10,10,100,100);
// context.fillStyle="#0bdd38";
// 	context.fillRect(120,10,100,100);
// context.fillStyle="#2e77da";
// 	context.fillRect(10,120,100,100);
// context.fillStyle="#ffd200";
// 	context.fillRect(120,120,100,100);

//Практическое задание 6.5
// В программе задана переменная ctx, которая содержит контекст canvas элемента. 
// Отрисуйте в canvas 50 окружностей c центром в точке 150:150 и радиусом от 2 до 100. 
// Для решения данной задачи воспользуйтесь циклом.

// let ctx = document.getElementById('root');
// 	let context = ctx.getContext('2d');
// context.beginPath();
// for(i=1;i<=50;i++){
// context.arc(150, 150, 2, 0, 2*Math.PI);
// }
// context.stroke();
// context.closePath();

// Практическое задание 6.6
// В программе задана переменная ctx, которая содержит контекст canvas элемента. 
// Напишите программу, которая отрисовывает круги при движении мышью по canvas 
// (для получения координат мыши используйте offsetX и offsetY). 
// Для решения задачи воспользуйтесь методом addEventListener у объекта document.
// Для правильной валидации задания выполните проверку в следующем порядке:
// •	Выполните задание
// •	Нажмите на кнопку «Проверить»
// •	Проведите курсором по окну с результатом
// •	Нажмите на кнопку «Проверить» еще раз

// let ctx=document.getElementById("root");
// let context=ctx.getContext("2d");
// function animate(){
// 	context.beginPath();
// 	context.arc(event.offsetX,event.offsetY,50,0,2*Math.PI);
// 	context.stroke();
// }
// document.addEventListener("mousemove",animate);

//     через callback-function:
// let ctx=document.getElementById("root");
// let context=ctx.getContext("2d");
// document.addEventListener("mousemove", e=>{
// 	context.beginPath();
// 	context.arc(e.offsetX,e.offsetY,50,0,2*Math.PI);
// 	context.stroke();
// 	});


                    // задание 1.1

// Напишите скрипт, который определяет тип тега с классом secret и выводит его в консоль.
// Пример заданного HTML-документа:
// <div class="secret">...</div>
// Пример результата:
// div

// console.log(document.querySelector('.secret').tagName);// вывод имени тега соответсвующего этому классу
// задание 1.2
// console.log(document.querySelector('#secret').tagName);// вывод имени тега соответсвующего этому id

// задание 1.3
// const tag=document.getElementsByClassName("promo");
// console.log(tag.length);// выводит количество тегов с данным классом


// задание 1.4
//const tag=document.getElementsByClassName("target");//переменная со всеми тегами с классом terget
//console.log(tag[tag.length-1].tagName.toLowerCase());// выводим последний тег соответствующий классу target.

// задание 1.5

// В HTML-документе существует тег с классом price и числовым значением. 
// Напишите скрипт, который увеличивает в теге значение цены в два раза.
// Пример заданного HTML-документа:
// <div class="price">100</div>
// Пример результата:
// <div class="price">200</div>

// let prices = document.querySelector(".price");// выделяем тег с CSS-селектором price
// console.log(prices);
// console.log(prices.innerText*2);
// prices.innerText=prices.innerText*2;// меняем текст на увеличенный в 2 раза

//задание 1.6
// В HTML-документе заданы элементы с числовым значением с классом price. 
// Напишите скрипт, который считает общую сумму значений всех элементов с классом price и выводит в консоль.
// Пример заданного HTML-документа:
// <p class='price'>100</p>
// <p class='price'>200</p>
// Пример результата:
// 300
// let prices = document.querySelectorAll(".price");                    // выводим всю коллекцию Node-list с селектором price
// console.log(prices);                                                 // смотрим что получилось
// let sum=0;                                                           // вводим переменную суммы=0
// for(i=0;i<prices.length;i++){                                        // заводим цикл
//   sum +=parseFloat(prices[i].textContent);                           // к сумме каждый раз прибавляем все значения текста 
// }
// console.log(sum);

//задание 1.7
// В HTML-документе есть тег с классом content, внутри него есть тег <p>. Напишите скрипт, который заменит этот тег <p> на тег <b>, сохранив текст внутри этого тега.
// Пример заданного HTML-документа:
// <p class="content">
// <p>Внутренний текст</p>
// </p>
// Пример результата:
// <p class="content">
// <b>Внутренний текст</b>
// </p>


// let contents = document.querySelector(".content");       // ищем все теги с классом content 
// let tagp=contents.querySelector("p");                    // создаем переменную ищем в тегах селектор P
// let text=tagp.textContent;                               // заводим текст из тега Р в переменную
// contents.innerHTML=`<b>${text}</b>`;                     // преобразуем строку тега c классом через шаблонные строку 

//2 вариант через replace
// let content = document.querySelector(".content");
// let p = content.querySelector("p");
// content.innerHTML = content.innerHTML.replace("p","b");


//задание 1.8
// В HTML-документе есть тег <p> c классом links. 
// Внутри этого элемента указана просто текстовая ссылка без тега <a>. 
// Напишите скрипт, который заменит этот текст на тег <a>, а в качестве содержимого тега <a> укажет изначальный текст.
// Пример заданного HTML-документа:
// <p class="links">google.com</p>
// Пример результата:
// <p class="links"><a>google.com</a></p>

// let link = document.querySelector(".links");
// let textlink = link.textContent;
// console.log(textlink);
// link.innerHTML=`<a>${textlink}</a>`

// //задание 1.9
// В HTML-документе заданы теги с числовым значением с классом numeric. 
// Напишите скрипт, который оборачивает в тег <b> все значения тега с классом numeric, которые меньше нуля.
// Пример заданного HTML-документа:
// <p class="numeric">62</p>
// <p class="numeric">-12</p>
// <p class="numeric">16</p>
// Пример результата:
// <p class="numeric">62</p>
// <p class="numeric"><b>-12</b></p>
// <p class="numeric">16</p>

// let numer = document.querySelectorAll(".numeric");                   
// for(i=0;i<numer.length;i++){                                      
//   if(parseFloat(numer[i].textContent)<0){
//       numer[i].innerHTML=`<b>${numer[i].textContent}</b>`
//   }                         
// }

//задание 1.10
// Исправьте скрипт таким образом, чтобы в результате его работы 
// в переменной result была сумма значений тегов с классом numeric.
// Пример заданного HTML-документа:
// <p class="numeric">62</p>
// <p class="numeric">-12</p>
// <p class="numeric">16</p>
// Пример результата:
// result = 66

// let result=0;
// let numer = document.querySelectorAll(".numeric");                   
// for(i=0;i<numer.length;i++){                                      
//   result +=parseFloat(numer[i].textContent);
// }
// console.log(result);

//задание 1.11
// В HTML-документе задан тег <ul> c классом cars. 
// Внутри этого тега есть несколько тегов <li>. 
// Реализуйте скрипт, который считывает содержимое этих элементов <li>, 
// формирует из них массив и сохраняет в переменной cars.
// Пример заданного HTML-документа:
// <ul id="cars">
// <li>Tesla</li>
// <li>Opel</li>
// </ul>
// Пример результата:
// ["Tesla',"Opel"]

// let cars=[];
// let  cars1=document.querySelector(".cars");
// let  tagli=cars1.querySelectorAll("li");
// for(i=0;i<tagli.length;i++){
//     cars.push(tagli[i].textContent);
// }
// console.log(cars);


//задание 2.1
// Напишите скрипт, который создает новый элемент <p> в переменной new_element и добавляет его в тег с идентификатором root. 
// Созданный тег <p> должен содержать в себе фразу Ура! Мой скрипт отработал верно!
// Пример результата:
// <div id="root">
// <p>Ура! Мой скрипт отработал верно!</p>
// </div>

// let blocktag=document.getElementById("root");
// let new_element=document.createElement("p");
// new_element.innerText="Ура! Мой скрипт отработал верно!";
// blocktag.appendChild(new_element);



//задание 2.2
// В HTML-документе есть тег <p> c идентификатором title. 
// Напишите скрипт, который создает новый элемент <h2> в переменной new_element с текстовым содержимым 
// Сегодня солнечно, минус 15 и добавляет новый элемент сразу после тега с идентификатором title.
// Пример результата:
// <p id=”title”>О погоде<p>
// Пример результата:
// <p id=”title”>О погоде<p>
// <h2>Сегодня солнечно, минус 15</h2>


// let blocktag=document.getElementById("title");
// let new_element=document.createElement("h2");
// new_element.innerText="Сегодня солнечно, минус 15";
// blocktag.after(new_element);

//задание 2.3

// В HTML-документе задан тег <ul> c элементами <li> внутри. 
// Hапишите скрипт, который создает новый элемент <li> с текстовым содержимым Велосипед в переменной new_element 
// и добавляет его в начало списка <ul>.
// Пример заданного HTML-документа:
// <ul><li>Самокат</li></ul>
// Пример результата:
// <ul><li>Велосипед</li><li>Самокат</li></ul>

// let ul=document.getElementsByTagName("ul");
// let new_element=document.createElement("li");
// new_element.innerText="Велосипед";
// console.log(new_element);
// ul[0].prepend(new_element); // вставляет внутри тега вначале списка   // append наоборот вставляет внутри в конце

//задание 2.4

// В HTML-документе есть несколько тегов <div>. Напишите скрипт, который всем тегам <div> добавляет класс adds.
// Пример заданного HTML-документа:
// <div><p>Реклама</p></div>
// <div>Баннер</div>
// Пример результата:
// <div class="adds"><p>Реклама</p></div>
// <div class="adds">Баннер</div>

// let div=document.getElementsByTagName("div");
// for(i=0;i<div.length;i++){
//     div[i].className="adds";
// }

//задание 2.5

// В HTML-документе есть несколько тегов <p>. 
// Напишите скрипт, который присваивает каждому тегу идентификатор — от значения p_1 и до p_<n>. Тут n — количество параграфов.
// Пример заданного HTML-документа:
// <p>Абзац1<p>
// <p>Абзац2<p>
// Пример результата:
// <p id="p_1">Абзац1<p>
// <p id="p_2">Абзац2<p></p>

// let p=document.getElementsByTagName("p");
// for(i=0;i<p.length;i++){
//     p[i].id=`p_${i+1}`;
// }

//задание 2.6
// В HTML-документе заданы теги <p>. 
// Напишите скрипт, который удаляет теги, внутри которых хранится текстовое значение Delete.
// Пример заданного HTML-документа:
// <p>Delete<p>
// <p>Абзац<p>
// <p>Delete<p>
// Пример результата:
// <p>Абзац<p></p>

// let ptag=document.getElementsByTagName("p");
// console.log(ptag);
// for(i=0;i<ptag.length;i++){
//      if(ptag[i].innerText === "Delete"){
//         ptag[i].remove();
//         i--; // при удалении элемента длина коллекции уменьшается поэтому что бы не потерять два подряд тега с Delete нужно сделать декремент
//         }
// }

//задание 2.7

// В скрипте объявлен массив values, который состоит из чисел. 
// В HTML-документе есть множество тегов <p> с классом elems. 
// Необходимо дописать скрипт так, чтобы он удалил все теги <p> с классом elems, значение которых входит в массив values.
// Пример значений:
// values = [10, 50, 100]
// Пример заданного HTML-документа:
// <p class=”elems”>50</p>
// <p class=”elems”>20</p>
// <p class=”elems”>10</p>
// Пример результата в HTML-документе:
// <p class=”elems”>20</p>

// let elem=document.getElementsByClassName("elems");
// for(i=0;i<elem.length;i++){
//     for(j=0;j<values.length;j++){
//         if(parseFloat(elem[i].textContent) === values[j]){
//             elem[i].remove();
//             i--;
//             break;
//             }
//         }    
// }

//задание 2.8
// В HTML-документе заданы два <div> тега с идентификаторами div1 и div2. 
// Напишите скрипт, который позволит перенести содержимое тега с идентификатором div1 в конец тега с идентификатором div2.
// Пример заданного HTML-документа:
// <div id=”div1”><h2>Text</h2><span>subtext</span></div>
// <div id=”div2”><h1>Title</h1></div>
// Пример результата в HTML-документе:
// <div id=”div1”></div>
// <div id=”div2”><h1>Title</h1><h2>Text</h2><span>subtext</span></div>


// let div1=document.getElementById("div1");
// let div2=document.getElementById("div2");
// let textdiv1=div1.innerHTML;
// let textdiv2=div2.innerHTML;
// div1.innerHTML="";
// div2.innerHTML=textdiv2+textdiv1;

//задание 2.9
// В HTML-документе есть тег <ul> c идентификатором first. 
// Внутри этого тега есть теги <li>. 
// Напишите скрипт, который создает новый тег <li> в переменной new_element и добавляет в элемент <ul> с идентификатором first. 
// После добавления нового элемента выведите в консоль общее количество тегов <li> в теге <ul> с идентификатором first.
// Пример заданного HTML-документа:
// <ul id="first">
// <li>1</li>
// <li>2</li>
// <li>3</li>
// </ul>

// let new_element=document.createElement("li");
// let ul=document.getElementById("first");
// ul.append(new_element);
// let result=ul.querySelectorAll("li");
// console.log(result.length);


//задание 2.10

// В скрипте объявлена переменная values, которая содержит массив из строк. 
// В HTML-верстке есть два тега <div> с классами div1 и div2. 
// Допишите скрипт так, чтобы все теги <p> из тега с идентификатором div1, 
// значение которого встречается в списке values, переместились в тег с идентификатором div2.
// Пример значений:
// values = ["велосипед", "ролики", "лыжи"]
// Пример заданного HTML-документа:
// <div id="div1"><p>велосипед</p><p>лыжи</p><p>скейт</p></div>
// <div id="div2"></div>
// Пример результата в HTML-документе:
// <div id="div1"><p>скейт</p></div>
// <div id="div2"><p>велосипед</p><p>лыжи</p></div>

// const values = ["велосипед", "ролики", "лыжи"];
// let div1=document.getElementById("div1");
// let div2=document.getElementById("div2");
// let tagP=document.getElementsByTagName("p");
// let textDiv2=div2.innerHTML;
// for(i=0;i<tagP.length;i++){
//     for(j=0;j<values.length;j++){
//         if(tagP[i].innerHTML === values[j]){
//             div2.append(tagP[i]);
//             }
//      }
// }

//задание 2.11

// В скрипте объявлена переменная task, в которой хранится список из строк. 
// В HTML-верстке есть тег <div> с идентификатором root. Допишите скрипт так, 
// чтобы на основе значений списка сформировались теги <p> и добавились в элемент с идентификатором root.
// Пример значений:
// tasks = ["Проверить документы", "Отправить начальству", "Организовать собрание"]
// Пример результата в HTML-документе:
// <div>
// <p>Проверить документы</p><p>Отправить начальству</p><p>Организовать собрание</p>
// </div>

// const tasks = ["Проверить документы", "Отправить начальству", "Организовать собрание"];
// let divs=document.getElementById("root");
// for(i=0;i<tasks.length;i++){
// let p=document.createElement("p");
// p.innerText=tasks[i];
// divs.append(p);
// }

//задание 2.12

// Напишите программу, которая считает количество <div>-, <p>- и <h2>-тегов 
// и записывает его в объект tags, как в примере. Выведите сформированный объект в консоль.
// Пример заданного HTML-документа:
// <p>100</p>
// <p>200</p>
// <div>50</div>
// <h2></h2>
// <h2>40</h2>
// Пример результата:
// {"div": 1, "p": 2, "h2": 2}

// let TagH2=document.getElementsByTagName("h2");
// let numH2 = TagH2.length;

// let Divs=document.getElementsByTagName("div");
// let numDivs = Divs.length;

// let P = document.getElementsByTagName("p");
// let numP = P.length;

// let Newobj={};
// let tags=Object.assign(Newobj,{div: numDivs},{p: numP},{h2: numH2});
// console.log(tags);

//задание 2.13
// В HTML-документе есть тег <ul> с идентификатором tasks, 
// и внутри него есть несколько тегов <li> с текстом. 
// Напишите скрипт, который позволяет отсортировать элементы <li> в теге <ul> по длине содержимого.
// Пример заданного HTML-документа:
// <ul id="tasks">
// <li>Велосипед</li><li>Скейт</li><li>Самокат</li>
// </ul>
// Пример результата:
// <ul id="tasks">
// <li>Скейт</li><li>Самокат</li><li>Велосипед</li>
// </ul>

// let uls=document.querySelector("#tasks");
// let lis=uls.getElementsByTagName("li");
// console.log(uls);
// console.log(lis);
// let max=0;
// for(i=0;i<lis.length;i++){
// 	if(lis[i].textContent.length>max){
// 		max=lis[i].textContent.length;
// 		uls.appendChild(lis[i]);
// 	}
// }

//задание 3.1

// В HTML-документе задан тег <div> с идентификатором div_elem. 
// Напишите скрипт, который добавит в стиль данного элемента ширину и высоту по 100 пикселей.

// let div=document.getElementById("div_elem");
// console.log(div);
// div.style.height=100+"px";
// div.style.width=100+"px";

//задание 3.2

// В HTML-документе задан тег <p> с идентификатором rainbow. 
// Напишите скрипт, который указывает в стиле синий цвет текста (#2980b9).

// let p=document.getElementById("rainbow");
// p.style.color="#2980b9";

//задание 3.3

// В HTML-документе есть тег <label> и тег <input> с идентификатором target. 
// Необходимо написать скрипт, который присваивает тегу <label> атрибут, позволяющий привязать его к тегу <input>. 
// В результате при клике мышью на <label> тег <input> должен стать активным (в него должен переместиться курсор).

// let labels=document.getElementsByTagName("label");
// labels[0].htmlFor="target";

//задание 3.4

// В HTML-документе есть тег <p> c идентификатором rainbow. 
// Внутри этого тега указано число. Реализуйте скрипт, который делает преобразование в зависимости от следующих условий:

// Если числовое значение находится в диапазоне от 1 до 9 включительно, должно меняться значение атрибута style. Цвет текста — на красный (#c0392b).
// Если числовое значение находится в диапазоне от 10 до 20 включительно — на коричневый (#e17055).
// В ином случае — на желтый (#fdcb6e).

// let p=document.getElementById("rainbow");
// if(parseFloat(p.innerText)>=1 &&  parseFloat(p.innerText)<=9){
//     p.style.color="#c0392b";
// }
// else if(parseFloat(p.innerText)>=10 &&  parseFloat(p.innerText)<=20){
//     p.style.color="#e17055";
// }
// else{
//     p.style.color="#fdcb6e";
// }

//задание 3.5

// В HTML-документе есть тег <div> с идентификатором photo. 
// Внутри этого тега указана ссылка на картинку. Необходимо написать скрипт, который:
// заменит ссылку на тег <img> с этой картинкой,
// укажет размеры картинки в атрибуте style 100 на 100 пикселей

// let div=document.getElementById("photo");
// let textdiv=div.textContent;
// let img=document.createElement("img");
// div.innerHTML="";
// div.append(img);
// img.src=`${textdiv}`;
// img.style.height=100+"px";
// img.style.width=100+"px";

//задание 3.6

// В HTML-документе задан тег <select> c идентификатором numbers. 
// Напишите скрипт, который добавит внутрь этого тега несколько тегов <option> со значениями от 10 до 550 с шагом 10. 
// Значение у тега <option> должно быть указано внутри и в атрибуте value.

// let select=document.querySelector("#numbers");
// for(i=10;i<=550;i+=10){
//     let opt=document.createElement("option");
//     opt.innerText=`${i}`;
//     opt.setAttribute("value",`${i}`);
//     select.appendChild(opt);
//     }

//задание 3.7
// В HTML-документе задан тег <select>. 
// В скрипте объявлена переменная countries, в которой указаны некоторые страны. 
// Доработайте скрипт так, чтобы в тег <select> добавились теги <option> по одному на каждую страну из массива countries. 
// В качестве значения тега option укажите название страны, а в качестве атрибута — value первые две буквы страны в нижнем регистре (маленькими буквами).

// const countries = ["Armenia", "Russia", "Germany", "France", "Georgia"];

// let select=document.getElementsByTagName("select");
// for(i=0;i<countries.length;i++){
//         select[0].append(document.createElement("option"));
// }
// let option=document.getElementsByTagName("option");
// for(i=0;i<countries.length;i++){
// option[i].setAttribute("value",`${(countries[i].slice(0,2)).toLowerCase()}`);
// option[i].innerText=`${countries[i]}`
// }

//задание 4.1

// В HTML-документе задан тег <button> с идентификатором btn и тег <p> с идентификатором val. 
// Напишите скрипт, который выводит в консоль содержимое тега <p> при клике на кнопку.

// let p = document.querySelector("#val");
// let ptext = p.textContent;
// let but = document.querySelector("#btn");
// but.onclick = function(event){
// 	console.log(ptext);
// }

//задание 4.2

// В HTML-документе задан тег <button> с идентификатором btn и тег <input> с идентификатором val. 
// Напишите скрипт, который выводит в консоль значение тега <input> при клике на кнопку.

// let but = document.querySelector("#btn");
// let input = document.querySelector("#val");
// let textVal = input.getAttribute("value");

// but.onclick = function(event){
// 	console.log(textVal);
// }

//задание 4.3

// В HTML-документе задан тег <div> c идентификатором square в виде красного квадрата. 
// У него есть атрибут style с указанными высотой и шириной в 100 пикселей. 
// Напишите скрипт, который уменьшает ширину и высоту квадрата на 10% при клике по нему.

// let div = document.querySelector("#square");
// div.onclick = function(event){
//     div.style.width=parseFloat(div.style.width)*0.9+"px";
//     div.style.height=parseFloat(div.style.height)*0.9+"px";
// }


//задание 4.4

// В HTML-документе есть тег <button> с идентификатором clicker. 
// Напишите скрипт, который добавит обработку события клика на кнопку с идентификатором clicker. 
// При нажатии на кнопку число внутри тега <button> должно увеличиваться на один.

// let but = document.querySelector("#clicker");
// but.onclick = function(event){
//     but.innerText = parseFloat( but.innerText)+1;
// }

//задание 4.5

// В HTML-документе задан тег <button> с идентификатором delete и тег <ul> c идентификатором points и c элементами <li> внутри. 
// Напишите скрипт, который позволяет удалить последний элемент <li> в списке <ul> при нажатии на кнопку.

// let btn = document.querySelector("#delete");
// let ul = document.querySelector("#points");
// btn.onclick = function(event){
// ul.removeChild(ul.lastElementChild);
// }

//задание 4.6

// В HTML-документе задан тег <div> c идентификатором square. 
// Он представляет собой синий квадрат. 
// Напишите скрипт, который позволяет сделать <div> прозрачным (opacity: 0) при клике по нему.

// let div = document.querySelector("#square");
// div.onclick = function(event){
//     div.style.opacity= "0";
// }

//задание 4.7

// В HTML-документе задан тег <button> с классом copy. 
// Напишите скрипт, который позволит при нажатии на кнопку <button> 
// создать ее копию и расположить в конце тега body.

// let but = document.querySelector(".copy");
// let body = document.querySelector("body");
// let textbut = but.innerText;
// but.onclick = function(event){
//     let copy = document.createElement("button");
//         copy.innerText = textbut;
//         copy.classList.add("copy");
//        body.appendChild(copy);
// }

//задание 4.8
// В HTML-документе есть несколько тегов <p>. Внутри них указаны числа. 
// Напишите скрипт, который позволяет при нажатии на любой параграф увеличить его содержимое на единицу.

// let p = document.querySelectorAll("p");
// p.forEach((elementP) => {elementP.onclick = function(event){
//      let ptext = elementP.innerText;
//      elementP.innerText = (parseFloat(ptext)+1)+""; 
//     }})

//задание 4.9

// В HTML-документе есть два тега <div> с идентификаторами div1 и div2 с элементами <p> внутри. 
// Напишите скрипт, который перемещает тег <p> из одного тега <div> в другой при клике по этому элементу <p>.

// let div1 = document.querySelector("#div1");
// let div2 = document.querySelector("#div2");
// let pdiv1 = div1.querySelectorAll("p");
// let pdiv2 = div2.querySelectorAll("p");
//      pdiv1.forEach((element) => {
//           element.onclick = function(event){
//                div1.removeChild(element);
//                div2.appendChild(element);
//                }
//      } )
//      pdiv2.forEach((element) => {
//           element.onclick = function(event){
//                div2.removeChild(element);
//                div1.appendChild(element);
//                }
// })
