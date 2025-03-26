import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useStore } from "@nanostores/react"
import { bucketConfig, dziVisConfig } from "@/configStore"
import { Settings2 } from "lucide-react"

export default function ConfigDialog() {
	const $bucketConfig = useStore(bucketConfig)
	const $dziVisConfig = useStore(dziVisConfig)

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline" size="icon">
					<Settings2 />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-xl">
				<DialogHeader>
					<DialogTitle>DZI-VIS config</DialogTitle>
					<DialogDescription>
						Here you can make changes to the axis values, image dimensions, and much more. Click save when you're done.
					</DialogDescription>
				</DialogHeader>

				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-5 items-center gap-4">
						<Label id="dimensions" className="text-right">
							Image Dimensions
						</Label>
						<Input
							id="name"
							aria-labelledby="dimensions"
							type="number"
							min={1}
							defaultValue={$dziVisConfig.width}
							placeholder="width (px)"
							className="col-span-2"
						/>
						<Input
							id="name"
							aria-labelledby="dimensions"
							type="number"
							min={1}
							defaultValue={$dziVisConfig.height}
							placeholder="height (px)"
							className="col-span-2"
						/>
					</div>

					<div className="grid grid-cols-5 items-center gap-4">
						<Label id="x-axis" className="text-right">
							X-Axis
						</Label>
						<Input
							id="name"
							aria-labelledby="x-axis"
							type="number"
							defaultValue={$dziVisConfig.xMin}
							placeholder="min"
							className="col-span-2"
						/>
						<Input
							id="name"
							aria-labelledby="x-axis"
							type="number"
							defaultValue={$dziVisConfig.xMax}
							placeholder="max"
							className="col-span-2"
						/>
					</div>

					<div className="grid grid-cols-5 items-center gap-4">
						<Label id="y-axis" className="text-right">
							Y-Axis
						</Label>
						<Input
							id="name"
							aria-labelledby="y-axis"
							type="number"
							defaultValue={$dziVisConfig.yMin}
							placeholder="min"
							className="col-span-2"
						/>
						<Input
							id="name"
							aria-labelledby="y-axis"
							type="number"
							defaultValue={$dziVisConfig.yMax}
							placeholder="max"
							className="col-span-2"
						/>
					</div>

					<div className="grid grid-cols-5 items-center gap-4">
						<Label htmlFor="precision" className="text-right">
							Number Precision
						</Label>
						<Input
							id="precision"
							type="number"
							step={1}
							defaultValue={$dziVisConfig.precision}
							placeholder="15"
							className="col-span-4"
						/>
					</div>
				</div>

				<div className="grid gap-4 py-4">
					<DialogHeader>
						<DialogTitle>Bucket config</DialogTitle>
						<DialogDescription>Bucket URL = https://Domain/Tenant:Name</DialogDescription>
					</DialogHeader>

					<div className="grid grid-cols-5 items-center gap-4">
						<Label htmlFor="bucket-domain" className="text-right">
							Domain
						</Label>
						<Input
							id="bucket-domain"
							type="url"
							defaultValue={$bucketConfig.domain}
							placeholder="s3.cl2.du.cesnet.cz"
							className="col-span-4"
						/>
					</div>

					<div className="grid grid-cols-5 items-center gap-4">
						<Label htmlFor="bucket-tenant" className="text-right">
							Tenant
						</Label>
						<Input
							id="bucket-tenant"
							type="text"
							defaultValue={$bucketConfig.tenant}
							placeholder="1220acb0_52c1_4c07_8198_28e9c41e31ee"
							className="col-span-4"
						/>
					</div>

					<div className="grid grid-cols-5 items-center gap-4">
						<Label htmlFor="bucket-name" className="text-right">
							Name
						</Label>
						<Input
							id="bucket-name"
							type="text"
							defaultValue={$bucketConfig.name}
							placeholder="test-dzi"
							className="col-span-4"
						/>
					</div>

					<div className="grid grid-cols-5 items-center gap-4">
						<Label htmlFor="bucket-image-folder" className="text-right">
							Folder
						</Label>
						<Input
							id="bucket-image-folder"
							type="text"
							defaultValue={$bucketConfig.imageFolder}
							placeholder="log_png_files"
							className="col-span-4"
						/>
					</div>

					<div className="grid grid-cols-5 items-center gap-4">
						<Label htmlFor="bucket-image-format" className="text-right">
							Tile Format
						</Label>
						<Input
							id="bucket-image-format"
							type="text"
							defaultValue={$bucketConfig.imageFormat}
							placeholder="png"
							className="col-span-4"
						/>
					</div>
				</div>

				<DialogFooter>
					<Button type="submit">Save changes</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
