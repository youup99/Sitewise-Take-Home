import React, { useState } from "react";
import "./App.css";

function App() {
  const [issue, setIssue] = useState([]);

  const createIssueBody = {
    id: 11,
    title: "Issue #11",
    description: "This is Issue #11",
  };

  const updateIssueBody = {
    title: "Updated Issue #2",
    description: "I have updated Issue #2",
  };

  const createIssue = async () => {
    await fetch("/issues", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createIssueBody),
    })
      .then((res) => res.json())
      .then((message) => console.log(message));
  };

  const displayIssue = async () => {
    await fetch("/issues")
      .then((res) => res.json())
      .then((issue) => {
        console.log(issue);
        setIssue(JSON.stringify(issue));
      });
  };

  const updateIssue = async () => {
    await fetch("/issues/2", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateIssueBody),
    })
      .then((res) => res.json())
      .then((message) => console.log(message));
  };

  const deleteIssue = async () => {
    await fetch("/issues/1", {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((message) => console.log(message));
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={createIssue}>Create Issue</button>
        <button onClick={displayIssue}>Display Issue</button>
        <button onClick={updateIssue}>Update Issue</button>
        <button onClick={deleteIssue}>Delete Issue</button>
        <p>{!issue ? "Loading..." : issue}</p>
      </header>
    </div>
  );
}

export default App;
