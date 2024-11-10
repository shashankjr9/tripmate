import React from "react";
import { Link } from "react-router-dom";
import PlacesCardItem from "./PlacesCardItem";

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
    userSelection: {
      location: { label: string };
    };
    tripDataJson: {
      itinerary: {
        [key: string]: Day;
      };
    };
  };
}

const PlacesToVisit: React.FC<PlacesToVisitProps> = ({ tripData }) => {
  const data = tripData?.tripDataJson?.itinerary;
  const location = tripData?.userSelection?.location?.label;

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
              <PlacesCardItem place={place} index={index} location={location} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlacesToVisit;
