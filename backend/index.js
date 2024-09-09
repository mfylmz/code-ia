const express = require('express');
const cors = require('cors');
const questionsRouter = require('./routes/questions');
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 5000; 

app.use(cors());
app.use(express.json());

app.use('/api/questions', questionsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
