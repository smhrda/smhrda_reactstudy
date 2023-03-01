'use strict';
/* type alias */
// type: 특정 타입에 별칭을 붙이는 용도 -> 객체, 배열 등 모든 타입 가능
// 클래스 관련 타입에는 interface를, 일반 객체 타입에는 type을 사용하는 편
const person = {
    name: '권유리',
    age: 25,
};
const expert = {
    name: '이하진',
    skills: ['javascript', 'react'],
};
const people = [person, expert];
const color = 'red';
const colors = ['red', 'yellow'];
// =============================================
/* function merge(a: any, b: any): any {
    return {
        ...a,
        ...b
    };
}
const merged = merge({foo: 1}, {bar: 1})
// ==> any를 사용하면 타입 유추가 어려워짐 -> generics 사용 */
/* Generics : 여러 종류의 타입에 대한 호환을 맞춰야 하는 상황에서 사용하는 문법*/
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged = merge({ foo: 1 }, { bar: 1 });
function wrap(param) {
    return {
        param,
    };
}
const wrapped = wrap(10);
const items = {
    list: ['a', 'b', 'c'],
};
const items2 = {
    list: ['d', 'e', 'f'],
};

// 클래스에서 interface 사용하기
class Queue {
    constructor() {
        this.list = [];
    }
    get length() {
        return this.list.length;
    }
    enqueue(item) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}
const queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.length);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
