import React, { useState } from "react";
import { I18nManager, useI18n } from "@shopify/react-i18n";
import "./App.css";

import en from "./translations/en.json";
import cs from "./translations/cs.json";

function NavLink(props: React.ComponentProps<"a"> & { active?: boolean }) {
	return (
		<a
			href={props.href}
			onClick={props.onClick}
			className={`z-50 navlink relative text-3xl hover:text-gray-800 duration-200 ease-in-out transition mb-1 ${
				props.active ? "text-gray-900" : "text-gray-600"
			} ${props.className}`}
		>
			{props.children}
			<div className="hidden sm:block stripe opacity-75 transition-all ease-out duration-200 bg-blue-200 absolute bottom-0 w-0 h-3 z-0 ml-3" />
		</a>
	);
}

function Section(props: React.ComponentProps<"a"> & { title?: string }) {
	return (
		<section className="my-12" id={props.id}>
			<h2 className="text-2xl text-gray-800 mb-4 relative inline-block">
				<span className="relative z-10">{props.title}</span>
				<div className="bg-blue-200 absolute bottom-0 w-full h-3 z-0 ml-3" />
			</h2>
			<div className="text-xl text-gray-700 border-l-2 pl-6 ml-3">{props.children}</div>
		</section>
	);
}

function Client(props: {
	name: string;
	projects: React.ReactNode;
	date: [string | number, (string | number)?];
}) {
	return (
		<div className="mb-2">
			<svg
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				viewBox="0 0 24 24"
				className="inline w-6 h-6 align-text-bottom text-gray-500"
			>
				<path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
			</svg>
			<span className="px-2">{props.name}</span>•
			<span className="pl-2 text-base">
				{
					<>
						{props.date[0]}{" "}
						<svg
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							className="w-4 h-4 mx-1 align-text-bottom inline"
						>
							<path d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
						{props.date[1] ?? null}
					</>
				}
			</span>
			<div className="flex flex-col mt-3 ml-8">{props.projects}</div>
		</div>
	);
}

function Link(props: React.ComponentProps<"a">) {
	return (
		<a
			{...props}
			target="_blank"
			className="duration-100 ease-in-out self-start items-center hover:text-gray-700 rounded"
		>
			{props.children}
			<LinkIcon />
		</a>
	);
}

function Project(props: { name: string | JSX.Element; link?: string; description?: JSX.Element }) {
	return (
		<>
			<div className="mb-3">
				<svg
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					viewBox="0 0 24 24"
					className="inline w-6 h-6 mr-4 align-text-bottom text-gray-500"
				>
					<path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
				</svg>
				<span className="text-gray-700">{props.name}</span>
			</div>
			<div className="ml-10 text-base text-gray-600">{props.description}</div>
		</>
	);
}

function Technology(
	props: React.ComponentProps<"div"> & {
		more?: JSX.Element | string;
	}
) {
	return (
		<div className="mb-4 flex items-center">
			<svg
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				viewBox="0 0 24 24"
				className="w-8 h-8 align-text-bottom text-gray-400 inline mr-3"
			>
				<path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
			</svg>
			<span>{props.children}</span>
			{props.more && (
				<span
					style={{
						overflow: "hidden",
						whiteSpace: "nowrap"
					}}
					className="ml-2 text-base w-3 transition-all duration-200 ease-in-out hover:w-auto"
				>
					{props.more}
				</span>
			)}
		</div>
	);
}

interface TranslateButtonProps {
	onClick: (lang: string) => void;
}

function TranslateButton(props: TranslateButtonProps) {
	const [lang, setLang] = useState("cs");

	return (
		<button
			className="inline-block mt-3 focus:outline-none blurredbg"
			onClick={() => {
				const newLang = lang === "en" ? "cs" : "en";
				setLang(newLang);
				props.onClick(newLang);
			}}
		>
			<svg
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				viewBox="0 0 24 24"
				className="w-6 h-6 inline mr-2 text-gray-500"
			>
				<path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
			</svg>
			<span
				className={`hover:text-gray-800 duration-250 ease-in-out ${
					lang === "en" ? "text-gray-900" : "text-gray-500"
				}`}
			>
				en
			</span>
			<span className="mx-1 text-gray-500">/</span>
			<span
				className={`hover:text-gray-800 duration-250 ease-in-out ${
					lang === "cs" ? "text-gray-900" : "text-gray-500"
				}`}
			>
				cs
			</span>
		</button>
	);
}

