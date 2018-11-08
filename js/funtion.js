function sayHello() {
	// 함수 바디는 여는 중괄호로 시작하고

	console.log("Hello world");
	console.log("! 안녕");
	console.log("성공성공");

	// 닫는 중괄호로 끝난다
}
sayHello();

// 반환 값
function getGreeting() {
	return "Hello world";
}
getGreeting(); // "Hello world"

// 호춯과 참조
getGreeting(); // "Hello world"
getGreeting; // funtion getGreeting()

const f = getGreeting;
f(); // "Hello world"

const o = {};
o.f = getGreeting;
o.f(); // "Hello world"

const arr = [1,2,3];
arr[1] = getGreeting;
arr[1](); // "Hello world"

// 함수와 매개변수
function avg(a,b) {
	return (a+b) / 2;
}
avg(5,10); // 7.5

const a = 5, b = 10;
avg(a,b);

function f(x) {
	console.log(`f 내부 : x=${x}`);
	x = 5;
	console.log(`f 내부 : x=${x} (할당 후)`);
}
let x = 3;
console.log(`f를 호출하기 전 : x=${x}`);
f(x);
console.log(`f를 호출한 다음 : x=${x}`);





