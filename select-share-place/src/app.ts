import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.querySelector("#address")! as HTMLInputElement;

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

const GOOGLE_API_KEY = "";

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  // send this to Google's API!
  axios
    .get<GoogleGeocodingResponse>("url")
    .then((response) => {
      if (response.data.status !== "OK") {
        throw new Error("Could not fetch location!");
      }
      const coordinates = response.data.results[0].geometry.location;
    })
    .catch((err) => {
      alert(err.message);
      console.error(err);
    });
}

form?.addEventListener("submit", searchAddressHandler);
