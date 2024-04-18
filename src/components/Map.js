import styles from './Map.module.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {Icon} from 'leaflet'
import icon from '../assets/images/mapicon.png' 
import 'leaflet/dist/leaflet.css'


export const Map = ({ latlng }) => {

	const customIcon = new Icon({
		iconUrl: icon,
		iconSize: [38, 38]
	})

	console.log(latlng);

	return (
		<div className={styles['map-container']}>
			<MapContainer center={latlng} zoom={6} scrollWheelZoom={true} className={styles.map}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker position={latlng} icon={customIcon}>
					<Popup>
						Coordinates: {latlng[0]}, {latlng[1]}
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	)
}
