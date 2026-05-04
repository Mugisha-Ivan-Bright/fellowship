import type { AccessControlProvider } from "@refinedev/core";

export const accessControlProvider: AccessControlProvider = {
  can: async ({ resource, action }) => {
    // For now, we mock the role from localStorage or default to PASTOR for testing
    // In a real app, this would come from the authProvider's getIdentity or Clerk metadata
    const role = localStorage.getItem("user_role") || "PASTOR";

    if (role === "PASTOR") {
      return { can: true };
    }

    if (role === "SECRETARY") {
      if (resource === "members" && action === "delete") {
        return {
          can: false,
          reason: "Secretaries cannot delete members",
        };
      }
      return { can: true };
    }

    if (role === "COMMITTEE") {
      if (action === "list" || action === "show") {
        return { can: true };
      }
      if (resource === "tasks") {
        return { can: true }; // Committee can manage their own tasks
      }
      return {
        can: false,
        reason: "Committee members have read-only access",
      };
    }

    if (role === "IGIHANDE_LEADER") {
      if (resource === "tasks") return { can: true };
      if (resource === "attendance" && (action === "list" || action === "create")) return { can: true };
      if (resource === "igihande" && (action === "list" || action === "show")) return { can: true };
      if (resource === "members" && (action === "list" || action === "show")) return { can: true };
      
      return {
        can: false,
        reason: "Igihande leaders have restricted access",
      };
    }

    return { can: true };
  },
  options: {
    buttons: {
      enableAccessControl: true,
      hideIfUnauthorized: true,
    },
  },
};
