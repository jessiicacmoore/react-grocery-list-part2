import React from 'react';

const FormOption = ({category}) => {
  const { name, value } = category;
  return (
    <option value={value}>{name}</option>
  )

}

export default FormOption;