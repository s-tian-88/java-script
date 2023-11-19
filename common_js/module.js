const key = "module1 value";
const short_format = "short vormat"

class Class {

}

module.exports = { // контсрукция экспорта CommonJS - обьект
    varName: key,
    short_format, // короткий формат записи доступен в новом стандарте JS
}

exports.__Class = Class; // объект exports - альтернативный способ экспорта
