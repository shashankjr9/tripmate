// const { GoogleGenerativeAI } = require("@google/generative-ai");

import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate a Travel Plan for Location: Athens, Greece, for 3 Days for Friends with a Moderate budget, Give me a Hotels options list with HotelName, Hotel address, Price, Hotel image URL, Geo Coordinates, rating, descriptions, and suggest itinerary with placeName, Place Details, Place image URL, Geo Coordinates, ticket Pricing, rating, Time to travel each of the locations for 3 days with each day plan with the best time to visit in JSON Format.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "tripDetails": {\n    "location": "Athens, Greece",\n    "duration": "3 Days",\n    "budget": "Moderate",\n    "bestTimeToVisit": "May-June or September-October (pleasant weather, fewer crowds)"\n  },\n  "hotels": [\n    {\n      "hotelName": "Hotel Plaka",\n      "hotelAddress": "Kapnikareou 7, Athens 105 56, Greece",\n      "price": "€100-€150/night",\n      "hotelImageURL": "https://example.com/hotel_plaka.jpg",\n      "geoCoordinates": {\n        "latitude": 37.9766,\n        "longitude": 23.7265\n      },\n      "rating": 4.5,\n      "description": "Charming hotel in the heart of Plaka, close to major attractions."\n    },\n    {\n      "hotelName": "Adrian Hotel",\n      "hotelAddress": "Adrianou 72, Athens 105 55, Greece",\n      "price": "€80-€120/night",\n      "hotelImageURL": "https://example.com/adrian_hotel.jpg",\n      "geoCoordinates": {\n        "latitude": 37.9758,\n        "longitude": 23.7286\n      },\n      "rating": 4.0,\n      "description": "Modern hotel near Monastiraki Square with rooftop views."\n    },\n    {\n      "hotelName": "Athens Backpackers",\n      "hotelAddress": "Makri 12, Athens 105 54, Greece",\n      "price": "€30-€50/night (dorm/private)",\n      "hotelImageURL": "https://example.com/athens_backpackers.jpg",\n      "geoCoordinates": {\n        "latitude": 37.9761,\n        "longitude": 23.7252\n      },\n      "rating": 4.2,\n      "description": "Budget-friendly hostel with social atmosphere, close to Acropolis."\n    }\n  ],\n  "itinerary": {\n    "day1": {\n      "places": [\n        {\n          "placeName": "Acropolis",\n          "placeDetails": "Ancient citadel with Parthenon temple.",\n          "placeImageURL": "https://example.com/acropolis.jpg",\n          "geoCoordinates": {\n            "latitude": 37.9714,\n            "longitude": 23.7258\n          },\n          "ticketPricing": "€20",\n          "rating": 4.8,\n          "timeToTravel": "2-3 hours"\n        },\n        {\n          "placeName": "Acropolis Museum",\n          "placeDetails": "Museum showcasing artifacts from the Acropolis.",\n          "placeImageURL": "https://example.com/acropolis_museum.jpg",\n          "geoCoordinates": {\n             "latitude": 37.9695,\n             "longitude": 23.7281\n          },\n          "ticketPricing": "€5",\n          "rating": 4.6,\n          "timeToTravel": "1-2 hours"\n        },\n        {\n          "placeName": "Plaka District",\n          "placeDetails": "Historic neighborhood with charming streets and tavernas.",\n          "placeImageURL": "https://example.com/plaka.jpg",\n          "geoCoordinates": {\n             "latitude": 37.9761, \n             "longitude": 23.7272 \n          },\n          "ticketPricing": "Free (except for shops/restaurants)",\n          "rating": 4.7,\n          "timeToTravel": "2-3 hours (exploring)"\n        }\n      ]\n    },\n    "day2": {\n      "places": [\n        {\n          "placeName": "Ancient Agora",\n          "placeDetails": "Ruins of the ancient marketplace and civic center.",\n          "placeImageURL": "https://example.com/agora.jpg",\n          "geoCoordinates": {\n            "latitude": 37.9756,\n            "longitude": 23.7229\n          },\n          "ticketPricing": "€10",\n          "rating": 4.5,\n          "timeToTravel": "2-3 hours"\n        },\n         {\n          "placeName": "Temple of Hephaestus",\n          "placeDetails": "Well-preserved ancient Greek temple.",\n          "placeImageURL": "https://example.com/hephaestus.jpg",\n          "geoCoordinates": {\n            "latitude": 37.9753,\n            "longitude": 23.7234\n          },\n          "ticketPricing": "Included with Agora ticket",\n          "rating": 4.6,\n          "timeToTravel": "1 hour"\n        },\n        {\n          "placeName": "Monastiraki Flea Market",\n          "placeDetails": "Bustling market with souvenirs, antiques, and more.",\n          "placeImageURL": "https://example.com/monastiraki.jpg",\n          "geoCoordinates": {\n             "latitude": 37.9753,\n             "longitude": 23.7260 \n          },\n          "ticketPricing": "Free (except for purchases)",\n          "rating": 4.4,\n          "timeToTravel": "1-2 hours" \n        }\n      ]\n    },\n    "day3": {\n      "places": [\n        {\n          "placeName": "National Archaeological Museum",\n          "placeDetails": "Vast collection of Greek artifacts from prehistory to late antiquity.",\n          "placeImageURL": "https://example.com/national_museum.jpg",\n          "geoCoordinates": {\n            "latitude": 37.9978, \n            "longitude": 23.7294\n          },\n          "ticketPricing": "€10",\n          "rating": 4.7,\n          "timeToTravel": "2-3 hours"\n        },\n        {\n          "placeName": "National Garden",\n          "placeDetails": "Large park with botanical gardens and ancient ruins.",\n          "placeImageURL": "https://example.com/national_garden.jpg",\n          "geoCoordinates": {\n             "latitude": 37.9734,\n             "longitude": 23.7382 \n          },\n          "ticketPricing": "Free",\n          "rating": 4.4,\n          "timeToTravel": "1-2 hours" \n        },\n        {\n          "placeName": "Lycabettus Hill",\n          "placeDetails": "Highest point in Athens, offering panoramic views.",\n          "placeImageURL": "https://example.com/lycabettus.jpg",\n          "geoCoordinates": {\n            "latitude": 37.9823,\n            "longitude": 23.7466\n          },\n          "ticketPricing": "Funicular: €7.50 roundtrip",\n          "rating": 4.6,\n          "timeToTravel": "2-3 hours (including travel time)" \n        }\n      ]\n    }\n  }\n}\n```',
        },
      ],
    },
  ],
});
