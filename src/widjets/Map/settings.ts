export const libraries = ['places'];
export const mapContainerStyle = {
  width: '100%',
  height: 'calc(100vh - 102px)',
};
export const center = {
  lat: 33.6348792,
  lng: -117.7426695,
};

export const options = {
  disableDefaultUI: true,
  zoomControl: true,
  styles: [
    {
      featureType: 'all',
      elementType: 'geometry',
      stylers: [{ color: '#111111' }],
    },
    {
      featureType: 'all',
      elementType: 'labels.text.fill',
      stylers: [{ gamma: 0.01 }, { lightness: 20 }, { weight: '1.39' }, { color: '#ffffff' }],
    },
    {
      featureType: 'all',
      elementType: 'labels.text.stroke',
      stylers: [
        { weight: '0.96' },
        { saturation: '9' },
        { visibility: 'on' },
        { color: '#000000' },
      ],
    },
    {
      featureType: 'landscape',
      elementType: 'geometry',
      stylers: [{ lightness: 30 }, { saturation: '9' }, { color: '#484848' }],
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [{ saturation: 20 }],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{ lightness: 90 }, { saturation: -100 }],
    },
    {
      featureType: 'road',
      elementType: 'geometry.fill',
      stylers: [{ color: '#000000' }],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{ saturation: 25 }, { lightness: 25 }, { weight: '0.01' }],
    },
    {
      featureType: 'water',
      elementType: 'all',
      stylers: [{ lightness: -20 }],
    },
  ],
};
