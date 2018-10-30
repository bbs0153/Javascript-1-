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







