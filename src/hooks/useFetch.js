import React, {useState, useEffect} from 'react';

const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchDataAPI = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const dataJson = await res.json();
      setData(dataJson);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  useEffect(() => {
    fetchDataAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return {data, loading, error};
};

export default useFetch;
