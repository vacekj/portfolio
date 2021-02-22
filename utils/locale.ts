const LANG_COOKIE_NAME = "lang";

/** All possible locales represented as strings */
export const validLocales = ["cs", "en"] as const;
export type Locale = typeof validLocales[number];

export function getLocaleCookie(): string | undefined {
	const langFromCookie = getCookie(LANG_COOKIE_NAME);
	if (langFromCookie && langFromCookie !== "") {
		return langFromCookie;
	}
}

export function setLocaleCookie(locale: Locale) {
	setCookie(LANG_COOKIE_NAME, locale);
}

function setCookie(name: string, value: any) {
	// @ts-ignore
	if (!process.browser) {
		return;
	}
	document.cookie = name + "=" + (value || "") + "; path=/";
}

function getCookie(name: string) {
	// @ts-ignore
	if (!process.browser) {
		return;
	}
	const match = document.cookie.match(
		new RegExp("(^| )" + name + "=([^;]+)")
	);
	if (match) return match[2];
}
