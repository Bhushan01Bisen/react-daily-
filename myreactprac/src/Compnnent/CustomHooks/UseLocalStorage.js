 
import { useState } from 'react';

export const UseLocalStorage = (key, data) => {
  const getData = localStorage.getItem(key);
  const initialData = getData ? getData : data;

  const [value, setValue] = useState(initialData);

  const insertData = (val) => {
    localStorage.setItem(key, val);
    setValue(val);
  };
  const clearData = () => {
    localStorage.removeItem(key);
    setValue('');
  };

  return [value, insertData, clearData];
};