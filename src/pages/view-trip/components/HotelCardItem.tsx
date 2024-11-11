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
    <div className="flex flex-col mb-6 cursor-pointer relative w-full hover:scale-105 transition-all cursor-pointer">
      <Link
        to={`https://www.google.com/maps/search/?api=1&query=${hotel?.hotelName}+${hotel?.hotelAddress}`}
        target="_blank"
        className="absolute left-0 top-0 w-full h-full"
        rel="noreferrer"
      >
        <span></span>
      </Link>
      <div
        className="w-full aspect-[2/1.2] flex-none bg-cover bg-center justify-center items-center rounded-lg mb-2"
        style={{ backgroundImage: `url(${photoUrl || "./travel.jpg"})` }}
      ></div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <p className="text-xs font-medium text-zinc-800">
            📍 {hotel?.hotelAddress}
          </p>
          <h3 className="font-bold line-clamp-1 mb-1 text-xl">
            {hotel?.hotelName}
          </h3>
        </div>
        <div className="flex items-center gap-x-3">
          <strong className="text-sm font-medium">💰 {hotel?.price}</strong>
          <span className="text-sm font-medium ">⭐ {hotel?.rating} stars</span>
        </div>
      </div>
    </div>
  );
}

export default HotelCardItem;
