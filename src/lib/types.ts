export type OgImage = {
	url: string
	secureUrl: string
	alt: string
	width: number
	height: number
	type: string
}

export type LinkItem = {
	href: string
	title: string
	description?: string
	children?: LinkItem[]
	isCta?: boolean
}

export enum Day {
	Monday = "Monday",
	Tuesday = "Tuesday",
	Wednesday = "Wednesday",
	Thursday = "Thursday",
	Friday = "Friday",
	Saturday = "Saturday",
	Sunday = "Sunday",
}

export enum Currency {
	USD = "$",
	EUR = "€",
	CZK = "Kč",
}
