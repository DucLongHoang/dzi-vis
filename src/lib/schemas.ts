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
})

export type BucketConfig = z.infer<typeof bucketConfigSchema>
export type DziVisConfig = z.infer<typeof dziVisConfigSchema>

export const initialDziVisConfig: DziVisConfig = {
	height: 20000,
	width: 60000,
	tileSize: 254,
	tileOverlap: 1,
	xMin: 3.5,
	xMax: 4.0,
	yMin: 0,
	yMax: 1,
	precision: 15,
}

// https://s3.cl2.du.cesnet.cz/1220acb0_52c1_4c07_8198_28e9c41e31ee:test-dzi/log_png.dzi
export const initialBucketConfig: BucketConfig = {
	domain: "https://s3.cl2.du.cesnet.cz",
	tenant: "1220acb0_52c1_4c07_8198_28e9c41e31ee",
	name: "test-dzi",
	imageFolder: "log_png_files",
	imageFormat: "png",
}
