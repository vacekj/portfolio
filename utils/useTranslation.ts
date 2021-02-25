import { useEffect, useState } from "react";
import rosetta from "rosetta";
import { useRouter } from "next/router";

/**
 * Returns a function for getting translations and a setPreferredLocale function that persists the locale to a cookie
 * The source of truth for the locale is always the router's locale
 * We can change the locale either by changing the cookie via the returned function,
 * or by using nextjs' router or link with locale param
 * @param translations
 */
export default function useTranslation(
	translations: Record<string, any>
): [(key: string) => string] {
	const [i18n] = useState(rosetta(translations));
	const { locale } = useRouter();
	return [
		(key: string) => {
			return i18n.t(key, undefined, locale);
		},
	];
}
