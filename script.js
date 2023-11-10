function result(){
    var sum = 0;
    var N = Number(document.forms["frm"].elements["N"].value);
    var x = Number(document.forms["frm"].elements["x"].value); 
    if(Math.abs(x)<Infinity){
        for(var n = 0; n <= N; n++){
            let factorialN = 1;
            if(n == 0) factorialN = 1;
            for(var i = 1; i <= n; i++){
                factorialN *= i;
            }
            sum += ((-1)**n*(x**n))/factorialN;
        }
        document.write(sum);
    } else{
        document.write("X не соответствует условию")
    } 
}