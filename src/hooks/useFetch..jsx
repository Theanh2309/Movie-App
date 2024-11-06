import { useEffect, useState } from "react";
const DEFAULT_HEADERS = {
  accept: "application/json",
  Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`,
};

export default function useFetch(
  { url = "", method = "GET", headers = {}, defaultData = {} },
  config = { enabled: true },
) {
  const [data, setData] = useState(defaultData);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    if (config.enabled) {
      try {
        setIsLoading(true);
        const res = await fetch(`${import.meta.env.VITE_API_HOST}${url}`, {
          method: method,
          headers: { ...DEFAULT_HEADERS, ...headers },
        });

        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }

        const data = await res.json();
        setData(data);
      } catch (err) {
        // console.error("Fetch error:", err);
        setData(null); // Hoặc đặt một trạng thái lỗi tùy chỉnh ở đây
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, method, JSON.stringify(headers), config.enabled]);

  return { data, isLoading };
}
