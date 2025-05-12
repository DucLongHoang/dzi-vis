import { z } from "zod"

export const bucketConfigSchema = z.object({
	domain: z.string().url(),
	tenant: z.string(),
	name: z.string(),
	imageFolder: z.string(),
	imageFormat: z.string(),
})

export const dziVisConfigSchema = z.object({
	height: z.number().min(1),
	width: z.number().min(1),
	tileSize: z.number().int(),
	tileOverlap: z.number().int(),
	xMin: z.number(),
	xMax: z.number(),
	yMin: z.number(),
	yMax: z.number(),
	precision: z.number().int(),
	colour: z.string().optional(),
})

export type BucketConfig = z.infer<typeof bucketConfigSchema>
export type DziVisConfig = z.infer<typeof dziVisConfigSchema>

export const initialDziVisConfig: DziVisConfig = {
	height: 60000,
	width: 60000,
	tileSize: 254,
	tileOverlap: 1,
	xMin: 0,
	xMax: 1,
	yMin: 0,
	yMax: 1,
	precision: 15,
	colour: "#ffffff",
}

// https://s3.cl2.du.cesnet.cz/1220acb0_52c1_4c07_8198_28e9c41e31ee:test-dzi/log_png.dzi
export const initialBucketConfig: BucketConfig = {
	domain: "https://s3.cl2.du.cesnet.cz",
	tenant: "1220acb0_52c1_4c07_8198_28e9c41e31ee",
	name: "test-dzi",
	imageFolder: "stabilita-na-003_webp_files",
	imageFormat: "webp",
}
