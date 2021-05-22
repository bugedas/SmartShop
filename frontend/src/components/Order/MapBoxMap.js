import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const styles = {
  width: "100vw",
  height: "calc(100vh - 80px)",
  position: "absolute",

};

const MapboxGLMap = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYnVnZWRhcyIsImEiOiJja2VjeXZ2eWQwMWZuMnJuN2hhZThqaWxhIn0.Dn6iUp1N4sDk9JxVPwSoig';
    

    const initializeMap = ({ setMap, mapContainer }) => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/light-v10", // stylesheet location
            center: [23.904946028393738, 54.89923448793568],
            zoom: 12
        });
        map.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
            })
        );

        map.on("load", () => {
            setMap(map);
            map.resize();
        });
      
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={el => (mapContainer.current = el)} style={styles} />;
};

export default MapboxGLMap;