
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getApp } from "firebase/app";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const firestoreApp = getApp();
const db = getFirestore(firestoreApp);

const addDataToFirestore = async () => {
  try {
    const docRef = await addDoc(collection(db, "trips"), {
      name: "Sample Trip",
      description: "This is a sample trip added to Firestore",
      createdAt: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const HeroSection = () => {
  const [loading, setLoading] = useState(false);

  const handleAddData = async () => {
    setLoading(true);
    await addDataToFirestore();
    setLoading(false);
  };

  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          {/* Existing content */}
          <Button
            onClick={handleAddData}
            disabled={loading}
            className="w-5/6 md:w-1/4 font-bold"
          >
            {loading ? "Adding..." : "Add Data to Firestore"}
          </Button>
        </div>
      </div>
    </section>
  );
};