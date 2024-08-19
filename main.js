
// const fs = require('fs');

// const jsonFilePath = process.argv[2];

// fs.readFile(jsonFilePath, 'utf8', (err, data) => {
//   if (err) {
//     console.error(`Error reading file: ${err}`);
//     return;
//   }

//   const users = JSON.parse(data);

//   // TODO: Perform the required operations on the users data

//   // Print the total number of users
//   console.log(`Total number of users: ${users.length}`);

//   // Find the user with the highest score and print their details
//   const highestScoreUser = users.reduce((prev, current) => (prev.score > current.score ? prev : current));
//   console.log('User with the highest score:', highestScoreUser);

//   // Sort the users based on their scores in descending order
//   users.sort((a, b) => b.score - a.score);

//   // Write the sorted data back to the JSON file
//   fs.writeFile(jsonFilePath, JSON.stringify(users, null, 2), (err) => {
//     if (err) {
//       console.error(`Error writing file: ${err}`);
//       return;
//     }
//     console.log('Data sorted and written back to the JSON file.');
//   });
// });

const fs = require("fs");

// Read and parse JSON file
const jsonContent = fs.readFileSync("users.json", "utf8");
const users = JSON.parse(jsonContent);

// Calculate and print the total number of users
const totalUsers = users.length;
console.log(`Total number of users: ${totalUsers}`);

// Find and print the user with the highest score
let maxScoreUser = users[0];
users.forEach((user) => {
  if (user.score > maxScoreUser.score) {
    maxScoreUser = user;
  }
});
console.log(`User with highest score: ${JSON.stringify(maxScoreUser)}`);

// Sort users based on their scores in descending order
users.sort((a, b) => b.score - a.score);

// Write sorted data back to JSON file
const sortedData = JSON.stringify(users, null, 2);
fs.writeFileSync("users.json", sortedData);
