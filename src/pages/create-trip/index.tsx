import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Option } from "react-google-places-autocomplete/build/types";
import {
  GEMINI_PROMPT,
  SelectBudgetOptions,
  SelectTravelersList,
} from "@/constants/options"; // Adjust the import path as necessary
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { chatSession } from "@/services/geminiService";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

function CreateTrip() {
  const [place, setPlace] = useState<Option | null>(null);

  const [formData, setFormData] = useState<{ [key: string]: any }>({});

  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleInputChange = (name: string, value: any) => {
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const onGenerateTrip = async () => {
    const user = localStorage.getItem("user");
    if (!user) {
      setOpenDialog(true);
      return;
    }

    if (formData.numberOfDays < 1 || formData.numberOfDays > 30) {
      toast(
        "Please enter a number of days between 1 and 30, (if you can do more than 30 days, you don't need a planner 😅)"
      );
      return;
    }
    if (
      !formData.location ||
      !formData.numberOfDays ||
      !formData.budget ||
      !formData.traveler
    ) {
      toast("Please fill all the fields");
      return;
    }
    console.log("Generating trip with data", formData);

    const Final_Prompt = GEMINI_PROMPT.replace(
      "{location}",
      formData.location.label
    )
      .replace("{vacation_days}", formData.numberOfDays)
      .replace("{travel_with}", formData.traveler)
      .replace("{budget}", formData.budget)
      .replace("{vacation_days}", formData.numberOfDays);

    console.log(Final_Prompt);
    const response = await chatSession.sendMessage(Final_Prompt);
    console.log(response.response.text());
  };

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      GetUserProfile(codeResponse);
      // console.log(codeResponse);
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const GetUserProfile = (tokenInfo: any) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?acceess_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        localStorage.setItem("user", JSON.stringify(response.data));
        setOpenDialog(false);
        onGenerateTrip();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h1 className="text-3xl font-bold">Tell us your travel preferences.</h1>
      <p className="mt-3 text-gray-500 text-lg">
        Just provide some information about where you want to go.
      </p>
      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is your destination?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACES_API_KEY}
            selectProps={{
              value: place,
              onChange: (place) => {
                setPlace(place);
                handleInputChange("location", place);
              },
              styles: {
                // control: (provided) => ({
                //   ...provided,
                // backgroundColor: "black", // TODO: Change the background color when dark mode is on
                // }),
                input: (provided) => ({
                  ...provided,
                  color: "gray",
                }),
                option: (provided) => ({
                  ...provided,
                  color: "gray",
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "gray",
                }),
              },
            }}
          />
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">
            How many days are you planning to go?
          </h2>
          <Input
            placeholder="Ex. 5"
            type="number"
            onChange={(number) =>
              handleInputChange("numberOfDays", number.target.value)
            }
          />
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">What is Your Budget?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectBudgetOptions.map((budget) => (
              <div
                key={budget.id}
                onClick={() => handleInputChange("budget", budget.title)}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${
                  formData?.budget === budget.title ? "border-primary" : ""
                }`}
              >
                <h2 className="text-4xl">{budget.icon}</h2>
                <h2 className="font-bold text-lg">{budget.title}</h2>
                <h2 className="text-sm text-gray-500">{budget.description}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-xl my-3 font-medium">
          Who do you plan on traveling with on your next adventure?
        </h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectTravelersList.map((traveler) => (
            <div
              key={traveler.id}
              onClick={() => handleInputChange("traveler", traveler.people)}
              className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${
                formData?.traveler === traveler.people ? "border-primary" : ""
              }`}
            >
              <h2 className="text-4xl">{traveler.icon}</h2>
              <h2 className="font-bold text-lg">{traveler.title}</h2>
              <h2 className="text-sm text-gray-500">{traveler.description}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="my-10 justify-end flex">
        <Button onClick={onGenerateTrip}>Generate Trip</Button>
      </div>

      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <img src="/logo-icon.svg" alt="logo" className="w-10 h-10" />
            </DialogTitle>

            <DialogDescription>
              <span className="text-xl font-bold mt-2 text-center">
                Sign in to continue
              </span>
              <span className="text-gray-500 mt-2 text-center">
                You need to sign in to generate a trip. If you don't have an
                account, you can sign up for free.
              </span>
              <Button
                className="w-full mt-5 flex gap-2 items-center"
                onClick={() => login()}
              >
                <FcGoogle className="w-10 h-10" />
                Sign in with Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateTrip;
