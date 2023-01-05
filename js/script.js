// create element
// function createElem() {
//     let boxOne = document.createElement('div');
//     box.className = "alert";
//     boxOne.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
// }
// createElem();


// add text to block
// function createTxt() {
//     let txtElem = document.querySelector('.test');
//     txtElem.write('text <br> text');
// }
// createTxt();


// Преобразование к логическому типу
function one() {
    console.log(Boolean(0));          // false
    console.log(Boolean(-0));         // false
    console.log(Boolean(+0));         // false
    console.log(Boolean(null));       // false
    console.log(Boolean(false));      // false
    console.log(Boolean(NaN));        // false
    console.log(Boolean(undefined));  // false
    console.log(Boolean(''));         // false

    console.log(Boolean(-1));          // true
    console.log(Boolean(Infinity));    // true
    console.log(Boolean(-Infinity));   // true
}

// возведение в квадрат
function one() {
    let r = 5;
    let p = 3.14;
    let square = Math.pow((r * p), 2);
    console.log(square);
}


// square square
function two() {
    let a = 4;
    let square = 2 * a;
    console.log(square);
}


// посчитать периметр
function one() {
    function three(a, b) {
        let p = (a * 2) + (b * 2);
        console.log(p);
    }
    three(5, 4);
}


// Convert Celsius to Fahrenheit
function one() {
    function convertCelFahr(cf) {
        let conv = (cf * 9 / 5) + 32;
        console.log(conv + ' °F')
    }
    convertCelFahr();
}


// Convert Fahrenheit to Celsius
function one() {
    function convertFahcCel(fc) {
        let conv = (fc - 32) * 5 / 9;
        console.log(conv + ' °C')
    }
    convertFahcCel(100);
}


// working with arrays
function arrOne() {
    let arrOne = [1, 2, 3];
    let arrTwo = ['man', 'woman', 'androgyne'];
    console.log(arrOne[0], arrTwo[0]); // 1 man
    console.log(arrOne[0] + arrOne[1] + arrOne[2]); // 6
    console.log(arrOne.length); // 3
    console.log(arrTwo[arrTwo.length - 1]); // androgyne
    arrTwo[0] = 'm'; // change elem in massive
    arrTwo[1] = 'w'; // change elem in massive
    arrTwo[2] += '?'; // change elem in massive
    console.log(arrTwo);
}


// add elements to the end of an array
function arrTwo() {
    let arr = [];
    arr.push('a'); // add elements to the end of an array
    arr.push('elem'); // add elements to the end of an array
    console.log(arr);
}


// array keys from variables
function arrThree() {
    let arr = [2, 2, 3];
    let key1 = 0;
    let key2 = 1;
    let key3 = 2;
    console.log(arr[key1] + arr[key2] + arr[key3]); // sum of elems by keys
}


// delete elems from array
function arrDel() {
    let arr = ['a', 'b', 'c', 'd', 'e'];
    delete arr[4];
    console.log(arr);
    console.log(arr.length);
}


// object create, show
function objectOne() {
    let obj1 = { 1: 'a', 2: 'b', 3: 'c' };
    console.log(obj1[2]); // show elems by keys
    let obj = { name: 'ivan', surname: 'dorn', prof: 'singer' };
    console.log(obj['name'] + ' ' + obj['surname'] + ' ' + obj['prof']); // show elems by keys
    let data = { year: '2020', month: 'may', day: '15' };
    console.log(data.year + ' ' + data.month + ' ' + data.day); // show elems - shorter way
}


// array of object keys
function objKeys() {
    let obj = { a: 1, b: 2, c: 3 };
    console.log(Object.keys(obj)); // show keys
    let obj2 = { x: 1, y: 2, z: 3 };
    console.log(Object.keys(obj2).length); // amount elems
}


// if else
function conditionOne() {
    let test1 = '123';
    let test2 = 123;
    if (test1 === test2) { // === сравнение не только по значению, но и по типу данных
        console.log('yes');
    } else {
        console.log('no')
    }
}


// группировка условий && and || с помощью скобок
function conditionTwo() {
    let num = 3;
    if ((num == 9) || (num > 10 && num < 20) || (num > 20 && num < 30)) {
        console.log('+++');
    } else {
        console.log('---');
    }
    // инвертирование логических выражений
    let num1 = 4;
    if (!(num1 >= 0 || num1 <= 10)) {
        console.log('+++');
    } else {
        console.log('---');
    }
}


// calculate the seasom from month
function season() {
    let month = 4;
    if (month <= 2 || month == 12) {
        console.log('winter');
    } else if (month <= 5 && month >= 3) {
        console.log('spring');
    } else if (month <= 8 && month >= 6) {
        console.log('summer');
    } else if (month <= 11 && month >= 9) {
        console.log('summer');
    } else {
        console.log('not a month');
    }
}


// check first symbol
function firstSymbolCheck() {
    let str = 'abcde';
    if (str[0] == 'a') {
        console.log('yes')
    } else {
        console.log('no')
    }
}

// sum first 3 number equals last 3 number
function check2() {
    let num = 123123;
    let n1 = Number(num[0] + num[1] + num[2]);
    let n2 = Number(num[3] + num[4] + num[5]);
    console.log(n1);

    if (n1 == n2) {
        console.log('yes')
    } else {
        console.log('no')
    }
}


// sum of symbols into number
function nestElems() {
    let num = 14;
    let numStr = String(num);
    if (num > 10 && num < 100) {
        console.log(Number(numStr[0]) + Number(numStr[1]));
    } else {
        console.log('no')
    }
}


// switch-case
function switchLang() {
    let lang = 'es';
    switch (lang) {
        case 'ru':
            console.log('ru');
            break;
        case 'en':
            console.log('en');
            break;
        case 'es':
            console.log('es');
            break;
        default:
            console.log('empty');
            break;
    }
    // switch-case without break
    let lang2 = 'en';
    switch (lang2) {
        case 'ru':
            console.log('ru');
        case 'en':
            console.log('en');
        case 'es':
            console.log('es');
        default:
            console.log('empty');
    }
}


// сократить запись: тернарный оператор
function tern() {
    let num = 18;
    let res;
    if (num > 10) {
        res = 'more than 10';
    } else {
        res = 'less than 10';
    }
    console.log(res);
    // сокращенная запись
    let numShort = 8;
    let resShort = num > 10 ? 'more than 10' : 'less than 10';
    console.log(res);
}


// функция confirm
function howOld() {
    let ok = confirm('Do more than 18?')
    if (ok) {
        console.log('Welcome!')
    } else {
        console.log('Forbidden!')
    }
}


// внешняя переменная
function checkLength() {
    let arr = [1, 2];
    let amount;
    if (arr.length >= 3) {
        amount = 'yes';
    } else {
        amount = 'no';
    }
    console.log(amount);
}


