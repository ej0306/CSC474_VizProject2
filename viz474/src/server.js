const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());

const jsonPath = "./";
const jsonMap = {
  strength: "strength.json",
  weakness: "weakness.json",
  opportunity: "opportunity.json",
  threat: "threat.json",
};

app.post("/update-json/:category", (req, res) => {
  // Parse the JSON data from the request body
  const updatedData = req.body;

  // Get the filename based on the selected category
  const category = req.params.category;
  const filename = jsonMap[category];

  // Read the existing JSON file
  const rawData = fs.readFileSync(`${jsonPath}${filename}`);
  const jsonData = JSON.parse(rawData);

  // Update the data in the JSON file
  // This assumes that the data is an array of objects with a unique 'Sl #' property
  updatedData.forEach((updatedObj) => {
    const index = jsonData.findIndex(
      (obj) => obj["Sl #"] === updatedObj["Sl #"]
    );
    if (index !== -1) {
      jsonData[index] = updatedObj;
    }
  });

  // Write the updated JSON data back to the file
  fs.writeFileSync(`${jsonPath}${filename}`, JSON.stringify(jsonData));

  // Send a response indicating success
  res.json({ success: true });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
