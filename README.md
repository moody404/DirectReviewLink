# DirectReviewLink

DirectReviewLink is a simple web-based tool that generates a direct Google Review link for any place using the Google Places API. This tool can be used with NFC cards, allowing customers to quickly access the review page of a business, helping increase store ratings on Google Maps.

Features
Location Search: Allows users to search for a location using the Google Places API.
Place Information: Displays the place name, address, and Place ID.
Direct Review Link: Automatically generates a direct Google Review link for the selected location.
NFC Ready: The generated review link can be embedded into an NFC card for quick access by customers.
How It Works
Enter a location name in the search box.
The tool fetches the location’s details, including Place Name, Place ID, and Address.
A direct Google Review link is generated using the Place ID.
The review link can be embedded in NFC cards or shared directly to direct users to the review page for the business.
Project Files
index.html: Contains the structure and UI of the app.
index.js: Contains the logic for interacting with the Google Places API and generating the review link.
style.css: Contains the styles to ensure the app is clean and responsive.
Setup Instructions
Clone this repository:

bash
Copy code
git clone https://github.com/moody404/DirectReviewLink.git
Open the index.html file in a browser.

Replace the placeholder in the index.html with your actual Google Maps API key:

html
Copy code
<script
  src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&libraries=places&v=weekly"
  defer
></script>
Use the app by typing a location in the search box. It will generate a direct Google Review link for the selected place.

How to Embed in NFC Cards
Once the Google Review link is generated, you can copy it and use any NFC writing tool to program the link into NFC cards. When users scan the NFC card, they will be directed to the Google Review page for the business.
