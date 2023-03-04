import express from "express";
import users from "./data/users.json";
import companies from "./data/companies.json";

const app = express();
const port = process.env.PORT || 3005;

app.get("/info", (req, res) => {
  res.send("Healthy");
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
