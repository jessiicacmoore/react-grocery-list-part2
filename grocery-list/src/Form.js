import React, { useRef } from 'react';
import FormOption from './FormOption';

const Form = ({onSubmit, categories}) => {

  const itemRef = useRef();
  const categoryRef = useRef();

  const optionElements = categories.map((category, i) => <FormOption key={i} category={category} /> )

  const handleSubmit = (e) => {
    e.preventDefault();
    const i = {
      name: itemRef.current.value,
      type: categoryRef.current.value,
      quantity: 1
    }
    if (i.name) {
      onSubmit(i);
      itemRef.current.value = '';
    }
    console.log(categoryRef.current.value)
  }

  return (
   <form id="newItem" className="newitem" auto-complete="off" onSubmit={handleSubmit}>
     <label htmlFor="itemName" className="line-label">New Item</label>
     <div className="addnew">
       <input ref={itemRef} type="text" name="item" id="itemName" className="form-component inpt" placeholder="What do you need?" />
       <br/>
       <select ref={categoryRef} name="categories" id="">
        {optionElements}
       </select>
       <input type="submit" value="Add" className="form-component btn" />
     </div>
   </form>
  );
};

export default Form;
