import * as React from "react";
import Head from "next/head";

type Props = {
	title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
	children,
	title = "Josef Vacek - Full-stack Web Developer"
}) => (
	<div>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta
				name="viewport"
				content="initial-scale=1.0, width=device-width"
			/>
			<meta
				name="description"
				content="Full-stack Web Developer Josef Vacek"
			/>
		</Head>
		{children}
	</div>
);

export default Layout;
