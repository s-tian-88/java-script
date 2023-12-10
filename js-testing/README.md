testing
JEST - популярная система тестироваия
JEST в связке с @bsbel поддерживает import/export(esmodule)

syntax:
test('description' () => {
    let result = 0;
    expect(result).toBe(0)
    })

!!!
При отсутствии функции expect тесты будут проходить
Не использовать циклы и ветвления

Необходимые пакеты: 
npm install --save-dev jest
npm install --save-dev jest-babel
npm install --save-dev @babel/cre @babel/cli @babel/preset-env
npm install core-js@3

jest & eslint
npm install --save-dev eslint
npm install --save-dev eslint-config-airbnb-base

Настройки:
.eslintrc -> "env": {"jest": true}
.babelrc
package.json -> "scripts": {"test": "jest"}

Покрытие кода
Code Coverage - метрика, показывающая, насколько код покрыт автотестами
syntax: npm test -- --coverage
графическое отображение: ./coverage/lcov-report/index.html

Data Driven тесты:
Конструкция test.each позволяет проводить тест на наборе данных
syntax: test.each(table)(name, fn, timeout)

Mocks - обьект, эмулирующий необходимое поведение при тестировании

