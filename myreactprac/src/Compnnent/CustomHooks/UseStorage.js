import { useState } from 'react';

const useBrowserStorage = (key, initialValue, storageType = 'local') => {
  const storage =
    storageType === 'local' ? window.localStorage : window.sessionStorage;

  const initialData = storageType.getItem(key);
  const data = initialData
    ? typeof initialData === 'object'
      ? JSON.parse(initialData)
      : initialData
    : initialValue;

  const [storedValue, setStoredValue] = useState(data);

  const setValue = (value) => {
    try {
      setStoredValue(value);
      storage.setItem(
        key,
        typeof value === 'object' ? JSON.stringify(value) : value
      );
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};

export default useBrowserStorage;


