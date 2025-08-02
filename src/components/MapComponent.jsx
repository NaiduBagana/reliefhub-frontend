import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

const MapComponent = ({ coordinates }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiY2hhaXR1YWIyMSIsImEiOiJjbHozbmpjMGYwZjZpMmpzZmRtaW9scjJpIn0.1fD4pDTNoJfD2Cb2zt1fQA";

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11", // Replace with your desired map style
      center: coordinates, // [longitude, latitude]
      zoom: 12, // Adjust the initial zoom level as needed
    });

    // Add a marker to the map
    new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
    // coordinates.forEach((coord, index) => {
    //   new mapboxgl.Marker()
    //     .setLngLat(coord)
    //     .addTo(map)
    //     .setPopup(new mapboxgl.Popup().setHTML(`Marker ${index + 1}`));
    // });

    // Cleanup when the component unmounts
    return () => map.remove();
  }, [coordinates]);

  return (
    <div
      ref={mapContainer}
      style={{
        width: "100%",
        height: "300px",
        border: "2px solid #ccc", // Example border style
        borderRadius: "8px", // Example border radius
      }}
    />
  );
};

export default MapComponent;
