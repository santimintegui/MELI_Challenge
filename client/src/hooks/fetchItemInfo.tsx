import { useEffect, useState } from "react";

export function useFetchItemInfo(id: string) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/api/items/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return { data: data, isLoading };
}
