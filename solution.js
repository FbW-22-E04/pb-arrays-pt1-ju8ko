//1
const euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
const secondCity = euroCities[1];
//2
euroCities[0] = "Berlin";
//3
console.log("length is", euroCities.length);
//4
euroCities.pop();
//5
euroCities.push("Budapest");
//6
const asianCities = ["Tokyo", "Almaty", "Shanghai", "Seoul", "Mumbai"];
//7
const worldCities = euroCities.concat(asianCities);
console.log(worldCities);
//8
console.log(worldCities.reverse());
//9
euroCities.splice(2, 1);
console.log(euroCities);
//10
const selectedCities = asianCities.slice(1, 4);
console.log("Ex.10", selectedCities);
//11
worldCities[2] = "Toronto";
console.log(worldCities);
//12
worldCities.splice(1, 0, "Washington");
console.log(worldCities);
//12
console.log(worldCities.join());
console.log(worldCities.join("+"));
//13
const string1 = "Hello world!";
console.log(string1.split("").reverse().join(""));
//Bonus exercises
const movieChar = ["Dean Winchester", "Sam Winchester"];
const parents = ["Tatyana", "Alexander"];
const mixedArray = movieChar.concat(parents);
mixedArray.unshift("Harmony", "Totoro");
console.log(mixedArray.reverse());
mixedArray[0] = "Alexander Kobzar";
console.log(mixedArray);
