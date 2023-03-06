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

app.get("/users/:id", (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id === id) ?? null;

  res.json(user);
});

app.get("/users/company/:id", (req, res) => {
  const { id } = req.params;

  const user = users.filter((user) => user.companyId.toString() === id) ?? null;

  res.json(user);
});

app.get("/companies", (req, res) => {
  res.json(companies);
});

app.get("/companies/:id", (req, res) => {
  const { id } = req.params;

  const company =
    companies.find((company) => company.id.toString() === id) ?? null;

  res.json(company);
});

app.listen(port, () => {
  console.log(`🎯 Server ready at http://localhost:${port}/`);
});
