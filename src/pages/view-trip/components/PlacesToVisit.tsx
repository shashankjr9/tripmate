import React from "react";
import { Link } from "react-router-dom";

interface Place {
  placeImageURL: string;
  timeToTravel: string;
  rating: number;
  ticketPricing: string;
  placeName: string;
  geoCoordinates: {
    latitude: number;
    longitude: number;
  };
  placeDetails: string;
}

interface Day {
  places: Place[];
}

interface PlacesToVisitProps {
  tripData: {
    tripDataJson: {
      itinerary: {
        [key: string]: Day;
      };
    };
  };
}

const PlacesToVisit: React.FC<PlacesToVisitProps> = ({ tripData }) => {
  const data = tripData?.tripDataJson?.itinerary;

  const sortedDayKeys = Object.keys(data || {}).sort((a, b) => {
    const dayA = parseInt(a.replace("day", ""));
    const dayB = parseInt(b.replace("day", ""));
    return dayA - dayB;
  });

  return (
    <div>
      <h2 className="font-bold text-lg">Places to Visit</h2>
      {sortedDayKeys.map((dayKey) => (
        <div key={dayKey} className="mt-5">
          <h2 className="font-medium text-lg">
            {dayKey.replace("day", "Day ")}
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {data[dayKey].places.map((place, index) => (
              <Link
                key={index}
                to={`https://www.google.com/maps/search/?api=1&query=${place?.geoCoordinates?.latitude},${place?.geoCoordinates?.longitude}`}
                target="_blank"
              >
                <div className="border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer">
                  <img
                    src={place?.placeImageURL}
                    className="w-[130px] h-[130px] rounded-xl object-cover"
                    alt={place?.placeName}
                  />
                  <div>
                    <h2 className="font-bold text-lg">{place?.placeName}</h2>
                    <p className="text-sm text-gray-400">
                      {place?.placeDetails}
                    </p>
                    <h2 className="mt-2">🕙 {place?.timeToTravel}</h2>
                    <h2 className="mt-2">🎟️ {place?.ticketPricing}</h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlacesToVisit;
