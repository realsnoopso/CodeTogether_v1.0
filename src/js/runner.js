function mission1_1() {
	const [입력항목1] = arguments;
	//1-1 미션을 여기에 구현합니다
	//출력을 위해서는 아래처럼 원하는 값을 출력 사이에 입력하면 됩니다.
	//출력(입력1);
	출력(`hello ${입력1}`);
}

function mission1_2() {
	const[입력1, 입력2] = arguments;
	출력(`${입력1} ${입력2}`);
}

function mission1_3() {
	const [입력1, 입력2] = arguments;
	출력(`곱하기 결과 입니다 -> ${입력1*입력2} '나눗셈 결과 입니다 -> ${입력1/입력2}`)
}

function mission1_2() {
	const[입력항목1, 입력항목2] = arguments;
	출력(`${입력항목1} ${입력항목2}`);
}

function mission1_3() {
	const [입력항목1, 입력항목2] = arguments;
	출력(`곱하기 결과 입니다 -> ${입력항목1*입력항목2} 나눗셈 결과 입니다 -> ${입력1/입력2}`);
}

function mission2_1() {
	const [입력항목1, 입력항목2] = arguments;
	const 덧셈나눗셈 = `덧셈 결과 입니다 -> ${입력항목1+입력항목2} 나눗셈 결과 입니다 -> ${입력1/입력2}`;
	출력(덧셈나눗셈);
}

function mission2_2(입력항목1, 입력항목2) {
	const aX = 입력항목1.split(",")[0];
	const aY = 입력항목1.split(",")[1];
	const bX = 입력항목2.split(",")[0];
	const bY = 입력항목2.split(",")[1];
	const 좌표간거리 = Math.sqrt((aX - bX)**2) + ((aY - bY)**2);
	출력(좌표간거리);
}

function mission2_3(입력항목1, 입력항목2) {
	const 반지름 = parseInt(입력항목1);
	const 높이 = parseInt(입력항목2);
	const 넓이 = 반지름**2*Math.PI;
	const 부피 = 넓이*높이/3
	if (typeof(높이) === "string") {
		출력("숫자를 입력하세요");
	} else if (높이 > 100) {
		출력("너무 큰 숫자입니다")
	} else {
		출력(`반지름이 ${반지름}이고 높이가 ${높이}인 원뿔의 부피는 ${부피}입니다.`)
	}
}

function mission2_4(입력항목1) {
	const 주문갯수 = parseInt(입력항목1);
	const 구입가격 = (25000-(25000*0.2))*주문갯수
	const 배송료 = 2500+1500*주문갯수
	const 총가격 = (구입가격+배송료).toLocaleString("ko-KR") 
	typeof(주문갯수) === "string"? 출력("숫자를 입력하세요"):출력(총가격);
}

function mission3_1(a, b) {
	const sum = (x, y) => x+y;
	const powWithSum = (x) => Math.pow(x, 2);
	출력 (powWithSum(sum(a, b)));
}

function mission3_2(입력항목1) {
	const removeLastChar = (x) => x.substring(0, x.length-1);
	출력 (removeLastChar(입력항목1));
}

function mission3_2(입력항목1) {
	const removeSpecificChar = (x) => x.replace("$", "");
	출력 (removeSpecificChar(입력항목1));
}

function mission3_3(반지름, 높이값) {
	const calculate = (x, y) => (Math.pow(x, 2) * Math.PI) * 2 + ((2 * x * Math.PI) * y)
	출력 (calculate(반지름, 높이값));
}