import { readFile, writeFile } from "./fileManager.js";

const content = readFile("Hello World.txt");
console.log("Content of Hello World.txt:", content);

writeFile("Bye World.txt", "Writing to the file");
writeFile("Hello World.txt" , "That read for it")
