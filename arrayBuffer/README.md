# ArrayBuffer

- [Типизированные массивы](#item1)
- [ArrayBuffer](#item2)
- [DataView](#item3)
- [Многопоточность в JavaScript](#item4)

## <a id="item1">Типизированные массивы</a>
**Typed Arrays** - масивоподобные обьекты, представляющие механизм доступа к сырым двоичным данным
- работа с графикой
- работа с аудио и видео
- архивация и разархивация файлов
- работа с криптографией
> добавлены в спецификации ECMAScript 6

Ключевые характеристики:
- все данные должны быть одного типа
- все данные должны быть примитивного типа
- фиксированные размеры
- данные идут последовательно без пропусков
- данные расположены в памяти последовательно

Доступные представления:
- `int8Arra()` - 8-ми битное число со знаком
- `Uint8Array()` - беззнаковае 8-ми битное число
- `Uint8ClampedArray()` - беззнаковое 8-ми битное число("зажатое")
- `int16Array()` - 16-ти битное число со знаком
- `Uint16Array()` - беззнаковое 16-ти битное число
- `int32Array()` - 32-х битное число со знаком
- `Uint32Array()` - беззнаковое 32-х битное число
- `Float32Array()` - 32-х битное вещественное число
- `Float64Array()` - 64-х битное вещественное число
- `BigInr64Array()` - 64-х битное число со знаком
- `BigUint64Array()` - беззнаковое 64-х итное число
> U - unsigned(беззнаковое)\
> 8 бит - 0-255\
> 16 бит - 0-65535
> Clamped - при переполнении принимает максимальное значение(1B - 255)

Syntax:
```javascript
const empty = new Uint8Array(); 
const sized = new Uint8Array(8);
const fromArray = new Uint8Array([1, 2, 3]);
```

**Typed Arrays** используют буферы для хранения данных, а один и тот же буфер может быть использован разными массивами

---

## <a id="item2">ArrayBuffer</a>

Syntax:
```javascript
const buffer = new ArrayBuffer(4); // -> ArrayBuffer{ [Uint8Contents]: <00 00 00 00>, byteLength: 4}
```

Представление ArrayBuffer:
```javascript
const buffer = new ArrayBuffer(4);
const view8 = new int8Array(buffer); // -> int8Array(4)[0, 0, 0, 0]
const view16 = new int16Array(buffer); // -> int8Array(2)[0, 0]
```

В **ArrayBuffer** можно хранить двоичное представление и других(нечисловых) данных:
```javascript
const str = 'random string';
const buffer = new ArrayBuffer(str.Length); // инициализация буфера по длине строки
const buffrView = new Uint8Array(buffer); // представление буфера в массиве с 8-ми битными значениями

for (let=0; i<bufferView.Length; i++) {
    bufferView[i] = str.charCodeAt(i);
}
```
> `str.charCodeAt(n)` -> возвращает код символа `n` или NaN, если `str.Length` < `n`.
> `String.fromCharCode(n)` - возвращает символ по коду

---

## <a id="item3">DataView</a>

**Byte order (endianness)**\
Схемы интерпритации последовательности байт:
- *big-endian* - сначала больший байт, затем меньший
- *little-endian* - сначала меньший байт, затем больший

Обьект **DataView** представляет операции для доступа к байтам `ArrayBuffer` без учета Byte Order:
```javascript
const buffer = new ArrayBuffer(2);

// little-endian - флаг true
new DataView(buffer).setint16(0, 256, true); // new int16Array(buffer)[0] === 256 

// big-endian - флаг little-endian не выставлен
new DataView(buffer).setint16(0, 256); // new int16Array(buffer)[0] === 1
```
---

## <a id="item4">Многопоточность в JavaScript</a>

*Код языка JavaScript выполняется в одном потоке*\
**Web Workers** - API, позволяющее исполнять скрипты в фоновом режиме независимо от скриптов, работающих с пользовательским интерфейсом.
> Реализация *Web Workers* есть в браузере. в *Node.js* есть *Worker Threads*

> *Web Workers* не имеют доступа к window? document и DOM, но при этом имеют доступ:
> - к тайм-футам и интервалам
> - сетевому взаимодействию
> - возможность создавать другие Workers



