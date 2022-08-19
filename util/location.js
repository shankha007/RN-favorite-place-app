const API_KEY = "iDoNoThAvEmOnEyToAfFoRdGoOgLeMaPs";

export function getMapPreview(lat, lng) {
  const imagePreviewUrl =
    "https://risanb.com/code/colorful-google-maps-marker/default-marker.jpg";

  return imagePreviewUrl;
}

export async function getAddress(lat, lng) {
  // const url = "maps.google.com";
  // const response = await fetch(url);

  // if(!response.ok) {
  //   throw new Error('Failed to fetch address!');
  // }

  // const data = await response.json();
  // const address = data.results[0].formatted_address;

  return "52/1/A, N.K.Chatterjee Street, Belgharia, Kolkata - 700056";
}
