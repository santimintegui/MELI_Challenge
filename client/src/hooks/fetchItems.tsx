import { useCallback, useEffect, useState } from "react";

export function useFetchItems(searchParams: string) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchItems = useCallback(async () => {
    const response = await fetch(
      `http://localhost:3000/api/items?q=${searchParams}`
    );
    const { data } = await response.json();
    setItems(data.items.splice(0, 4));
    setIsLoading(false);
  }, [searchParams]);

  useEffect(() => {
    fetchItems();
  }, [searchParams]);

  return { items, isLoading };
}