function LinkIcon(props: React.ComponentProps<"svg">) {
	return (
		<svg
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			viewBox="0 0 24 24"
			className="inline w-4 h-4 ml-2 align-baseline"
		>
			<path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
		</svg>
	);
}

function App(props: { i18nmanager: I18nManager }) {
	const [t] = useI18n({
		id: "App",
		translations(locale) {
			return locale === "en" ? en : cs;
		}
	});

	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	return (
		<>
			<div className="relative w-full">
				<nav
					className={`${
						mobileNavOpen
							? "opacity-100 ease-out"
							: "opacity-0 pointer-events-none ease-in-out"
					} sm:pointer-events-auto backdrop-blur w-full text-center sm:opacity-100 z-30 pt-5 flex transition-all overflow-none whitespace-no-wrap h-full duration-300 sm:flex flex-col sm:items-end fixed sm:p-12 right-0 top-0 sm:w-1/3 sm:text-right`}
					onClick={() => setMobileNavOpen(false)}
				>
					<NavLink onClick={() => setMobileNavOpen(false)} href="#top" active={true}>
						Josef Vacek
					</NavLink>
					<NavLink onClick={() => setMobileNavOpen(false)} href="#what">
						{t.translate("App.Menu.what")}
					</NavLink>
					<NavLink onClick={() => setMobileNavOpen(false)} href="#how">
						{t.translate("App.Menu.how")}
					</NavLink>
					<NavLink onClick={() => setMobileNavOpen(false)} href="#forwho">
						{t.translate("App.Menu.forwho")}
					</NavLink>
					<NavLink onClick={() => setMobileNavOpen(false)} href="#projects">
						{t.translate("App.Menu.projects")}
					</NavLink>
					<NavLink onClick={() => setMobileNavOpen(false)} href="#more">
						{t.translate("App.Menu.more")}
					</NavLink>
					<NavLink onClick={() => setMobileNavOpen(false)} href="#contact">
						{t.translate("App.Menu.contact")}
					</NavLink>
					<TranslateButton
						onClick={lang => {
							props.i18nmanager.update({ locale: lang });
						}}
					/>
				</nav>
			</div>
			<main className="m-3 font-sans max-w-4xl sm:mx-auto my-8">
				<div className="flex justify-between items-center px-3 sm:p-0 sm:block">
					<h1 className="text-4xl sm:text-6xl name text-center md:text-left" id={"top"}>
						Josef Vacek
					</h1>
					<button
						className="sticky sm:hidden"
						onClick={() => setMobileNavOpen(!mobileNavOpen)}
					>
						<svg
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							className="w-8 h-8"
						>
							<path d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>
				<Section title={t.translate("App.Menu.what")} id={"what"}>
					<ul>
						<li>Full-stack web development</li>
					</ul>
				</Section>
				<Section title={t.translate("App.Menu.how")} id={"how"}>
					<ul>
						<Technology more={"+ ES6+, FP"}>Typescript</Technology>
						<Technology>ReactJS</Technology>
						<Technology>TailwindCSS</Technology>
						<Technology>Laravel</Technology>
						<Technology>NodeJS, ExpressJS</Technology>
						<Technology>Cypress, Jest</Technology>
						<Technology>Git, -Hub, -Lab</Technology>
					</ul>
				</Section>
				<Section title={t.translate("App.Menu.forwho")} id={"forwho"}>
					<Client
						name={"Abradatas"}
						projects={
							<>
								<Project
									name={t.translate("App.Projects.Evaluace.name")}
									description={
										<ul>
											<li className="mb-2">
												<Link href="https://form.evaluacevyuky.cz">
													{t.translate("App.Projects.Evaluace.form")}
												</Link>
											</li>
											<li className="mb-2">
												<Link href="https://evaluacevyuky.cz">
													{t.translate("App.Projects.Evaluace.landing")}
												</Link>
											</li>
											<li className="mb-2">
												<Link href="https://app.evaluacevyuky.cz/sample">
													{t.translate("App.Projects.Evaluace.results")}
												</Link>
											</li>
										</ul>
									}
								/>
							</>
						}
						date={[2019]}
					/>
				</Section>
				<Section title={t.translate("App.Menu.projects")} id={"projects"}></Section>

				<Section title={t.translate("App.Menu.more")} id={"more"}></Section>

				<Section title={t.translate("App.Menu.contact")} id={"contact"}></Section>
			</main>
		</>
	);
}

export default App;