// check first and last symbol of string
function check2() {
    let str = 'focus';
    if (str[0] == 'f' && str[str.length - 1] == 's') {
        console.log('yes')
    } else {
        console.log('no')
    }
}


// check last number - even or odd
function check3() {
    let num = 29;
    let str = String(num);
    let last = str[str.length - 1];
    console.log(last);
    if (last == '0' || last == '2' || last == '4' || last == '6' || last == '8') {
        console.log('even')
    } else {
        console.log('odd')
    }
}


// check number by % - even or odd 
function check4() {
    let num = 15;
    let num2 = num % 2;
    if (num2 == 0) {
        console.log('even')
    } else {
        console.log('odd')
    }
}


// loop for - show only odd numbers
function forOne() {
    for (let i = 1; i < 20; i += 2) {
        console.log(i);
    }
}


// loop - for - show numbers in reverse order
function forTwo() {
    for (let i = 20; i > 0; i--) {
        console.log(i);
    }
}


// loop - 'for in' -> OBJECT
function forThree() {
    let obj = { a: 1, b: 2, c: 3 };
    for (let key in obj) {
        console.log(key); // show keys of elems
        console.log(obj[key]); // show elems of object
    }
}


// loop -> 'while'
function whileOne() {
    let i = 11;
    while (11 <= i && i <= 20) { // show numbers in interval
        console.log(i);
        i++;
    }
    let x = 1;
    while (x < 10) {
        console.log(x * 3); // multipy each result
        x++;
    }
}


// loop 'for' for array
function forFour() {
    let arr = ['a', 'b', 'c', 'd', 'e'];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    let arr3 = ['a', 'b', 'c', 'd', 'e'];
    for (let i = 5; i > 0; i--) { // reverse order
        console.log(arr3[i]);
    }
}


// conditions for array -> 'for of'
function forFive() {
    let arr = [2, 5, 9, 15, 1, 4];
    for (let elem of arr) {
        if (elem > 3 && elem < 10) {
            console.log(elem);
        }
    }
}


// conditions for object -> 'for it'
function forSix() {
    let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
    for (let elem in obj) {
        if (obj[elem] % 2 != 0) { // show only odd values of elems
            console.log(obj[elem]);
        }
    }
}


// sum of even numbers by loop 'for'
function forSeven() {
    let num = 0;
    for (let i = 0; i <= 10; i = i + 2) {
        num = num + i;
    }
    console.log(num);
}


// 'for of' sum of elems in array
function forEight() {
    let arr = [2, 5, 9, 3, 1, 4];
    let res = 0;
    for (const elem of arr) {
        res = res + elem;
    }
    console.log(res);

    // 'for of' sum only odd elems in array
    let arr2 = [2, 5, 9, 3, 1, 4];
    let res2 = 0;
    for (const elem2 of arr2) {
        if (elem2 % 2 !== 0) {
            res2 = res2 + elem2;
        }
    }
    console.log(res2);
}


// create string with 5 '-' using loop 'for'
function forNine() {
    let str = '';
    for (let i = 0; i <= 5; i++) {
        str = str + '-';
    }
    console.log(str);

    let str2 = '-';
    for (let i = 0; i <= 5; i++) {
        str2 = str2 + i + '-';
    }
    console.log(str2);
}


// get first number of each iteration by loop 'for'
function forTen() {
    for (let i = 0; i <= 30; i++) {
        let str = String(i);
        console.log(str[0]);
    }
    // sum of first and second number
    for (let i = 10; i <= 30; i++) {
        let str = String(i);
        let num1 = str[0];
        let num2 = str[1];
        console.log(Number(num1) + Number(num2));
    }
    // get sum and number of iteration whitch sum is 5
    for (let i = 0; i < 30; i++) {
        let str = String(i);
        let num1 = str[0];
        let num2 = str[1];
        let sum = Number(num1) + Number(num2);
        if (sum == 5) {
            console.log(sum)
            console.log(i)
        }
    }
}


// using 'break'
function breakOne() {
    let arr = [2, 5, 9, 0, 1, 4];
    for (let elem of arr) {
        console.log(elem);
        if (elem == 0) { // when we find in array '0' we stop iterations
            break;
        }
    }
}


// nested loops 'for' - вложенные циклы
function forEleven() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 3; j++) {
            console.log(i); // 111222333444
        }
    }
}


// method 'push' for array
function pushOne() {
    let arr = [];
    for (let i = 1; i <= 5; i++) {
        arr.push(i);
    }
    console.log(arr); // [ 1, 2, 3, 4, 5 ]

    let arr2 = [];
    for (let i = 1; i <= 5; i++) {
        arr2.push('x');
    }
    console.log(arr2); // [ "x", "x", "x", "x", "x" ]

    let arr3 = [2, 4, -6, -9, 0];
    let arr4 = [];
    for (let elem of arr3) {
        if (elem > 0) {
            arr4.push(elem); // push number only more than 0 in new array
            console.log(arr4); // Array [ 2, 4 ]
        }
    }
}


// loop 'for' возвести в квадрат каждый элемент массива
function forTwelve() {
    let arr = [1, 2, 3, 4, 5]
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
        console.log(arr[i]);
    }
}


// создать объект из двух массивов с помощью двух циклов
function obj3() {
    let keys = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    let values = [1, 2, 3, 4, 5, 6, 7];
    let obj = {};
    for (let i = 0; i <= 7; i++) {
        let key = keys[i];
        let value = values[i];
        obj[key] = value;
    }
    console.log(obj);
}


// 'for in' возвести в квадрат каждое значение в объекте
function forIn1() {
    let obj = { x: 1, y: 2, z: 3 };
    for (const key in obj) {
        obj[key] = obj[key] * obj[key];
    }
    console.log(obj);
}


// using 'flag true-false' for check existing symbol 'c'
function flagOne() {
    let arr = ['a', 'b', 'c', 'd', 'e'];
    let flag = false;
    for (let elem of arr) {
        if (elem == 'c') {
            flag = true;
            break;
        }
    }
    if (flag == true) {
        console.log('yes');
    } else {
        console.log('no')
    }
}


// using 'for of' count how many symbols '3' and '2' in array
function countSymbol() {
    let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
    counter = 0;
    for (let elem of arr) {
        if (elem == 3 || elem == 2) {
            counter++;
        }
    }
    console.log(counter); // 7
}


// how many symbols in string
function howMany() {
    let srt = 'kosmos';
    let count = {};
    for (let i = 0; i <= 6; i++) {
        if (count[i] === 'undefined') {
            count[i] = 1;
        } else {
            count[i]++;
        }
    }
    console.log(count); // Object { 0: 1, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1 }
}


