import { db } from "@/services/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TripCardItem from "./components/tripCardItem";

function MyTrips() {
  const [userTrips, setUserTrips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserTrips = async () => {
      // @ts-ignore
      const user: any = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        navigate(import.meta.env.BASE_URL);
        return;
      }

      setUserTrips([]);

      const q = query(
        collection(db, "trips"),
        where("userEmail", "==", user?.email)
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        // @ts-ignore
        setUserTrips((prevVal) => [...prevVal, doc.data()]);
      });
    };

    fetchUserTrips();
  }, [navigate]);

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h1 className="text-2xl font-bold">My Trips</h1>
      <div className="grid grid-cols-2 mt-10 md:grid-cols-3 gap-5">
        {userTrips.map((trip) => (
          <TripCardItem trip={trip} />
        ))}
      </div>
    </div>
  );
}

export default MyTrips;
