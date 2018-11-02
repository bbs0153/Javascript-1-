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




