import React, { useState, useEffect } from 'react';
import css from '../Filter/Filter.module.css';

const Filter = ({ handleChange, setPageNumber, setUsers }) => {
  const [filterOption, setFilterOption] = useState('');

  useEffect(() => {
    handleChange(filterOption);
  }, [filterOption, handleChange]);

  const handleChangeFilter = event => {
    const { value } = event.currentTarget;
    setFilterOption(value);
    setPageNumber(1);
    setUsers([]);
  };

  return (
    <label className={css.selectedLabel}>
      Filtered
      <select
        defaultValue=""
        onChange={handleChangeFilter}
        className={css.selected}
      >
        <option value="">Show all</option>
        <option value="false">Follow</option>
        <option value="true">Following</option>
      </select>
    </label>
  );
};

export default Filter;
