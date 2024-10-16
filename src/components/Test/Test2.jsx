import { useState } from "react";
import Test3 from "./Test3";

const Test2 = () => {
  const arr = [
    { id: "1", title: "viec 1" },
    { id: "2", title: "viec 2" },
  ];
  const [itemClick, setItemClick] = useState({});

  const handleClickItem = (item) => {
    setItemClick({ item });
  };
  // console.log({ itemClick });
  return (
    <div>
      {arr.map((item) => {
        return (
          <div key={item.id}>
            <h1 onClick={() => handleClickItem(item)}>{item.title}</h1>
          </div>
        );
      })}
      <Test3 itemClick={itemClick} />;
    </div>
  );
};
export default Test2;
