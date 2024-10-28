import { useEffect, useState } from "react";
const DEFAULT_HEADERS = {
  accept: "application/json",
  Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`,
};

export default function useFetch({
  url = "",
  method = "GET",
  headers = {},
  defaultData = {},
}) {
  const [data, setData] = useState(defaultData);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    setIsLoading(true);
    const res = await fetch(`${import.meta.env.VITE_API_HOST}${url}`, {
      method: method,
      headers: { ...DEFAULT_HEADERS, ...headers },
    });
    const data = await res.json();
    setData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [url, method, JSON.stringify(headers)]);

  return { data, isLoading };
}
