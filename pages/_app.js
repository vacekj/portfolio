import '../styles/index.css'
import React from "react";
import { hotjar } from 'react-hotjar';


function MyApp({ Component, pageProps }) {
	if (typeof window !== "undefined") {
		hotjar.initialize(2162729, 6);
	}
	return <Component {...pageProps} />
}

export default MyApp
