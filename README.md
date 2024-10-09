# DirectReviewLink

**DirectReviewLink** is a simple web-based tool that generates a direct Google Review link for any place using the Google Places API. This tool can be used with NFC cards, allowing customers to quickly access the review page of a business, helping increase store ratings on Google Maps.

## Features

- **Location Search**: Allows users to search for a location using the Google Places API.
- **Place Information**: Displays the place name, address, and Place ID.
- **Direct Review Link**: Automatically generates a direct Google Review link for the selected location.
- **NFC Ready**: The generated review link can be embedded into an NFC card for quick access by customers.

## How It Works

1. Enter a location name in the search box.
2. The tool fetches the location’s details such as Place Name, Place ID, and Address.
3. A direct Google Review link is generated using the Place ID.
4. The review link can be used or embedded in NFC cards to direct users to the review page for the business.

## Project Files

- `index.html`: Contains the structure and UI of the app.
- `index.js`: Contains the logic for interacting with the Google Places API and generating the review link.
- `style.css`: Contains the styles to make the app look clean and responsive.

## Setup Instructions

1. Clone this repository:
   ```bash
   git clone https://github.com/moody404/DirectReviewLink.git

### Open the index.html file in a browser.

Replace the placeholder in the index.html with your actual Google Maps API key:
```html 
<script
  src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&libraries=places&v=weekly"
  defer
></script>

