/*function reverseArray(a){
    let arr =  new Array;
    for(let i = a.length-1; i>=0; i--){
        arr.push(a[i]);
    }
    return arr;
}

let c = [45,60,12,98,78,154,65];
let b = reverseArray(c);
console.log(b);

let t = ["php","javascript","html","css","mysql"];
let m = reverseArray(t);
console.log(m);*/


/* Problem 4.1
let arr = [];
for(let i = 0; i<10; i++){
    arr.push(i);
    console.log(arr[i]);
}*/


/* Problem 4.2
let arr = [];
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
for(let i = 0; i<10; i++){
    let b = getRndInteger(10,200);
    arr[i] = b;
    console.log(arr[i]);
}*/


/* Problem 4.3
let arr = [45,100,65,11,98,78,1000,65,"45",98,14,78,35,"98",10452,667,17];
let a = prompt("type a number please");
a = parseFloat(a);
let sum = 0;
for(let i = 0; i<arr.length; i++){
    if(a<arr[i]){
        console.log(arr[i]);
    }
    arr[i] = parseFloat(arr[i]);
    sum+=arr[i];
}
console.log(sum);*/


/* Problem 4.4
let arr = [10,12,16,35,29,48,81,51,26,35];
let sum = 0;
for(let i = 0; i<arr.length; i++){
    sum+=arr[i];
}
let mult = 1;
for(let i = 0; i<arr.length; i++){
    mult*=arr[i];
}
let mean = sum / arr.length;
console.log(sum);
console.log(mean);
console.log(mult);*/


/* Problem 4.5
let arr = [12,52,61,13,10,26,9,45,48,3];
for(let i = 0; i<arr.length; i++){
    if(arr[i]%2==0){
        console.log(arr[i]);
    }
    if(i%2==0){
        console.log(arr[i]);
    }
}
for(let i = 0; i<arr.length; i++){
    if(arr[i]%2==1){
        console.log(arr[i]);
    }
}*/


/* Problem 4.6
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
let arr = [];
for(let i = 0; arr.length<30; i++){
    arr[i] = getRndInteger(10,300);
}
let a = Math.max(...arr);
let b = Math.min(...arr);
console.log(a);
console.log(b);*/


/* Problem 4.7
let arr = [];
function numSqr(n){
    return n * n;
}
for(let i = 0; i<10; i++){
    arr[i] = numSqr(i);
}
console.log(arr);*/


/* Problem 4.8
let a = [12,15,23,26];
let b = [];

function copyArray(a,b){
    for(let i = 0; i<a.length; i++){
        b[i]=a[i];
    }
}

copyArray(a,b);
console.log(b);
console.log(a);*/


/* Problem 4.9
let b = [45,12,13];
function reverseArray(a){
    let arr =  new Array;
    for(let i = a.length-1; i>=0; i--){
        arr.push(a[i]);
    }
    return arr;
}
console.log(reverseArray(b));*/


/* Problem 4.10
var values = [45,100,false,"lemur",87,45,98,"TUMO",78,150,true];
let a = prompt("type something");
function check(){
    for(let i = 0; i<values.length; i++){
        if(a==values[i]){
            console.log(a);
        }
    }
}
check();*/


/* Problem 4.11
let ar1 = [4,5,12,32,100,98,12,32,45,12,32,89];
let ar2 = [98,4,12,32,6,8,45,12,32,89,100,45];
let mult = [];
for(let i = 0; i<ar1.length; i++){
    mult[i] = ar1[i] * ar2[i];
}
console.log(mult);*/


/* Problem 4.16
let arr = [];
let something = 44;
for(let i = 0; i<(600-40)/11; i++){
    arr[i] = something;
    something+=11;
}
let len  = arr.length;
let number = 126
for(let j = len; j<(900-100)/13; j++){
    if(number%2==0){
        arr[j] = number;
    }
    number+=13;
}
console.log(arr);*/


/* Problem 6.1
function oddEven(a){
    if(a%2==0){
        return true;
    }else{
        return false;
    }
}
console.log(oddEven(8));*/


/* Probelm 6.2
function factorial(a){
    let mult = 1;
    while(a>0){
        mult*=a;
        a--;
    }
    return mult;
}

console.log(factorial(3));*/


/* Probelem 6.3
function checkArray(a,arr){
    for(let i = 0; i <arr.length; i++){
        if(arr[i]==a){
            return arr[i]
        }else{
            return false;
        }
    }
}
let myArray = [7,8,12];
console.log(checkArray(7,myArray));*/


/* Problem 6.4
let chars = "abcdefghijklmnopqrstuvwxyz";
let something = " "
function password(string_length){
    for(let i = 0; i<string_length; i++){
        let randInt = Math.floor((Math.random() * 26) + 1); 
        something+=chars[randInt];
    }
    return something;
}
console.log(password(6));*/


