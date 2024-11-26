const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 4001;

app.use(cors());

app.get("/proxy", async (req, res) => {
  try {
    const response = await axios.get("https://api.hercules.exchange/v2/tokens");
    res.json(response.data);
  } catch (error) {
    res
      .status(error.response ? error.response.status : 500)
      .send("Error fetching data");
  }
});

app.listen(PORT, () => {
  console.log(`CORS Proxy running on http://localhost:${PORT}`);
});
