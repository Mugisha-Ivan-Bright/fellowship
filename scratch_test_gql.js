
async function testGraphQL() {
  const query = `
    query DashboardTotalCounts {
      dashboardStats {
        totalMembers
        activeMembers
        totalIgihande
        attendanceRate
        newThisMonth
      }
    }
  `;

  try {
    const response = await fetch("http://localhost:4000/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const result = await response.json();
    console.log("GraphQL Response:", JSON.stringify(result, null, 2));
  } catch (error) {
    console.error("Fetch Error:", error);
  }
}

testGraphQL();
