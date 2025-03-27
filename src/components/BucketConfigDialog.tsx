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
import { bucketConfig } from "@/configStore"
import { useRef } from "react"
import amazons3 from "@/icons/amazons3.svg"

export default function BucketConfigDialog() {
	const formRef = useRef<HTMLFormElement>(null)
	const $bucketConfig = useStore(bucketConfig)

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()

		const form = formRef.current
		if (!form) return

		const formData = new FormData(formRef.current)
		console.log(formData)

		// await bucketConfig.set(data)
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline" size="icon">
					<img src={amazons3.src} width={amazons3.width} height={amazons3.height} alt="Settings" />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-xl">
				<DialogHeader>
					<DialogTitle>Bucket config</DialogTitle>
					<DialogDescription>Bucket URL = Domain/Tenant:Name</DialogDescription>
				</DialogHeader>
				<form ref={formRef} onSubmit={handleSubmit}>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-5 items-center gap-4">
							<Label htmlFor="bucket-domain" className="text-right">
								Domain
							</Label>
							<Input
								id="bucket-domain"
								name="bucket-domain"
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
								name="bucket-tenant"
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
								name="bucket-name"
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
								name="bucket-image-folder"
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
								name="bucket-image-format"
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
				</form>
			</DialogContent>
		</Dialog>
	)
}
