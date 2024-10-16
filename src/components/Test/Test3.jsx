import { useEffect, useState } from "react";

const Test3 = ({ itemClick }) => {
  const [itemClickTest3, setItemClickTest] = useState(itemClick);
  // Mounting: Khi Test3 được mount lần đầu, useState(itemClick) sẽ khởi tạo itemClickTest3 với giá trị hiện tại của itemClick.
  //Re-rendering: Khi itemClick thay đổi trong Test2, Test3 sẽ re-render, nhưng useState không khởi tạo lại itemClickTest3. Nó chỉ khởi tạo một lần khi component được mount.
  //Đó là lý do tại sao bạn cần useEffect để cập nhật itemClickTest3 mỗi khi itemClick thay đổi. useEffect sẽ đảm bảo rằng itemClickTest3 luôn đồng bộ với itemClick.

  console.log({ itemClickTest3 });
  useEffect(() => {
    setItemClickTest(itemClick);
  }, [itemClick]);

  return <div>Test3</div>;
};
// nhung tac vu side Effect: callApi, setState nen dung useEffect hoac evethandler
// ?neu ko viet dc nhung tach vu trong evenhandler thi viet trong useEffcect
export default Test3;
