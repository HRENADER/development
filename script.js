
function createObject(prof1, prof2, value1, value2) {
    return {
        [prof1]: value1,
        [prof2]: value2,
        Print(){
            return `${prof1}: ${value1}, ${prof2}: ${value2} <br>`;
        }
    }

}


var Persons = [
    new createObject('Имя', 'Возраст', 'Юрий', 19),
    new createObject('Имя', 'Возраст', 'Даниил', 19),
    new createObject('Имя', 'Возраст', 'Ильшат', 19)
];

var Cars = [
    new createObject('Марка', 'ДатаВыпуска', 'Land Rover Range Rover IV', 2018),
    new createObject('Марка','ДатаВыпуска', 'Chevrolet Corvette', 1997),
    new createObject('Марка','ДатаВыпуска', 'Toyota Mark II', 1992)
];

var Book = [
    new createObject('НазваниеКниги', 'ДатаПубликации', 'The Witcher. The Last Wish', 1986),
    new createObject('НазваниеКниги', 'ДатаПубликации', 'The Hobbit', 1937),
    new createObject('НазваниеКниги', 'ДатаПубликации', 'Дом в котором', 2000)
];
document.writeln('Люди' + '<br>');
for(var i = 0; i < Persons.length; i++){
    document.writeln(Persons[i].Print() + '<br>');
}
document.writeln('Машины' + '<br>');
for(var i = 0; i < Cars.length; i++){
    document.writeln(Cars[i].Print() + '<br>');
}
document.writeln('Книги' + '<br>');
for(var i = 0; i < Book .length; i++){
    document.writeln(Book[i].Print() + '<br>');
}





