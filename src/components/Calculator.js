import React from "react";
import Btn from "./Btn";
import { operations } from "../helpers/utils";
import blackSunIcon from "../assets/icons/sun-black.svg";
import whiteSunIcon from "../assets/icons/sun-white.svg";
import blackMoonIcon from "../assets/icons/moon-black.svg";
import whiteMoonIcon from "../assets/icons/moon-white.svg";

const Calculator = () => {
	const [field, setField] = React.useState(null);
	const [curField, setCurField] = React.useState("0");
	const [operator, setOperator] = React.useState(null);
	const [isWaitingForOperator, setIsWaitingForOperator] = React.useState(false);
	const [activeTheme, setActiveTheme] = React.useState("dark");

	const clearAll = () => {
		setCurField("0");
		setField(null);
		setOperator(null);
		setIsWaitingForOperator(false);
	};

	const clearLastChar = () => {
		setCurField(curField.substring(0, curField.length - 1) || "0");
	};

	const toggleSign = () => {
		setCurField(parseInt(curField) * -1);
	};

	const inputPercent = () => {
		const currentValue = parseFloat(curField);

		if (currentValue === 0) return;

		const fixedDigits = curField.replace(/^-?\d*\.?/, "");
		const newValue = parseFloat(curField) / 100;

		setCurField(newValue.toFixed(fixedDigits.length + 2));
	};

	const inputDot = () => {
		if (!/\./.test(curField)) {
			setCurField(`${curField}.`);
			setIsWaitingForOperator(false);
		}
	};

	const inputDigit = (digit) => {
		if (isWaitingForOperator) {
			setCurField(String(digit));
			setIsWaitingForOperator(false);
		} else {
			setCurField(curField === "0" ? String(digit) : `${curField}${digit}`);
		}
	};

	const performOperation = (nextOperator) => {
		const inputValue = parseFloat(curField);

		if (field == null) {
			setField(inputValue);
			// setCurField(nextOperator);
		} else if (operator) {
			const currentValue = field || 0;
			const newValue = operations[operator](currentValue, inputValue);

			setField(newValue);
			setCurField(String(newValue));
		}

		setIsWaitingForOperator(true);
		setOperator(nextOperator);
	};

	return (
		<div className={["calculator", activeTheme].join(" ")}>
			<div className="switch-wrapper">
				<div className="switch d-flex flex-row justify-content-center align-items-center">
					{activeTheme === "dark" ? (
						<>
							<div onClick={() => setActiveTheme("light")}>
								<img src={whiteSunIcon} alt="" />
							</div>
							<div className="active" onClick={() => setActiveTheme("dark")}>
								<img src={whiteMoonIcon} alt="" />
							</div>
						</>
					) : (
						<>
							<div className="active" onClick={() => setActiveTheme("light")}>
								<img src={blackSunIcon} alt="" />
							</div>
							<div onClick={() => setActiveTheme("dark")}>
								<img src={blackMoonIcon} alt="" />
							</div>
						</>
					)}
				</div>
			</div>
			<div className="result">
				<div>{field}</div>
				<div>{curField}</div>
			</div>
			<div className="btn-block">
				<Btn value="AC" click={() => clearAll()} />
				<Btn value="±" click={() => toggleSign()} />
				<Btn value="%" click={() => inputPercent()} />
				<Btn value="÷" click={() => performOperation("/")} />

				<Btn value="7" click={() => inputDigit(7)} />
				<Btn value="8" click={() => inputDigit(8)} />
				<Btn value="9" click={() => inputDigit(9)} />
				<Btn value="x" click={() => performOperation("x")} />

				<Btn value="4" click={() => inputDigit(4)} />
				<Btn value="5" click={() => inputDigit(5)} />
				<Btn value="6" click={() => inputDigit(6)} />
				<Btn value="-" click={() => performOperation("-")} />

				<Btn value="1" click={() => inputDigit(1)} />
				<Btn value="2" click={() => inputDigit(2)} />
				<Btn value="3" click={() => inputDigit(3)} />
				<Btn value="+" click={() => performOperation("+")} />

				<Btn value="" click={() => clearLastChar()} />
				<Btn value="0" click={() => inputDigit(0)} />
				<Btn value="." click={() => inputDot()} />
				<Btn value="=" click={() => performOperation("=")} />
			</div>
		</div>
	);
};

export default Calculator;
