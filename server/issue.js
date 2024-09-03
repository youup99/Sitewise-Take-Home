class Issue {
  constructor(id, title, description) {
    this.id = id;
    this.title = title || `Issue #${id}`;
    this.description = description || `This is Issue #${id}`;
  }
}

// Limiting our mock DB to contain 10 issues
const tenRandomIssues = () => {
  let issues = [];
  for (let i = 1; i <= 10; i++) {
    issues.push(new Issue(i));
  }

  return issues;
};

let issues = tenRandomIssues();

export const getRandomIssue = () => {
  return issues[Math.floor(Math.random() * 10) + 1];
};

export const getAllIssues = () => {
  return issues;
};

export const getIssueById = (issueId) => {
  return new Issue(issueId);
};

export const createIssue = (requestBody) => {
  issues.push(
    new Issue(requestBody.id, requestBody.title, requestBody.description)
  );

  console.log(issues);
};

export const updateIssue = (id, requestBody) => {
  issues.map((issue) => {
    if (issue.id == id) {
      issue.title = requestBody.title;
      issue.description = requestBody.description;
    }

    return issue;
  });

  console.log(issues);
};

export const deleteIssue = (id) => {
  issues = issues.filter((issue) => issue.id != id);

  console.log(issues);
};
