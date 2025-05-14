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
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useStore } from "@nanostores/react"
import { dziVisConfig } from "@/configStore"
import { Settings2 } from "lucide-react"
import { useRef, useState } from "react"

export default function DziConfigDialog() {
	const [open, setOpen] = useState<boolean>(false)
	const formRef = useRef<HTMLFormElement>(null)
	const $dziVisConfig = useStore(dziVisConfig)

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		if (!formRef.current) return

		const formData = new FormData(formRef.current)
		dziVisConfig.set({
			height: Number(formData.get("height")),
			width: Number(formData.get("width")),
			tileSize: Number(formData.get("tile-size")),
			tileOverlap: Number(formData.get("tile-overlap")),
			xMin: Number(formData.get("x-min")),
			xMax: Number(formData.get("x-max")),
			yMin: Number(formData.get("y-min")),
			yMax: Number(formData.get("y-max")),
			precision: Number(formData.get("precision")),
			colour: formData.get("background-color")?.toString() || $dziVisConfig.colour,
			transparent: formData.get("transparent") === "on",
		})

		setOpen(false)
	}

	return (
		<Dialog open={open} onOpenChange={() => setOpen(!open)}>
			<DialogTrigger asChild>
				<Button variant="outline" size="icon">
					<Settings2 />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-xl">
				<form ref={formRef} onSubmit={handleSubmit}>
					<DialogHeader>
						<DialogTitle>DZI-VIS config</DialogTitle>
						<DialogDescription>
							Here you can make changes to the axis values, image dimensions, and much more. Click save when you're
							done.
						</DialogDescription>
					</DialogHeader>

					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-5 items-center gap-4">
							<Label id="dimensions" className="text-right">
								Image Dimensions
							</Label>
							<Input
								id="width"
								name="width"
								aria-labelledby="dimensions"
								type="number"
								min={1}
								defaultValue={$dziVisConfig.width}
								placeholder="width"
								className="col-span-2"
							/>
							<Input
								id="height"
								name="height"
								aria-labelledby="dimensions"
								type="number"
								min={1}
								defaultValue={$dziVisConfig.height}
								placeholder="height"
								className="col-span-2"
							/>
						</div>

						<div className="grid grid-cols-5 items-center gap-4">
							<Label id="tile" className="text-right">
								Tile
							</Label>
							<Input
								id="tile-size"
								name="tile-size"
								aria-labelledby="tile"
								type="number"
								defaultValue={$dziVisConfig.tileSize}
								min={1}
								placeholder="size"
								className="col-span-2"
							/>
							<Input
								id="tile-overlap"
								name="tile-overlap"
								aria-labelledby="tile"
								type="number"
								defaultValue={$dziVisConfig.tileOverlap}
								min={1}
								placeholder="overlap"
								className="col-span-2"
							/>
						</div>

						<div className="grid grid-cols-5 items-center gap-4">
							<Label id="x-axis" className="text-right">
								X-Axis
							</Label>
							<Input
								id="x-min"
								name="x-min"
								aria-labelledby="x-axis"
								type="number"
								defaultValue={$dziVisConfig.xMin}
								placeholder="min"
								step="any"
								className="col-span-2"
							/>
							<Input
								id="x-max"
								name="x-max"
								aria-labelledby="x-axis"
								type="number"
								defaultValue={$dziVisConfig.xMax}
								placeholder="max"
								step="any"
								className="col-span-2"
							/>
						</div>

						<div className="grid grid-cols-5 items-center gap-4">
							<Label id="y-axis" className="text-right">
								Y-Axis
							</Label>
							<Input
								id="y-min"
								name="y-min"
								aria-labelledby="y-axis"
								type="number"
								defaultValue={$dziVisConfig.yMin}
								placeholder="min"
								step="any"
								className="col-span-2"
							/>
							<Input
								id="y-max"
								name="y-max"
								aria-labelledby="y-axis"
								type="number"
								defaultValue={$dziVisConfig.yMax}
								placeholder="max"
								step="any"
								className="col-span-2"
							/>
						</div>

						<div className="grid grid-cols-5 items-center gap-4">
							<Label htmlFor="precision" className="text-right">
								Number Precision
							</Label>
							<Input
								id="precision"
								name="precision"
								type="number"
								defaultValue={$dziVisConfig.precision}
								placeholder="15"
								step={1}
								min={0}
								className="col-span-4"
							/>
						</div>

						<div className="grid grid-cols-5 items-center gap-4">
							<Label htmlFor="background-color" className="text-right">
								Background Color
							</Label>
							<Input
								id="background-color"
								name="background-color"
								type="color"
								defaultValue={$dziVisConfig.colour}
								className="col-span-2"
							/>

							<div className="flex flex-row items-center gap-x-2">
								<Checkbox id="transparent" name="transparent" defaultChecked={$dziVisConfig.transparent} />
								<Label htmlFor="transparent">Transparent</Label>
							</div>
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
