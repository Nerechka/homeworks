/*Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr
и возвращает новый массив, который содержит только числа из arr из диапазона от a до b.
То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция не должна менять arr.*/
const arr = [5, 4, 3, 8, 0];

function filterRange(arr, a, b) {
    let result = arr.filter(item => item >= a && item <= b);
    return result;
}

/*Добавить класс в строку. В объекте есть свойство className, которое содержит список «классов» – слов,
разделенных пробелом. Создайте функцию addClass(obj, cls), которая добавляет в список класс cls,
но только если его там еще нет.*/
const obj = {
    className: 'open menu'
}

function addClass(obj, cls) {
    const list = obj.className ? obj.className.split(' ') : [];
    if (list.some(item => { return item === cls})) {
        console.log('Класс уже существует');
        return;
    }
    list.push(cls)
    return obj.className = list.join(' ');
}


/*Перевести текст вида border-left-width в borderLeftWidth
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть, дефисы удаляются, а все слова после них получают заглавную букву.
P.S. Вам пригодятся методы строк charAt, split и toUpperCase.*/
function camelize(str) {
    return (
        str.split('-')
            .map((item, idx) => (idx === 0) ? item : item.charAt(0).toUpperCase() + item.slice(1))
            .join('')
    );
}

camelize("background-color");


/*Функция removeClass
У объекта есть свойство сlassName, которое хранит список «классов» – слов, разделенных пробелами.
Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть.
P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке.*/
const obj = {
    className: 'open menu open'
};

function removeClass(obj, cls) {
    const list = obj.className ? obj.className.split(' ') : console.log('Списка классов нет');
    while (list.some(item => { return item === cls })) {
        list.splice(list.indexOf(cls), 1);
        obj.className = list.join(' ');
    }
    console.log(obj.className);
    return
}

removeClass(obj, 'open');


/*Фильтрация массива "на месте"
Создайте функцию filterRangeInPlace(arr, a, b), которая получает массив с числами arr и удаляет из него все числа вне диапазона a..b.
То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция должна менять сам массив и ничего не возвращать.*/
const arr = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
    arr.filter((item, i, arr) => {
        item < a || item > b ? arr.splice(arr.indexOf(item), 1) : arr.push(item);
    });
    return arr;
}

filterRangeInPlace(arr, 1, 4);


/*Сортировать в обратном порядке*/
const arr = [5, 2, 1, -10, 8];

function compareReversed(a, b) {
    return b - a;
}

arr.sort(compareReversed);


/*Скопировать и отсортировать массив
Есть массив строк arr. Создайте массив arrSorted – из тех же элементов, но отсортированный.
Исходный массив не должен меняться.*/
const arr = ["HTML", "JavaScript", "CSS"];
const arrSorted = arr.slice().sort();


/*Случайный порядок в массиве
Используйте функцию sort для того, чтобы «перетрясти» элементы массива в случайном порядке.*/
const arr = [1, 2, 3, 4, 5];

const compareRandom = (a, b) => { return Math.random() - 0.5}
arr.sort(compareRandom);


/*Напишите код, который отсортирует массив объектов people по полю age.*/
const vasya = {name: "Вася", age: 23};
const masha = {name: "Маша", age: 18};
const vovochka = {name: "Вовочка", age: 6};

const people = [vasya, masha, vovochka];

const compareAge = (a, b) => { return a.age - b.age}
people.sort(compareAge);

______________________________________________________________________________________________
/*Отфильтровать анаграммы
Анаграммы – слова, состоящие из одинакового количества одинаковых букв, но в разном порядке.
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.*/
const arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

function aclean(arr) {
    const set = new Set();
    arr.map(item => {set.add(item.toLocaleLowerCase().split('').sort().join('')) });
    return Array.from(set);
}

aclean(arr)
______________________________________________________________________________________________


/*Оставить уникальные элементы массива
Пусть arr – массив строк.
Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.*
Cпасибо,Set,что ты есть*/
const strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", "8-()"
];

function unique(arr) {
    const set = new Set();
    arr.map(item => { set.add(item)});
    return Array.from(set);
}

unique(strings);


/*Код ниже получает из массива строк новый массив, содержащий их длины:
let arr = ["Есть", "жизнь", "на", "Марсе"];
let arrLength = [];
for (var i = 0; i < arr.length; i++) {
    arrLength[i] = arr[i].length;
}
alert( arrLength ); // 4,5,2,5
Перепишите выделенный участок: уберите цикл, используйте вместо него метод map.*/
const arr = ["Есть", "жизнь", "на", "Марсе"];

const arrLength = arr.map(word => { return word.length})

alert( arrLength )


/*Массив частичных сумм
На входе массив чисел, например: arr = [1,2,3,4,5].
Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.
Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов,
в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.
То есть:
для arr = [ 1, 2, 3, 4, 5 ]
getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
Еще пример: getSums([-2,-1,0,1]) = [-2,-3,-3,-2].
Функция не должна модифицировать входной массив.
В решении используйте метод arr.reduce.*/
const arr = [1,2,3,4,5];

function getSums(arr) {
    const result = [];
    if (arr.length === 0) return result;

    const commonSum = arr.reduce((sum, item) => {
        result.push(sum);
        return sum + item;
    });
    result.push(commonSum);
    return result;
}
