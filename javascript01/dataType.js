/*
	변수, 상수
*/
let currentTempC = 22; // es6 이전에는 var 키워드만 사용 할 수 있었다

currentTempc = 22.5;

let targetTempC; // let targetTempC = undefined; 와 같다
let targetTempC , room1 = "conference_romm_a", room2 = "lobby"; // 변수 3개 선언

const ROMM_TEMP_C = 21.5, MAX_TEMP_C = 30; // 한번 할당한 값을 바꿀 수는 없다
										   // 상수 이름에는 보통 대문자와 밑줄만 사용한다
/*
	식별자
*/
let currentTempC;
let anIdentifierName;
// 카멜케이스

let current_temp_c
let an_identifier_name
// 스네이크 케이스

/*
	리터럴
*/
let room1 = "conference_romm_a"; // "conference_room_a"은 리터럴 이다
let currentRoom = room1; // 이제 currentRoom의 값은 room1의 값과 같다
currentRoom = conference_romm_a; // 에러 발생 conferece_room_a란 식별자가 존재하지 않는다.

/*
	원시타입과 객체
*/
// 숫자
let count = 10; // 숫자 리터럴
const blue = 0x000ff; // 16진수 16진수 ffsms 10진수 255와 같다
const umask = 0o0022; // 8진수 8진수 22는 십진수 18과 같다
const rommTemp = 21.5; // 십진수
const c = 3.0e6; // 지수
const e = -1.6e-19; // 지수
const inf = Infinity; 
const ninf = -Infinity;
const nan = NaN; // "숫자가 아님"

// Number 객체 유용한 프로퍼티
const samll = Number.EPSILON; // 1에 더했을 때 1과 구분되는 결과를 만들 수 있는 가장 작음 값
const bigInt = Number.MAX_SAFE_INTEGER; // 표현할 수 있는 가장 큰 정수
const max = Number.MAX_VALUE; // 표현할 수 있는 가장 큰 숫자
const minInt = Number.MIN_SAFE_INTEGER; // 표현할 수 있는 가장 작은 정수
const min = Number.MIN.VALUE; // 표현할 수 있는 가장 작은 숫자
const nInf = Number.NEGATIVE_INFINITY; // -Infinity
const nan = Number.NaN; // NaN
const inf = Number.POSITIVE_INFINITY; // Infinity

// 문자열
// 이스케이프
const dialog = 'Sam looked up, and said "hello, old friend!", as Max walked in';
const imperative = "Don't do that!";

const dialog1 = "He looked up and said \"don't do that!\" to Max.";
const dialog2 = 'He looked up and said "don\'t do that!" to Max.'; // 역슬래시를 써서 따으표를 이스케이프하면 
																   // 문자열이 여기서 끝나지 않았다고 알려준다

const s = "In Javascript, use // as an escape character in strings."; // 문자열에 역슬래쉬를 써야 할 때.
																	  // 역슬래시는 자기 자신을 이스케이프 할 수 있다.																   

// 템플릿 문자열
let currentTemp = 19.5;
const message = "The current temperature is " + currentTemp + "\u00b0C"; // 00b0은 온도를 나타내는 유니코드 코드 포인트

let currentTemp = 19.5;
const mesaage = "The current temperature is ${currentTemp}\u00b0C"; // 문자열 템플릿 사용


const multiline = `line1
line2` // 베틱을 사용한 문자열

const result1 = 3 + "30"; // 3이 문자열로 바뀐다 결과는 문자열 '330' 이다
const result2 = 3 * "30"; // '30'이 숫자로 바뀐다. 결과는 숫자 90이다

// 불리언
let heating = true;
let colling = false;


// 심볼
const RED = Symbol("The color of a sunest!");
const ORANGE = Symbol("The color of a sunset!");
RED === ORANGE // false : 심볼은 모두 서로 다르다

// unll과 undifined
let currentTemp; // 암시적으로 undifined이다
const targetTempC = null; // 대상 온도는 null 아직 모르는 값이다
currentTemp = 19.5; // currentTemp에는 이제 값이 있다
currentTemp = undifined; // currentTemp는 초기화되지 않은 듯하다 (권장하지 않는다)

// 객체
const obj = {};
obj.color = "yellow";

obj["not an idntifier"] = 3;
obj["not an idntifier"]; // 3
obj["color"] ; // "yellow"

const SIZE = Symbol();
obj[SIZE] = 8;
obj[SIZE]; // 8

const sam1 = {
	name : "Sam",
	age : 4,
}

const sam2 = {name:"Sam", age:4}; // 한 줄로 선언

const sam3 = {
	name : "Sam",
	classification : {
		kingdom : "Anamalia",
		phylum : "Chordata",
		class : "Mamalia",
		order : "Carnivoria",
		family : "Felidae",
		subfamily : "Felinae",
		genus : "Felis",
		species : "catus",
	},
}
// 세가지 객체를 만듬 sam1 과 sam2 프로퍼티는 똑같지만 둘은 서로 다른 객체이다.

sam3.classification.family; // "Felidae"
sam3["classification"].family; // "Felidae"
sam3.classification["family"]; // "Felidae"
sam3["classification"]["family"]; // "Felidae"
// 객체에 함수를 담을 수도 있다 

sam3.speak = function() { return "Meow!";}; // sam3 함수를 추가
sam3.speak(); // "Meow!"

delete sam3.classification; // classification 트리 전체가 삭제되었다
delete sam3.speak // speak 함수가 작제 되었다

