import { db } from "@/services/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import InformationSection from "../components/informationSection";
import HotelsSection from "../components/Hotels";
import PlacesToVisit from "../components/PlacesToVisit";

function ViewTrip() {
  const { tripId } = useParams();
  const [tripData, setTripData] = useState<any>([]);

  useEffect(() => {
    tripId && getTripData();
  }, [tripId]);

  const getTripData = async () => {
    if (!tripId) {
      console.log("No trip ID provided!");
      toast("No Trip Found!");
      return;
    }
    const docRef = doc(db, "trips", tripId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setTripData(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      toast("No Trip Found!");
    }
  };

  return (
    <div className="p-10 md:px-20 lg:px-44 xl:px-56">
      {/* Inforamtion about the trip */}
      <InformationSection tripData={tripData} />
      {/* Recommended Hotels */}
      <HotelsSection tripData={tripData} />
      {/* Daily Plan */}
      <PlacesToVisit tripData={tripData} />

      {/* Footer */}
    </div>
  );
}

export default ViewTrip;
