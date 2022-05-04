import React, { useContext, useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../Marker';
import MapsContext from '../../context/maps/context';
// import 'google-map-react/dist/index.css';

export default function SimpleMap() {
  const { setState: setGlobalState, state } = useContext<any>(MapsContext);
  const [places, setPlaces] = useState([] as any);

  useEffect(() => {
    // const aaa = places.find((place: any) => {
    //   if (place.id === state.id && state.id !== undefined) {
    //     return place;
    //   }
    // });
    // console.log({ aaa });
    // if (!aaa) {
    // const _places = [...places];
    // _places.push({ ...state?.geolocation, id: state.id });
    // console.log({ _places, state });
    console.log(Object.values(state.geolocation));
    setPlaces(state.geolocation);
    // }
  }, [state.geolocation]);
  const defaultProps = {
    center: {
      lat: -23.3829291,
      lng: -51.9262769,
    },
    zoom: 10,
  } as any;

  const getMapBounds = (map: any, maps: any, places: any[]) => {
    const bounds = new maps.LatLngBounds();

    places.forEach((place) => {
      bounds.extend(new maps.LatLng(place.latitude, place.longitude));
    });
    return bounds;
  };
  const bindResizeListener = (map: any, maps: any, bounds: any) => {
    maps.event.addDomListenerOnce(map, 'idle', () => {
      maps.event.addDomListener(window, 'resize', () => {
        map.fitBounds(bounds);
      });
    });
  };
  const apiIsLoaded = (map: { fitBounds: any }, maps: any, places: any[]) => {
    // Get bounds by our places
    const bounds = getMapBounds(map, maps, places);
    // Fit map to bounds
    map.fitBounds(bounds);
    // Bind the resize listener
    bindResizeListener(map, maps, bounds);
  };

  return (
    <>
      {places && (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyBo87KqDeIPbBT897SPZmN-eXxsCJpnb-g',
            libraries: ['visualization'],
          }}
          defaultCenter={[-23.3829291, -51.9262769]}
          defaultZoom={defaultProps.zoom}
          {...defaultProps}
          yesIWantToUseGoogleMapApiInternals={true}
          onGoogleApiLoaded={({ map, maps }) => {
            // apiIsLoaded(map, maps, places);
          }}
        >
          {places.map((place: any) => console.log(place.geolocation))}
          {places.map((place: any) => (
            <Marker
              key={place?.geolocation?.id}
              text={place?.geolocation?.id}
              lat={place?.geolocation?.latitude}
              lng={place?.geolocation?.longitude}
            />
          ))}
        </GoogleMapReact>
      )}
    </>
  );
}
