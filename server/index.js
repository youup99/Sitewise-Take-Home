import express from "express";
import bodyParser from "body-parser";
import {
  createIssue,
  deleteIssue,
  getAllIssues,
  getIssueById,
  getRandomIssue,
  updateIssue,
} from "./issue.js";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());

// Get all issues
// app.get("/issues", (req, res) => {
//   const allIssues = getAllIssues();
//   console.log(allIssues);
//   res.json(allIssues);
// });

// Get issue by ID
app.get("/issues", (req, res) => {
  const issue = getRandomIssue();
  console.log(issue);
  res.json(issue);
});

// Create new issue
app.post("/issues", (req, res) => {
  const requestBody = req.body;
  console.log(requestBody);

  createIssue(requestBody);
  res.json({ message: "Issue created!" });
});

// Update existing issue
app.patch("/issues/:issueId", (req, res) => {
  const requestBody = req.body;
  const id = req.params["issueId"];
  console.log(requestBody);
  console.log("Issue to update: " + id);

  updateIssue(id, requestBody);
  res.json({ message: "Issue updated!" });
});

// Delete existing issue
app.delete("/issues/:issueId", (req, res) => {
  const id = req.params["issueId"];
  console.log("Issue to delete: " + id);

  deleteIssue(id);
  res.json({ message: "Issue deleted!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
