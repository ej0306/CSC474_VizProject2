const express = require("express");
const fs = require("fs");
const app = express();
const port = 3001;

app.use(express.json());

app.get("/api/getCategory", (req, res) => {
  const category = req.query.category;
  const filePath = `src/json_files/${category.toLowerCase()}.json`;

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Server Error");
    }
    const jsonData = JSON.parse(data);
    const selectedCategory = jsonData.find(
      (item) => item["CATEGORY"] === category
    );
    res.json(selectedCategory);
  });
});

app.post("/api/updateParam", (req, res) => {
  const {
    category,
    paramName,
    estValue,
    minProb,
    realisticProb,
    maxProb,
    statsProb3Point,
    statsProbPert,
  } = req.body;
  const filePath = `../../json_files/${category.toLowerCase()}.json`;

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Server Error");
    }
    const jsonData = JSON.parse(data);
    const selectedParamIndex = jsonData.findIndex(
      (item) => item["PARAM NAME"] === paramName
    );

    if (selectedParamIndex === -1) {
      return res.status(400).send("Invalid parameter name");
    }

    jsonData[selectedParamIndex]["EST. VALUE IN CURRENCY"] = estValue;
    jsonData[selectedParamIndex]["MIN PROB ADJUSTED VALUE"] = minProb;
    jsonData[selectedParamIndex]["REALISTIC PROB ADJUSTED VALUE"] =
      realisticProb;
    jsonData[selectedParamIndex]["MAX PROB ADJUSTED VALUE"] = maxProb;
    jsonData[selectedParamIndex]["3 POINT BASED PROB ADJUSTED VALUE"] =
      statsProb3Point;
    jsonData[selectedParamIndex]["PERT BASED PROB ADJUSTED VALUE"] =
      statsProbPert;

    const updatedData = JSON.stringify(jsonData, null, 2);

    fs.writeFile(filePath, updatedData, "utf8", (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Server Error");
      }

      res.sendStatus(200);
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
