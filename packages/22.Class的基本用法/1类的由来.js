// es5
// function Point(x,y){
//   this.x = x;
//   this.y = y;
// }

// Point.prototype.toString = function(){
//   return '(' + this.x + ', ' + this.y + ')';
// };

// var p = new Point(1,2);
// console.log(p.toString())

// es6
class Point { 
  constructor(x,y) { 
    this.x = x; 
    this.y = y; 
  }
  toString(){
    return '(' + this.x + ', ' + this.y + ')';
  }
}
var classP = new Point(3,4);
console.log(classP.toString())

// ES6 的类，完全可以看作构造函数的另一种写法。
console.log(typeof Point); // "function"
console.log(Point === Point.prototype.constructor); // true