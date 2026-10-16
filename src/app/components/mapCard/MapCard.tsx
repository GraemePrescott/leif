import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import MapCardStyled from './MapCard.styled';
import { GOOGLE_MAPS_API_KEY } from '../../../config/googleMaps';

export interface Props {
  title: string;
  latitude: number;
  longitude: number;
  zoom?: number;
  markerTitle?: string;
}

const containerStyle = {
  width: '100%',
  height: '400px',
};

const MapCard = ({
  title,
  latitude,
  longitude,
  zoom = 15,
  markerTitle,
}: Props) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  if (loadError) {
    return <div>Unable to load Google Maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading map...</div>;
  }

  console.log('MAPCARD COMPONENT VALUES', {
    title,
    latitude,
    longitude,
    zoom,
  });

  const center = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <MapCardStyled>
      <h2 className="map-card__title">{title}</h2>

      <GoogleMap
        mapContainerClassName="map-card__map"
        center={center}
        zoom={zoom}
      >
        <Marker position={center} title={markerTitle} />
      </GoogleMap>
    </MapCardStyled>
  );
};

export default MapCard;