// математические методы
function mathFunc() {
    console.log(Math.round(5.4)) // 5
    console.log(Math.ceil(3.3)) // 4
    console.log(Math.floor(3.3)) // 3

    let num = 2.2345; // округлить до двух знаков
    console.log(num.toFixed(2)); // 2.23

    console.log(Math.max(3, 5, 10, 34, 100)); // 100
    console.log(Math.min(3, 5, 10, 34, 100)); // 3
    console.log(Math.random()); // 0.24661619295909443
    console.log(Math.abs(-3)); // 3

    console.log(Math.pow(5, 3)); // 125 - 5 в третьей степени
    console.log(Math.sqrt(16)); // 4 - квадратный корень
}


// Using return
function retOne() {
    function func(num) {
        return num ** 2; // возвести значение в квадрат
    }
    let res = func(3); // записать функцию в переменную
    console.log(res);
}


// вложенные функции - квадратный корень из числа и округление его до трех знаков
function vlFunc() {
    let num = 9;
    function sqrt(num) {
        return Math.sqrt(num);
    }
    function round(num) {
        return num.toFixed(3);
    }
    let re1 = round(sqrt(num)); // вложение функций
    let res = ((Math.sqrt(num)).toFixed(3)); // короткий способ
    console.log(re1); // 3.000
    console.log(res); // 3.000
}


// using return is important sometimes
function one() {
    function func(num) {
        let sum = 0;
        for (let i = 1; i <= num; i++) {
            sum += i;
        }
        return sum; // сумма каждого числа с порядковым номером
    }
    console.log(func(5));
}



// 'return' into loop
function returnTwo() {
    function func(num) {
        for (let i = 25; i <= 25; i--) {
            num = num / 2;
            if (num <= 10) {
                return i;
            }
            console.log(i);
        }
    }
    func(25);
    // console.log(func(100));
}


// разделить на 2 пока результат не будет менее 10 
function whileOne() {
    function func() {
        let i = 30;
        let num;
        let n = 0;
        while (i) {
            n++;
            num = i / 2;
            console.log(n);
            if (num <= 10) {
                return i;
            }
            i--;
        }
    }
    func();
}


// textContent - change text using 'textContent' - get sum of elems
function func00() {
    let btn = document.querySelector('.func00__btn');
    let elem = document.querySelector('.func00__txt');
    let num = document.querySelector('.func00__number');
    let num1 = num.textContent; // get string using 'textContent'

    btn.addEventListener('click', function () {
        let arr = num1.split(''); // get array from string
        let res = 0;
        for (let elem of arr) {
            res = Number(res) + Number(elem); // get sum of elems
        }
        num.innerHTML = res; // show sum
        console.log(res); // show sum
        elem.textContent = 'show sum of numbers'; // change text using 'textContent'
        console.log(elem.textContent); // show text using 'textContent'
    })
}
func00();


// get number from tag and add 1
function func01() {
    let num = document.querySelector('.func01__num');
    let btn = document.querySelector('.func01__btn');
    btn.addEventListener('click', function () {
        let number = Number(num.textContent) + 1;
        num.innerHTML = number;
        console.log(number);
    })
}
func01();


// add random text
function func02() {
    let txt = document.querySelector('.func02__text');
    let btn = document.querySelector('.func02__btn');
    btn.addEventListener('click', function () {
        let txtRandom = Math.random().toString(36).substring(2, 7);
        let addRandomTxt = String(txt.textContent) + ' ' + String(txtRandom);
        txt.innerHTML = addRandomTxt;
        console.log(addRandomTxt);
    })
}
func02();


// get value and change type in input
function func03() {
    let myInput = document.querySelector('.func03__input');
    let btn = document.querySelector('.func03__btn');
    btn.addEventListener('click', function () {
        let getValue = myInput.value; // get value from input
        myInput.type = 'text'; // change type of input
        console.log(getValue);
        console.log(myInput.type);
    })
}
func03();


// change src for img
function func04() {
    let img1 = document.querySelector('.func04__img1');
    let img2 = document.querySelector('.func04__img2');
    let btn1 = document.querySelector('.func04__btn1');
    let btn2 = document.querySelector('.func04__btn2');
    let img1src = img1.getAttribute('src');
    let img2src = img2.getAttribute('src');
    btn1.addEventListener('click', function () {
        img1.src = img2src; // change src for img
        console.log(img2src);
    })
    btn2.addEventListener('click', function () {
        img2.src = img1src; // change src for img
        console.log(img1src);
    })
}
func04();


// change value content into input
function func05() {
    let btn = document.querySelector('.func05__btn');
    btn.addEventListener('click', function () {
        document.querySelector('.func05__input').value = 'new text'; // add new text in input
    })
}
func05();


// focus / blur for cousor
function func06() {
    let elem = document.querySelector('.func06__input');
    elem.addEventListener('focus', function () {
        document.querySelector('.func06__input').value = 'yes';
        console.log(document.querySelector('.func06__input').value);
    })
    elem.addEventListener('blur', function () {
        document.querySelector('.func06__input').value = 'no';
        console.log(document.querySelector('.func06__input').value);
    })
}
func06();


// get className and add new class into tag
function func07() {
    let elem = document.querySelector('.func07__input');
    let btn = document.querySelector('.func07__btn');
    btn.addEventListener('click', function () {
        let newClass = 'active';
        elem.value = elem.className + ' ' + newClass; // get className and add new class
    })
}
func07();


// using this for add attribute
function func08() {
    let elem = document.querySelector('.func08__input');
    let btn = document.querySelector('.func08__btn');
    elem.addEventListener('focus', function () {
        this.value = 'yes';
    })
    elem.addEventListener('blur', function () {
        this.value = 'no';
    })
    btn.addEventListener('click', function () {
        this.value = Number(btn.value) + 1;
        this.innerHTML = this.value;
    })
}
func08();


// add symbols for each string using 'this', 'loop' and 'array'
function func09() {
    let strs = document.querySelectorAll('.func09__item'); // get array
    for (let str of strs) {
        str.addEventListener('click', function () {
            str.textContent = String(str.textContent + '!') // add symbol
            console.log(this.textContent);
        })
    }
}
func09();


// add and remove string using 'addEventListener' and 'removeEventListener'
function func10() {
    let btn = document.querySelector('.func10__btn');
    btn.addEventListener('click', removeText);
    function removeText() {
        btn.value = String(btn.value + ' new string'); // add new string
        btn.innerHTML = btn.value;
        this.removeEventListener('click', removeText); // restrict new click
        console.log(btn.value);
    }
}
func10();


// stop increase if number more 5
function func11() {
    let btn = document.querySelector('.func11__btn');
    let box = document.querySelector('.func11__box').textContent;
    let boxDiv = document.querySelector('.func11__box');
    btn.addEventListener('click', function () {
        if (box < 5) {
            box = Number(box + 1);
            boxDiv.innerHTML = box;
        } else {
            return;
        }
        console.log(box);
    })
}
func11();


// add and change CSS style
function func12() {
    let btn = document.querySelector('.func12__btn');
    let box = document.querySelector('.func12__box');

    btn.addEventListener('click', function () {
        box.style.fontSize = '2rem';
        box.style.color = '#ccc';
    })
}
func12();


