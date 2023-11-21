const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());
app.use(express.json());

let tasks = [{ id: 1, value: "Task 1", checked: false }];

app.get("/test", (req, res) => {
  res.json({ message: "test" });
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
