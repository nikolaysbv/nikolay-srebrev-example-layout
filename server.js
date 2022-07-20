import express from "express";
const app = express();

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

import data from "./data/mock-data.js";

app.get("/api/v1/cards", (req, res) => {
  res.status(200).json(data);
});

app.get("*", (req, res) => {
  res.send("Hi!");
});

// uncomment after build
// const dir = dirname(fileURLToPath(import.meta.url));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(dir, "./client/build", "index.html"));
// });

app.listen(5000, () => {
  console.log(`Server is listening on port 5000...`);
});
