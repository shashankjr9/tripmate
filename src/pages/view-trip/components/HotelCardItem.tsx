import { GetPlaceDetails, PHOTO_REF_URL } from "@/services/GlobalApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Hotel {
  hotelName: string;
  hotelAddress: string;
  hotelImageURL: string;
  price: string;
  rating: number;
  description: string;
}

function HotelCardItem({ hotel, index }: { hotel: Hotel; index: number }) {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  useEffect(() => {
    hotel && GetPlacePhoto();
  }, [hotel]);

  const GetPlacePhoto = async () => {
    try {
      const query = hotel?.hotelName;
      const response = await GetPlaceDetails(query);
      console.log("Hotel respones: " + response);

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
      to={`https://www.google.com/maps/search/?api=1&query=${hotel?.hotelName}+${hotel?.hotelAddress}`}
      target="_blank"
      key={index}
    >
      <div className="hover:scale-105 transition-all cursor-pointer">
        <img
          src={photoUrl || "/travel.jpg"}
          alt={hotel?.hotelName}
          className="rounded-xl h-[180px] w-full object-cover"
        />
        <div className="my-2 flex flex-col gap-2">
          <h2 className="font-medium">{hotel?.hotelName}</h2>
          <h2 className="text-xs text-gray-500">📍 {hotel?.hotelAddress}</h2>
          <h2 className="text-sm">💰 {hotel?.price} per night</h2>
          <h2 className="text-sm">⭐ {hotel?.rating} stars</h2>
          <p className="text-xs text-gray-500">{hotel?.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default HotelCardItem;