// switch tab button
function func13() {
    let btns = document.querySelectorAll('.func13__btn');
    for (let btn of btns) {
        btn.addEventListener('click', function () {
            btns[0].classList.remove('active');
            btns[1].classList.remove('active');
            btns[2].classList.remove('active');
            this.classList.add('active');
        })
    }
}
func13();


// methods for DOM elements
function func14() {
    let box = document.querySelector('.func14__box');
    let emptyBox = document.querySelector('.firstEmpty');
    let btn1 = document.querySelector('.firstElementChild');
    let btn2 = document.querySelector('.lastElementChild');
    let btn3 = document.querySelector('.children');
    let btn4 = document.querySelector('.childNodes');
    let btn5 = document.querySelector('.parentElement');
    let btn6 = document.querySelector('.closest');
    let btn7 = document.querySelector('.matches');
    let btn8 = document.querySelector('.contains');
    let btn9 = document.querySelector('.previousElementSibling');
    let btn10 = document.querySelector('.nextElementSibling');

    btn1.addEventListener('click', function () {
        emptyBox.textContent = box.firstElementChild.textContent;
    })

    btn2.addEventListener('click', function () {
        emptyBox.textContent = box.lastElementChild.textContent;
    })

    btn3.addEventListener('click', function () {
        emptyBox.innerHTML = box.children;
        console.log(box.children);
    })

    btn4.addEventListener('click', function () {
        emptyBox.textContent = box.childNodes;
        console.log(box.childNodes);
    })

    btn5.addEventListener('click', function () {
        emptyBox.textContent = box.parentElement.className;
    })

    btn6.addEventListener('click', function () {
        emptyBox.textContent = box.closest; // find to closest element
        console.log(box.closest);
    })

    btn7.addEventListener('click', function () {
        if (emptyBox.matches('#test')) { // check match selector or not
            emptyBox.textContent = 'yes';
        } else {
            emptyBox.textContent = 'no';
        }
    })

    let spanOne = document.querySelector('#contains_id');
    btn8.addEventListener('click', function () {
        if (btn8.contains(spanOne)) { // check elem in child using 'contains'
            emptyBox.textContent = 'yes';
        } else {
            emptyBox.textContent = 'no';
        }
    })

    btn9.addEventListener('click', function () {
        emptyBox.textContent = btn9.previousElementSibling.textContent; // previous siblings
    })

    btn10.addEventListener('click', function () {
        emptyBox.textContent = btn10.nextElementSibling.textContent; // next siblings
    })
}
func14();


// using attributs
function func15() {
    let elem1 = document.querySelector('#func15__elem');
    let btn1Atr = elem1.dataset.text; // get attribute from elem
    let btn1 = document.querySelector('#func15__btn');

    btn1.addEventListener('click', function () {
        elem1.textContent = elem1.textContent + ' ' + btn1Atr;
        console.log(elem1.textContent);
    })
}
func15();


// data-num for array
function func16() {
    let elemsArr = document.querySelectorAll('.func16__box div')
    for (const elem of elemsArr) {
        elem.addEventListener('click', function () {
            this.textContent = this.textContent + ' ' + this.dataset.num;
            console.log(this.dataset.num);
        })
    }
}
func16();


// disabled by click
function func17() {
    let input1 = document.querySelector('.func17__input1');
    let input2 = document.querySelector('.func17__input2');
    let btn1 = document.querySelector('.func17__btn');

    btn1.addEventListener('click', function () {
        input2.disabled = false;
    })
}
func17();


// checked for checkbox by click
function func18() {
    let input1 = document.querySelector('.func18__input1');
    let input2 = document.querySelector('.func18__input2');
    let btn1 = document.querySelector('.func18__btn1');
    let btn2 = document.querySelector('.func18__btn2');

    btn1.addEventListener('click', function () {
        input1.checked = !input1.checked;
    })
    btn2.addEventListener('click', function () {
        input2.checked = !input2.checked;
    })
}
func18();


// get current value from input-radio
function func19() {
    let radios = document.querySelectorAll('input[type="radio"]');
    let btn = document.querySelector('.func19__btn');
    let res = document.querySelector('.func19__result');

    btn.addEventListener('click', function () {
        for (let elem of radios) {
            if (elem.checked) {
                res.innerHTML = elem.value;
            }
        }
    })
}
func19();


// Событие "change"
function func20() {
    let elem1 = document.querySelector('.func20_input1');
    let check = document.querySelector('.func20__checkbox');
    let res = document.querySelector('.func20__result');
    let textArea = document.querySelector('#func20_textarea');
    let btn = document.querySelector('.func20__btn');

    btn.addEventListener('click', function () {
        elem1.focus();
    })
    elem1.addEventListener('focus', (event) => {
        elem1.style.background = 'pink';
    }, true);
    elem1.addEventListener('blur', (event) => {
        elem1.style.background = 'grey';
    }, true);
    elem1.addEventListener('change', function () {
        res.innerHTML = this.value;
        // console.log(this.value);
    });
    check.addEventListener('change', function () {
        res.innerHTML = this.value;
        console.log(this.value);
    })
    textArea.addEventListener('change', function () {
        res.innerHTML = this.value;
        console.log(this.value);
    })
}
func20();


// select show value of item
function func21() {
    let select = document.querySelector('#func21__select');
    let res = document.querySelector('.func21__result');
    select.addEventListener('change', function () {
        res.innerHTML = this.value;
        for (let option of select) {
            console.log(option);
        }
    })
}
func21();


// event / mousemove / clientX / clientY / pageX / pageY
function func22() {
    let btn = document.querySelector('.func22__btn');
    let res = document.querySelector('.func22__result2');
    btn.addEventListener('click', function (event) {
        console.log(event);
        res.innerHTML = event;
    });

    let clientXY = document.querySelector('.func22__elem');
    document.addEventListener('mousemove', function (event) {
        clientXY.innerHTML = 'clientXY ' + event.clientX + ' : ' + event.clientY;
    });

    let pageXY = document.querySelector('.func22__elem2');
    document.addEventListener('mousemove', function (event) {
        pageXY.innerHTML = 'pageXY ' + event.pageX + ' : ' + event.pageY;
    });
}
func22();


// event / click / double click 
function func23() {
    let btn = document.querySelector('.func23__btn');
    let res = document.querySelector('.func23__result');

    btn.addEventListener('click', function (event) {
        res.innerHTML = 'one click';
    });
    btn.addEventListener('dblclick', function (event) {
        res.innerHTML = 'double click';
    });
}
func23();


// event & target
function func24() {
    let elem = document.querySelector('.func24__elem');
    let elemP = document.querySelector('.func24__elem p');
    let res = document.querySelector('.func24__result');
    let res2 = document.querySelector('.func24__result2');
    elem.style.background = '#000';
    elemP.style.display = 'inline';

    elem.addEventListener('click', function (event) {
        console.log(event.target.tagName);
        console.log(this.tagName);
        res.innerHTML = event.target.tagName;
        res2.innerHTML = this.tagName;
    });
}
func24();