// Number, String, Boolean 객체
const s = "hello";
s.toUpperCase(); // "HELLO"

const s = "hello";
s.rating = 3; // 에러가 없다
s.rating; // undifined
// 일시적인 String 객체에 프로퍼티 할당 임시 객체는 즉시 파괴 됨으로 s.rating은 undifined 이다.

// 배열
const a1 = [1,2,3,4]; // 숫자로 구성된 배열
const a2 = [1,"two",3,null]; // 여러 가지 타입으로 구성된 배열
const a3 = [ 
	"What the hammer? What the chain?",
	"In What furnace was thy brain?",
	"What the anvil? What dread grasp",
	"Dare its deadly terrors clasp?",
]; // 여러 줄로 정의한 배열
const a4 = [
	{name:"Rudy",hardness:9},
	{name:"Diamond", hardness:10},
	{name:"Topaz", hardness:8},
]; // 객체가 들어있는 배열
const a5 = [
	[1,3,5],
	[2,4,6],
]; // 배열이 둘어있는 배열

const arr = ["a","b","c"];
arr.length; // 배열의 요소 숫자를 반환하는 length 3

const arr = ["a","b","c"];
arr[0]; // 첫번째 요소를 가져온다 "a"
arr[arr.length -1]; // arr 마지막 요소의 인덱스는 arr.length-1 이다 "c"

const arr = [1,2,"c",4,5];
arr[2] = 3; // arr은 [1,2,3,4,5]이다

// 객체와 배열의 마지막의 쉼표
const arr = [
	"One",
	"Two",
	"Three",
];
const o = [
	one : 1,
	two : 2,
	three : 3,
];
// 팀의 스타일 가이드에 마지막 쉼표를 쓰지 않도록 정했다면 마지막 쉼표를 쓰지 말자
// JSON에서는 마지막 쉼표를 허용하지 않는다.

// 날짜
const now = new Date();
now; 

const halloween = new Date(2018,9,31); // 월은 0에서 시작합니다 9는 10월 이다.
const halloweenParty = new Date(2018,9,31,19,0) // 19:00 = 7:00 pm
halloweenParty.getFullYear(); // 2018
halloweenParty.getMonth(); // 9
halloweenParty.getDate(); // 31
halloweenParty.getDay(); // 1 (월요일 이다 0은 일요일)
halloweenParty.getHours(); // 19
halloweenParty.getMinutes(); // 0
halloweenParty.getSeconds();  // 0
halloweenParty.getMilliseconds(); //0

// 정규표현식
const email = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b/; // 간단한 이메일 정규표현식
const phone = /(:?\+1)?(:?\(\d{3}\)\s?|\d{3}[\s-]?)\d{3}[\s-]?\d{4}/?; // 미국 전화번호 정규표헌식

// 숫자로 바꾸기
const numStr = "33.3";
const num = Number(numStr); // 이 행은 숫자 값을 만든다. Number 객체의 인스턴스가 아니다
// 숫자로 바꿀 수 없는 문자열에는 NaN이 반환된다

const a = parseInt("16 volts", 10); // "volts"는 무시된다 10진수 16이다
const b = parseInt("3a",16); // 16진수 3afmf 10진수로 바꾼다 결과는 58
const c = parseFloat("15.5 kph"); // "kph"는 무시된다 parseFloat는 항상 기수가 10이라고 가정한다.

const d = new Date(); // 현재 날짜 
const ts = d.valueOF();  // UTC가 1970년 1월 1일 자정으로 부터 몇 밀리초가 지났는지 나타내는 숫자

const b = true;
const n = b ? 1 : 0; // 불리언 값들 1 이나 0 으로 바꿔야 할 떄도 있다. 조건연산자 사용

// 문자열로 변환
const n = 33.3;
n; // 33.5 숫자
const s = n.toString();
s; // "33.5" 문자열

const arr = [1, "true", "hello"];
arr.toString; // "1,true,hello"

// 불리언으로 변환
const n = 0; // 거짓 같은 값
const b1 = !!n; // false
const b2 = Boolean(n); // false

// 참조형과 원시형
let a = 1; // 원본
let b = a; // 사본 b는 1이다. a가 아니다
a = 2; // 원본의 값을 바꿈
console.log(b); // 사본의 값은 바뀌지 않음

a === 2 //true
//////////////////////////////////////////////////
function change(a) {
	a = 5;
}
a = 3;
change(a);
console.log(a); // 3
// 객체는 가변이고 객체를 복사/전달 할때에는 객체가 아니라 그 객체를 가리키고 있다는 사실을 복사/전달 한다
// 사본도 따라서 바뀐다
//////////////////////////////////////////////////
let o = {a:1};
let p = o; // 이제 p는 o가 가르킥ㅎ 았눈 것을 가르킨다.
o.a = 2; 
console.log(p); // {a:2}
//////////////////////////////////////////////////
let o = {a:1};
let p = o; // 이제 p는 o가 가르키고 ㅇ,ㅆ는 것을 가르킨다
	p === o; // true
o = {a:2}; // 이제 o는 다른 것을 가르킨다 {a:1}을 수정한 것이 아니다
	p === o; // false
console.log(p) // {a:1}
//////////////////////////////////////////////////
let q = {a:1};
q === {a:1}; // false

function change_o(o) {
	o.a = 999;
}
let o = {a:1};
change_o(o);
console.log(o) // {a:999}

