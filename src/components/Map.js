import styles from './Map.module.css'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export const Mark = () => {
	const map = useMap()

	if (map) {
		map.off()
	}

	return null
}

export const Map = () => {
	const position = [-18.25, 35]

	return (
		<div className={styles['map-container']}>
			<MapContainer center={position} zoom={13} scrollWheelZoom={true} className={styles.map}>
				<Mark />
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker position={position}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	)
}