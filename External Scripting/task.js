// Function to generate a random date between August 12, 1981, and April 27, 1982
function generateRandomDate() {
  const startDate = new Date(1981, 7, 12); // August 12, 1981
  const endDate = new Date(1982, 3, 27); // April 27, 1982

  const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
  const randomDate = new Date(randomTime);

  const month = (randomDate.getMonth() + 1).toString().padStart(2, '0'); // MM
  const day = randomDate.getDate().toString().padStart(2, '0'); // DD
  const year = randomDate.getFullYear().toString().slice(-2); // YY

  return `${month}-${day}-${year}`; // Return date in MM-DD-YY format
}

// Generate and display the random date
const randomDate = generateRandomDate();
console.log("Random Date:", randomDate);