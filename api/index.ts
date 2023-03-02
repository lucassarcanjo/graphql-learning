import express from "express";
import users from "./database/users.json";
import companies from "./database/companies.json";

const app = express();
const port = process.env.PORT || 3005;

app.get("/", (req, res) => {
  res.send("Alive");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/companies", (req, res) => {
  res.json(companies);
});

app.listen(port, () => {
  console.log(`Server running on port ${port} ⚡️`);
});
