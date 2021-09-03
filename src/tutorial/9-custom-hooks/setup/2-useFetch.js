import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const products = await response.json();
    setData(products);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [url]);
  console.log(data);
  return { loading, products: data };
};
