// DatePicker.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { selectDate } from '../store/tasksSlice';

const DatePicker = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(selectDate(e.target.value));
  };

  return (
    <input type="date" onChange={handleChange} className="p-2 rounded border" />
  );
};

export default DatePicker;
