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
			<h2 className="text-2xl text-gray-800 mb-3">{props.title}</h2>
			<div className="text-xl text-gray-700 border-l-2 pl-5">{props.children}</div>
		</section>
	);
}

function Client(props: { name: string; projects: React.ReactNode; date: string }) {
	return (
		<div className="mb-2">
			<span className="pr-2 text-base">{props.name}</span>
			<span className="pl-2 text-sm">{props.date}</span>
			<div className="flex flex-col">{props.projects}</div>
		</div>
	);
}

function Project(props: { name: string; link: string }) {
	return (
		<>
			<a
				href={props.link}
				className="px-2 inline-flex duration-100 ease-in-out self-start items-center hover:bg-indigo-100 rounded"
			>
				<span className="text-sm text-gray-600 pr-3">#</span>
				<span className="text-gray-700">{props.name}</span>
			</a>
		</>
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
			<main className="font-sans m-5">
				<h1 className="text-4xl">Josef Vacek</h1>
				<Section title={"Co dělám"}>
					<ul>
						<li>Full-stack web development</li>
					</ul>
				</Section>
				<Section title={"Jak to dělám"}>
					<ul>
						<li className="mb-2">ReactJS</li>
						<li className="mb-2">Typescript</li>
						<li className="mb-2">TailwindCSS</li>
						<li className="mb-2">Laravel</li>
						<li className="mb-2">NodeJS</li>
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
						date={"2019 -"}
					/>
				</Section>
			</main>
		</>
	);
}

export default App;
