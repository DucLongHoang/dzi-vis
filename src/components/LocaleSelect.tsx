import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getLocale, getSwitcherData } from "i18n:astro"
import { LanguagesIcon } from "lucide-react"

type Props = {
	locales: ReturnType<typeof getSwitcherData>
}

export default function LocaleSelect({ locales }: Props) {
	const currentLocale = getLocale()

	return (
		<Select
			onValueChange={(selectedLocale) => {
				window.location.pathname = selectedLocale
			}}
		>
			<SelectTrigger className="flex w-fit flex-row items-center gap-x-2">
				<LanguagesIcon className="size-5" />
				<SelectValue placeholder={currentLocale.toLocaleUpperCase()} />
			</SelectTrigger>
			<SelectContent>
				{locales.map((locale) => (
					<SelectItem key={locale.locale} value={locale.href}>
						{locale.locale.toLocaleUpperCase()}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}
