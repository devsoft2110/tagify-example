import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ReactTagify } from "react-tagify";

function App() {
	return (
		<div className="App">
			<ReactTagify colors={"red"} tagClicked={(tag) => alert(tag)}>
				<p>
					“You might not think that #programmers are #artists, but programming is an extremely creative #profession. Its
					logic-based creativity” @JohnRomero
				</p>
			</ReactTagify>
		</div>
	);
}

export default App;