// event.key / event.code / keyup / keydown
function func25() {
    let elem = document.querySelector('.func25__in');
    let res = document.querySelector('.func25__result');
    let res2 = document.querySelector('.func25__result2');

    elem.addEventListener('keydown', function (event) {
        console.log(event.key);
        console.log(event.code);
        res.innerHTML = event.key;
        res2.innerHTML = event.code;
    });
}
func25();


// event.key / event.code / keyup / keydown
function func26() {
    let elem = document.querySelector('.func26__elem');
    let res = document.querySelector('.func26__result');

    elem.addEventListener('click', function (event) {
        event.preventDefault();
        res.innerHTML = 'Данная ссылка заблокирована специальным методом preventDefault()'
        console.log('Вы не можете перейти по этой ссылке!');
    });
}
func26();


// context / call / params / привязывание контекста через методы call & apply
// apply работает с массивами
function func27() {

    // привязывание контекста через метод call
    let elem1 = document.querySelector('#func27__elem1');
    let name = 'John';
    let surname = 'Stith';
    let btn = document.querySelector('.func27__btn');
    let res = document.querySelector('.func27__result');
    btn.addEventListener('click', function () {
        function func1(name, surname) {
            console.log(this.value + ', ' + name + ' ' + surname);
            res.innerHTML = this.value + ', ' + name + ' ' + surname;
        }
        func1.call(elem1, name, surname); // get data using params and 'call'
    })

    // привязывание контекста через метод apply
    let elem2 = document.querySelector('#func27__elem2');
    let btn2 = document.querySelector('.func27__btn2');
    let name2 = 'Eva';
    let surname2 = 'Wild';

    btn2.addEventListener('click', function () {
        function func2(name2, surname2) {
            console.log(this.value + ', ' + name2 + ' ' + surname2);
            res.innerHTML = this.value + ', ' + name2 + ' ' + surname2;
        }
        func2.apply(elem2, [name2, surname2]); // get data using params and 'apply'
    })
}
func27();


// timer / setInterval
function func28() {
    let btn = document.querySelector('.func28__btn');
    let res = document.querySelector('.func28__result');
    btn.addEventListener('click', function func1() {
        function funcOne() {
            res.innerHTML = 'appearance after 1 second';
            console.log('each 1 second');
        }
        setInterval(funcOne, 100);
        this.removeEventListener('click', func1); // отвязываем обработчик, чтобы не было второго клика
    });

    let btn2 = document.querySelector('.func28__btn2');
    let res2 = document.querySelector('.func28__result2');
    let i = 0;
    btn2.addEventListener('click', function func2() {
        setInterval(function () {
            i++;
            res2.innerHTML = i;
        }, 100);
        this.removeEventListener('click', func2); // отвязываем обработчик, чтобы не было второго клика
    });
}
func28();


// timer / setInterval / clearInterval
function func29() {
    let btn = document.querySelector('.func29__btn');
    let res = document.querySelector('.func29__result');
    let i = 10;

    btn.addEventListener('click', function func1() {
        let timer = setInterval(function () {
            res.innerHTML = i--;
            if (i <= 0) {
                clearInterval(timer);
            }
        }, 100);
        this.removeEventListener('click', func1); // отвязываем обработчик, чтобы не было второго клика
    })
}
func29();


// timer / setInterval / start-stop
function func30() {
    let startBtn = document.querySelector('.func30__btn1');
    let stopBtn = document.querySelector('.func30__btn2');
    let res = document.querySelector('.func30__result');
    let timerOne;
    startBtn.addEventListener('click', function countNum() {
        let i = 0;
        timerOne = setInterval(function () {
            res.innerHTML = i++;
        }, 100);
        this.removeEventListener('click', countNum); // отвязываем обработчик, чтобы не было второго клика
    });
    stopBtn.addEventListener('click', function () {
        clearInterval(timerOne);
    });
}
func30();


// timer / setTimeout
function func31() {
    let btn1 = document.querySelector('.func31__btn1');
    let res = document.querySelector('.func31__result');

    btn1.addEventListener('click', function () {
        setTimeout(function () {
            res.innerHTML = '1 sec delay';
        }, 1000);
    });
}
func31();


// timer / setTimeout / recursion
function func32() {
    let btn1 = document.querySelector('.func32__btn1');
    let btn2 = document.querySelector('.func32__btn2');
    let res = document.querySelector('.func32__result');
    let i = 0;

    function timer() {
        setTimeout(function () {
            res.innerHTML = i++;
        }, 100);
    }
    btn1.addEventListener('click', timer);
}
func32();


// createElement / appendChild / 
function func33() {
    let btn1 = document.querySelector('.func33__btn1');
    let res = document.querySelector('.func33__result');
    btn1.addEventListener('click', function () {
        let newElem = document.createElement('p');
        newElem.textContent = '02';
        res.appendChild(newElem);
        newElem.addEventListener('click', function () {
            this.textContent = this.textContent + '!'; // добавить элемент к уже созданному 
        })
    })
}
func33();


// createElement / loop
function func34() {
    let btn1 = document.querySelector('.func34__btn1');
    let res = document.querySelector('.func34__result');
    btn1.addEventListener('click', function addElems() {
        for (let i = 2; i <= 5; i++) {
            let newElem = document.createElement('p');
            newElem.textContent = i;
            res.appendChild(newElem);
        }
        this.removeEventListener('click', addElems); // отвязываем обработчик, чтобы не было второго клика
    })
}
func34();


// createElement / loop
function func35() {
    let btn1 = document.querySelector('.func35__btn1');
    let res1 = document.querySelector('.func35__result1');
    let res2 = document.querySelector('.func35__result2');

    btn1.addEventListener('click', function addElems() {
        for (let i = 1; i <= 3; i++) {
            let newBtn = document.createElement('button');
            newBtn.textContent = 'BTN' + i;
            res1.appendChild(newBtn);
            newBtn.addEventListener('click', function () { // добавить обработчик к существующему элементу  
                res2.textContent = newBtn.textContent;
            })
            newBtn.addEventListener('dblclick', function () {
                newBtn.remove(); // remove elem by double click
            })
        }
        this.removeEventListener('click', addElems); // отвязываем обработчик, чтобы не было второго клика
    })
}
func35();


