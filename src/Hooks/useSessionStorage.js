import { useState, useRef, useEffect } from 'react';

const useSessionStorageState = (
  key,
  defaultValue = '',
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) => {
  const [state, setState] = useState(() => {
    const valueSessionStorage = window.sessionStorage.getItem(key);
    if (valueSessionStorage) {
      return deserialize(valueSessionStorage);
    }
    return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
  });

  const prevKeyRef = useRef(key);

  useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.sessionStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.sessionStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
};

export default useSessionStorageState;
