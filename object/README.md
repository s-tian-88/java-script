### Обьекты и свойста обьектов

```javascript
const person = { // произвольный обьект
    name: 'Person name',
    age: 23
};

// Доступ к свойствам обьекта
console.log(person.name); // стандартный доступ к свойству обьекта
console.log(person['e-mail']); // альтернативный доступ к свойству обьекта

// доступ к свойствам вложенных обьектов:
const {name: { firstName }} = person;

// Сохранение значение свойства обьекта в переменную или константу:
const name = person.age; // стандартный подход
const { name, age, ... } = person; // деструктуризация обьекта(компактный вид)

// Удаление свойства обьекта:
delete person.name;

// Добавление свойства обьекта:
person.email = 'person@mail.com';
person['e-mail'] = 'person@mail.com;'

// Провека налиия свойста в обьекте(конструкция in):
console.log('name' in person);

// При Object Destruction можно назначить значения по-умолчанию при отсутствии таких полей в обьекте:
// При Object Destruction можно переименовать переименовать константу или переменную:
const {name, age, email: mail = 'default value'} = person;

// оператор остатка(rest-оператор "...")
const { name, ...data } = person; // data -> все остальные данные

// Создание поверхностной копии(оператор распостронение - spret-оператор "...")
const copyObject = { ...person };
// Свойства вложенных обьектов копируются отдельно
copeObject.name = { ...person.name }

// обьеденение обьектов при помози оператора распростронения:
 const merged = { ...person, ...someObject };
```

> Попытка обращения к несуществующему свойсту возвращает ```undefined```
>
> В JS добавлять и удалять свойства обьекта можно в любой момент

---

### Прототипы и цепочки прототипов

Наследование методов и свойств обьектов основано на цепочке прототипов
Свойсто ```__proto__``` позволяет обратиться к прототипу обьекта

```javascript
const person = { // произвольный обьект
    name: 'person name',
    age: 23
}

// создание обьекта через прототип Object
const person = new Object; //{}
person.name = 'person name';
person.age = 23;

console.log(person.__proto__); // доступ к прототипу обьекта
console.log(Object.getPrototypeOf(person)); // аналогичный результат
```

---

### Object

Методы встроенного интерфейса Object:
```javascript
const person = {
    name: 'person name',
    age: 23
};

const entry = {
    id: 001
};

// Назначение прототипа уже созданному обьекту:
Object.setPrototypeOf(person, entry); // entry нащначен прототипом person

// Более локаничный вариант(используется на практике):
const entry = {
    id: 001
}

const person = Object.create(entry);
person.name = 'person name';
person.age = 23;
```

---

### Перебор свойств

```javascript
// при переборе свойств в цикле for поиск ведется по всей цепочке прототипов
for (const property in obj) {
    console.log(property)
}
```

Прототип ```Object.prototype```` присваивает каждому обьекту метод ```hasOwnProperty````,
который позволяет определить, преадлежит ли свойство обьекту или берется из цепочки прототипов:
```javascript
for (const property in obj) {
    if(obj.hasOwnProperty(prop)) {
        console.log(prop)
    }
}
```

Object.keys()
```javascript
Object.keys(obj) // возвращает список собственный свойств обьекта
```

Object.defineProperty
При созании свойства в обьекте возможно создать ряд характеристик, которые определяют
поведение этого свойства:

- **configurable** - свойство может быть удалено из содержащего его обьекта
- **enumerable** - свойство можно увидеть через перечисление свойств(Object.keys())
- **value**  - значение, ассоциированное со свойством
- **writable** - значение, ассоциированное со свойством, может быть изменено
    с помощью оператора ```=```
- **get** - функция, используемая как ```getter``` свойства
- **set** - функция, используемая как ```setter``` свойства

```javascript
// Object.defineProperty
Object.definProperty(obj, 'property', { // указание обьекта и имени свойства
    value: 'property value', // значение свойста
    writable: false, // запрет на перезапись значения свойства
    configurable: false, // запрет на удаление свойства
    enumerable: false, // скрывает свойсвто при переборе свойств обьекта
    })
```
> Вызов ```Object.defineProperty(obj, 'property', {})``` без указания значения свойств дескриптора
> устанавливает все знаение в ```false```

Дескриптор собственных свойств обьекта:
```javascript
Object.getOwnPropertyDescriptor(obj, 'property') // возвращает обьект свойств дескриптора
```

Методы ```Object```, которые позволяют наложить ограничения на сам обьект:

- **Object.freeze(obj)** - запрещяет модифицировать свойства обьекта, включая добавление и 
    удаление, менять дескрипторы и изменять прототип
- **Object.seal(obj)** - freez + можно изменять значение существующих свойст, если они ```writable: true```
- **Object.preventExtention(obj)** - seal + можно удалять существующие свойства

> нельзя отменить дествия методов ```freeze, seal и preventExtention```, но можно узнать состояние обьекта
> при помощи методов: ```isFrozen, isSealed и isExtensible``` 

---

### Методы сравнения обьектов

Метод ```toString``` - строковое представление обьекта
```javascript
const obj = {
    toString: function() {
        return `Property: ${this.property}`;
        }
};

const obg = {
    toString() {
        return  `Property: ${this.property}`
    }
};

obj.toString = function() {
    return `Property: ${this.property}`;
};
```

> при использовании стрелочной функции при определении метода ```toString``` возвращаемые значение -> undefined,
> так как в стрелочных функциях контекст не определен, поиск осуществяется в области видимости выше.

**Сравнение свойств обьектов**

- метод ```valueOf``` - знаение, которое возвращает метод подставляется при сравнении обьектов
- **Object.is** - ```Object.is(a, b) === true``` в случаях:
    - a и b строки с одинаковым содержмнием и длиной
    - a и b равно ```true``` или a и b равно ```false```
    - a и b число и равны одному и тому же значению(но не +/-0 или NaN)
    - a и b число и равны +0, a и b число и равны -0
    - a и b равно ```undefined```
    - a и b равно```null```
    - a и b число и равны ```NaN```
    - a и b указвают на один обьект
    > В JS +0 и -0 - это разные числа.
    > ```===``` это игнорирует, а ```Object.is``` - нет

---

### Proxy & Reflect

**Proxy** - метод разработки, который позволяет фиксировать вызовы к оригинальному обьекту
```Вызывающий код``` => ```Proxy``` => ```Оригинальный обьект(target)```

Какие вызоввы может перехватывать **Proxy**:
- ```get``` - чтение свойств
- ```set``` - запись свойств
- ```has``` - оператор ```in```
- ```deleteProperty``` - оператор ```delete```
- ```getPropertyOf``` - вызов ```Object.getPropertyOf```
- ```setPropertyOf``` - вызов ```Object.setPropertyOf```
- ```isExtensible``` - вызов ```ObjectIsExtensible```
- ```preventExtention``` - вызов ```Object.precventExtention```
- ```geOwnPropertyDescription``` - ```Object.getOwnPropertyDescription```
- ```defineProperty``` - ```Object.defineProperty```
- ```ownKeys``` - Object.keys
- ```apply``` - вызов функции
- ```construct``` - вызов функции с ```new```

Example:
```javascript
const user = { // произвольный обьект
    name: 'user name',
    age: 23
}

const proxy = new Proxy(user, {
    get(target, key, reciver) {
        console.log(target, key, reciver);
        return Reflect.get(target, key, reciver)
    },
    set(target, key, value, reciver) {
        return Reflect.set(target, key, value, reciver);
    }
})
```
> ```target``` - целевой обьект\
> ```key``` - ключ\
> ```reciver``` - контекст
