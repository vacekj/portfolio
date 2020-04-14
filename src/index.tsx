import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
/* Tailwind compiled styles */
import "./styles.css";
import { I18nManager, I18nContext } from "@shopify/react-i18n";

let locale = "cs";
const i18nManager = new I18nManager({
	locale
});

ReactDOM.render(
	<React.StrictMode>
		<I18nContext.Provider value={i18nManager}>
			<App i18nmanager={i18nManager} />
		</I18nContext.Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
