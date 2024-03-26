import { useEffect, useState } from "react";

export function useFetchItems(searchParams: string) {
  const [data, setData] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/api/items?q=${searchParams}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .finally(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        setError(true);
      });
  }, [searchParams]);

  return { data, isLoading, error };
}
