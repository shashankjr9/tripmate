import HotelCardItem from "./HotelCardItem";

interface Hotel {
  hotelName: string;
  hotelAddress: string;
  price: string;
  rating: number;
  hotelImageURL: string;
  description: string;
  geoCoordinates: {
    latitude: number;
    longitude: number;
  };
}

interface HotelsSectionProps {
  tripData: {
    tripDataJson: {
      hotels: Hotel[];
    };
  };
}

function HotelsSection({ tripData }: HotelsSectionProps) {
  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Hotel Recommendation</h2>
      <div className="grid grid-cols-2 my-5 md:grid-cols-3 xl:grid-cols-3 gap-5">
        {tripData?.tripDataJson?.hotels?.map((hotel, index) => (
          <HotelCardItem index={index} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}

export default HotelsSection;
