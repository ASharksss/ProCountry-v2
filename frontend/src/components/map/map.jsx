import React, { useEffect } from 'react';
import { MapContainer, TileLayer, FeatureGroup, Polygon } from 'react-leaflet'
import { EditControl } from 'react-leaflet-draw'
import 'leaflet/dist/leaflet.css'
import 'leaflet-draw/dist/leaflet.draw.css'
import './map.css'

const polygon = [
  [55.73522939875259, 49.10202026367188],
  [55.73058999769508, 49.11300659179688],
  [55.72981671057788, 49.17205810546876],
  [55.75571349188569, 49.21875000000001],
  [55.79510545223691, 49.220123291015625],
  [55.81208577289999, 49.19883728027344],
  [55.81632969596974, 49.18167114257813],
  [55.82520185788676, 49.15969848632813],
  [55.88224391055777, 49.163131713867195],
  [55.885709983709674, 49.034042358398445],
  [55.903035707281575, 48.96949768066407],
  [55.88686527264868, 48.86238098144532],
  [55.82404473410693, 48.84521484375001],
  [55.8159439039053, 48.847274780273445],
  [55.80359653829958, 48.87886047363282],
  [55.80784138701898, 48.904953002929695],
  [55.79742138660978, 48.973617553710945],
  [55.79471944978465, 49.02992248535156],
  [55.795491450863395, 49.06837463378907],
  [55.795877445664125, 49.091720581054695],
  [55.7765730186677, 49.097213745117195],
  [55.76034990679016, 49.075241088867195],
  [55.75107652576907, 49.07661437988282]
]


const Map = () => {
  
  useEffect(() => {
    let elements = document.querySelectorAll('.leaflet-bottom.leaflet-right')
    elements.forEach((el) => el.remove())
  }, [])
  return (
    <div className='map'>
      <MapContainer center={[55.7630643, 49.16600001]} zoom={10} style={{ height: '100%', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* <FeatureGroup>
          <EditControl onCreated={(e) => console.log(e.layer.editing.latlngs[0][0])} position='topright' draw={{
            rectangle: false,
            circle: false,
            circlemarker: false,
            polyline: false
          }} />
        </FeatureGroup> */}
        <Polygon positions={polygon} />
      </MapContainer>
    </div>
  );
};

export default Map;