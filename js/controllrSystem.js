// if... else 문
if(new Date().getDay() === 3){ // new Date().getDay()는 현재 요일에 해당하는 숫자를 반환
	totalBet = 1;
}else if(funds === 7){
	totalBet = funds;
}else{
	console.log("No superstition here!");
}

// 메타 문법 [] 옵션 ... 들어갈 부분이 더 있다 

// for 루프의 다른 패턴
for(let temp i=0, j=1; j<30; temp = i, i=j, j=i+temp)
	console.log(j);

for(;;)console.log("I will repeat forever"); // 무한 루프

let s= '3'; 				// 숫자가 들어 있는 문자열
for(;s.length<10; s=''+s);	// 문자열의 길이를 조건으로 씀 마지막 세미클론이 없으면 에러 남
for(let x = 0.2; x < 3.0; x += 0.2) // 제어 변수가 정수가 아니어도 괜찮음
	console.log(x);
for(; !player.isBroke;) // 조건에 객체 프로퍼티 씀
	console.log("Still playing");

for([initialization];[condition];[final-expression])
	statement

[initialization]
while([condition]){
	statement
	[final-expression]
} // for문을 while문을 바꿀 수 있다

// switch문
switch(expression){
	case value1:
		// expression을 평가한 결과가 value1일 때 실행
		break;
	case value2:
		// expression을 평가한 결과가 value1일 때 실행
		break;
	default:
		// expression을 평가한 결과에 맞는 것이 없을 때 실행
		break;
}

switch(totalBet){
	case 7:
		totalBet = funds;
		break;
	case 11:
		totalBet = 0;
		break;
	case 13:
		totalBet = 0;
		break;
	case 21:
		totalBet = 21;
		break;
}

switch(totalBet){
	case 7:
		totalBet = funds;
		break;
	case 11: // 11과 13일 때 똑같이 동작함으로 break없이 쓸 수 있다.
	case 13:
		totalBet = 0;
		break;
	case 21:
		totalBet = 21;
		break;
}

function odjustBet(totalBet, funds) { // switch문을 함수 안에 쓸 때 return은 즉시 함수를 빠져 나가므로 break대신 쓸 수 있다.
	switch(totalBet){
		case 7:
			return funds;
		case 13:
			return 0;
		default:
			return totalBet;
	}
}

