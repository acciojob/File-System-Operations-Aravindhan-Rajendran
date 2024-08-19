const fs = require('fs');

// File path for the JSON file
const filePath = './users.json';

// Function to read the JSON data
function readJSONData() {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

// Function to write the JSON data back to the file
function writeJSONData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

// Function to process the data (e.g., adding a new user)
function processUserData(users) {
  // Example: Add a new user
  const newUser = {
    id: 3,
    name: 'Charlie',
    age: 28,
    email: 'charlie@example.com'
  };
  users.push(newUser);

  // You can perform other operations like updating or deleting users here
  return users;
}

// Main function
function main() {
  try {
    // Read the existing user data
    const users = readJSONData();

    // Process the data
    const updatedUsers = processUserData(users);

    // Write the updated data back to the file
    writeJSONData(updatedUsers);

    console.log('User data has been updated successfully.');
  } catch (error) {
    console.error('Error processing JSON data:', error);
  }
}

// Run the main function
main();