// createElement / append / prepend
function func36() {
    let btn1 = document.querySelector('.func36__btn1');
    let btn2 = document.querySelector('.func36__btn2');
    let btn3 = document.querySelector('.func36__btn3');
    let res1 = document.querySelector('.func36__result1');

    btn1.addEventListener('click', function createStart() {
        let startElem = document.createElement('p');
        startElem.textContent = 'start';
        res1.prepend(startElem); // add to start into parent
        this.removeEventListener('click', createStart); // отвязываем обработчик, чтобы не было второго клика
    })
    btn2.addEventListener('click', function createFin() {
        let startElem = document.createElement('p');
        startElem.textContent = 'finish';
        res1.append(startElem); // add to start into parent
        this.removeEventListener('click', createFin); // отвязываем обработчик, чтобы не было второго клика
    })
    btn3.addEventListener('click', function createFewEL() {
        let elem1 = document.createElement('p');
        let elem2 = document.createElement('p');
        elem1.textContent = 'dop1';
        elem2.textContent = 'dop2';
        res1.append(elem1, elem2); // add to start into parent
        this.removeEventListener('click', createFewEL); // отвязываем обработчик, чтобы не было второго клика
    })
}
func36();


// insertAdjacentElement / beforeBegin / afterEnd / afterBegin / beforeEnd
function func37() {
    let btn1 = document.querySelector('.func37__btn1');
    let btn2 = document.querySelector('.func37__btn2');
    let resElem = document.querySelector('.func37__result1 p'); // опорный элемент

    btn1.addEventListener('click', function createPrev() {
        let prevElem = document.createElement('p');
        prevElem.textContent = 'prev element';
        resElem.insertAdjacentElement('beforeBegin', prevElem);
        this.removeEventListener('click', createPrev); // отвязываем обработчик, чтобы не было второго клика
    })
    btn2.addEventListener('click', function createAfter() {
        let afterElem = document.createElement('p');
        afterElem.textContent = 'after element';
        resElem.insertAdjacentElement('afterEnd', afterElem);
        this.removeEventListener('click', createAfter); // отвязываем обработчик, чтобы не было второго клика
    })
}
func37();


// insertAdjacentHTML / beforeBegin / afterEnd / afterBegin / beforeEnd
function func38() {
    let btn1 = document.querySelector('.func38__btn1');
    let btn2 = document.querySelector('.func38__btn2');
    let btn3 = document.querySelector('.func38__btn3');
    let btn4 = document.querySelector('.func38__btn4');
    let resElem1 = document.querySelector('.func38__p1'); // опорный элемент

    btn1.addEventListener('click', function insertBefore() {
        resElem1.insertAdjacentHTML('beforeBegin', '<p>beforeBegin</p>');
        this.removeEventListener('click', insertBefore); // отвязываем обработчик, чтобы не было второго клика
    })
    btn2.addEventListener('click', function insertAfterBegin() {
        resElem1.insertAdjacentHTML('afterBegin', '<p>afterBegin</p>');
        this.removeEventListener('click', insertAfterBegin); // отвязываем обработчик, чтобы не было второго клика
    })
    btn3.addEventListener('click', function afterEnd() {
        resElem1.insertAdjacentHTML('afterEnd', '<p>afterEnd</p>');
        this.removeEventListener('click', afterEnd); // отвязываем обработчик, чтобы не было второго клика
    })
    btn4.addEventListener('click', function beforeEnd() {
        resElem1.insertAdjacentHTML('beforeEnd', '<p>beforeEnd</p>');
        this.removeEventListener('click', beforeEnd); // отвязываем обработчик, чтобы не было второго клика
    })
}
func38();


// cloneNode / клонирование
function func39() {
    let btn1 = document.querySelector('.func39 button');
    let elem1 = document.querySelector('.func39 p');
    let res = document.querySelector('.func39__result1');

    btn1.addEventListener('click', function () {
        let clone1 = elem1.cloneNode(true);
        res.appendChild(clone1);
    })
}
func39();


// OOP / class / ООП / классы
function func40() {
    // create class
    class classUsers {
        name;
        age;
        salary;
    }
    new classUsers;

    // create object by class
    let user1 = new classUsers; // put var into class
    user1.name = 'Jack'; // set options for object 
    user1.age = '25'; // set options for object
    user1.salary = '1200'; // set options for object

    let user2 = new classUsers; // put var into class
    user2.name = 'Jade'; // set options for object 
    user2.age = '24'; // set options for object
    user2.salary = '1100'; // set options for object

    let salarySum = Number(user1.salary) + Number(user2.salary);

    // show result
    let btn1 = document.querySelector('.func40 button');
    let res = document.querySelector('.func40 .result');
    btn1.addEventListener('click', function () {
        console.log(user1, user2);
        res.innerHTML = '<p>' + user1.name + '</p>' + '<p>' + user1.age + '</p>' + '<p>' + user1.salary + '</p>' + '+' +
            '<p>' + user2.name + '</p>' + '<p>' + user2.age + '</p>' + '<p>' + user2.salary + '</p>' + '=' + salarySum;
    })
}
func40();


// OOP / class / ООП / классы / methods
function func41() {
    let btn1 = document.querySelector('.func41__btn1');
    let btn2 = document.querySelector('.func41__btn2');
    let btn3 = document.querySelector('.func41__btn3');
    let res = document.querySelector('.func41 .result');

    class classUsers {
        show() {
            return 'message';
        }
    }
    btn1.addEventListener('click', function () {
        let elem = new classUsers;
        res.innerHTML = elem.show();
        console.log(elem.show()); // get 'message'
    })

    class classUsers2 {
        show2(name, surn) { // method width params
            return name + ' ' + surn;
        }
    }
    btn2.addEventListener('click', function () {
        let elem2 = new classUsers2;
        res.innerHTML = elem2.show2('jack', 'black'); // Вызовем наш метод, передав в него параметры
        console.log(elem2.show2('jack', 'black')); // get 'message'
    })

    class classUsers3 {
        show3(name, surn, age) { // method width params
            return name + ' ' + surn + ' - ' + age;
        }
    }
    let elem3 = new classUsers3;
    elem3.name = 'eva';
    elem3.surn = 'brown';
    elem3.age = '26';
    btn3.addEventListener('click', function () {
        res.innerHTML = elem3.show3(elem3.name, elem3.surn, elem3.age); // Вызовем наш метод, передав в него параметры
        console.log(elem3.show3(elem3.name, elem3.surn, elem3.age)); // get 'message'
    })
}
func41();


// OOP / class / ООП / классы / свойства
function func42() {

    class Userclass { //create class
        name;
        surname;
        salary;
        method1() { }
    }

    let user1 = new Userclass; // create var from class
    let user2 = new Userclass; // create var from class

    user1.name = 'Jade';
    user1.surname = 'Roberts';
    user1.salary = 800;
    user2.name = 'Thernan';
    user2.surname = 'Merman';
    user2.salary = 800;

    user1.method1(); // обращение к методу

    let btn1 = document.querySelector('.func42__btn1');
    let res = document.querySelector('.func42 > .result');
    btn1.addEventListener('click', function () {
        console.log(user1, user2);
        let res1 = user1.name + ' ' + user1.surname + ' - ' + user1.salary;
        let res2 = user2.name + ' ' + user2.surname + ' - ' + user2.salary;
        res.innerHTML = res1 + '<br/>' + res2;
    })
}
func42();


