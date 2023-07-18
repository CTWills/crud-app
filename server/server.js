const express = require('express');
const cors = require('cors');
const port = 8080;
const app = express();

app.use(cors());
app.use(express.json())


app.listen(port, () => console.log(`Listening on port: ${port}`));