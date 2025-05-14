import { useEffect, useRef } from "react"
import OpenSeadragon, { type PointerMouseTrackerEvent } from "openseadragon"
import { useStore } from "@nanostores/react"
import { bucketConfig, dziVisConfig } from "@/configStore"

export default function OpenSeaDragonViewer() {
	const viewerRef = useRef<OpenSeadragon.Viewer | null>(null)
	const containerRef = useRef<HTMLDivElement>(null)
	const $bucketConfig = useStore(bucketConfig)
	const $dziVisConfig = useStore(dziVisConfig)

	function getBucketUrl() {
		return `${$bucketConfig.domain}/${$bucketConfig.tenant}:${$bucketConfig.name}`
	}

	useEffect(() => {
		if (viewerRef.current) {
			viewerRef.current.destroy()
			viewerRef.current = null
		}

		if (containerRef.current) {
			viewerRef.current = OpenSeadragon({
				id: containerRef.current.id,
				prefixUrl: "//openseadragon.github.io/openseadragon/images/",
				tileSources: {
					height: $dziVisConfig.height,
					width: $dziVisConfig.width,
					tileSize: $dziVisConfig.tileSize,
					tileOverlap: $dziVisConfig.tileOverlap,
					getTileUrl: (level, x, y) => {
						const tileUrl = `${getBucketUrl()}/${$bucketConfig.imageFolder}/${level}/${x}_${y}.${$bucketConfig.imageFormat}`
						return tileUrl
					},
				},
				showNavigator: true,
				navigatorPosition: "TOP_LEFT",
				navigationControlAnchor: OpenSeadragon.ControlAnchor.TOP_RIGHT,
				gestureSettingsMouse: {
					clickToZoom: false,
					dblClickToZoom: true,
				},
				// debugMode: true,
			})

			viewerRef.current.canvas.style.cursor = "crosshair"
			;(containerRef.current.firstElementChild as HTMLElement).style.mixBlendMode = "darken"

			const positionEl = document.querySelector<HTMLSpanElement>(".position-info")

			function getCoordinates(webPoint: OpenSeadragon.Point) {
				const viewportPoint = viewerRef.current!.viewport.pointFromPixel(webPoint)
				const imagePoint = viewerRef.current!.viewport.viewportToImageCoordinates(viewportPoint)

				function mapRange(value: number, oldMin: number, oldMax: number, newMin: number, newMax: number) {
					return (newMin + ((value - oldMin) / (oldMax - oldMin)) * (newMax - newMin)).toFixed($dziVisConfig.precision)
				}

				const x = mapRange(imagePoint.x, 0, $dziVisConfig.width, $dziVisConfig.xMin, $dziVisConfig.xMax)
				const y = mapRange(imagePoint.y, 0, $dziVisConfig.height, $dziVisConfig.yMax, $dziVisConfig.yMin)

				return { x, y }
			}

			viewerRef.current.addHandler("open", function () {
				const tracker = new OpenSeadragon.MouseTracker({
					element: viewerRef.current!.element,
					moveHandler: (event) => {
						const { x, y } = getCoordinates((event as PointerMouseTrackerEvent).position)
						positionEl!.textContent = `x:${x}, y:${y}`
					},
				})
				tracker.setTracking(true)
			})

			viewerRef.current.addHandler("canvas-click", (event) => {
				const { x, y } = getCoordinates(event.position)
				positionEl!.textContent = `x:${x}, y:${y} -> copied to clipboard`
				navigator.clipboard.writeText(`x:${x}, y:${y}`)
			})
		}

		return () => {
			if (viewerRef.current) {
				viewerRef.current.destroy()
				viewerRef.current = null
			}
		}
	}, [$bucketConfig, $dziVisConfig])

	return (
		<div
			id="openseadragon-container"
			className="grid size-full w-full grow"
			style={
				$dziVisConfig.transparent
					? {
							background:
								"conic-gradient(#fff 90deg, #ccc 90deg 180deg, #fff 180deg 270deg, #ccc 270deg) top left / 20px 20px repeat",
						}
					: { backgroundColor: `${$dziVisConfig.colour}` }
			}
			ref={containerRef}
		></div>
	)
}
