let x;
x = 3 * 5; // 표현식 결과를 명시적으로 반환하는 것

let x,y;
y = x = 3 * 5; // x, y 모두 15

let x, y; 
y = x = 3 * 5; 	// 원래 문
y = x = 15; 	// 곱셈 표현식을 평가
y = 15; 		// 첫 번째 할당을 평가 x는 이제 15이고 y는 아직 undfined 이다
15; 			// 두 번쩨 할당을 평가 했다 y는 이제 15이다
				// 전체 문의 결과는 15이다 이 값은 사용하지 않았고 어딘가에 할당하지도 않았으니 버려진다

// 산술 연산자
const x = 5;
const y = 3 - -x; // y는 8이다

const s = "5";
const y = 3 + +s; // y는 8이다 단항 플러스를 사용하지 않았다면 문자열 병합이 일어나서 35가 된다

// 여기서 굳이 단항 플러스가 필요하지 않지만 줄을 잘 맞출 수 있다
const x1 = 0, x2 = 3, x3 = -1.5, x4 = -6.33; 
const p1 = -x1*1;
const p2 = +x2*2;
const p3 = +x3*3;
const p4 = -x4*4;

let x = 2;
const r1 = x++ + x++;
// ((x++)+(x++))
// (2+(x++)) 	왼쪽에서 오른쪽으로 진행한다 x는 지금 3이다.
// (2+3) 		x는 지금 4이다
// 5 			결과는 5 x는 4이다
const r2 = ++x + ++x;
// ((++x)+(++x))
// (5 + (++x)) 	왽쪽에서 오른쪽으로 진행한다 x는 지금 5이다
// (5 + 6) 		x는 지금 6이다
// 11 			결과는 11 x는 6이다
const r3 = x++ + ++X;
// ((x++)+(++x))
// (6+(++x)) 	왼쪽에서 오른쪽으로 진행한다 x는 지금 7이다
// (6+8) 		x는 지금 8이다
// 14 			결과는 14 x는 8이다
const r4 = ++x + x++;
let y = 10;
const r5 = y-- + y--;
const r6 = --y + --y;
const r7 = y-- + --y;
const r8 = --y + y--;

// 비교 연산자
const n = 5;
const s = "5";
n === s; // false -- 타입이 다르다
n !== s; // true
n === Number(s); // true -- 문자열 "5"를 숫자로 5로 변환했다
n !== Number(s); // flase
n == s; // true 권장하지 않는다
n != s; // false 권장하지 않는다

const a = {name : "an object"};
const b = {name : "an object"};
a === b; // false --객체는 항상 다르다
a !== b; // true
a == b; // false 권장하지 않는다
a != b; // true 권장하지 않는다

// 숫자 비교
let n = 0;
while(true){
	n += 0.1;
	if(n === 0.3) break;
}
console.log(`Stopped at ${n}`); // 0.1이 더블 형식으로 정확하게 나타낼수 없는 값때문에 무한 루프가 된다

let n = 0;
while(true){
	n += 0.1;
	if(Math.abs(n-0.3) < Number.EPSILON) break;
}
console.log(`Stopped at ${n}`);

3 + 5 + "8" // 문자열 "88"이 된다
"3" + 5 + 8 // 문자열 "358"이 된다

// 논리 연산자
undifined
null
false
0
NaN
" " // 자바스크립트에서 거짓 같은 값

// 모든객체 vlaueOf() 메서드를 호출 했을 때 false를 반환한는 객체도 참 같은 값에 속한다
// 배열, 빈 배열도 참 같은 값에 속한다
// 공백만 있은 문저열 (" " 등)
// 문자열 "false"

// and(&&), or(||), not(!)

// 단축 평가
const skipIt = true;
let x = 0;
const result = skiptIt || x++;
// 세 번째 행의 결과는 result에 저장된다 첫 번째 피연산자가 skipIt이 true이므로 result도 true이다
// 세 번째 행에서 단축 평가가 일어나므로 증가 연산자에 해당하는 표현식은 실행되지 않고 x의 값은 그대로 0이다
// skiptIt를 false로 바꾸면 x는 증가한다
const doIt = false;
let x = 0;
const result = doIt && x++;
// result는 flase이고 x는 늘어나지 않는다 doIt를 true로 바꾸면 증가 연산이 일어나고 result가 0이 된다

// 조건 연산자
const doIt = false;
const result = doIt ? "Did it!" : "Didn't do it"; // 3항 연산자
// 표현식의 값은 두 번째 피연산자이며, 거짓 같은 값이면 셋 번째 피연산자 이다

// 쉼표 연산자
let x =0, y = 10, z;
z = (x++,y++);
// y와 x 모두 1씩 늘어나지만 z의 값은 10  y++가 반환하는 값이다

// 해체 할당
const obj = {b:2,c:3,d:4}; // 객체 선언
const {a,b,c} = obj; // 해체 할당
a; // undifined : obj에는 "a"프로퍼티가 없다
b; // 2
c; // 3
d; // ReferenceError: "d"는 정의되자 않았다

const obj = {b:2,c:3,d:4};
let a,b,c;
{a,b,c} = obj; // 에러 발생
({a,b,c}=obj); // 동작함

const arr = [1,2,3]; // 배열 선언
let [x,y] = arr;
x; // 1
y; // 2
z; // ReferenceError: "z"는 정의 되지 않았다

const arr = [1,2,3,4,5];
let [x,y,...rest] = arr;
x; // 1
y; // 2
rest; // [3,4,5]

let a = 5, b = 10;
[a,b] = [b,a];
a; // 10
b; // 5

// if...else 문을 3항 연산자로 바꾸기
if(isPrime(n)){
	label = "prime";
}else{
	label = "non-prime";
}

label = isPrime(n) : "prime" : "non-prime";

// if문을 단축 평가하는 OR 표현식으로 바꾸기
if(!options) options = {};
options = options || {};





