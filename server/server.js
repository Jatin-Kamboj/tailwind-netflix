import axios from "axios";
import express from "express";
import cors from "cors";

const app = express();

console.log("Jatin");

app.use(`/`, async (req, res) => {
  try {
    const query = req.query;

    const { data } = await axios.get(`https://www.omdbapi.com`, {
      params: {
        apikey: `b2493b42`,
        ...query,
      },
    });

    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.use(cors());
app.listen(4001, () => {
  console.log("Server is running on port 4001");
});
