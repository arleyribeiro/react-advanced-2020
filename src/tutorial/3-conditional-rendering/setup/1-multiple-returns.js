import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  const getUser = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetch(url);
      if (response.status >= 200 && response.status <= 299) {
        const user = await response.json();
        setUser(user.login);
      } else {
        setIsError(true);
        throw new Error(response.statusText);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h2>Error...</h2>
      </div>
    );
  }
  return (
    <>
      <h1>{user}</h1>
    </>
  );
};

export default MultipleReturns;
