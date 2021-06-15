import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Btn = ({ value, click }) => {
	let classname = null;
	let val = value;

	switch (value) {
		case "0":
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":
		case "7":
		case "8":
		case "9":
		case ".":
			classname = "primary";
			break;
		case "":
			val = <FontAwesomeIcon icon={faUndo} />;
			classname = "primary";
			break;
		case "AC":
		case "±":
		case "%":
			classname = "secondary";
			break;
		case "÷":
		case "x":
		case "-":
		case "+":
		case "=":
			classname = "tretiary";
			break;
		default:
			classname = "";
	}

	return (
		<button className={["btn", classname].join(" ")} onClick={click}>
			{val}
		</button>
	);
};

export default Btn;
