import { Content } from "carbon-components-react";
import React from "react";
import ReactDOM from "react-dom";
import "./app.scss";
import { AppHeader } from "./components/Header";

const App = () =>
{
	return (
		<>
			<AppHeader title="Your Header Goes Here" />
			<Content>
				Main Content belongs here
			</Content>
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
