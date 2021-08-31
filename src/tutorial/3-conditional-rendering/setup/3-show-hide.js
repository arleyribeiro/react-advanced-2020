import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <h2>show/hide</h2>
      <button className="btn" onClick={() => setIsShow(!isShow)}>
        Show component
      </button>
      {isShow && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>window</h1>
      <h2>size: {size}px</h2>
    </div>
  );
};

export default ShowHide;
