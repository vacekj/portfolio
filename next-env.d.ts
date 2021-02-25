/// <reference types="next" />
/// <reference types="next/types/global" />

declare namespace NodeJS {
	interface Process {
		browser: boolean;
	}
}
