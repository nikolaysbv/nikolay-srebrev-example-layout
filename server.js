const express = require("express");
const app = express();

app.get("*", (req, res) => {
  res.send("Hi!");
});

// uncomment after build
// const __dirname = dirname(fileURLToPath(import.meta.url));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
// });

app.listen(5000, () => {
  console.log(`Server is listening on port 5000...`);
});
