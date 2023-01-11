import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Tagify from "@yaireo/tagify";

function App() {
	const defaultTags = [{ value: "foo", editable: false }, { value: "bar" }];

	const [tags, setTags] = useState(defaultTags);

	const inputElement = document.querySelector("input");
	new Tagify(inputElement);

	useEffect(() => {}, []);

	return (
		<div className="App">
			<input
				onChange={(e) => {
					console.log(e);
				}}
				value={JSON.stringify(tags.value)}
			/>

			<button>Add</button>
		</div>
	);
}

export default App;
