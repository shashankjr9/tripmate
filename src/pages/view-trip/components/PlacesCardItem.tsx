import { GetPlaceDetails, PHOTO_REF_URL } from "@/services/GlobalApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Place {
  geoCoordinates: {
    latitude: number;
    longitude: number;
  };
  placeImageURL: string;
  placeName: string;
  placeDetails: string;
  timeToTravel: string;
  ticketPricing: string;
}

interface PlacesCardItemProps {
  place: Place;
  index: number;
  location: string;
}

function PlacesCardItem({ place, index, location }: PlacesCardItemProps) {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  useEffect(() => {
    place && GetPlacePhoto();
  }, [place]);

  const GetPlacePhoto = async () => {
    try {
      const query = place?.placeName;
      const response = await GetPlaceDetails(query);
      console.log("Hotel response: " + response);

      if (response && response.places && response.places.length > 0) {
        const photoName = response.places[0].photos[0].name;
        setPhotoUrl(PHOTO_REF_URL(photoName));
        console.log("PhotoUrl for hotel: " + photoUrl);
      }
    } catch (error) {
      console.error("Error fetching place photo:", error);
    }
  };

  return (
    <Link
      key={index}
      to={`https://www.google.com/maps/search/?api=1&query=${place?.placeName}+${location}`}
      target="_blank"
    >
      <div className="border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer">
        <img
          src={photoUrl || "./travel.jpg"}
          className="w-[130px] h-[130px] rounded-xl object-cover"
          alt={place?.placeName}
        />
        <div>
          <h2 className="font-bold text-lg">{place?.placeName}</h2>
          <p className="text-sm text-gray-400">{place?.placeDetails}</p>
          <h2 className="mt-2">🕙 {place?.timeToTravel}</h2>
          <h2 className="mt-2">🎟️ {place?.ticketPricing}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PlacesCardItem;
