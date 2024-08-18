const fs = require('fs');

// Get the JSON file path from the command-line arguments
const jsonFilePath = process.argv[2];

// Read the JSON file asynchronously
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    return;
  }

  // Parse the JSON data
  const users = JSON.parse(data);

  // Print the total number of users
  console.log(`Total number of users: ${users.length}`);

  // Find the user with the highest score and print their details
  const highestScoreUser = users.reduce((prev, current) => (prev.score > current.score ? prev : current));
  console.log('User with the highest score:', highestScoreUser);

  // Sort the users based on their scores in descending order
  users.sort((a, b) => b.score - a.score);

  // Write the sorted data back to the JSON file
  fs.writeFile(jsonFilePath, JSON.stringify(users, null, 2), (err) => {
    if (err) {
      console.error(`Error writing file: ${err}`);
      return;
    }
    console.log('Data sorted and written back to the JSON file.');
  });
});
