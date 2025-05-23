const listP = document.querySelector('.listPlanets');

const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
const colours = ["#a9a9a9", "#d4af37", "#2e8b57", "#b22222", "#d2b48c", "#deb887", "#afeeee", "#4169e1",
];



planets.forEach((planet, idx) => {
    const div = document.createElement('div');
    div.classList.add('planet');
    div.textContent = planet;
    div.style.backgroundColor = colours[idx]; 
    listP.appendChild(div)

})
for (let planet in planets) {
    const element = document.querySelector('.planet')
    if (element) {
        div.style.backgroundColor = planet.color;
    }

}
