function mission1_1() {
	const [입력1] = arguments;
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
