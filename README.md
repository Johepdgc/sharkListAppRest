# SHARK REST APP

## Overview

The Shark Management App is a web application designed to manage information about different shark species. Users can add, update, view, and delete shark entries. The app is built using React for the frontend and Django for the backend, communicating via a RESTful API to perform CRUD operations.

## Features

- **Add Shark**: Users can add new shark entries with details such as name, description, species, and image.
- **Update Shark**: Users can update existing shark entries.
- **View Shark**: Users can view details of individual sharks.
- **Delete Shark**: Users can delete shark entries.
- **Image Upload**: Users can upload images for each shark entry.

## Technologies Used

- **Frontend**: React, React Router, React Hook Form, React Toastify, Tailwind CSS
- **Backend**: Django, Django REST Framework
- **HTTP Client**: Axios

## API Endpoints

- **GET /api/sharks/:id**: Fetch a shark by ID.
- **POST /api/sharks**: Create a new shark.
- **PUT /api/sharks/:id**: Update a shark by ID.
- **DELETE /api/sharks/:id**: Delete a shark by ID.

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Python (v3.8 or higher)
- pip
- virtualenv
