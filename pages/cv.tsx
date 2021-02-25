import React from "react";
import { ForWho } from "./index";
import NextLink from "next/link";
import { HiArrowLeft, HiPaperClip, HiPrinter } from "react-icons/hi";
import Layout from "../components/Layout";
function Section(props: React.ComponentProps<"a"> & { title?: string }) {
	return (
		<section
			className={`mt-12 ${props.className ?? ""}`}
			style={props.style}
		>
			<h2 className="relative inline-block mb-4 text-2xl text-gray-800">
				<span className="relative z-10">{props.title}</span>
				<div className="absolute bottom-0 z-0 w-full h-3 ml-3 bg-blue-200" />
			</h2>
			<div className="pl-4 text-xl text-gray-700">{props.children}</div>
		</section>
	);
}

function ContactEntry(props: { name: string; value: string | JSX.Element }) {
	return (
		<div className="flex justify-between items-baseline mb-2">
			<span>{props.name}</span>
			<span className="flex-grow border-dotted border-b-2 border-blue-200 mx-2" />
			<span>{props.value}</span>
		</div>
	);
}

function Dovednost(
	props: React.ComponentProps<"div"> & {
		name: string;
		technologies: any[];
	}
) {
	return (
		<div className="flex flex-col mb-4">
			<div className="mb-1">{props.name}</div>
			<div className="flex items-center">
				<div className="text-base">
					<ul>
						{props.technologies.map((t, i) => (
							<li className="mb-1" key={i}>
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									viewBox="0 0 24 24"
									className="inline w-4 h-4 mr-3 text-gray-400 align-text-bottom"
								>
									<path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
								</svg>
								{t}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

function App() {
	return (
		<Layout>
			<main className="m-3 m-8 font-sans h-64">
				<div className="print:hidden absolute right-0 top-0 flex flex-col justify-end gap-4 m-10 text-xl text-gray-700">
					<NextLink href={"/"}>
						<a
							className={
								"hover:text-gray-800 flex items-center gap-2"
							}
						>
							<HiArrowLeft />
							Back
						</a>
					</NextLink>

					<a
						onClick={() => window.print()}
						className={
							"hover:text-gray-800 cursor-pointer flex items-center gap-2"
						}
					>
						<HiPrinter />
						Print
					</a>

					<a
						onClick={() => window.print()}
						className={
							"hover:text-gray-800 cursor-pointer flex items-center gap-2"
						}
					>
						<HiPaperClip />
						Save as PDF
					</a>
				</div>

				<div className="flex gap-10 justify-between items-center">
					<h1
						className="inline text-4xl text-center sm:text-6xl name"
						id={"top"}
					>
						Josef <br />
						Vacek
					</h1>

					<div className="my-3 flex w-full items-center">
						<img
							className="print:w-24 mr-10 w-40 w-40 rounded-full border-gray-200 border-4"
							src={"/profile.png"}
							alt="Profilová fotka"
						/>
						<ul className="w-1/2 print:w-full">
							<ContactEntry
								name={"Email"}
								value={
									<a href="mailto:vacekj@outlook.com">
										vacekj@outlook.com
									</a>
								}
							/>
							<ContactEntry
								name={"Telefon"}
								value={
									<a href="tel:+420605981166">
										+420 605 98 11 66
									</a>
								}
							/>
							<ContactEntry
								name={"Bydliště"}
								value={"Jarmily Glazarové 21, 779 00 Olomouc"}
							/>
							<ContactEntry
								name={"Místo pobytu"}
								value={"Praha, Olomouc"}
							/>
							<ContactEntry
								name={"Datum narození"}
								value={"7. 8. 2000"}
							/>
						</ul>
					</div>
				</div>

				<Section
					title={"Dovednosti"}
					style={{
						pageBreakAfter: "always",
					}}
				>
					<div className="grid grid-cols-2 grid-rows-1 justify-between">
						<div>
							<Dovednost
								name="Front-end web development"
								technologies={[
									"TypeScript",
									"ESNext",
									"React.js",
									"Next.js",
									"Moderní HTML a CSS",
									"TailwindCSS",
									"Webpack",
									"Chakra UI",
									"Material-UI",
								]}
							/>
							<Dovednost
								name="Back-end web development"
								technologies={[
									"Firebase",
									"PHP - Laravel",
									"NodeJS - Express",
									"Python - FastAPI, Flask",
									"Základy SQL, návrhu a administrace SQL databází",
								]}
							/>
						</div>
						<div>
							<Dovednost
								name="Testování"
								technologies={[
									"Cypress.io",
									"Jest",
									"Puppeteer",
									"PHPUnit",
								]}
							/>
							<Dovednost
								name="Ostatní"
								technologies={[
									"Git na pokročilé úrovni",
									"NPM a Yarn včetně správy vlastních balíčků",
									"Automatizace a scraping webu pomocí Puppeteer",
									"Unix a Unix Shell",
									"CI/CD - Travis CI a GitHub Actions",
									"IDE - JetBrains, VSCode, Vim",
								]}
							/>
						</div>
					</div>
				</Section>

				<div className="flex gap-10 ">
					<ForWho />

					<div>
						<Section title={"Vzdělání"}>
							<ul className="">
								<ContactEntry
									name={"Gymnázium Olomouc, Hejčín"}
									value={"2011 - 2019"}
								/>
								<ContactEntry
									name={"FIT ČVUT"}
									value={"2019 - 2020"}
								/>
								<ContactEntry
									name={"FIS VŠE Aplikovaná Informatika"}
									value={"2020 - nyní"}
								/>
							</ul>
						</Section>

						<Section title={"Jazyky"}>
							<ul className="">
								<ContactEntry
									name={"Anglický jazyk"}
									value={"C2 Certifikát"}
								/>
								<ContactEntry
									name={"Španělský jazyk"}
									value={"~ B1"}
								/>
								<ContactEntry
									name={"Český jazyk"}
									value={"Rodilý mluvčí"}
								/>
							</ul>
						</Section>
					</div>
				</div>
			</main>
		</Layout>
	);
}

export default App;