/*  Problem 6.5
let chars = "abcdefghijklmnopqrstuvwxyz";
let something = " "
let symbols = " #$%^&*()-";
function password(string_length){
    for(let i = 0; i<string_length; i++){
        let randInt = Math.floor((Math.random() * 26) + 1); 
        let number = Math.floor((Math.random() * symbols.length) + 1);
        let tiv = Math.floor((Math.random() * 9) + 1);
        something+=chars[randInt]+=tiv+=symbols[number];
    }
    return something;
}
let a = prompt("choose a number");
a = parseFloat(a);
a/=3;
console.log(password(a));*/



/* Problem 6.6
let a = 0;
function syllableCount(string){
    for(let i = 0; i<string.length; i++){
        if(string[i]=="a" || string[i]=="e" || string[i]=="i" || string[i]=="o" || string[i]=="u" || string[i]=="y"){
            a++;
        }
    }
    return a;
}

let something = prompt("type a word");
console.log(syllableCount(something));*/


/* Problem 6.7
function count(string,char) {
    let re = new RegExp(char,"gi");
    return char + "-" + string.match(re).length;
}
   
let str = prompt("type a word");
let chars = "abcdefghijklmnopqrstuvwxyz";
for(let i = 0; i<chars.length; i++){
    for(let j = 0; j<str.length; j++){
        if(str[j]==chars[i]){
            console.log(count(str,chars[i]));
        }
    }
}*/

/* Just For Fun
function setup() {
    createCanvas(500,500);
    background('#acacac');
    frameRate(30);
}
function draw() {
    let matrix = [];
    for(let x = 0; x<50; x++){
        matrix[x] = [];
        for(let y = 0; y<50; y++){
            matrix[x][y] = Math.floor(random(3));
        }
    }
    console.log(matrix)
    for(let i = 0; i<matrix.length; i++){
        for(let j = 0; j<matrix[i].length; j++){
            if(matrix[i][j]==0){
                fill("green");
            }else if(matrix[i][j]==1){
                fill("red");
            }else{
                fill("yellow");
            }
            rect(10*i,10*j,10,10);
        }
    }
}*/
var side = 20;
var grassArr = []; //խոտերի զանգված
var eatArr = []; //խոտակերների զանգված
var preArr = []; //գիշատիչներ
var holeArr = [];// սև անցքեր
var giantArr = [];//հսկաների զանգված


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let d = 0;
var matrix = [];
for (let i = 0; i < 35; i++) {
    let b = [];
    matrix[i] = b;
    for (let j = 0; j < 35; j++) {
        let c = getRndInteger(0, 50);
        if (c < 6) {
            d = 0;
        } else if (c > 6 && c < 17) {
            d = 1;
        } else if (c > 17 && c < 37) {
            d = 2;
        } else if (c > 37 && c < 47) {
            d = 3;
        } else if (c >= 47 && c <= 48) {
            d = 4;
        } else if (c > 48 && c <= 50) {
            d = 5;
        }
        matrix[i][j] = d;
    }
}
console.log(matrix);
function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side); //կտավի չափերը դնել մատրիցայի չափերին համապատասխան
    background('#acacac');

    //Կրկնակի ցիկլը լցնում է օբյեկտներով խոտերի և խոտակերների զանգվածները
    //հիմնվելով մատրիցի վրա 
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var eatgrass = new Eatgrass(x, y);
                eatArr.push(eatgrass);
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
            } else if (matrix[y][x] == 3) {
                var predator = new Predator(x, y);
                preArr.push(predator);
            } else if (matrix[y][x] == 4) {
                var blackhole = new BlackHole(x, y);
                holeArr.push(blackhole);
            } else if (matrix[y][x] == 5) {
                var giant = new Giant(x, y);
                giantArr.push(giant);
            }
        }
    }
}

//draw ֆունկցիան գծում է «կադրերը», վարկյանում 60 կադր արագությամբ
//եթե տրված չէ այլ կարգավորում frameRate ֆունկցիայի միջոցով
//draw ֆունկցիան ինչ որ իմաստով անվերջ կրկնություն է (цикл, loop)
function draw() {
    //Գծում է աշխարհը, հիմվելով matrix-ի վրա
    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("yellow");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill("#d7e0ff");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 3) {
                fill("red");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 4) {
                fill("black");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 5) {
                fill("#003399");
                rect(j * side, i * side, side, side);
            }
        }
    }


    //յուրաքանչյուր խոտ փորձում է բազմանալ
    for (var i in grassArr) {
        grassArr[i].mul();
    }

    //յուրաքանչյուր խոտակեր փորձում է ուտել խոտ
    for (var i in eatArr) {
        eatArr[i].eat();
    }

    for (var i in preArr) {
        preArr[i].eat();
    }

    for (var i in holeArr) {
        holeArr[i].eat();
    }

    for (var i in giantArr) {
        giantArr[i].eat();
    }
}