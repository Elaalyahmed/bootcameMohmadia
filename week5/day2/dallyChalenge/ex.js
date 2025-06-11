const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const form = document.getElementById("gif-form");
const input = document.getElementById("category-input");
const gifContainer = document.getElementById("gif-container");
const deleteAllBtn = document.getElementById("delete-all");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const category = input.value.trim();
  if (category === "") return;

  const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${encodeURIComponent(category)}`;

  try {
    const response = await fetch(url);
    const result = await response.json();
    const gifUrl = result.data?.images?.downsized_medium?.url;

    if (gifUrl) {
      const wrapper = document.createElement("div");
      wrapper.className = "gif-wrapper";

      const img = document.createElement("img");
      img.src = gifUrl;
      img.alt = category;

      const delBtn = document.createElement("button");
      delBtn.textContent = "DELETE";
      delBtn.addEventListener("click", () => {
        wrapper.remove();
      });

      wrapper.appendChild(img);
      wrapper.appendChild(delBtn);
      gifContainer.appendChild(wrapper);
    } else {
      alert("No GIF found for this category.");
    }
  } catch (error) {
    console.error("Error fetching GIF:", error);
  }

  input.value = "";
});

deleteAllBtn.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});
