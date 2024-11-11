import { GetPlaceDetails, PHOTO_REF_URL } from "@/services/GlobalApi";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const InformationSection = ({ tripData }: any) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  useEffect(() => {
    tripData && GetPlacePhoto();
  }, [tripData]);

  const GetPlacePhoto = async () => {
    try {
      const query = tripData?.userSelection?.location?.label;
      const response = await GetPlaceDetails(query);
      console.log(response);

      if (response && response.places && response.places.length > 0) {
        const photoName = response.places[0].photos[0].name;
        setPhotoUrl(PHOTO_REF_URL(photoName));
        console.log("PhotoUrl: " + photoUrl);
      }
    } catch (error) {
      console.error("Error fetching place photo:", error);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast("The location name copied to clipboard!");
  };

  const shareLink = () => {
    const link = window.location.href;
    navigator.clipboard.writeText(link);
    toast("Link copied to clipboard, you can share it with your friends!");
  };

  return (
    <div>
      <div className="flex justify-between  mt-4">
        <div className="my-5 flex flex-col gap-2 ">
          <h2 className="font-bold text-2xl">
            {tripData?.userSelection?.location?.label}
          </h2>
          <div className="hidden sm:flex gap-5">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500">
              📅 {tripData?.userSelection?.numberOfDays} Day
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500">
              💰 {tripData?.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500">
              🥂 No. Of Traveler: {tripData?.userSelection?.traveler}
            </h2>
          </div>
        </div>
        <div className="flex gap-2 items-end">
          <button
            onClick={() =>
              copyToClipboard(tripData?.userSelection?.location?.label)
            }
            className="p-1 px-3 text-gray-500 rounded-full"
          >
            📋 Copy
          </button>
          <button
            onClick={shareLink}
            className="p-1 px-3 text-gray-500 rounded-full"
          >
            🔗 Share
          </button>
        </div>
      </div>
      <img
        src={photoUrl || "./travel2.jpg"}
        alt="travel"
        className="w-full h-[450px] object-cover rounded-xl"
      />
      <div className="my-5">
        <h3 className="font-bold text-xl">About the City</h3>
        <p className="mt-2 text-gray-700">
          {tripData?.tripDataJson?.cityDescription?.description}
        </p>
        <h4 className="font-semibold text-lg mt-4">Known For</h4>
        <p className="mt-1 text-gray-700">
          {tripData?.tripDataJson?.cityDescription?.knownFor}
        </p>
        <h4 className="font-semibold text-lg mt-4">Don't Miss</h4>
        <p className="mt-1 text-gray-700">
          {tripData?.tripDataJson?.cityDescription?.dontMiss}
        </p>
      </div>
    </div>
  );
};

export default InformationSection;
