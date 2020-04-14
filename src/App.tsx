import React from "react";

function NavLink(props: React.ComponentProps<"a"> & { active?: boolean }) {
	return (
		<a
			{...props}
			className={`text-xl ${props.active ? "text-gray-900" : "text-gray-600"} ${
				props.className
			}`}
		/>
	);
}

function Section(props: React.ComponentProps<"a"> & { title?: string }) {
	return (
		<section className="my-12">
			<h2 className="text-2xl text-gray-800 mb-4 relative inline-block">
				<span className="relative z-10">{props.title}</span>
				<div className="bg-blue-200 absolute bottom-0 w-full h-3 z-0 ml-3" />
			</h2>
			<div className="text-xl text-gray-700 border-l-2 pl-6 ml-3">{props.children}</div>
		</section>
	);
}

function Client(props: { name: string; projects: React.ReactNode; date: JSX.Element | string }) {
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
			<span className="pl-2 text-base">{props.date}</span>
			<div className="flex flex-col mt-3">{props.projects}</div>
		</div>
	);
}

function Project(props: { name: string; link: string }) {
	return (
		<>
			<a
				href={props.link ?? ""}
				className="p-2 mb-2 duration-100 ease-in-out self-start items-center hover:bg-blue-100 rounded"
			>
				<svg
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					viewBox="0 0 24 24"
					className="inline w-6 h-6 mr-4 ml-2 align-text-bottom text-gray-500"
				>
					<path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
				</svg>
				<span className="text-gray-700">{props.name}</span>
				{props.link && (
					<svg
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						viewBox="0 0 24 24"
						className="inline w-4 h-4 ml-2 align-baseline text-gray-500"
					>
						<path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
					</svg>
				)}
			</a>
		</>
	);
}

function Technology(props: React.ComponentProps<"div">) {
	return (
		<div className="mb-4">
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
			{props.children}
		</div>
	);
}

function App() {
	return (
		<>
			<div className="relative w-full">
				<nav className="flex flex-col fixed m-5 right-0 top-0 w-1/5 text-right">
					<NavLink href="#" active={true}>
						Josef Vacek
					</NavLink>
					<NavLink href="#co">Co</NavLink>
					<NavLink href="#jak">Jak</NavLink>
					<NavLink href="#prokoho">Pro koho</NavLink>
					<NavLink href="#projekty">Projekty</NavLink>
					<NavLink href="#anythingelse">Ještě něco?</NavLink>
				</nav>
			</div>
			<main className="font-sans m-5 max-w-4xl m-auto mt-8">
				<h1 className="text-4xl">Josef Vacek</h1>
				<Section title={"Co dělám"}>
					<ul>
						<li>Full-stack web development</li>
					</ul>
				</Section>
				<Section title={"Jak to dělám"}>
					<ul>
						<Technology>ReactJS</Technology>
						<Technology>Typescript</Technology>
						<Technology>TailwindCSS</Technology>
						<Technology>Laravel</Technology>
						<Technology>NodeJS</Technology>
					</ul>
				</Section>
				<Section title={"Pro koho to delam"}>
					<Client
						name={"Abradatas"}
						projects={
							<>
								<Project
									link="https://www.evaluacevyuky.cz"
									name={"Evaluace výuky"}
								/>
								<Project
									name={"IMMAG Box (prezentační web, interface měření)"}
									link={"https://immagbox.cz/"}
								/>
							</>
						}
						date={
							<span>
								2019
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
							</span>
						}
					/>
				</Section>
			</main>
		</>
	);
}

export default App;
