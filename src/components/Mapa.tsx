
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import { LatLng } from 'leaflet';
import iconUrl from './marker-icon.png';
import shadowUrl from './marker-shadow.png';

const DefaultIcon = L.icon({
    iconUrl: './marker-icon.png',
    shadowUrl: './marker-shadow.png',
    iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapComponentProps {
    onLocationSelect: (latlng: LatLng) => void;
}



export default function Mapa ({ onLocationSelect }: MapComponentProps){
    const [position, setPosition] = useState<LatLngExpression | null>(null);

    useEffect(() => {
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        const newPosition: LatLngExpression = [latitude, longitude];
                        setPosition(newPosition);
                    },
                    (error) => {
                        console.error('Error getting current location:', error);
                    }
                );
            } else {
                console.error('Geolocation is not supported by this browser.');
            }
        };

        getLocation();
    }, []);

    const LocationMarker = () => {
        useMapEvents({
            click(e) {
                setPosition(e.latlng);
                onLocationSelect(e.latlng);
            },
        });

        return position === null ? null : <Marker position={position}></Marker>;
    };

    return (
        
            <MapContainer center={position || [-23.553916518321625, -46.62257970952855]}  zoom={10} style={{ height: '30rem', width: '100%'}}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <LocationMarker />
            </MapContainer>
       
    )
}

