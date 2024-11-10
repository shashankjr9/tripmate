# TripMate

Welcome to the Ai Trip Planner "TripMate" project! This project is built using Vite, React, TypeScript, and TailwindCSS. It leverages several Google APIs to provide a comprehensive trip planning experience. This project is being developed for the Google Hackathon to experiment with Google Gemini AI.

You can read more about the approach for creating this repository [here](DOC.md).

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The TripMate is designed to help users plan their trips efficiently by utilizing AI and various Google APIs. The application provides features such hotel and trip recommendations.

## Features

- **Location Search**: Search for locations using the Places API.
- **Map Embedding**: Embed maps using the Maps Embed API.
- **Trip Recommendations**: Get AI-powered trip recommendations using the Gemini API.
- **Real Images**: Display up-to-date images of locations using the Places API (New).
- **User Authentication**: Secure user authentication using Google OAuth.
- **Database Integration**: Store and retrieve trip data using Firestore.

## Technologies Used

- **Vite**: A fast build tool for modern web projects.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript.
- **TailwindCSS**: A utility-first CSS framework.
- **Gemini API**: For AI-powered trip recommendations.
- **Maps Embed API**: For embedding maps.
- **Maps JavaScript API**: For interactive maps.
- **Places API**: For location search.
- **Places API (New)**: For images search.
- **Google OAuth**: For user authentication.
- **Firestore**: For database integration.

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tripmate.git
   ```
2. Navigate to the project directory:
   ```bash
   cd tripmate
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env.local` file and add your API keys and configuration:
   ```env
   VITE_GOOGLE_PLACES_API_KEY=your_google_places_api_key
   VITE_GEMINI_API_KEY=your_gemini_api_key
   VITE_GOOGLE_AUTH_CLIENT_ID=your_google_auth_client_id
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_firebase_app_id
   ```

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:5173`.
3. Create your TripMate.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Acknowledgments

Special thanks to Google for providing the APIs that power our application.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
