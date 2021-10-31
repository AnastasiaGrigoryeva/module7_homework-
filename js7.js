//Модуль 7

//Задание 1.
//Написать, функцию, которая принимает в качестве аргумента объект и 
//выводит в консоль все ключи и значения только собственных свойств. 
//Данная функция не должна возвращать значение.


let obj ={};
obj.mark='Ford';
obj.date = 2010;
obj.color = 'black';
delete obj.color;

function showResult(){
    obj.hasOwnProperty;
    console.log(obj)
}
showResult()

//Задание 2.
//Написать функцию, которая принимает в качестве аргументов строку и 
//объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. 
//Функция должна возвращать true или false.

function TrueFalseFunc(){
    let a = "mark";
    let obj ={};
    obj.mark='Ford';
    obj.date = 2010;
    obj.color = 'black';
    if(a in obj) return true;
    return false

}
TrueFalseFunc()

//Задание 3.
//Написать функцию, которая создает пустой объект, но без прототипа.

function createObj(){
    const nullObj = Object.create(null);
    console.log(nullObj);
}
createObj()

//Задание 4.

//Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. 
//Реализуйте его на прототипах.

//Определить иерархию электроприборов. 
//Включить некоторые в розетку. Посчитать потребляемую мощность. 

//Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
//Выбрав прибор, подумайте, какими свойствами он обладает.

//Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
//Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
//У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
//Создать экземпляры каждого прибора;
//Вывести в консоль и посмотреть результаты работы, гордиться собой :)

function NewElectriAppliances(name, brand,color) {
	this.name = name; 
	this.brand = brand;  
    this.color= color;
}

NewElectriAppliances.prototype.power='220ВТ';

NewElectriAppliances.prototype.turn = function(){
    return "Вкл/Выкл"
}


const laptop = new NewElectriAppliances('Ноутбук','Lenova','Grey');

const phone = new NewElectriAppliances('Телефон','Apple','Black');


console.log(`У меня есть ${phone.name} у которого цвет ${phone.color} , так же я пользуюсь ${laptop.color} ${laptop.name} ${laptop.brand} для работы Все приборы я заряжаю под напрежением ${laptop.power}`);

// или alert(`У меня есть ${phone.name} у которого цвет ${phone.color} , так же я пользуюсь ${laptop.color} ${laptop.name} ${laptop.brand} для работы Все приборы я заряжаю под напрежением ${laptop.power}`)

//Задание 5.

//Переписать консольное приложение из предыдущего юнита на классы.

class NewElectriAppliances{
    constructor(name, brand,color){
        this.name = name; 
	    this.brand = brand;  
        this.color= color;
    }
    
}


NewElectriAppliances.prototype.power='220ВТ';

NewElectriAppliances.prototype.turn = function(){
    return "Вкл/Выкл"
}


const laptop = new NewElectriAppliances('Ноутбук','Lenova','Grey');

const phone = new NewElectriAppliances('Телефон','Apple','Black');


alert(`У меня есть ${phone.name} у которого цвет ${phone.color} , так же я пользуюсь ${laptop.color} ${laptop.name} ${laptop.brand} для работы. Все приборы я заряжаю под напрежением ${laptop.power}`);
