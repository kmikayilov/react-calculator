import "./App.scss";
import Calculator from "./components/Calculator";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
	return (
		<div className="App d-flex justify-content-center align-items-center">
			<Calculator />
		</div>
	);
};

export default App;
