import { useState } from "react";

export const UserSessionStorage = (key, data) => {
  const getData = sessionStorage.getItem(key);
  const initialData = getData ? typeof getData === 'object'? JSON.parse (getData) :getData :data;

  const [value, setvalue] = useState(initialData);

  const showingData = (val) => {
    sessionStorage.setItem(key,
      typeof  val=== 'object' ? JSON.stringify(val):val);
    setvalue(val);
  };
  const RemovingData = () => {
    sessionStorage.removeItem(key);
    setvalue('');
  };
  return [value, showingData, RemovingData];
};
