### Кострукторы:

**Конструктор** - функция, которая инкапсулирует в себе логику создания обьектов определенного типа
```javascript
function createObject(arg1, arg2, ...) {
    const object = {
        arg1,
        arg2,
        ...
    };

    return product;
}

const newObject = createObject(arg1, arg2, ...)
```


**Оператор new** - синтаксический сахар при создании обьектов
```javascript
function MyObject(arg1, arg2, ...) {
    this.arg1 = arg1;
    this.arg2 = arg2;
    ...
}

const newObject = new MyObject(arg1, arg2, ...) // инициализация обьекта

newObject.newArg = newArgValue // добавление атрибутов и свойств
```

#### Особенности работы с ```new```:

- создается новый пустой обьект;
- ключевое слово ```this``` получает ссылку на обьект;
- функция выполняется;
- возвращается ```this```

> - при вызове конструктора без ```new``` возвращается специальное значение ubdefined,
>   так как в таком случае необходим ```return```. (```new``` ссылыется на ```this```!!!)
>
> - если есть ```return``` в конструкторе --> 
>> ```return``` примитивное значение --> возврашщается создаваемый обьект
>>
>> ```return``` новый обект --> возвращается новый обьект

---

### Прототипы:

**Прототипы(prototype)** - механизм, при котором обьекты могут переиспользовать методы и свойства других обьектов
```javascript
// синтаксис MyObject.prototype позволяет назначать прототип обьекта, создоваемого через new MyObject
function MyObject(arg1, arg2, ...) { /*...*/ }
MyObject.prototype.newMethod = function() {
    return `${this.arg1}, ${this.arg2}, ...`
}

const myObject = new MyObject(arg1, arg2, ...)

// при этом можно переопределять мктоды для конкретного экземпляра
```

**instanceof** - проверка принадлежности экземпляра к определенному типу
> Проверяет всю цепочку прототипов

 ---

### Привязка контекста

**Context** - значение ```this```, указывающего на обьект, которому "принадлежит" текущий исполняемый код
**Отдалживание метода:**
```javascript
const myMethod = newObject.myMethod;
myMethod();

// в таком лучае this внутри функции перестает указывать на обьект, к которому привязан
```
> **Потеря контекста выполнения:**
> В зависимости от способа вызова ```meMethod```, ```this``` будет указывать на различные обьекты
```javascript
product.myMethod(); // this -> product

const myMethod = product.myMethod;
myMethod(): // this -> глобальный обьект
```

 ---

### Явная привязка контекста исполнения:

#### method **call**
signature:
```javascript
func.call(context, arg1, arg2, ...)
```

example:
```javascript
const getMethod = myObjct.getMetod;

getMethod(); // thos -> global object
getMethod.call(someObject); // this -> some object
```

#### method **apply**
signature:
```javascript
func.apply(cntext, [arg1, arg2, ...])
```

#### method bind
- метод прототиаа ```Fnction```, создающий функцию с приаязанным контекстом(thos code>)
signature:
```javascript
func.bind(context, arg1, arg2, ...)
```
example:
 **```bind```** возвращает новую функцию!
```javascript
const getMethod = item.getMethod;
const getMedhodBind = getMethod.bind(product); // this -> product
```

 ---

### Иерархия наследования
> **Наследование(inheriteance)** - свойства и методы родительского обьекта доступны и у дочернего обьекта

- Наследование основанное на прототипах.

    ``` javascript
    function Messenger(name) { // создание конструктора
        this.name = name;
    }

    Messenger.prototype.recipients = [ // добавление свойства
      001,
      002,
      003,
      004,
    ];

    Messenger.prototype.send = function(recipirnt, msg) { // добавление метода
        // TODO: send text message
        console.log(`message from ${recipirnt}: ${msg}`)
    };

    function MultiMessenger(name, logo) { // наследование
        Messenger.call(this, name);
        this.logo = logo;
    }

    const viber = new MultiMessenger('Viber', 'V-logo'); // создание экземпляра MultiMessenger
    MultiMessenger.prototype = object.create(Messenger.prototype); // доступ к методам родителя
    MultiMessenger.prototype.constructor = MultiMessenger; // укаание на нужный прототип(изначально указывает на родилтельсуий прототип)
    MultiMessenger.prototype.send = function(recipient, msg) { // переопределение метода send
        if (this.recipients.includes(recipirnt)) { // проверка наличие пользователя в базовом списке
            Mesenger.prototype.send.call(this, recipient, msg); // отдалживание родительского метода с подстановкой контекста
            return; // ранний выход
        }
        console.log(`Message from MultiMessage: ${recipient}: ${msg}`);
    }
 
    ```
- Наследование основанное на классах

    ```javascript
    class Messenger { // создвние родительского класса
        constructor(name) { // метод инициализации экзеспляра
            this.name = name;
        }
        send(recipient, msg) { //  метод вывода информации в консоль
            console.log(`message from ${recipient}: ${msg}`)
        }
    }

    Messenger.recipients = [ // добавление свойства
      001,
      002,
      003,
    ];

    class MultiMessenger extends Messenger { // создание дочернего класса
        consructor(name, logo) { // инициализация экземпляра дочернего класса
            super(name); // обращение к конструктору родительского класса
            this.logo = logo; // добавление уникальных свойств дочернего класса
        }

        send(recipient, msg) { // переопределение метода
            if (Messenger.recipients.includes(recipient)) {
                super.send(recipient, msg); // вызов родительского метода
                return;
            }
            console.log(`Message from MultiMessenger: ${recipient}: ${msg}`)
        }
    }

    const viber = new MultiMessenger('Viber', 'V-logo') // создание экземполяра класса

    ```
    > ```super()``` можно использовть только в конструкторе и только первым вызовом
---

### Классы

**Класс** - форма, обьеденяющая создание функции-конструктора и добавление функции в прототипы

```javascript
class Messenger {
    constructor(name) { // init в python
        this.name = name;

        Object.defineProperty(this, 'version', { // только чтение
            get: function() {
                return 'v-1';
            }
        });
    }
    send(recipient, msg) {
        console.log(`message from ${recipirnt}: ${msg}`)
    }
}
const baseMessenger = new Messenger('Basic'); // класс конструктор нельзя вызвать без new
```
> нельзя перебрать в цикле свойста класса, в отличие от функций-конструкторов
---
