(async () => {
  const url = 'http://localhost:4000/graphql';
  const headers = { 'Content-Type': 'application/json' };

  const doRequest = async (query, variables = {}, extraHeaders = {}) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: { ...headers, ...extraHeaders },
      body: JSON.stringify({ query, variables }),
    });
    return res.json();
  };

  try {
    console.log('Syncing dev user...');
    const syncQuery = `mutation Sync($clerkId: String!, $email: String!, $name: String) {\n  syncUser(clerkId: $clerkId, email: $email, name: $name) { id clerkId name email }\n}`;
    const syncResp = await doRequest(syncQuery, { clerkId: 'dev-user', email: 'dev@example.com', name: 'Dev User' });
    console.log('sync response:', JSON.stringify(syncResp, null, 2));

    console.log('Creating a task...');
    const createQuery = `mutation CreateOneTask($input: CreateOneTaskInput!) {\n  createOneTask(input: $input) { id title }\n}`;
    const createVars = {
      input: {
        task: {
          title: 'Test Task from bot',
          description: 'created by test script',
          priority: 'MEDIUM',
          dueDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
        }
      }
    };
    const createResp = await doRequest(createQuery, createVars, { 'x-clerk-user-id': 'dev-user' });
    console.log('create response:', JSON.stringify(createResp, null, 2));

    const taskId = createResp?.data?.createOneTask?.id;
    if (!taskId) {
      console.error('Task creation failed, aborting update step');
      process.exit(1);
    }

    console.log('Updating the task...');
    const updateQuery = `mutation UpdateOneTask($input: UpdateOneTaskInput!) {\n  updateOneTask(input: $input) { id title description }\n}`;
    const updateVars = { input: { id: taskId, update: { title: 'Updated Task Title', description: 'Updated by test script' } } };
    const updateResp = await doRequest(updateQuery, updateVars, { 'x-clerk-user-id': 'dev-user' });
    console.log('update response:', JSON.stringify(updateResp, null, 2));

    console.log('All done. If all responses contain data, create/update flows work.');
  } catch (err) {
    console.error('Script error:', err);
    process.exit(1);
  }
})();