// OOP / class / methods / методы
function func43() {
    class UserClass {
        name;
        surname;
        method2() {
            return 'yes';
        }
    }

    let user2 = new UserClass;
    let btn1 = document.querySelector('.func43__btn1');
    let res1 = document.querySelector('.func43 > .result');

    btn1.addEventListener('click', function () {
        console.log(user2.method2());
        res1.innerHTML = user2.method2();
    })
}
func43();


// OOP / class / methods width params / методы с параметрами
function func44() {
    let btn1 = document.querySelector('.func44__btn1');
    let res1 = document.querySelector('.func44 > .result');

    class UserClass {
        name;
        surname;
        method1(name, surname) {
            return name + ' ' + surname;
        }
    }

    let user1 = new UserClass;

    btn1.addEventListener('click', function () {
        console.log(user1.method1('Sam', 'Smith'));
        res1.innerHTML = user1.method1('Sam', 'Smith');
    })
}
func44();


// OOP / class / methods width params / this
function func45() {
    let btn1 = document.querySelector('.func45__btn1');
    let res1 = document.querySelector('.func45 > .result');

    class UserClass {
        name;
        surname;
        show() {
            console.log(this.name + ' ' + this.surname);
            res1.innerHTML = this.name + ' ' + this.surname;
        }
    }

    let user1 = new UserClass;
    user1.name = 'Brad';
    user1.surname = 'Pitt';

    btn1.addEventListener('click', function () {
        user1.show();
    })
}
func45();


// class / uppercase first letter
function func46() {
    let btn1 = document.querySelector('.func46__btn1');
    let res1 = document.querySelector('.func46 > .result');

    class UserClass {

        show() {
            res1.innerHTML = this.cape(this.name) + ' ' + this.cape(this.surname);
            console.log(this.name + ' ' + this.surname);
        }
        cape(str) {
            return str[0].toUpperCase() + str.slice(1); // method for uppercase first letter
        }
    }

    let user1 = new UserClass;
    user1.name = 'david';
    user1.surname = 'mann';

    btn1.addEventListener('click', function () {
        user1.show();
    })
}
func46();


// class / properties into class
function func47() {
    let btn1 = document.querySelector('.func47__btn1');
    let res1 = document.querySelector('.func47 > .result');

    class User {
        name = 'mike';
        surn = 'wilson';
        show() {
            return this.name + ' ' + this.surn;
        }
    }
    let user = new User;
    user.name = 'tommy'; // change the name

    btn1.addEventListener('click', function () {
        res1.innerHTML = user.show();
    })
}
func47();


// class / constructor
function func48() {
    let btn1 = document.querySelector('.func48__btn1');
    let res1 = document.querySelector('.func48 > .result');

    class User {
        constructor() {
            res1.innerHTML = 'yes';
        }
    }
    btn1.addEventListener('click', function () {
        let user = new User;
    })
}
func48();


// class / constructor with params
function func49() {
    let btn1 = document.querySelector('.func49__btn1');
    let res1 = document.querySelector('.func49 > .result');

    class User {
        constructor(name, surn, salary) {
            this.name = name;
            this.surn = surn;
            this.salary = String(salary * 1.1).slice(0, 6);
        }
        show() {
            return this.name + ' ' + this.surn + ' - ' + this.salary + ' (+10%)';
        }
    }
    let user = new User('logan', 'paul', 800);

    btn1.addEventListener('click', function () {
        res1.innerHTML = user.show();
    })
}
func49();


// class / constructor / private property / приватные свойства
function func50() {
    let btn1 = document.querySelector('.func50__btn1');
    let res1 = document.querySelector('.func50 > .result');

    class User {
        #name;
        #age;
        #salary;

        constructor(name, age, salary) {
            this.#name = name;
            this.#age = age;
            this.#salary = salary;
        }
        show() {
            return this.#name + '-' + this.#age + '-' + this.#salary;
        }
    }

    let user = new User('jake', '28', '4500');

    btn1.addEventListener('click', function () {
        res1.innerHTML = user.show();
    })
}
func50();


// class / constructor / private methods / приватные методы
function func51() {
    let btn1 = document.querySelector('.func51__btn1');
    let res1 = document.querySelector('.func51 > .result');

    class User {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        getAge() {
            return this.#addSign(this.age);
        }
        #addSign(num) { // private method
            return num + '$';
        }
    }
    let user = new User('logan', '28');

    btn1.addEventListener('click', function () {
        res1.innerHTML = user.getAge();
        console.log(user.getAge());
    })
}
func51();


// OOP / class / constructor / getters / геттеры
function func52() {
    let btn1 = document.querySelector('.func52__btn1');
    let res1 = document.querySelector('.func52 > .result');

    class User {
        #name;
        #surn;

        constructor(name, surn) {
            this.#name = name;
            this.#surn = surn;
        }
        getName() { // getter
            return this.#name;
        }
        getSurn() { // getter
            return this.#surn;
        }
    }
    let user = new User('logan', 'paul');

    btn1.addEventListener('click', function () {
        res1.innerHTML = user.getName() + ' ' + user.getSurn();
    })
}
func52();


// OOP / class / constructor / setters / сеттеры
function func53() {
    let btn1 = document.querySelector('.func53__btn1');
    let res1 = document.querySelector('.func53 > .result');

    class User {
        #name;
        #surn;

        setName(name) {
            this.#name = name;
        }
        setSurn(surn) {
            this.#surn = surn;
        }
        getName() {
            return this.#name;
        }
        getSurn() {
            return this.#surn;
        }
    }

    let user = new User();
    user.setName('logan');
    user.setSurn('paul');

    btn1.addEventListener('click', function () {
        res1.innerHTML = user.getName() + ' ' + user.getSurn();
    })
}
func53();


// OOP / class / constructor / setters / сеттеры / проверка
function func54() {
    let btn1 = document.querySelector('.func54__btn1');
    let res1 = document.querySelector('.func54 > .result');

    class User {
        #name;
        #age;
        #salary;

        setName(name) {
            if (name.length > 1) {
                this.#name = name;
            } else {
                throw new Error('name is incorrect');
            }
        }
        setAge(age) {
            if (age < 18) {
                throw new Error('age is incorrect');
            } else if (age > 65) {
                throw new Error('age is incorrect');
            } else {
                this.#age = age;
            }
        }
        setSalary(salary) {
            this.#salary = salary;
        }
        getName() {
            return this.#name;
        }
        getAge() {
            return this.#age;
        }
        getSalary() {
            return this.#salary + '$';
        }
    }
    let user = new User;
    user.setName('logan');
    user.setAge(20);
    user.setSalary(9000);

    btn1.addEventListener('click', function () {
        res1.innerHTML = user.getName() + '<br/>' + user.getAge() + '<br/>' + user.getSalary();
    })
}
func54();


