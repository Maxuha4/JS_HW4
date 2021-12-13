// Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result и выведите

let arr3 = [],
    arrW= []
    result = 0;


for(let i=23; i<=57; i++){
    arr3.push(i);
    result += i;
}

console.log(arr3);
console.log(result);

let n=23;

while(n>=23 && n<=57){
    arrW.push(n);
    n++;

}

console.log(arrW);
