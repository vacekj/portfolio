import { useEffect, useState } from "react";
import rosetta from "rosetta";
import {
	getLocaleCookie,
	Locale,
	setLocaleCookie,
	validLocales,
} from "./locale";
import { useRouter } from "next/router";
const isBrowser = typeof window !== "undefined";

/**
 * Returns a function for getting translations and a setPreferredLocale function that persists the locale to a cookie
 * The source of truth for the locale is always the router's locale
 * We can change the locale either by changing the cookie via the returned function,
 * or by using nextjs' router or link with locale param
 * @param translations
 */
export default function useTranslation(
	translations: Record<string, any>
): [(key: string) => string, (locale: Locale) => void] {
	const router = useRouter();
	const [i18n] = useState(rosetta(translations));

	/* Ensure we are on the correct locale based on cookie */
	useEffect(() => {
		const cookieLocale = getLocaleCookie();
		if (
			cookieLocale &&
			validLocales.includes(cookieLocale as Locale) &&
			router.locale !== cookieLocale
		) {
			router.replace(router.pathname, router.pathname, {
				locale: cookieLocale,
			});
		}
	}, [isBrowser ? document.cookie : undefined]);

	return [
		(key: string) => {
			return i18n.t(key, undefined, router.locale);
		},
		(locale: Locale) => {
			/* This will change the locale cookie, which will trigger a re-render*/
			setLocaleCookie(locale);
		},
	];
}
