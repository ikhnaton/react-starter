import React from "react";
import ReactDOM from "react-dom";
import "./app.scss";
import { Header } from "./components/Header";

const App = () =>
{
	return (
		<>
			<Header title="Your Header Goes Here" />
		</>
	);
};

document.addEventListener("DOMContentLoaded", () =>
{
	ReactDOM.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
		document.getElementById("root")
	);
});
