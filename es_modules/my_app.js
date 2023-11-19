// По умолчанию модули загружаются синхронно

import './script1.js' // импорт модуля обязательно с указанием относительного пути
import { varName, className } from './script1.js' // импорт конкретной экспортируемой переменной
import defaultData from './script1.js' // импорт экспорта по умолчанию(имя можт быть любым)
import './script1.js' // модули загружаются один только раз, этот код бужет проигнорирован
import { varName as script2VarName , className as script2ClassName} from './script1.js' // использовать псевдонимы для импорта одинаковых имен
import script1DefaultData, * as script1 from './script1.js' // импорт значения по умолчанию и всех експортируемых значений из модуля(обращение как к свойсову - script2.varName)

import('./script2.mjs').then(function (moduleData) { // асинхронное импортирования модуля, код тела функции исполнится после загрузки модуля
    console.log("asincyo script2 executed")
})

// import { varName } from './script2.mjs' // SyntaxError - identifer has already been declated

// import defaultData, { varName, className } from './script2.js' // импорт экспорта по умолчанию с импортом конеретных экспортныъх переменных

// import { data } from './script1.js' // импорт неэкспортируемых значений приводит к исключению

// varName = 'new value script2' // импортируемые значение переопределить нельзя, они доступны только для чтения(Type  Error)

console.log('my_app executed')
console.log(varName, className)
console.log(defaultData)
