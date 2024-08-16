import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // flag to check if the component is still mounted
    setLoading(true); // set loading to true when fetching starts
    setError(null); // reset error before fetching

    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((response) => response.json())
      .then((res) => {
        if (isMounted) {
          setData(res[currency]);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false; // set flag to false on cleanup
    };
  }, [currency]);

  return { data, loading, error };
}

export default useCurrencyInfo;
