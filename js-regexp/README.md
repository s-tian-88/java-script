### Регулярные выражения

**Регулярные выражения** - шаблоны, которые используются для сопоставления последовательностей символов в строках

Базовый синтаксис регулярных выражений:

Запись регулярных выражений:  
```/regexp``` - литерал  
```new Regext(regexp)``` - вызов функции-конструктор

Группы символов:  
```[abc]``` - любой из группы  
```[^abc]``` - любой не из группы  
```[a-z]``` - диапазон  

```\``` - экранирование специальных символов

Последовательности:  
```.``` - любой символ  
```\s``` - пробельный символ  
```\S``` - непробельный символ  
```\d``` - цифра  
```\D``` - нецифра  
```\w``` - буквенный символ  
```\W``` - небуквенный символ  

Квантификаторы:  
```?``` - встречается 0 или 1 раз  
```*``` - 0 и более раз  
```+``` - 1 и более раз  
```{n}``` - строго n раз подряд  
```{n,m}``` - диапазон от n до m раз подряд  
```[a-z]*``` - можно применять к группам символов  

Группировка:  
```(a | b)?``` - a или b встречается 0 или 1 раз  
```((a | b) c)``` - ac или bc встречается 0 или 1 раз  

Конец и начало строки:  
```^``` - начало строки  
```$``` - конец строки  

Flags:  
```/regex/flags``` - литеральная форма  
```new Regex('regex', 'flag')``` - конструктор  

```d``` -  создание индексов для совпадения подстрок  
```i``` - игнорирует регистр  
```m``` - позволяет ```^``` и ```$``` совпадать с символами новой строки  
```s``` - позволяет ```.``` сопостовлять символы новой строки  


### Методы строк для работы с регулярными выражениями  
```str.search(RegExp);``` - возвращает индекс первого соответствия или -1  
```str.match(RegExp)``` - возвращает специализированный обьект или null  
```str.split(RegExp|str, limit)``` - разбивает строку по разделителю  
```str.replace(RegExp, template)``` - замена подстроки  


### Дополнительный возможности:  
```/(?<groupName>re)/``` - именованные группы  
```x(?=y)``` - x перед y  
```x(?!y)``` - x после y  