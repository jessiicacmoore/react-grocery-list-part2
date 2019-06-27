import React from 'react';

const FilterItem = ({ filter, id }) => {
  const { name, value } = filter;


  return (
    <li>
      <input type="radio" name="category" value={ value } id={ "filter" + id } />
      <label htmlFor={ "filter" + id }>{ name }</label>
    </li>
  );
};

export default FilterItem;
