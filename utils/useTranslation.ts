import rosetta from "rosetta";
import { useState } from "react";

// this will be deprecated when Next.js adds official i18n support

export default function useTranslation(
	translationfile: Record<string, any>
): [(key: string) => string, (lang?: string) => undefined | string] {
	const [langCode, setLangCode] = useState("cs");
	const [i18n] = useState(rosetta(translationfile));
	i18n.locale(langCode);

	return [
		i18n.t.bind(i18n),
		(lang?: string) => {
			if (lang) {
				setLangCode(lang);
				i18n.locale(lang);
			} else {
				return i18n.locale();
			}
		}
	];
}
