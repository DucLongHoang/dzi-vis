import { map } from "nanostores"

export type BucketConfig = {
	domain: string
	tenant: string
	name: string
	imageFolder: string
	imageFormat: string
}

export type DziVisConfig = {
	height: number
	width: number
	xMin: number
	xMax: number
	yMin: number
	yMax: number
	precision: number
}

export const dziVisConfig = map<DziVisConfig>({
	height: 20000,
	width: 60000,
	xMin: 3.5,
	xMax: 4.0,
	yMin: 0,
	yMax: 1,
	precision: 15,
})

export const bucketConfig = map<BucketConfig>({
	domain: "s3.cl2.du.cesnet.cz",
	tenant: "1220acb0_52c1_4c07_8198_28e9c41e31ee",
	name: "test-dzi",
	imageFolder: "log_png_files",
	imageFormat: "png",
})
