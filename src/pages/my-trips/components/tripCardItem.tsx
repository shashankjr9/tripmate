import { GetPlaceDetails, PHOTO_REF_URL } from "@/services/GlobalApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface TripCardItemProps {
  trip: {
    id: string;
    userSelection: {
      location: {
        value: {
          structured_formatting: {
            main_text: string;
            secondary_text: string;
          };
        };
        label: string;
      };
      numberOfDays: string;
      budget: string;
      traveler: string;
    };
    userEmail: string;
  };
}

const TripCardItem = ({ trip }: TripCardItemProps) => {
  const { id, userSelection } = trip;
  const { location, numberOfDays, budget, traveler } = userSelection;
  const { main_text: destination } = location.value.structured_formatting;
  const tripId = id;
  const tripDuration = numberOfDays;

  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  useEffect(() => {
    destination && GetPlacePhoto();
  }, [destination]);

  const GetPlacePhoto = async () => {
    try {
      const query = destination;
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
      to={`/view-trip/${tripId}`}
      className="block shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
    >
      <div className="relative">
        <img
          src={photoUrl || "/travel3.jpg"}
          alt={`${destination} trip`}
          className="object-cover w-full h-[220px]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <span className="text-white text-lg font-semibold">View Trip</span>
        </div>
      </div>
      <div className="p-4 bg-white">
        <h2 className="font-bold text-xl mb-2">{destination}</h2>
        <p className="text-sm text-gray-500 mb-1">
          {tripDuration} Days trip for {traveler} with
          <span className="font-medium text-black"> {budget}</span> budget
        </p>
      </div>
    </Link>
  );
};

export default TripCardItem;
