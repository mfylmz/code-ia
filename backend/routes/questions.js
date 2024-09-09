
const express = require("express");
const router = express.Router();
const db = require("../db");


router.get("/", (req, res) => {
  const { language, difficulty, excludedIds } = req.query;
  const excludedIdsArray = excludedIds
    ? excludedIds.split(",").map(Number)
    : [];
  const query = `
    SELECT * FROM questions 
    WHERE language = ? AND difficulty = ? 
    ${
      excludedIdsArray.length
        ? `AND id NOT IN (${excludedIdsArray.join(",")})`
        : ""
    }
    ORDER BY RAND() 
    LIMIT 10;
  `;

  db.query(query, [language, difficulty], (err, results) => {
    if (err) {
      console.error("Error fetching questions:", err);
      res.status(500).json({ error: "Failed to fetch questions" });
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
