import { useEffect, useState } from "react";

export function useFetchCategoryBreacumb(id: string) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/api/categories/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return { data, isLoading };
}
