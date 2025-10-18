// src/hooks/useAuth.js
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";

export const useAuth = () => {
  return useQuery(
    ["authUser"],
    async () => {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found");

      const res = await axiosInstance.get("/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data.user; // { id, emailId, role }
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
};
