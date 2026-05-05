(async () => {
  const url = 'http://localhost:4000/graphql';
  const headers = { 'Content-Type': 'application/json', 'x-clerk-user-id': 'dev-user' };
  const doRequest = async (query, variables = {}) => {
    const res = await fetch(url, { method: 'POST', headers, body: JSON.stringify({ query, variables }) });
    return res.json();
  };

  const createQ = `mutation CreateOneTask($input: CreateOneTaskInput!) { createOneTask(input: $input) { id title } }`;

  const shapes = [
    { title: 'flat', vars: { input: { title: 'UI flat task', description: 'flat' , dueDate: new Date().toISOString() } } },
    { title: 'nested task', vars: { input: { task: { title: 'UI nested task', description: 'nested', dueDate: new Date().toISOString() } } } },
    { title: 'nested task.input', vars: { input: { task: { input: { title: 'UI nested input task', description: 'nested input', dueDate: new Date().toISOString() } } } } },
    { title: 'double input', vars: { input: { input: { title: 'UI double input', description: 'double', dueDate: new Date().toISOString() } } } },
  ];

  for (const s of shapes) {
    console.log('Testing shape:', s.title);
    const res = await doRequest(createQ, s.vars.input ? s.vars : s.vars);
    console.log(JSON.stringify(res, null, 2));
  }
})();
