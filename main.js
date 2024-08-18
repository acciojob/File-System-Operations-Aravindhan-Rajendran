const fs = require('fs'); // Import the file system module to handle file operations.

// Get the JSON file path from the command-line arguments
const jsonFilePath = process.argv[2];

if (!jsonFilePath) {
  console.error('Error: No file path provided. Please provide the path to the JSON file as a command-line argument.');
  process.exit(1); // Exit the process with an error code
}

// Read the JSON file asynchronously
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
  if (err) { // If there is an error while reading the file, handle it here.
    fs.writeFileSync('output.txt', `Error reading file: ${err}\n`);
    return; // Exit the function early if there is an error.
  }

  // Parse the JSON data from the file into a JavaScript object/array
  const users = JSON.parse(data);

  // Prepare the output data to be written to output.txt
  let output = '';

  // Print the total number of users
  output += `Total number of users: ${users.length}\n`;

  // Find the user with the highest score and print their details
  const highestScoreUser = users.reduce((prev, current) => (prev.score > current.score ? prev : current));
  output += `User with the highest score: ${JSON.stringify(highestScoreUser, null, 2)}\n`;

  // Sort the users based on their scores in descending order
  users.sort((a, b) => b.score - a.score);

  // Write the sorted data back to the JSON file
  fs.writeFile(jsonFilePath, JSON.stringify(users, null, 2), (err) => {
    if (err) { // Handle any error that might occur during the write operation.
      fs.writeFileSync('output.txt', `Error writing file: ${err}\n`);
      return;
    }
    output += 'Data sorted and written back to the JSON file.\n';

    // Write the output to output.txt
    fs.writeFileSync('output.txt', output);
  });
});