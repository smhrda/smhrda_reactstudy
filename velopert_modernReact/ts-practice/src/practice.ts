/* type alias */
// type: 특정 타입에 별칭을 붙이는 용도 -> 객체, 배열 등 모든 타입 가능
// 클래스 관련 타입에는 interface를, 일반 객체 타입에는 type을 사용하는 편

type Person = {
    name: string;
    age?: number; // 물음표는 설정을 해도 되고 안해도 되는 값
};

/* interface Developer extends Person {
    skills: string[];
} */

type Developer = Person & {
    // &을 이용해 두 개 이상의 타입들을 합침
    skills: string[];
};

const person: Person = {
    name: '권유리',
    age: 25,
};

const expert: Developer = {
    name: '이하진',
    skills: ['javascript', 'react'],
};

/* const people: Person[] = [person, expert]; */
type People = Person[];
const people: People = [person, expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';
const colors: Color[] = ['red', 'yellow'];

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
function merge<A, B>(a: A, b: B): A & B {
    return {
        ...a,
        ...b,
    };
}
const merged = merge({ foo: 1 }, { bar: 1 });

function wrap<T>(param: T) {
    return {
        param,
    };
}
const wrapped = wrap(10);

// interface에서 generics 사용하기
interface Items<T> {
    list: T[];
}

const items: Items<string> = {
    list: ['a', 'b', 'c'],
};

// type에서 generics 사용하기
type Items2<T> = {
    list: T[];
};
const items2: Items2<string> = {
    list: ['d', 'e', 'f'],
};

// 클래스에서 interface 사용하기
class Queue<T> {
    list: T[] = [];
    get length() {
        return this.list.length;
    }
    enqueue(item: T) {
        this.list.push(item);
    }
    dequeue() {
        return this.list.shift();
    }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
