import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import styles from './Map.module.css';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { libraries, center, mapContainerStyle, options } from '../settings';
import { ICompass } from '../constants';
import { AddNote } from '@features/AddNote';
import { CompassData } from '@features/CompassData';
import { useCompassPageStore } from '@providers/CompassPageProvider/ui/StoreProvider.tsx';
import { SearchAddress } from '@features/SearchAddress';
import { observer } from 'mobx-react-lite';
import { BaseImageWithOverlay } from '@features/CompassImage';
import { ArrowRight } from '@icons/ArrowRight.tsx';

export const CustomMap = observer(() => {
  const { type, sidebarVisible, changeSidebarVisible } = useCompassPageStore();
  const [markerPosition, setMarkerPosition] = useState<{ lat: number; lng: number } | null>(null);
  const [selectedCompass, setSelectedCompass] = useState<ICompass | null>(null);
  const [address, setAddress] = useState<string>('');
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAsOiVFoj7et2Q8qKfbyPy-_nwVOCGpITg',
    libraries,
  });
  const mapRef = useRef<null | google.maps.Map>(null);

  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  useEffect(() => {
    console.log(type);
  }, [type]);

  const handleMapClick = async (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();

      // Обратное геокодирование для получения адреса
      const geocoder = new google.maps.Geocoder();
      const response = await geocoder.geocode({ location: { lat, lng } });
      if (response.results && response.results[0]) {
        setAddress(response.results[0].formatted_address);
      }
    }
  };

  const panTo = useCallback(({ lat, lng }) => {
    if (mapRef.current) {
      mapRef.current.panTo({ lat, lng });
      mapRef.current.setZoom(14);
    }
  }, []);

  if (loadError) {
    return 'Error loading maps';
  }
  if (!isLoaded) {
    return 'Loading Maps';
  }

  return (
    <div className={styles.body}>
      {!markerPosition && (
        <div className={styles.leftSide} style={sidebarVisible ? { left: 0 } : { left: '-100%' }}>
          <div className={styles.container}>
            <button className={`${styles.hideMenuBtn} ${sidebarVisible ? '' : styles.hiddenMenuPosition}`} onClick={() => changeSidebarVisible(!sidebarVisible)}>
              <ArrowRight />
            </button>
            {type === 'map' ? (
              <SearchAddress
                selectedCompass={selectedCompass}
                setCompass={setSelectedCompass}
                panTo={panTo}
              />
            ) : (
              <CompassData />
            )}
          </div>
        </div>
      )}
      {/*<Locate panTo={panTo} />*/}
      {type === 'map' ? (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={12}
          center={center}
          options={options}
          onClick={handleMapClick}
          onLoad={onMapLoad}
        >
        </GoogleMap>
      ) : (
        <BaseImageWithOverlay />
      )}

      {selectedCompass && type === 'map' && (
        <div className={styles.mapCompass}>
          <img src="/map-compass.png" alt="" />
        </div>
      )}
    </div>
  );
});

function Locate({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null,
        );
      }}
    >
      <h2>locate</h2>
    </button>
  );
}
