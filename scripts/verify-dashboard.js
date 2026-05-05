(async () => {
  const url = 'http://localhost:4000/graphql';
  const headers = { 'Content-Type': 'application/json' };
  const authHeaders = { 'x-clerk-user-id': 'dev-user' };

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

    console.log('\nCreating an Igihande (group)...');
    const createIgihandeQ = `mutation CreateOneIgihande($name: String!) { createOneIgihande(name: $name) { id name } }`;
    const igihandeResp = await doRequest(createIgihandeQ, { name: 'Test Group' }, authHeaders);
    console.log('igihande response:', JSON.stringify(igihandeResp, null, 2));
    const igihandeId = igihandeResp?.data?.createOneIgihande?.id;

    console.log('\nCreating a Member...');
    const createMemberQ = `mutation CreateOneMember($input: CreateOneMemberInput!) { createOneMember(input: $input) { id membershipNo firstName lastName igihande { id name } } }`;
    const memberVars = {
      input: {
        membershipNo: `M-${Date.now()}`,
        firstName: 'Test',
        lastName: 'Member',
        nationalId: `${Date.now()}`.slice(-10),
        phone: '250700000000',
        gender: 'MALE',
        maritalStatus: 'SINGLE',
        province: 'Kigali',
        district: 'Gasabo',
        sector: 'Kacyiru',
        cell: 'Cell',
        village: 'Village',
        igihandeId: igihandeId || null,
      }
    };
    const memberResp = await doRequest(createMemberQ, memberVars, authHeaders);
    console.log('member response:', JSON.stringify(memberResp, null, 2));
    const memberId = memberResp?.data?.createOneMember?.id;

    console.log('\nCreating a Service...');
    const createServiceQ = `mutation CreateOneService($input: CreateOneServiceInput!) { createOneService(input: $input) { id date type title } }`;
    const serviceVars = { input: { type: 'SUNDAY', title: 'Test Service', date: new Date().toISOString() } };
    const serviceResp = await doRequest(createServiceQ, serviceVars, authHeaders);
    console.log('service response:', JSON.stringify(serviceResp, null, 2));
    const serviceId = serviceResp?.data?.createOneService?.id;

    if (serviceId && memberId) {
      console.log('\nRecording attendance...');
      const attendanceQ = `mutation RecordAttendance($serviceId: ID!, $records: [AttendanceRecord!]!) { recordAttendance(serviceId: $serviceId, records: $records) { id present member { id firstName } } }`;
      const attendResp = await doRequest(attendanceQ, { serviceId, records: [{ memberId, present: true, notes: 'Present' }] }, authHeaders);
      console.log('attendance response:', JSON.stringify(attendResp, null, 2));
    } else {
      console.log('Skipping attendance (missing service or member)');
    }

    if (memberId) {
      console.log('\nCreating a Dedication...');
      const dedQ = `mutation CreateOneDedication($input: CreateOneDedicationInput!) { createOneDedication(input: $input) { id type date member { id firstName } } }`;
      const dedVars = { input: { memberId, type: 'TITHE', description: 'Test tithe', date: new Date().toISOString() } };
      const dedResp = await doRequest(dedQ, dedVars, authHeaders);
      console.log('dedication response:', JSON.stringify(dedResp, null, 2));
    }

    console.log('\nCreating a Task...');
    const createTaskQ = `mutation CreateOneTask($input: CreateOneTaskInput!) { createOneTask(input: $input) { id title stageId priority } }`;
    const createTaskVars = { input: { task: { title: 'Dashboard Test Task', description: 'From dashboard test script', priority: 'LOW', dueDate: new Date(Date.now() + 86400000).toISOString() } } };
    const createTaskResp = await doRequest(createTaskQ, createTaskVars, authHeaders);
    console.log('createTask response:', JSON.stringify(createTaskResp, null, 2));
    const taskId = createTaskResp?.data?.createOneTask?.id;

    if (taskId) {
      console.log('\nUpdating the Task...');
      const updateTaskQ = `mutation UpdateOneTask($input: UpdateOneTaskInput!) { updateOneTask(input: $input) { id title description stageId } }`;
      const updateVars = { input: { id: taskId, update: { title: 'Updated Dashboard Task', description: 'Updated by dashboard test' } } };
      const updateResp = await doRequest(updateTaskQ, updateVars, authHeaders);
      console.log('updateTask response:', JSON.stringify(updateResp, null, 2));

      console.log('\nDeleting the Task to clean up...');
      const deleteQ = `mutation DeleteTask($id: ID!) { deleteTask(id: $id) }`;
      const deleteResp = await doRequest(deleteQ, { id: taskId }, authHeaders);
      console.log('deleteTask response:', JSON.stringify(deleteResp, null, 2));
    }

    console.log('\nQuerying Dashboard Stats...');
    const statsQ = `query DashboardStats { dashboardStats { totalMembers activeMembers inactiveMembers newThisMonth totalIgihande attendanceRate } }`;
    const statsResp = await doRequest(statsQ, {}, authHeaders);
    console.log('dashboardStats response:', JSON.stringify(statsResp, null, 2));

    console.log('\nListing members and igihandes (sanity)...');
    const membersQ = `query Members($paging: OffsetPaging) { members(paging: $paging) { totalCount nodes { id firstName lastName } } }`;
    const membersResp = await doRequest(membersQ, { paging: { limit: 10, offset: 0 } }, authHeaders);
    console.log('members list response:', JSON.stringify(membersResp, null, 2));

    const igihandesQ = `query Igihandes($paging: OffsetPaging) { igihandes(paging: $paging) { totalCount nodes { id name } } }`;
    const igResp = await doRequest(igihandesQ, { paging: { limit: 10, offset: 0 } }, authHeaders);
    console.log('igihandes list response:', JSON.stringify(igResp, null, 2));

    console.log('\nDashboard flow tests complete. If responses above contain data objects (and no GraphQL errors), dashboard create/edit flows are working.');
  } catch (err) {
    console.error('Script error:', err);
    process.exit(1);
  }
})();
