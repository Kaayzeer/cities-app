import { useState, useEffect } from "react";

import { GeoNames } from "../interfaces/GeoNames";

export const useFetch = (url: string, isCity: boolean) => {
  const [fetchedData, setFetchedData] = useState<GeoNames | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApi = () => {
      setIsLoading(true);

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.geonames.length > 0) {
            setIsLoading(false);
            setFetchedData(data);

            setError(null);
          } else if (data.geonames.length < 1) {
            setError(
              isCity
                ? "The city you searched for was not found"
                : "The country you searched for was not found"
            );
          }
        })
        .catch((err) => {
          if (fetchedData !== null) console.log(err.message);
        })
        .finally(() => setIsLoading(false));
    };

    fetchApi();
  }, [url]);

  return {
    fetchedData,
    isLoading,
    error,
  };
};
