# Контейнеры

- [Контейнер Set](#set)
- [Контейнер Map](#map)
- [Контейнер Weak](#weak)

## <a id='set'>Контейнер Set</a>

**Set** - класс, позволяющий хранить уникальные значения, учитывая типы.
```javascript
const set = new Set([1, 2, 2]); // Set(2) {1, 2}
const set = new Set([1, 2, '2']); // Set(3) {1, 2, '2'}
```

Методы экземпляра Set:\
`set.size` - количесвто элементов в коллекции  
`set.has(item)` - проверка наличия  
`set.add(item)` - добавление элемента в коллекцию  
`set.delete(item)` - удаление элемента из коллекции  
`set.clear()` - очистка коллекции  

Перебор элементов коллекции set:\
`for-of` - перебор в цикле  
`set.forEach(item => function(item))` - метод коллекций `forEach`  

---

## <a id='map'>Контейнер Map</a>

**Map** - класс, позволя.щий хранить пары ключ-значение  
- Любое значение может быить колючом  
- Сохраняет порядок вставки

Добавление значений в контейнер Map:
```javascript
const map = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'], 
])

// ключом может быть обьект
map.set(obj, 'value'); // задать значение по ключу
map.get(obj); // получить значение по ключу
```

Методы экземпляра Map:\
`map.set(key, value)` - добавить элемент в Map
`map.size` - количесвто элементов в коллекции  
`map.has(item)` - проверка наличия  
`map.delete(item)` - удаление элемента из коллекции  
`map.clear()` - очистка коллекции  

---

## <a id='weak'>Контейнер Weak</a>

- **WeeakMap** - Map-контейнер, имеющий определенные особенности:
    - ключом могут быть только обьекты
    - не препятствует борщику мусора(элемент удаляется при удаении ссылки на него) 
- **WeeakSet** - Set-контейнер, имеющий определенные особенности:
    - ключом могут быть только обьекты
    - не препятствует борщику мусора(элемент удаляется при удаении ссылки на него) 

---




