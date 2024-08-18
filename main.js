const fs = require('fs');

// Get the JSON file path from the command-line arguments
const jsonFilePath = process.argv[2];

if (!jsonFilePath) {
  console.error('Error: No JSON file path provided.');
  process.exit(1);
}

// Read the JSON file asynchronously
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    process.exit(1);
  }

  // Parse the JSON data
  let users;
  try {
    users = JSON.parse(data);
  } catch (parseError) {
    console.error(`Error parsing JSON data: ${parseError}`);
    process.exit(1);
  }

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
      process.exit(1);
    }
    console.log('Data sorted and written back to the JSON file.');
  });
});