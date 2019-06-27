import React from 'react';
import ListItem from './ListItem';

const List = ({ items, incrementItem, decrementItem, selectedFilter }) => {

  const itemElements = items.filter( item => {
    if (selectedFilter === 'all') {
      return true
    } else {
      return (item.type === selectedFilter)
    }
    }).map((item, i) => (
      <ListItem
        key={i}
        item={item}
        onIncrementClick={() => incrementItem(i)}
        onDecrementClick={() => decrementItem(i)}
      />)
  );

  return (
    <ul id="shoppingList" className="shoppinglist">
      { itemElements }
    </ul>
  );
};

export default List;
