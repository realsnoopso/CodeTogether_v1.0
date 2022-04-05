function mission1_1() {
	const [입력항목1] = arguments;
	//1-1 미션을 여기에 구현합니다
	//출력을 위해서는 아래처럼 원하는 값을 출력 사이에 입력하면 됩니다.
	//출력(입력1);
	출력(`hello ${입력항목1}`);
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

function mission2_2() {
	// 대각선의 길이 = a제곱 + b제곱을 루트 씌운 것
	// 위 공식을 이용해 좌표간 차이를 구한 후 a와 b에 대입
	// https://ko.wikihow.com/%EB%91%90-%EC%A0%90-%EC%82%AC%EC%9D%B4%EC%9D%98-%EA%B1%B0%EB%A6%AC-%EA%B5%AC%ED%95%98%EB%8A%94-%EB%B2%95
	const [입력항목1, 입력항목2] = arguments;
	const 입력항목1_x = 입력항목1.split(",")[0];
	const 입력항목1_y = 입력항목1.split(",")[1];
	const 입력항목2_x = 입력항목2.split(",")[0];
	const 입력항목2_y = 입력항목2.split(",")[1];
	const 좌표간거리 = Math.sqrt((입력항목1_x - 입력항목2_x)**2) + ((입력항목1_y - 입력항목2_y)**2);
	출력(좌표간거리);
}

function mission2_3() {
	const [입력항목1, 입력항목2] = arguments;
	const 반지름 = parseInt(입력항목1);
	const 높이 = parseInt(입력항목2);
	// 원의 넓이 = 반지름 x 반지름 x 원주율
	const 넓이 = 반지름**2*3.14
	// 원뿔의 부피 = (원의넓이)*(높이)/3
	const 부피 = 넓이*높이/3
	if (typeof(높이) === "string") {
		출력("숫자를 입력하세요");
	} else if (높이 > 100) {
		출력("너무 큰 숫자입니다")
	} else {
		출력(`반지름이 ${반지름}이고 높이가 ${높이}인 원뿔의 부피는 ${부피}입니다.`)
	}
}

function mission2_4() {
	const [입력항목1] = arguments;
	const 주문갯수 = parseInt(입력항목1);
	if (typeof(주문갯수) === "string") {
		출력("숫자를 입력하세요");
	} else {
		// 1. 25000 에서 20%를 뺀 가격
		const 구입가격 = (25000-(25000*0.2))*주문갯수
		// 2. 배송료 계산 (1회만 2500, 2회째부터 1500)
		const 배송료 = 2500 + 1500*주문갯수
		const 총가격 = (구입가격*주문갯수).toLocaleString("ko-KR") 
		출력(총가격)
	}
}