console.log('hello from the client side');
const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoibWhkYXpsYW5hYmF6aXoiLCJhIjoiY2trb2lhNG11Mmx0ZTJ2bGF3d3gzZ3JpdCJ9.5JqiLPMzNJTgfpaMVt8dsA';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mhdazlanabaziz/ckkoqmipk0k4l17nd329mia1b',
    scrollZoom: false,
    //   center: [-118.113491, 34.111745],
    //   zoom: 6,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 50,
      left: 100,
      right: 100,
    },
  });
};
