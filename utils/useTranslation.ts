import { useState } from "react";
import rosetta from "rosetta";
import {
	getLocaleCookie,
	Locale,
	setLocaleCookie,
	validLocales,
} from "./locale";
import { useRouter } from "next/router";

/**
 * Returns a function for getting translations and a setPreferredLocale function that persists the locale to a cookie
 * @param translations
 */
export default function useTranslation(
	translations: Record<string, any>
): [(key: string) => string, (locale: Locale) => Promise<any>] {
	/*If there is a user-set locale and we are not on it, redirect to it*/
	const router = useRouter();
	const cookieLocale = getLocaleCookie();
	if (
		cookieLocale &&
		validLocales.includes(cookieLocale as Locale) &&
		router.locale !== cookieLocale
	) {
		router.replace(router.pathname, undefined, {
			locale: cookieLocale,
		});
	}

	const [i18n] = useState(rosetta(translations));
	i18n.locale(router.locale);

	return [
		i18n.t.bind(i18n),
		(locale: Locale) => {
			setLocaleCookie(locale);
			return router.replace(router.pathname, undefined, {
				locale: cookieLocale,
			});
		},
	];
}
