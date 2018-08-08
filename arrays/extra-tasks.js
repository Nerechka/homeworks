/*Еще задачи
Есть такой массив пользователей (имя, возраст, рейт)*/
const users = [
    { name: 'Vasya', age: 19, rate: 900 },
    { name: 'Dima', age: 18, rate: 1000 },
    { name: 'Sveta', age: 13, rate: 85 },
    { name: 'Petya', age: 14, rate: 100 },
    { name: 'Seryozha', age: 18, rate: 900 },
    { name: 'Valera', age: 14, rate: 150 }
];

/*Сорировка
Отсортируйте массив по возрасту пользователей от меньшего к большему.*/
users.sort(a,b => { return a.age- b.age })


/*Отображение
Создайте массив, содержащий только имена пользователей.*/
const names = users.map(info => { return info.name })


/*Фильтрация
Создайте массив, содержащий только совершеннолетних пользователей.*/
const eighteen = users.filter(info => {
    if (info.age >= 18) { return info }
})


/*Свертка
Найдите самого старшего.*/
function getOlder(arr) {
    const older = arr.reduce((older, current) => { return older > current.age ? older : current.age }, 0);
    return older;
}


/*Посчитайте средний возраст.*/
function getAverageAge(arr) {
    const sumAge = users.reduce((sum, current) => { return sum + current.age}, 0);
    return sumAge / users.length;
}


/*Сгруппируйте пользователей по возрасту.*/
/*без rate*/
function grouping(arr) {
    const group = {};
    arr.map(info => { group[info.age] = info.name })
    if (group.length === arr.length) {
        return group;
    }
    for (key in group) {
        arr.forEach(info => {
            const list = group[key].split(' ');
            if ((list.some(item => { return item !== info.name && key == info.age}))) {
                list.push(info.name)
                const set = new Set(list)
                group[key] = Array.from(set).join(' ');
            };
        })
    }
    return group
};

grouping(users);
