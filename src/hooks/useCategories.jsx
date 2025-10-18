import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

/**
 * Fetch categories for a given parent ID.
 * - If parentId is null, fetch all top-level parents.
 * - If parentId is provided, fetch only its direct children.
 */
const useCategories = (parentId = null) => {
  const axiosInstance = useAxios();

  const fetchCategories = async () => {
    const endpoint = parentId
      ? `/get-categories?parentId=${parentId}` // fetch direct children
      : `/get-categories`; // fetch top-level parents

    const { data } = await axiosInstance.get(endpoint);

    if (!data.success)
      throw new Error(data.message || "Failed to fetch categories");

    return data.data || [];
  };

  return useQuery({
    queryKey: ["categories", parentId],
    queryFn: fetchCategories,
    staleTime: 5 * 60 * 1000, // cache for 5 minutes
  });
};

export default useCategories;
