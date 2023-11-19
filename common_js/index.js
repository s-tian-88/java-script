const importModule = require('./module.js'); // конструкция импорта CommonJS
const { short_format } = require('./module.js') // деструктуризация - извлечение конкретного экспортируемого значения

const { key: keyModule2} = require('./module2.js') // псевдоним для импорта одмнаковых имен из разных модулей(as => :)

const Clsss = require('./module').Class // импорт оного експортируемого значения

// В NodeJS есть несколько предустановленных пакетов, из импорт очуществляется аналогичнм оразом
const fs = require('fs')

// импорт npm модулей
const moment = require('moment')

console.log(importModule);
console.log(importModule.varName); // обращение к конкретному экспортируемому значению как к свойству
console.log(short_format);
// console.log(fs)
console.log(moment)
