"use strict";
// 결과물이 number
function sum(x, y) {
    return x + y;
}
sum(1, 2);
// 숫자 배열의 합을 반환하는 함수
function sumArray(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);
// 아무것도 반환하지 않는 함수 -> void
function returnNothing() {
    console.log('Hello World!');
}
class Circle {
    // implements -> 해당 클래스가 Shape interface의 조건을 충족하겠다고 명시
    /* radius: number; // 멤버 변수 radius 값 설정
     */
    constructor(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    /* width: number;
    height: number; */
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);
console.log(circle.radius);
//console.log(rectangle.width); // private로 선언된 값은 클래스 내부에서만 조회 가능
const shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach((shape) => {
    console.log(shape.getArea());
});
