import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import turf from "@turf/turf"

const styles = {
  width: "100vw",
  height: "calc(100vh - 80px)",
  position: "absolute"
};

const MapboxGLMap = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYnVnZWRhcyIsImEiOiJja2VjeXZ2eWQwMWZuMnJuN2hhZThqaWxhIn0.Dn6iUp1N4sDk9JxVPwSoig';
    var dropoffs = turf.featureCollection([]);

    const initializeMap = ({ setMap, mapContainer }) => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
            center: [23.885850477251605, 54.90236897062177],
            zoom: 10
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
        map.addLayer({
            id: 'dropoffs-symbol',
            type: 'symbol',
            source: {
                data: dropoffs,
                type: 'geojson'
            },
            layout: {
                'icon-allow-overlap': true,
                'icon-ignore-placement': true,
                'icon-image': 'marker-15',
            }
        });

        map.on('click', function(e) {
            // When the map is clicked, add a new drop-off point
            // and update the `dropoffs-symbol` layer
            newDropoff(map.unproject(e.point));
            updateDropoffs(dropoffs);
          });
      });

      function newDropoff(coords) {
        // Store the clicked point as a new GeoJSON feature with
        // two properties: `orderTime` and `key`
        var pt = turf.point(
          [coords.lng, coords.lat],
          {
            orderTime: Date.now(),
            key: Math.random()
          }
        );
        dropoffs.features.push(pt);
      }
      
      function updateDropoffs(geojson) {
        map.getSource('dropoffs-symbol')
          .setData(geojson);
      }
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={el => (mapContainer.current = el)} style={styles} />;
};

export default MapboxGLMap;