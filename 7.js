console.log('数组三种创建形式');
var empty = [];
var primes = [2,3,5,7,11];
var misc = [1.1, true, 'a' ,];

console.log('空: ' + empty);
console.log('5个数值: ' + primes);
console.log('3个不同类型 ' + misc);


var base = 1024;
var table = [base, base + 1, base + 2, base + 3];
console.log(table);




var b = [[1,{x:1,y:2}], [2,{x:3, y:4}]];
console.log(b);


var a = ["world"];
var value = a[0];
a[1] = 3.14;
i = 2;
a[i] = 3;
a[i+1] = 'hello';
a[a[i]] = a[0];


console.log(a);
console.log(a[100]);
console.log(a[-1]);
console.log(a['k']);


console.log('7.3稀疏数组');
a = new Array(5);
console.log(a.length);
a = [];
a[1000] = 0;
console.log(a.length);
console.log(a[0]);


// 数组
console.log('in用法');
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");

console.log("bay" in trees);    // 返回false (必须使用索引号,而不是数组元素的值)

console.log('内置对象');
console.log("PI" in Math)       // 返回true

console.log('自定义对象');
var mycar = {make: "Honda", model: "Accord", year: 1998};
console.log("make" in mycar);

var color1 = new String("green");


console.log('右操作数必须是一个对象值');
var color1 = new String("green");
console.log("length" in color1) // 返回true);

console.log('如果你使用 delete 运算符删除了一个属性，则 in 运算符对所删除属性返回 false。');

var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
 delete trees[4];
 trees.push('dd');
console.log(5 in trees);
// 返回false


var a1 = [,,,];
var a2 = new Array(3);
console.log(0 in a1);
console.log(a1);






// var a1 = [,,3];
// var a2 = [undefined];
// console.log(1 in a1);
// console.log(0 in a2);
// console.log(a1.length);
// console.log(a2.length);



a = [1,2,3,4,5];
Object.defineProperty(a,"length",{writable:false});
a.length = 0;
a.length = 5;
console.log( a );
console.log('数组长度: ' + a.length);










































for(var i = 10; i < 20; i++){
    console.log('\n');
}
