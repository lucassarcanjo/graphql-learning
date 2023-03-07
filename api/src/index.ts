import express from "express";
import { countRequests } from "./middleware/request";
import users from "./data/users.json";
import companies from "./data/companies.json";

const app = express();
const port = process.env.PORT || 3005;

/**
 * Middleware to show the request count in the console without flooding it
 */
app.use(countRequests());

app.get("/info", (req, res) => {
  res.send("Healthy");
});

app.get("/users", (req, res) => {
  const { ids } = req.query;

  if (ids) {
    const idList = ids.toString().split(",");
    const filteredUsers = users.filter((user) =>
      idList.includes(user.id.toString())
    );

    return res.json(filteredUsers);
  }

  res.json(users);
});

app.get("/users/company", (req, res) => {
  const { ids } = req.query;

  if (ids) {
    const idList = ids.toString().split(",");

    const filteredUsers = users.reduce((acc, user) => {
      const companyId = idList.find((id) => user.companyId.toString() === id);

      if (companyId !== undefined) {
        if (acc.has(companyId)) {
          const users = acc.get(companyId);
          users!.push(user);
          acc.set(companyId, users);
        } else {
          acc.set(companyId, [user]);
        }
      }
      return acc;
    }, new Map());

    return res.json(Array.from(filteredUsers).map(([, users]) => users));
  }

  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id === id) ?? null;

  res.json(user);
});

app.get("/companies", (req, res) => {
  const { ids } = req.query;

  if (ids) {
    const idList = ids.toString().split(",");
    const filteredCompanies = companies.filter((company) =>
      idList.includes(company.id.toString())
    );

    return res.json(filteredCompanies);
  }

  res.json(companies);
});

app.get("/companies/:id", (req, res) => {
  const { id } = req.params;

  const company =
    companies.find((company) => company.id.toString() === id) ?? null;

  res.json(company);
});

app.listen(port, () => {
  console.log(`🎯 API is ready at http://localhost:${port}/\n`);
});
