import React from 'react';

const FilterItem = ({ filter, id, onClick }) => {
  const { name, value } = filter;
  const handleClick = (e) => {
    onClick(e.target.value);
  }

  return (
    <li>
      <input type="radio" name="category" value={ value } id={ "filter" + id } onClick={handleClick}/>
      <label htmlFor={ "filter" + id }>{ name }</label>
    </li>
  );
};

export default FilterItem;
