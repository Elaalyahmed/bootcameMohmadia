const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];
 
// const usernames = [];
// gameInfo.forEach((user) => usernames.push(user.username + "!"))
// console.log(usernames);

const newArray = [];
gameInfo.forEach((player) => {
    if (player.score > 5){
        newArray.push(player.username)
    }
});
console.log(newArray)

let totalScore = 0;
gameInfo.forEach((player) =>{
    totalScore += player.score
});
console.log( "Total score is ", totalScore);
