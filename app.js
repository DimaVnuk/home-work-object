'use strict'

let object = {
    name: 'Dima',
    surname: 'Vnuk',
    age: 18,
}

let name = 'Constantine';

object.sex = 'male';
object.nationality = 'Belarusian';

object.sayHello = function () {
    return this.name + ' hello'
};

object.sayGoodbye = function () {
    return 'Goodbye ' + name
};

object.stringKeyValue = function () {
    for (let key in object) {
        console.log(key + ': ' + object[key]);
    }
};

let checkObject = function (newObject) {
    for (let key in newObject) {
        if (typeof newObject[key] === 'object' && newObject[key] !== null) {
            return true
        }
    }
    return false
};

