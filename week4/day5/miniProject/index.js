const robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image: 'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image: 'https://robohash.org/10?200x200'
    },
    {
        id : 11,
        name:'Jhon Falocastry',
        email:'mood.charlokafin@din.io',
        image:'https://robohash.org/07S.png?set=set2'
    },
    {
        id : 12,
        name : 'Samouile Frungoto',
        email : 'jotankan@frk.biz',
        image : 'https://robohash.org/UU7.png?set=set2'
    },
    {
        id : 13,
        name : 'Samfile Trunbo',
        email : 'foankal@frk.biz',
        image : 'https://robohash.org/.png?set=set4'
    },
    {
        id:14,
        name : 'chtmoul tonojal',
        email : 'tonchat@forg.org',
        image: 'https://robohash.org/EZ7.png?set=set4'
    },
    {
        id : 15,
        name :'frankchat@tong.org',
        email : 'charlote@forg.fr',
        image : 'https://robohash.org/ZKR.png?set=set4'

    },
    {
        id : 16,
        name: 'Gonk frunkjo',
        email : 'tsomarilegade@test.fr',
        image : 'https://robohash.org/T9W.png?set=set4'
    },
     {
        id : 17,
        name: 'Donch Trunkjo',
        email : 'Frinklegade@test.org',
        image : 'https://robohash.org/EZA.png?set=set3'
    },
    {
        id : 18,
        name: 'Bunke Trunkho',
        email : 'Trinklegade@waly.org',
        image : 'https://robohash.org/U15.png?set=set3'
    }

];
const robotCardsContainer = document.getElementById("robotCards");

function displayRobots(robotArray) {
    robotCardsContainer.innerHTML = "";
    robotArray.forEach(robot => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${robot.image}" alt="${robot.name}">
            <h3>${robot.name}</h3>
            <p>${robot.email}</p>
        `;
        robotCardsContainer.appendChild(card);
    });
}

displayRobots(robots);
const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("input", () => {
    const searchTerm = searchBox.value.toLowerCase();
    const filteredRobots = robots.filter(robot =>
        robot.name.toLowerCase().includes(searchTerm)
    );
    displayRobots(filteredRobots);
});