import './CardItem.css';

import { useEffect, useState } from 'react';

const CardItem = ({ item, addSubTotal, level = 0 }) => {
  const [subTotal, setSubTotal] = useState({}); // State for managing the Accumulated Sub Total Price of nested Card Items
  const [displayChildren, setDisplayChildren] = useState({}); // State for managing the display of nested Card Items only when Parent Card Item is Checked

  // Function to calculate the Sub Total Price of nested Card Items
  const total = (subTotal) =>
    Object.values(subTotal).reduce((total, current) => total + current, 0);

  // Function to clear the nested Card Items when a Card Item is unchecked
  const clearChildren = (id, level) =>
    Object.keys(subTotal)
      .filter((key) => key.charAt(level) === `${id}`.charAt(level))
      .forEach((key) =>
        setSubTotal((subTotal) => ({
          ...subTotal,
          [key]: 0,
        }))
      );

  useEffect(() => {
    // For each instance of nested Card Item, the Sub Total Price is lifted to the Parent Card Item on each render
    addSubTotal((sub) => ({
      ...sub,
      [item.id]: total(subTotal),
    }));
  }, [addSubTotal, item.id, subTotal]);

  return (
    <li>
      <label>
        <input
          type="checkbox"
          // Change Event Handler for the input checkbox of Card Item
          onChange={(e) => {
            // Toggle the display of nested Card Items
            setDisplayChildren({
              ...displayChildren,
              [item.id]: !displayChildren[item.id],
            });

            // When the Card Item is checked the price is stored in the state otherwise the price is cleared from the state
            e.target.checked
              ? setSubTotal((subTotal) => ({
                  ...subTotal,
                  [item.id]: +e.target.value,
                }))
              : clearChildren(item.id, level);
          }}
          // Storing the price on each value attribute of Card Item checkbox
          value={item.value || 0}
          id={item.id}
        />
        {item.name}{' '}
        {item.value ? `($${item.value})` : total(subTotal) ? `($${total(subTotal)})` : `(-)`}
      </label>{' '}
      <ul>
        {
          // Recursion of Card Item Component if it is checked and has nested Card Items
          displayChildren[item.id] &&
            item.items?.map((item) => (
              <CardItem key={item.id} item={item} addSubTotal={setSubTotal} level={level + 1} />
            ))
        }
      </ul>
    </li>
  );
};

export default CardItem;
