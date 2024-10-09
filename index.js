function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 26.3534, lng: 43.955531 },
      zoom: 13,
    });

    const input = document.getElementById("pac-input");
    const autocomplete = new google.maps.places.Autocomplete(input, {
      fields: ["place_id", "geometry", "formatted_address", "name"],
    });

    autocomplete.bindTo("bounds", map);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    const marker = new google.maps.Marker({ map: map });

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();

      // Debugging - Check if place information is being retrieved
      console.log("Place:", place);

      if (!place.geometry || !place.geometry.location) {
        console.log("No geometry or location for this place.");
        return;
      }

      // Adjust the map to fit the selected place
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }

      // Update marker position
      marker.setPosition(place.geometry.location);
      marker.setVisible(true);

      // Populate the information panel
      document.getElementById("place-name").textContent = place.name || "No name available";
      document.getElementById("place-id").textContent = place.place_id || "No place ID available";
      document.getElementById("place-address").textContent = place.formatted_address || "No address available";

      // Generate Google Review link
      const reviewLink = `https://search.google.com/local/writereview?placeid=${place.place_id}`;
      document.getElementById("review-link").href = reviewLink;
      document.getElementById("review-link").textContent = reviewLink;
    });
}

window.initMap = initMap;
