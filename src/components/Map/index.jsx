import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMapEvent } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './styles.css';

const markers = [
  { geocode: [-29.797624, -51.864967], popUp: 'Ericaaaaaaa' },
  { geocode: [-29.775748, -51.850232], popUp: 'Oi' },
  { geocode: [-29.768068, -51.858737], popUp: 'cccc' },
];

function EventMap() {
  const [position, setPosition] = useState(0);
  
  
  const map = useMapEvent('click', () => {
    const newPosition = position + 1;
    if (newPosition > 2) {
      setPosition(0);
    } else {
      setPosition((prevState) => Number(prevState + 1));
    }
    map.flyTo(markers[position].geocode, map.getZoom());
  });
  return null;
}

function Map() {

  return (
    <div className='bg'>
      <h1>ERICAS MAP</h1>
      <MapContainer className='container' center={markers[0].geocode} zoom={18}>
        <EventMap />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          markers.map((marker) => (
            <Marker key={marker.geocode} position={marker.geocode}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))
        }
      </MapContainer>
    </div>
  );
}

export default Map;
