import axios from "axios";

const BASE_URL = "https://places.googleapis.com/v1/places:searchText";

export const PHOTO_REF_URL = (photoName: string) =>
  `https://places.googleapis.com/v1/${photoName}/media?maxHeightPx=600&maxWidthPx=600&key=${
    import.meta.env.VITE_GOOGLE_PLACES_API_KEY
  }`;

const config = {
  headers: {
    "Content-Type": "application/json",
    "X-Goog-Api-Key": import.meta.env.VITE_GOOGLE_PLACES_API_KEY,
    "X-Goog-FieldMask": "places.photos,places.displayName,places.id",
  },
};

export const GetPlaceDetails = async (query: string) => {
  const requestBody = {
    textQuery: query,
  };

  try {
    const response = await axios.post(BASE_URL, requestBody, config);
    return response.data;
  } catch (error) {
    console.error("Error fetching place details:", error);
    throw error;
  }
};
