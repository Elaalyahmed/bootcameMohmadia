const button = document.getElementById("fetch-button");
const characterInfoDiv = document.getElementById("character-info");

function showLoading() {
  characterInfoDiv.innerHTML = `<div class="loading">
    <i class="fas fa-spinner fa-spin"></i> Loading character...
  </div>`;
}

function showError(message) {
  characterInfoDiv.innerHTML = `<div class="error">${message}</div>`;
}

function displayCharacter(data, homeworld) {
  const { name, height, gender, birth_year } = data;
  characterInfoDiv.innerHTML = `
    <h2>${name}</h2>
    <p><strong>Height:</strong> ${height} cm</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Birth Year:</strong> ${birth_year}</p>
    <p><strong>Homeworld:</strong> ${homeworld}</p>
  `;
}

async function getRandomCharacter() {
  const randomId = Math.floor(Math.random() * 83) + 1;
  showLoading();

  try {
    const response = await fetch(`https://www.swapi.tech/api/people/${randomId}`);
    if (!response.ok) throw new Error("Failed to fetch character.");

    const { result } = await response.json();
    const characterData = result.properties;

    const homeworldResponse = await fetch(characterData.homeworld);
    if (!homeworldResponse.ok) throw new Error("Failed to fetch homeworld.");

    const homeworldData = await homeworldResponse.json();
    displayCharacter(characterData, homeworldData.result.properties.name);
  } catch (error) {
    showError(" Error fetching data. Please try again.");
    console.error(error);
  }
}

button.addEventListener("click", getRandomCharacter);
