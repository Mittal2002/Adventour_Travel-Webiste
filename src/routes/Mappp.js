import React, { useEffect } from "react";

const Mapp = () => {
  useEffect(() => {
    const initAutocomplete = () => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: -33.8688, lng: 151.2195 },
        zoom: 13,
        mapTypeId: "roadmap"
      });

      const input = document.getElementById("pac-input");
      const searchBox = new window.google.maps.places.SearchBox(input);

      map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(input);

      map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
      });

      let markers = [];

      searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();

        if (places.length === 0) {
          return;
        }

        markers.forEach((marker) => {
          marker.setMap(null);
        });
        markers = [];

        const bounds = new window.google.maps.LatLngBounds();

        places.forEach((place) => {
          if (!place.geometry || !place.geometry.location) {
            console.log("Returned place contains no geometry");
            return;
          }

          const icon = {
            url: place.icon,
            size: new window.google.maps.Size(71, 71),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(17, 34),
            scaledSize: new window.google.maps.Size(25, 25)
          };

          markers.push(
            new window.google.maps.Marker({
              map,
              icon,
              title: place.name,
              position: place.geometry.location
            })
          );
          if (place.geometry.viewport) {
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });
        map.fitBounds(bounds);
      });
    };

    // Load the Google Maps script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDoN0Ci4ZscnWWHQ0yV6KxD8IGmfVaD_4A&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = initAutocomplete;
    document.head.appendChild(script);

    return () => {
      // Clean up the script to avoid memory leaks
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <input id="pac-input" type="text" placeholder="Enter a location" />
      <div id="map" style={{ height: "400px", width: "100%" }}></div>
    </div>
  );
};

export default Mapp;
