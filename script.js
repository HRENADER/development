function average() {
    var e = document.getElementById('e').value;
    var arr = e.split(', ');
    var average = 0;
    for (var i = 0; i < arr.length; i++) {
    average += Number(arr[i]);
    }
    average /= arr.length;
    if(average){
    alert("Среднее арифметическое чисел массива = " + average);
    } else{
    alert("Введены некорректные данные");
    }
    }