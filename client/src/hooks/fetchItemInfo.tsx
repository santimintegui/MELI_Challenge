import { useEffect, useState } from "react";
import { getItemById } from "../services/getItemById";
import { ItemByIdResponse } from "../types/Responses";

export function useFetchItemInfo(id: string) {
  const [data, setData] = useState<ItemByIdResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getItemById(id)
      .then(({ data }) => {
        setData(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return { item: data?.item, isLoading };
}
