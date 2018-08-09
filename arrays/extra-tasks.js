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
users.sort((a,b) => a.age - b.age)


/*Отображение
Создайте массив, содержащий только имена пользователей.*/
const names = users.map(info => info.name)


/*Фильтрация
Создайте массив, содержащий только совершеннолетних пользователей.*/
const adultUsers = users.filter(info => info.age >= 18)


/*Свертка
Найдите самого старшего.*/
function getOldest(arr) {
    const oldest = arr.reduce((oldest, current) => { return oldest > current.age ? oldest : current.age }, 0);
    return oldest;
}


/*Посчитайте средний возраст.*/
function getAverageAge(arr) {
    return users.reduce((sum, current) => { return sum + current.age}, 0) / users.length;
}


/*Сгруппируйте пользователей по возрасту.*/
function grouping(arr) {
    const usersByAge = arr.reduce((acc,current) => {
       if (!acc[current['age']]) {
        acc[current['age']] = []
    }
        acc[current['age']].push(current);
        return acc;
    }, {});
console.log(usersByAge)
}

grouping(users);

