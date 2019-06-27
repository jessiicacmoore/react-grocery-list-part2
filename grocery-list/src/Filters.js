import React, {useRef} from 'react';
import FilterItem from './FilterItem';

const Filters = ({ filters, onSubmit, applyFilter}) => {
  const onClick = (f) => {
    applyFilter(f);
  }
  const filterRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault();
    const v = filterRef.current.value;
    const f = {
      name: v,
      value: v
    };
    onSubmit(f)
  }

  const filterElements = filters.map((filter, i) => <FilterItem key={i} id={i} filter={ filter } onClick={onClick} />);

  return (
    <section id="filterCategories">
      <ul className="filters">
        { filterElements }
      </ul>
      <form id="newCat" className="cat-new" onSubmit={handleSubmit}>
        <input ref={filterRef} type="text" name="item" id="itemName" className="form-component inpt" placeholder="New Category"/>
      </form>
    </section>
  );
};

export default Filters;
