
// Анаграмма должна содержать одинаковые буквы:
// 'abba' & 'baab' == true
// 'abba' & 'bbaa' == true
// 'abba' & 'abbba' == false
// 'abba' & 'abca' == false

// Напишите функцию, которая найдет все анаграммы слова из списка. 
// Вам будет дано два аргумента слово и массив со словами.
// Вы должны вернуть массив всех анаграмм или пустой массив, если их нет


// const wordslist = ['baab','abbba','bbaa','abca'];
// let word = 'abcaaa'; 
// const anagrams = (word, wordslist) => {
//      let resultnegative=[];
//      let result = [];
//          let sortword = String(word.split("").sort());
//                for(i=0;i<wordslist.length;i++){
//                     if(String(wordslist[i].split("").sort()) === sortword){
//                          result.push(wordslist[i]);
//                                 }
//                             }
//                     if (result.length !== 0){
//                          return result;
//                     }
//                     else{
//                          return resultnegative;
//                     }
//                 }
// anagrams(word,wordslist);



//  Даны два массива с числами 
// Задача: 
// написать функцию, которая принимает два массива ( усложненная версия с неизвестным числом массивов)
// склеивает их
// и считает сумму 

// const first = [1, 2, 3];
// const second = [10, 1, 5];

// const arrayPlusArray = () => {
//     let sum=0;
//     let result = first.concat(second);
//     for(i=0;i<result.length;i++){
//         sum +=result[i];
//     }
//     return sum;
// };
// arrayPlusArray();

// const first = [1, 2, 3];
// const second = [10, 1, 5];

// const arrayPlusArray = () => {
//     let result = first.concat(second);
//     let sum = result.reduce((a,b)=> a+b,0)
//     return sum;
// }
// arrayPlusArray();