// OOP / class / constructor / instanceof - проверка
function func55() {
    let btn1 = document.querySelector('.func55__btn1');
    let res1 = document.querySelector('.func55 > .result');

    class User {
        #name;
        #age;
        #salary;
    }
    let user = new User;
    btn1.addEventListener('click', function () {
        console.log(user instanceof User);
        res1.innerHTML = user instanceof User;
    })
}
func55();


// validator email simple
function func56() {
    let note = document.querySelector('.func56 > .note');
    let char1 = '@';
    let char2 = '.';
    let input56 = document.querySelector('.func56 > input');

    input56.addEventListener('blur', (event) => {
        let input56Value = document.querySelector('.func56 > input').value;
        if (input56Value.includes(char1) && input56Value.includes(char2)) {
            input56.style.background = 'green';
            note.style.display = "none";
        } else {
            input56.style.background = 'pink';
            input56.focus();
            note.style.display = "inline-block";
        }
    }, true);

}
func56();


// validator email with template
function func57() {
    let note = document.querySelector('.func57 > .note');
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let input57 = document.querySelector('.func57 > input');

    input57.addEventListener('blur', (event) => {
        let input57Value = input57.value;

        if (input57Value.match(mailformat)) {
            input57.style.background = 'green';
            note.style.display = "none";
        } else {
            input57.style.background = 'pink';
            input57.focus();
            note.style.display = "inline-block";
        }
    }, true);
}
func57();


// oop / class / validator email with template
function func58() {
    let note = document.querySelector('.func58 > .note');
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let input58 = document.querySelector('.func58 > input');

    class Validator {
        isEmail(email) {
            input58.addEventListener('blur', (event) => {
                let input58Value = input58.value;
                if (input58Value.match(mailformat)) {
                    input58.style.background = 'green';
                    note.style.display = "none";
                } else {
                    input58.style.background = 'pink';
                    input58.focus();
                    note.style.display = "inline-block";
                }
            }, true);
        }
    }
    let email = new Validator;
    email.isEmail();
}
func58();


// встроенные классы / build-in classes
function func59() {
    let btn1 = document.querySelector('.func59 > .btn1');
    let btn2 = document.querySelector('.func59 > .btn2');
    let btn3 = document.querySelector('.func59 > .btn3');
    let res1 = document.querySelector('.func59 > .result');

    let date = new Date;
    btn1.addEventListener('click', function () {
        res1.innerHTML = date;
        console.log(date);
    })

    let reg = new RegExp;
    btn2.addEventListener('click', function () {
        res1.innerHTML = reg;
        console.log(reg);
        console.log(reg instanceof RegExp);
    })

    let arr = [1, 2, 3];
    btn3.addEventListener('click', function () {
        res1.innerHTML = arr;
        console.log(arr);
        console.dir(arr);
        console.log(arr instanceof Array);
    })

}
func59();


// асинхронный код / asynchronous code
function func60() {
    let btn1 = document.querySelector('.func60 > .btn1');
    let res1 = document.querySelector('.func60 > .result');

    btn1.addEventListener('click', function () {
        let img1 = document.createElement('img');
        img1.src = 'https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3016&q=80';
        img1.addEventListener('load', function () {
            res1 = res1.appendChild(img1);
        })
        img1.addEventListener('error', function () { // if connection is not working
            res1.innerHTML = 'Error or something else'
        })
    })
}
func60();


// операторы сравнения
function func61() {
    let btn1 = document.querySelector('.func61 > .btn1');
    let res1 = document.querySelector('.func61 > .result');

    let str = 'word';
    let num = 0;

    function getNum(a, b) {
        if (a % 2 === 0 && b % 2 === 0) {
            return a * b;
        } else if (a % 2 !== 0 && b % 2 !== 0) {
            return a + b;
        } else if ((a % 2 !== 0 && b % 2 === 0) || (a % 2 === 0 && b % 2 !== 0)) {
            return a % 2 ? a : b;
        }
    }
    btn1.addEventListener('click', function () {
        res1.innerHTML = getNum(2, 9);
    })
}
func61();


// ajax / fetch
function func62() {
    let btn1 = document.querySelector('.func62 > .btn1');
    let res1 = document.querySelector('.func62 > .result');

    btn1.addEventListener('click', function () {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(data => {
                return data.text();
            })
            .then(data => {
                res1.textContent = data;
            })
    });
}
func62();


// array / every / some / map / filter / reduce / forEach
function func63() {
    let btn1 = document.querySelector('.func63 > .btn1');
    let btn2 = document.querySelector('.func63 > .btn2');
    let btn3 = document.querySelector('.func63 > .btn3');
    let btn4 = document.querySelector('.func63 > .btn4');
    let btn5 = document.querySelector('.func63 > .btn5');
    let btn6 = document.querySelector('.func63 > .btn6');
    let res1 = document.querySelector('.func63 > .result');

    let arr1 = [2, 12, 8, 14];
    let emptyArr = [];

    function isMore(elem) {
        return elem >= 10;
    }
    function doubleNum(num) {
        return num * 2;
    }
    function sumNumbers(total, amount) {
        return total + amount;
    }
    function numPlusOne(el) {
        el = el + 1;
    }

    btn1.addEventListener('click', function () {
        res1.textContent = String(arr1.every(isMore));
    });
    btn2.addEventListener('click', function () {
        res1.textContent = String(arr1.some(isMore));
    });
    btn3.addEventListener('click', function () {
        res1.textContent = arr1.map(doubleNum);
    });
    btn4.addEventListener('click', () => {
        res1.textContent = arr1.filter(isMore);
    });
    btn5.addEventListener('click', () => {
        res1.textContent = arr1.reduce(sumNumbers);
    });
    btn6.addEventListener('click', function plusOne() {
        arr1.forEach((num) => {
            num = num + 1;
            emptyArr.push(num);
            console.log(emptyArr);
            res1.textContent = emptyArr;
        })
    });
}
func63();


// create new elem
function func64() {
    let btn1 = document.querySelector('.func64 > .btn1');
    let res1 = document.querySelector('.func64 > .result');

    function createElem() {
        let newElem = document.createElement('div');
        newElem.textContent = 'Hello';
        newElem.classList.add('new_el');
        res1.append(newElem);
    }
    btn1.addEventListener('click', createElem)
}
func64();


// callback
function func65() {
    function double(num) { // callback function
        return num * 2;
    }
    function action(arr, double) { // action with each elem
        let res = [];
        for (let elem of arr) {
            res.push(double(elem));
        }
        return res;
    }
    let arr = [1, 2, 3, 4];
    let res = action(arr, double); // using callback

    let btn1 = document.querySelector('.func65 > .btn1');
    let res1 = document.querySelector('.func65 > .result');

    btn1.addEventListener('click', () => {
        res1.textContent = res;
    })
}
func65();
