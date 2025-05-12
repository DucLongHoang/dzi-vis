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
