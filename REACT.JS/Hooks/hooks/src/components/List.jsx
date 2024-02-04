import { useState, useEffect } from "react";

const List = ({ getItems }) => {
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    setMyItems(getItems);
    console.log("Resgatando dados do DB");
  }, [getItems]);

  return (
    <div>
      <h3>List</h3>
      {myItems && myItems.map((e) => <p key={e}>{e}</p>)}
    </div>
  );
};

export default List;
