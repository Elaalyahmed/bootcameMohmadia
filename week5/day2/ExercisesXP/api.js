const apiKey = "dYD2Yeevw2fE4DL3MaMP8aQ57eNIP3Vd"; 
const query = "sun";
const limit = 10;
const offset = 2;

const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(query)}&limit=${limit}&offset=${offset}`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }
    return response.json(); 
  })
  .then(data => {
    console.log(data); 
  })
  .catch(error => {
    console.error("An error occurred while fetching GIFs:", error);
  });