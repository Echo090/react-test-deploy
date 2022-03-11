import React, {useState, useEffect} from "react";

const Button = (props) => {
  //   let clickCount = 0;
  const [currentCount, setCurrentCount] = useState(0);

  const clickFunction = () => {
    setCurrentCount(currentCount + props.incrementBy);
  };

  useEffect(() => {
    if (currentCount === 10) {
      setCurrentCount(0);
    }
  }, [currentCount]);

  return (
    <div>
      <button onClick={clickFunction}>CLICK ME</button>
      <div>{currentCount}</div>
    </div>
  );
};

export default Button;
