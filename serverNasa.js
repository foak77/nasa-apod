const express = require("express");
const app = express();

app.use(express.static(`${__dirname}/`));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(3015, () => {
  console.log(`Server Video Running on 3015`);
});
