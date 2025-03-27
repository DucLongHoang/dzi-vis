import { map } from "nanostores"
import { initialBucketConfig, initialDziVisConfig, type BucketConfig, type DziVisConfig } from "./lib/schemas"

export const dziVisConfig = map<DziVisConfig>(initialDziVisConfig)
export const bucketConfig = map<BucketConfig>(initialBucketConfig)
