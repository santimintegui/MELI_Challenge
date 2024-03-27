import { useEffect, useState } from "react";
import { getItemById } from "../services/itemsServices";
import { ItemByIdResponse } from "../types/Responses";

export function useFetchItemInfo(id: string) {
  const [data, setData] = useState<ItemByIdResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getItemById(id)
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
  }, [id]);

  return { item: data?.item, categories: data?.categories, isLoading, error };
}
