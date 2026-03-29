import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const getHeaderTemplate = async () => {
  const res = await axios.get(
    `${
      import.meta.env.BASE_URL === "/"
        ? "/htmlTemplates/header.html"
        : `${import.meta.env.BASE_URL}/htmlTemplates/header.html?`
    }`,
  );
  return res.data;
};

export const useHeaderTemplateApi = (enable: boolean) => {
  const query = useQuery({
    queryKey: ["headerTemplate"],
    queryFn: () => getHeaderTemplate(),
    enabled: enable,
    cacheTime: 24 * 60 * 60 * 1000,
    staleTime: 23 * 60 * 60 * 1000,
  });
  return query;
};
