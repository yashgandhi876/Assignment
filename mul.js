function multiply(num1=0, num2=0){
    let temp = num1*num2;
    if(temp < 0){
        temp *= -1;
    }
    console.log(temp);
}