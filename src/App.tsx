import React, { useState } from "react";
import { I18nManager, useI18n } from "@shopify/react-i18n";
import { RemoveScroll } from "react-remove-scroll";

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
			<div className="absolute bottom-0 z-0 hidden w-0 h-3 ml-3 transition-all duration-200 ease-out bg-blue-200 opacity-75 sm:block stripe" />
		</a>
	);
}

function Section(props: React.ComponentProps<"a"> & { title?: string }) {
	return (
		<section className="my-12" id={props.id}>
			<h2 className="relative inline-block mb-4 text-2xl text-gray-800">
				<span className="relative z-10">{props.title}</span>
				<div className="absolute bottom-0 z-0 w-full h-3 ml-3 bg-blue-200" />
			</h2>
			<div className="pl-6 ml-3 text-xl text-gray-700 border-l-2">{props.children}</div>
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
				className="inline w-6 h-6 text-gray-500 align-text-bottom"
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
							className="inline w-4 h-4 mx-1 align-text-bottom"
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

function Link(
	props: React.ComponentProps<"a"> & {
		noIcon?: boolean;
	}
) {
	return (
		<a
			{...props}
			rel="noopener"
			target="_blank"
			className="items-center self-start duration-100 ease-in-out rounded hover:text-gray-700"
		>
			{props.children}
			{!props.noIcon && <LinkIcon />}
		</a>
	);
}

function Project(props: { name: string | JSX.Element; link?: string; description?: JSX.Element }) {
	return (
		<div className="mb-5">
			<div className="mb-1">
				<svg
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					viewBox="0 0 24 24"
					className="inline w-6 h-6 mr-4 text-gray-500 align-text-bottom"
				>
					<path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
				</svg>
				<span className="text-gray-700">{props.name}</span>
			</div>
			<div className="ml-10 text-base text-gray-600">{props.description}</div>
		</div>
	);
}

function Technology(
	props: React.ComponentProps<"div"> & {
		more?: JSX.Element | string;
	}
) {
	const [moreVisible, setMoreVisible] = useState(false);

	return (
		<div
			className="flex items-center mb-4"
			onClick={() => setMoreVisible(!moreVisible)}
			onMouseEnter={() => setMoreVisible(true)}
			onMouseLeave={() => setMoreVisible(false)}
		>
			<svg
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				viewBox="0 0 24 24"
				className="inline w-8 h-8 mr-3 text-gray-400 align-text-bottom"
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
					className={`${
						moreVisible ? "w-full" : "w-3"
					} ml-2 text-base transition-all duration-300 ease-in-out`}
				>
					+&nbsp;{props.more}
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
				className="inline w-6 h-6 mr-2 text-gray-500"
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
				<RemoveScroll enabled={mobileNavOpen}>
					<nav
						className={`${
							mobileNavOpen
								? "opacity-100 ease-out"
								: "opacity-0 pointer-events-none ease-in-out"
						} justify-evenly items-center sm:pointer-events-auto backdrop-blur w-full text-center sm:opacity-100 z-30 pt-5 flex transition-all
					 overflow-none whitespace-no-wrap h-full duration-300 sm:flex flex-col sm:items-end fixed sm:p-12 right-0
					  top-0 sm:w-1/3 sm:text-right`}
						onClick={() => setMobileNavOpen(false)}
					>
						<NavLink href="#top" active={true}>
							Josef Vacek
						</NavLink>
						<NavLink href="#what">{t.translate("App.Menu.what")}</NavLink>
						<NavLink href="#how">{t.translate("App.Menu.how")}</NavLink>
						<NavLink href="#forwho">{t.translate("App.Menu.forwho")}</NavLink>
						<NavLink href="#projects">{t.translate("App.Menu.projects")}</NavLink>
						<NavLink href="#contact">{t.translate("App.Menu.contact")}</NavLink>
						<TranslateButton
							onClick={lang => {
								props.i18nmanager.update({ locale: lang });
							}}
						/>
					</nav>
				</RemoveScroll>
			</div>
			<main className="max-w-4xl m-3 my-8 font-sans sm:mx-auto">
				<div className="flex items-center justify-between px-3 sm:p-0 sm:block">
					<h1 className="text-4xl text-center sm:text-6xl name md:text-left" id={"top"}>
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
						<Technology more={"ES6+, FP"}>Typescript</Technology>
						<Technology more={"Material-UI"}>ReactJS</Technology>
						<Technology more={"CSS3, BEM"}>TailwindCSS</Technology>
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
					<Client
						name={t.translate("App.Clients.Gytool.name")}
						projects={
							<>
								<Project
									name={t.translate("App.Projects.Zastupovani.name")}
									description={
										<ul>
											<li className="mb-2">
												<Link href="https://zastupovani.gytool.cz">
													Deployment
												</Link>
											</li>
											<li className="mb-2">
												<Link href="https://github.com/JouzaLoL/better-zastupovani">
													Code
												</Link>
											</li>
										</ul>
									}
								/>
							</>
						}
						date={[2017]}
					/>
					<Client
						name={"Allerton's Automatica"}
						projects={
							<>
								<Project
									name={"emilia.digital"}
									description={
										<span>
											Backend in Laravel with heavy Instagram-API integration
										</span>
									}
								/>
								<Project
									name={"ava.digital"}
									description={
										<Link href="https://ava.digital">Landing page</Link>
									}
								/>
							</>
						}
						date={[2019]}
					/>
				</Section>

				<section className="my-12" id={"projects"}>
					<a
						className="relative inline-block mb-4 text-2xl text-gray-800"
						href="https://github.com/JouzaLoL"
					>
						<span className="relative z-10">{t.translate("App.Menu.projects")}</span>
						<div className="absolute bottom-0 z-0 w-full h-3 ml-3 bg-blue-200" />
						<LinkIcon />
					</a>
				</section>

				<Section title={t.translate("App.Menu.contact")} id={"contact"}>
					<div className="flex flex-col ">
						<Link href="tel:+420605981166">+420 605 98 11 66</Link>
						<Link href="mailto:vacekj@outlook.com">vacekj@outlook.com</Link>
						<Link href="https://www.linkedin.com/in/josef-v-19021b128/">LinkedIn</Link>
					</div>
				</Section>
				<a
					className="text-gray-500 hover:text-gray-600"
					href={"https://www.github.com/JouzaLoL/portfolio"}
				>
					{t.translate("App.psst")}
				</a>
			</main>
		</>
	);
}

export default App;
