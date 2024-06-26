import { useEffect, useState } from "react";
import { getItems } from "../services/itemsServices";
import { ItemsResponse } from "../types/Responses";

export function useFetchItems(searchParams: string) {
  const [data, setData] = useState<ItemsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getItems(searchParams ?? "")
      .then(({ data }) => {
        setData(data);
      })
      .finally(() => {
        setError(false);
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, [searchParams]);

  return {
    items: data?.items,
    categories: data?.categories,
    isLoading,
    error,
  };
}
